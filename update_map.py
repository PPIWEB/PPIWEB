import pandas as pd
import json
import re
import os

def update_data():
    csv_file = 'layers/PPI_TABLA.csv' 
    js_file = 'layers/COMBINADO_3.js' 
    
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} no encontrado.")
        return
    if not os.path.exists(js_file):
        print(f"Error: {js_file} no encontrado.")
        return

    # 1. Load CSV
    print("Leyendo CSV...")
    df = pd.read_csv(csv_file)
    df = df[df['ID'].notnull()]
    df['ID'] = df['ID'].astype(str).str.strip()
    df = df.drop_duplicates('ID', keep='first')
    csv_lookup = df.set_index('ID').to_dict(orient='index')
    print(f"CSV cargado. {len(csv_lookup)} registros encontrados.")

    # 2. Read JS file
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 3. Extract JSON object safely
    start = content.find('{')
    end = content.rfind('}')
    if start == -1 or end == -1:
        print("Error: No se encontró un objeto JSON válido en el archivo JS.")
        return

    json_str = content[start:end+1]
    
    # Fix keys that aren't quoted (common in JS files)
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    # Remove trailing commas
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
    
    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"Error al decodificar JSON: {e}")
        return

    # 4. Update Data
    count = 0
    for feature in data.get('features', []):
        # Ensure we look for properties correctly
        props = feature.get('properties', {})
        fid = str(props.get('ID', '')).strip()
        
        if fid in csv_lookup:
            # Create a clean dictionary of updates
            new_vals = {k: (str(v) if pd.notnull(v) else "") for k, v in csv_lookup[fid].items()}
            props.update(new_vals)
            count += 1
    
    print(f"Se actualizaron {count} coincidencias.")

    # 5. Save back with the CORRECT variable name
    # We force the variable name to ensure the map works
    variable_name = "var json_COMBINADO_3 = "
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(variable_name + json.dumps(data, indent=2, ensure_ascii=False) + ";")
    
    print("¡Archivo JS guardado con éxito!")

if __name__ == "__main__":
    update_data()
