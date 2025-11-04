const fs = require('fs');
const csv = require('csv-parser');

// --- Nombres de tus archivos ---
const csvFilePath = './Copia de PPI TABLA - PPI TABLA.csv';
const jsFilePath = './COMBINADO_2.js';
// ------------------------------

/**
 * Paso 1: Leer el archivo CSV y cargarlo en un objeto (Map)
 */
async function cargarDatosCSV() {
    const dataMap = new Map();
    return new Promise((resolve, reject) => {
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (row) => {
                if (row.ID) {
                    dataMap.set(row.ID, row);
                }
            })
            .on('end', () => {
                console.log('✅ Lectura del CSV completada.');
                resolve(dataMap);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

/**
 * Paso 2: Función principal que orquesta todo el proceso
 */
async function actualizarArchivoJS() {
    try {
        // --- Cargar datos del CSV ---
        const csvDataMap = await cargarDatosCSV();
        console.log(`Cargados ${csvDataMap.size} registros desde el CSV.`);

        // --- Leer el archivo .js ---
        console.log(`Leyendo archivo: ${jsFilePath}...`);
        const jsFileContent = fs.readFileSync(jsFilePath, 'utf8');

        let geoJSON;
        let fileFormat = 'unknown'; // Opciones: 'js', 'json'
        let jsVarHeader = ''; // Guardará el "var json_COMBINADO_2 = "

        const startIndex = jsFileContent.indexOf('=');

        if (startIndex > -1) {
            // --- MÉTODO 1: Formato JS detectado (contiene "=") ---
            console.log('Detectado formato JS (contiene "="). Aislado el JSON.');
            fileFormat = 'js';
            // Capturamos el encabezado completo, ej: "var json_COMBINADO_2 ="
            jsVarHeader = jsFileContent.substring(0, startIndex + 1); 
            
            // Obtenemos el cuerpo (todo después del "=")
            let jsonString = jsFileContent.substring(startIndex + 1).trim();
            
            // Quitamos un posible punto y coma (;) al final, si es que existe
            if (jsonString.endsWith(';')) {
                jsonString = jsonString.slice(0, -1).trim();
            }

            try {
                // Convertimos el string a un objeto JSON real
                geoJSON = JSON.parse(jsonString);
            } catch (e) {
                console.error('Error al "parsear" el JSON extraído del archivo JS:', e.message);
                throw new Error('El archivo parece ser JS, pero su contenido JSON es inválido.');
            }

        } else {
            // --- MÉTODO 2: Asumir JSON puro (no se encontró "=") ---
            console.log('No se encontró "=". Intentando leer el archivo como JSON puro...');
            try {
                geoJSON = JSON.parse(jsFileContent);
                fileFormat = 'json';
            } catch (e) {
                console.error('Error al "parsear" el archivo como JSON puro:', e.message);
                throw new Error('Formato de archivo no válido. No es "var ... = ..." ni tampoco un archivo JSON puro.');
            }
        }

        // --- Recorrer y actualizar las "features" (lotes) ---
        let lotesActualizados = 0;
        let lotesNoEncontrados = 0;

        geoJSON.features.forEach(feature => {
            const featureId = feature.properties.ID;
            
            if (csvDataMap.has(featureId)) {
                const csvRow = csvDataMap.get(featureId);

                // Actualizar propiedades (manteniendo el valor antiguo si la celda CSV está vacía)
                feature.properties.Manzana = csvRow.Manz || feature.properties.Manzana;
                feature.properties.Lote = csvRow.Lote || feature.properties.Lote;
                feature.properties.Superficie = csvRow.Superficie || feature.properties.Superficie;
                feature.properties.Estado = csvRow.Estado || feature.properties.Estado;
                feature.properties.Cuota = csvRow.Cuota || feature.properties.Cuota;
                feature.properties.Total = csvRow.Total || feature.properties.Total;
                feature.properties.Descuento = csvRow.Descuento || feature.properties.Descuento;
                feature.properties.Contado = csvRow.Contado || feature.properties.Contado;
                
                lotesActualizados++;
            } else {
                lotesNoEncontrados++;
            }
        });

        console.log(`Proceso de actualización terminado:`);
        console.log(`  - ${lotesActualizados} lotes actualizados.`);
        console.log(`  - ${lotesNoEncontrados} lotes no encontrados en el CSV (se dejaron sin cambios).`);

        // --- Reconstruir y guardar el archivo .js ---
        const updatedJsonString = JSON.stringify(geoJSON, null, 2); 
        let updatedJsFileContent;

        if (fileFormat === 'json') {
            // Si el original era JSON puro, guardar como JSON puro
            updatedJsFileContent = updatedJsonString;
            console.log('Guardando archivo en formato JSON puro.');
        } else {
            // Si el original era JS, lo guardamos como JS
            // y añadimos el punto y coma (;) al final por consistencia.
            updatedJsFileContent = `${jsVarHeader} ${updatedJsonString};`;
            console.log('Guardando archivo en formato variable JS (con ";" al final).');
        }

        fs.writeFileSync(jsFilePath, updatedJsFileContent, 'utf8');
        
        console.log(`🎉 ¡Éxito! El archivo "${jsFilePath}" ha sido actualizado.`);

    } catch (error) {
        console.error('------------------------------------------');
        console.error('❌ Ha ocurrido un error en el proceso:', error.message);
        console.error('------------------------------------------');
    }
}

// --- Ejecutar la función principal ---
actualizarArchivoJS();