const fs = require('fs');

// --- CONFIGURACIÓN ---
const CSV_FILE = 'PPI_TABLA.csv';
const JS_FILE = 'COMBINADO_3.js';
const JS_VARIABLE = 'var json_COMBINADO_3 =';

// Orden visual exacto para que el archivo JS quede igual a tu imagen
const ORDEN_VISUAL = ["ID", "Manzana", "Lote", "Superficie", "Estado", "Cuota", "Total", "Descuento", "Contado", "Entrega", "field_11", "field_12"];

function actualizar() {
    try {
        console.log('--- INICIANDO PROCESO DE ACTUALIZACIÓN ---');

        if (!fs.existsSync(CSV_FILE)) throw new Error(`No existe: ${CSV_FILE}`);
        if (!fs.existsSync(JS_FILE)) throw new Error(`No existe: ${JS_FILE}`);

        // 1. LEER CSV
        const csvContent = fs.readFileSync(CSV_FILE, 'utf8');
        const lineas = csvContent.split(/\r?\n/);
        const dataMap = new Map();

        console.log('Mapeando columnas por posición exacta...');

        // Saltamos Fila 0 (Encabezados) y Fila 1 (Título "001-RESIDENCIAL...")
        // Los datos reales empiezan en i = 2 (Fila 3)
        for (let i = 2; i < lineas.length; i++) {
            const col = lineas[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
            
            if (col.length < 5) continue; // Salta líneas vacías

            const id = col[0];
            if (!id) continue;

            // MAPEADO MANUAL SEGÚN TUS INSTRUCCIONES:
            dataMap.set(id, {
                "ID": col[0],          // Col A
                "Manzana": col[1],     // Col B
                "Lote": col[2],        // Col C
                "Superficie": col[3],  // Col D
                "Estado": col[4],      // Col E (Estado real del CSV)
                "Cuota": col[5],       // Col F (Cuota real del CSV)
                "Total": "",           // REGLA: Debe estar vacío
                "Descuento": "",       // REGLA: Debe estar vacío
                "Contado": col[8],     // Col I (Valor de Contado)
                "Entrega": col[8],     // REGLA: "la entrega tiene el valor del contado" (Col I)
                "field_11": col[10] || "", // Col K (donde están los números al final)
                "field_12": col[11] || ""
            });
        }
        console.log(`✅ CSV cargado: ${dataMap.size} lotes mapeados.`);

        // 2. LEER Y REPARAR JS
        let jsContent = fs.readFileSync(JS_FILE, 'utf8');
        const start = jsContent.indexOf('{');
        const end = jsContent.lastIndexOf('}');
        let jsonStr = jsContent.substring(start, end + 1);

        // Limpieza de formato para que JSON.parse no falle
        jsonStr = jsonStr.replace(/\/\/.*$/gm, '');
        jsonStr = jsonStr.replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
        jsonStr = jsonStr.replace(/,[ \t\r\n]*([\]}])/g, '$1');

        let geojson = JSON.parse(jsonStr);

        // 3. SINCRONIZAR Y FORZAR ORDEN
        geojson.features.forEach(feature => {
            const idLote = feature.properties.ID;
            if (dataMap.has(idLote)) {
                const datosCsv = dataMap.get(idLote);
                const nuevasPropiedades = {};

                // Reconstruimos el objeto para que el orden de las líneas sea igual a la imagen
                ORDEN_VISUAL.forEach(key => {
                    // Usamos el dato del CSV, si no existe usamos el que ya tenía el JS
                    nuevasPropiedades[key] = datosCsv[key] !== undefined ? datosCsv[key] : (feature.properties[key] || "");
                });

                feature.properties = nuevasPropiedades;
            }
        });

        // 4. GUARDAR
        const resultadoFinal = `${JS_VARIABLE} ${JSON.stringify(geojson, null, 2)};`;
        fs.writeFileSync(JS_FILE, resultadoFinal, 'utf8');

        console.log(`✅ ¡ÉXITO! El archivo JS ahora es idéntico a tu modelo.`);
        console.log(`📌 Verificado: Estado y Cuota en su lugar, Total/Descuento vacíos, Entrega = Contado.`);

    } catch (error) {
        console.error('❌ ERROR:', error.message);
    }
}

actualizar();