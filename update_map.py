import pandas as pd
import json
import re
import os

def update_data():
    # --- CONFIGURATION ---
    csv_file = 'layers/PPI_TABLA.csv' 
    js_file = 'layers/COMBINADO_3.js'
    js_variable_name = "var json_COMBINADO_3 =" 
    
    # Define EXACTLY which columns should remain in your map
    ALLOWED_COLUMNS = [
        "ID", "Manzana", "Lote", "Superficie", "Estado", 
        "Cuota", "Total", "Descuento", "Contado", "Entrega"
    ]
    # ---------------------

    print("--- STARTING UPDATE ---")

    if not os.path.exists(csv_file):
        print(f"ERROR: Could not find {csv_file}")
        return
    if not os.path.exists(js_file):
        print(f"ERROR: Could not find {js_file}")
        return

    # 1. Load the CSV
    try:
        # Load only the columns we want to avoid bringing in junk from the CSV
        df = pd.read_csv(csv_file, dtype=str)
        
        # Keep only the allowed columns that actually exist in the CSV
        cols_to_keep = [c for c in df.columns if c in ALLOWED_COLUMNS]
        df = df[cols_to_keep]
        
        df['ID'] = df['ID'].str.strip()
        df = df.drop_duplicates('ID', keep='first')
        df = df.fillna("")
        csv_lookup = df.set_index('ID').to_dict(orient='index')
        
        print(f"Loaded {len(csv_lookup)} rows from CSV.")
    except Exception as e:
        print(f"ERROR reading CSV: {e}")
        return

    # 2. Read the existing JS file
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 3. Extract JSON
    start_index = content.find('{')
    end_index = content.rfind('}')
    
    if start_index == -1 or end_index == -1:
        print("ERROR: Could not find valid JSON object.")
        return

    json_str = content[start_index:end_index+1]
    
    # Basic cleanup for common JS-formatted JSON issues
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)

    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"ERROR decoding JSON: {e}")
        return

    # 4. Update and PURGE unwanted properties
    matches = 0
    for feature in data.get('features', []):
        props = feature.get('properties', {})
        fid = str(props.get('ID', '')).strip()
        
        # A. UPDATE values from CSV if ID matches
        if fid in csv_lookup:
            props.update(csv_lookup[fid])
            matches += 1
            
        # B. PURGE: Remove any key NOT in our ALLOWED_COLUMNS list
        # This removes "field_11", "UPDATING...", "TRUE", etc.
        keys_to_delete = [k for k in props.keys() if k not in ALLOWED_COLUMNS]
        for k in keys_to_delete:
            del props[k]

    print(f"Updated {matches} features and cleaned property lists.")

    # 5. Save the file back
    new_content = f"{js_variable_name} {json.dumps(data, indent=2, ensure_ascii=False)};"
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("--- SUCCESS: File cleaned and saved. ---")

if __name__ == "__main__":
    update_data()
