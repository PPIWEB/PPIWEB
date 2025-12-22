import pandas as pd
import json
import re
import os

def update_data():
    # Paths adjusted to look inside the 'layers' folder as seen in your screenshot
    csv_file = 'layers/PPI_TABLA.csv' 
    js_file = 'layers/COMBINADO_3.js' 
    
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} no encontrado.")
        return
    if not os.path.exists(js_file):
        print(f"Error: {js_file} no encontrado.")
        return

    # Load CSV data
    df = pd.read_csv(csv_file)
    df = df[df['ID'].notnull()]
    df['ID'] = df['ID'].astype(str).str.strip()
    df = df.drop_duplicates('ID', keep='first')
    csv_lookup = df.set_index('ID').to_dict(orient='index')

    # Read JS file content
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract JSON object from the JS variable
    start = content.find('{')
    end = content.rfind('}')
    json_str = content[start:end+1]
    
    # Clean JS format to valid JSON
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
    
    data = json.loads(json_str)

    # Update properties based on ID match
    for feature in data.get('features', []):
        fid = str(feature['properties'].get('ID', '')).strip()
        if fid in csv_lookup:
            new_vals = {k: (str(v) if pd.notnull(v) else "") for k, v in csv_lookup[fid].items()}
            feature['properties'].update(new_vals)

    # Save changes back to the layers folder
    with open(js_file, 'w', encoding='utf-8') as f:
        # Note: Ensure 'json_COMBINADO_3' matches the variable name in your JS file
        f.write("var json_COMBINADO_3 = " + json.dumps(data, indent=2, ensure_ascii=False) + ";")
    
    print("¡Archivo en la carpeta 'layers' actualizado con éxito!")

if __name__ == "__main__":
    update_data()
