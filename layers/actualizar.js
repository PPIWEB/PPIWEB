const fs = require('fs');
const csv = require('csv-parser');
const vm = require('vm'); // <--- Importamos el módulo "Virtual Machine"

// --- Nombres de tus archivos ---
const csvFilePath = './PPI_TABLA.csv';
const jsFilePath = './COMBINADO_3.js';
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
        let jsVarHeader = ''; // Guardará el "var json_COMBINADO_3 = "

        // --- NUEVO MÉTODO: Usar un sandbox (VM) para leer el objeto JS ---
        try {
            console.log('Detectando formato de variable JS...');
            
            // 1. Encontrar el signo "="
            const startIndex = jsFileContent.indexOf('=');
            if (startIndex === -1) {
                // Si no hay "=", probaremos el método de JSON puro más abajo
                throw new Error('No se encontró el signo "=" para detectar la variable JS.');
            }
            // Capturamos el encabezado completo, ej: "var json_COMBINADO_3 ="
            jsVarHeader = jsFileContent.substring(0, startIndex + 1);
            
            // 2. Crear un "sandbox" para ejecutar el código de forma segura
            const sandbox = {};
            vm.createContext(sandbox); // Crea un contexto vacío
            
            // 3. Ejecutar el script completo en el sandbox
            // Esto creará la variable (ej: json_COMBINADO_3) dentro del sandbox
            console.log('Ejecutando script en sandbox para extraer el objeto...');
            vm.runInContext(jsFileContent, sandbox);
            
            // 4. Encontrar el nombre de la variable que se creó
            const varName = Object.keys(sandbox)[0];
            if (!varName) {
                throw new Error('El script se ejecutó pero no se encontró ninguna variable en el sandbox.');
            }
            console.log(`Variable detectada en el sandbox: ${varName}`);

            // 5. Obtener el objeto de esa variable
            geoJSON = sandbox[varName];

            if (typeof geoJSON !== 'object' || geoJSON === null) {
                throw new Error(`La variable "${varName}" no es un objeto válido.`);
            }

        } catch (error) {
            console.error('Error al procesar el archivo JS con el sandbox (VM):', error.message);
            console.log('Intentando de nuevo con el método de JSON puro...');
            
            // --- MÉTODO ANTIGUO: Asumir JSON puro (como plan B) ---
            try {
                geoJSON = JSON.parse(jsFileContent);
                jsVarHeader = ''; // Es JSON puro, no tiene encabezado
            } catch (jsonError) {
                console.error('Error al "parsear" el archivo como JSON puro:', jsonError.message);
                throw new Error('Formato de archivo no válido. Falló la lectura como JS-Object y como JSON-puro.');
            }
        }
        
        // --- (El resto del script es idéntico) ---
        
        // --- Recorrer y actualizar las "features" (lotes) ---
        console.log('Objeto JS cargado. Empezando actualización de propiedades...');
        let lotesActualizados = 0;
        let lotesNoEncontrados = 0;

        geoJSON.features.forEach(feature => {
            const featureId = feature.properties.ID;
            
            if (csvDataMap.has(featureId)) {
                const csvRow = csvDataMap.get(featureId);

                // Actualizar propiedades
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
        // JSON.stringify SIEMPRE produce JSON válido (sin comas extra, etc.)
        const updatedJsonString = JSON.stringify(geoJSON, null, 2); 
        let updatedJsFileContent;

        if (jsVarHeader === '') {
            // Se leyó como JSON puro, se guarda como JSON puro
            updatedJsFileContent = updatedJsonString;
            console.log('Guardando archivo en formato JSON puro.');
        } else {
            // Se leyó como variable JS, se guarda con el mismo encabezado
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