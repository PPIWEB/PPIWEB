import pandas as pd
import json
import re
import os

def update_data():
    # Correct paths for the PPIWEBAPP branch
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

    # Identify the variable name used in the original file (e.g., var json_COMBINADO_3)
    var_match = re.match(r'^(var\s+[a-zA-Z0-9_]+\s*=\s*)', content)
    var_header = var_match.group(1) if var_match else "var json_COMBINADO_3 = "

    # Extract JSON object
    start = content.find('{')
    end = content.rfind('}')
    json_str = content[start:end+1]
    
    # Clean JS format to valid JSON
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
    
    data = json.loads(json_str)

    # Update properties based on ID match
    count = 0
    for feature in data.get('features', []):
        fid = str(feature['properties'].get('ID', '')).strip()
        if fid in csv_lookup:
            new_vals = {k: (str(v) if pd.notnull(v) else "") for k, v in csv_lookup[fid].items()}
            feature['properties'].update(new_vals)
            count += 1

    # Save changes back using the SAME variable name found at the start
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(var_header + json.dumps(data, indent=2, ensure_ascii=False) + ";")
    
    print(f"¡Éxito! Se actualizaron {count} registros en {js_file}")

if __name__ == "__main__":
    update_data()
