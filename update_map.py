import pandas as pd
import json
import re
import os

def update_data():
    # --- CONFIGURATION ---
    csv_file = 'layers/PPI_TABLA.csv' 
    js_file = 'layers/COMBINADO_3.js'
    # This must match EXACTLY what is at the start of your JS file
    js_variable_name = "var json_COMBINADO_3 =" 
    # ---------------------

    print("--- STARTING UPDATE ---")

    if not os.path.exists(csv_file):
        print(f"ERROR: Could not find {csv_file}")
        return
    if not os.path.exists(js_file):
        print(f"ERROR: Could not find {js_file}")
        return

    # 1. Load the CSV
    print(f"Reading {csv_file}...")
    try:
        df = pd.read_csv(csv_file)
        # Clean up ID column to ensure matches
        df['ID'] = df['ID'].astype(str).str.strip()
        df = df.drop_duplicates('ID', keep='first')
        csv_lookup = df.set_index('ID').to_dict(orient='index')
        print(f"Loaded {len(csv_lookup)} rows from CSV.")
    except Exception as e:
        print(f"ERROR reading CSV: {e}")
        return

    # 2. Read the existing JS file
    print(f"Reading {js_file}...")
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 3. Extract the JSON part safely
    start_index = content.find('{')
    end_index = content.rfind('}')
    
    if start_index == -1 or end_index == -1:
        print("ERROR: Could not find valid JSON object in JS file.")
        return

    json_str = content[start_index:end_index+1]

    # Fix common JS syntax issues (unquoted keys)
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str) # Remove trailing commas

    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"ERROR decoding JSON: {e}")
        return

    # 4. Update the data
    matches = 0
    for feature in data.get('features', []):
        props = feature.get('properties', {})
        fid = str(props.get('ID', '')).strip()
        
        if fid in csv_lookup:
            # Convert all values to string to avoid format errors
            new_vals = {k: str(v) for k, v in csv_lookup[fid].items() if pd.notnull(v)}
            props.update(new_vals)
            matches += 1

    print(f"Updated {matches} features.")

    # 5. Save the file back
    # We reconstruct the file using the variable name + the JSON data
    new_content = f"{js_variable_name} {json.dumps(data, indent=2, ensure_ascii=False)};"
    
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("--- SUCCESS: File saved. ---")

if __name__ == "__main__":
    update_data()
