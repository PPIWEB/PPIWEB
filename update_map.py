import pandas as pd
import json
import re
import os

def update_data():
    # --- CONFIGURATION ---
    csv_file = 'layers/PPI_TABLA.csv' 
    # MISTAKE FIX: Use the exact name from your screenshot image_787caf.png
    js_file = 'layers/COMBINADO_3.js'
    js_variable_name = "var json_COMBINADO_3 =" 
    
    # MISTAKE FIX: "Entrega" removed from this list to force its deletion
    ALLOWED_COLUMNS = [
        "ID", "Manzana", "Lote", "Superficie", "Estado", 
        "Cuota", "Total", "Descuento", "Contado"
    ]
    # ---------------------

    if not os.path.exists(csv_file) or not os.path.exists(js_file):
        print(f"ERROR: File not found: {js_file}")
        return

    # 1. Load CSV
    df = pd.read_csv(csv_file, dtype=str)
    cols_to_keep = [c for c in df.columns if c in ALLOWED_COLUMNS]
    df = df[cols_to_keep].fillna("")
    csv_lookup = df.set_index('ID').to_dict(orient='index')

    # 2. Read JS
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    start, end = content.find('{'), content.rfind('}')
    json_str = content[start:end+1]
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    data = json.loads(json_str)

    # 3. PURGE: This loop now sees that "Entrega" is NOT allowed and deletes it
    for feature in data.get('features', []):
        props = feature.get('properties', {})
        fid = str(props.get('ID', '')).strip()
        
        if fid in csv_lookup:
            props.update(csv_lookup[fid])
            
        keys_to_delete = [k for k in list(props.keys()) if k not in ALLOWED_COLUMNS]
        for k in keys_to_delete:
            del props[k]

    # 4. Save
    new_content = f"{js_variable_name} {json.dumps(data, indent=2, ensure_ascii=False)};"
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("--- SUCCESS: 'Entrega' purged from JS file. ---")

if __name__ == "__main__":
    update_data()
