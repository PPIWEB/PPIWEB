import pandas as pd
import json
import re
import os

def update_data():
    # --- CONFIGURATION ---
    csv_file = 'layers/PPI_TABLA.csv' 
    js_file = 'layers/COMBINADO_3.js'
    js_variable_name = "var json_COMBINADO_3 =" 
    
    # "Entrega" is removed from this list to erase it from the map
    ALLOWED_COLUMNS = [
        "ID", "Manzana", "Lote", "Superficie", "Estado", 
        "Cuota", "Total", "Descuento", "Contado"
    ]
    # ---------------------

    if not os.path.exists(csv_file) or not os.path.exists(js_file):
        print("ERROR: Files not found.")
        return

    # 1. Load CSV and filter columns
    try:
        df = pd.read_csv(csv_file, dtype=str)
        # Keep only headers that are in our allowed list
        cols_to_keep = [c for c in df.columns if c in ALLOWED_COLUMNS]
        df = df[cols_to_keep].fillna("")
        csv_lookup = df.set_index('ID').to_dict(orient='index')
    except Exception as e:
        print(f"CSV Error: {e}")
        return

    # 2. Read JS and extract JSON
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    start, end = content.find('{'), content.rfind('}')
    json_str = content[start:end+1]
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    
    try:
        data = json.loads(json_str)
    except Exception as e:
        print(f"JSON Error: {e}")
        return

    # 3. Update data and PURGE "Entrega" and other unwanted fields
    for feature in data.get('features', []):
        props = feature.get('properties', {})
        fid = str(props.get('ID', '')).strip()
        
        # Update with new values from CSV if ID matches
        if fid in csv_lookup:
            props.update(csv_lookup[fid])
            
        # DELETE any property NOT in the allowed list (this removes "Entrega")
        keys_to_delete = [k for k in list(props.keys()) if k not in ALLOWED_COLUMNS]
        for k in keys_to_delete:
            del props[k]

    # 4. Save clean file
    new_content = f"{js_variable_name} {json.dumps(data, indent=2, ensure_ascii=False)};"
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("--- SUCCESS: 'Entrega' field removed and map updated. ---")

if __name__ == "__main__":
    update_data()
