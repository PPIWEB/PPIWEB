const fs = require('fs');
const path = require('path');

// --- CONFIGURACIÓN DE NOMBRES ---
const CSV_FILE = 'PPI_TABLA.csv';
const JS_FILE = 'COMBINADO_3.js';
const JS_VARIABLE = 'var json_COMBINADO_3 =';
// --------------------------------

function actualizar() {
    try {
        console.log('--- INICIANDO PROCESO DE ACTUALIZACIÓN ---');

        // 1. Verificar que los archivos existen
        if (!fs.existsSync(CSV_FILE)) throw new Error(`No se encuentra el archivo: ${CSV_FILE}`);
        if (!fs.existsSync(JS_FILE)) throw new Error(`No se encuentra el archivo: ${JS_FILE}`);

        // 2. Leer y Procesar el CSV
        const csvContent = fs.readFileSync(CSV_FILE, 'utf8');
        const lineas = csvContent.split(/\r?\n/);
        
        // Obtenemos los encabezados de la PRIMERA línea
        const encabezados = lineas[0].split(',').map(h => h.trim());
        
        const dataMap = new Map();

        // Empezamos a leer desde la línea 4 (índice 3) para saltar la basura del inicio
        for (let i = 3; i < lineas.length; i++) {
            const columnas = lineas[i].split(',');
            if (columnas.length < 2) continue; // Línea vacía

            const obj = {};
            encabezados.forEach((header, index) => {
                if (header) {
                    obj[header] = columnas[index] ? columnas[index].trim() : "";
                }
            });

            if (obj.ID) {
                dataMap.set(obj.ID, obj);
            }
        }
        console.log(`✅ CSV procesado: ${dataMap.size} lotes encontrados.`);

        // 3. Leer y Procesar el JS
        let jsContent = fs.readFileSync(JS_FILE, 'utf8').trim();
        
        // Extraer el JSON: quitamos el "var ... =" del inicio y el ";" del final
        let jsonStr = jsContent.replace(JS_VARIABLE, '').trim();
        if (jsonStr.endsWith(';')) {
            jsonStr = jsonStr.slice(0, -1);
        }

        const geojson = JSON.parse(jsonStr);
        let actualizados = 0;

        // 4. Actualizar los datos
        geojson.features.forEach(feature => {
            const id = feature.properties.ID;
            if (dataMap.has(id)) {
                const nuevosDatos = dataMap.get(id);
                
                // Actualizamos cada propiedad que viene del CSV
                // Esto actualizará: Estado, Cuota, Total, Descuento, Contado, etc.
                Object.assign(feature.properties, nuevosDatos);
                actualizados++;
            }
        });

        // 5. Guardar el resultado
        const nuevoContenido = `${JS_VARIABLE} ${JSON.stringify(geojson, null, 2)};`;
        fs.writeFileSync(JS_FILE, nuevoContenido, 'utf8');

        console.log(`✅ ¡ÉXITO! Se actualizaron ${actualizados} lotes.`);
        console.log('--- PROCESO FINALIZADO ---');

    } catch (error) {
        console.error('❌ ERROR:', error.message);
    }
}

actualizar();