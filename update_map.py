import csv
import json
import os

def update_data():
    csv_file = 'layers/PPI_TABLA.csv'
    js_file = 'layers/COMBINADO_3.js'
    # Match the variable name found in your file
    var_name = "var json_COMBINADO_3"

    print(f"--- STARTING UPDATE ---")

    # 1. Read CSV into a dictionary for fast lookup
    updates = {}
    if not os.path.exists(csv_file):
        print(f"ERROR: {csv_file} not found.")
        return

    with open(csv_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        id_col = next((h for h in reader.fieldnames if h.upper() == 'ID'), None)
        
        if not id_col:
            print(f"CRITICAL: No 'ID' column found in {csv_file}")
            return

        for row in reader:
            item_id = str(row.get(id_col, '')).strip()
            if item_id:
                updates[item_id] = row

    print(f"Loaded {len(updates)} records from CSV.")

    # 2. Read and Parse the JS File
    if not os.path.exists(js_file):
        print(f"ERROR: {js_file} not found.")
        return

    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read().strip()
        try:
            # Extract JSON from the variable assignment
            json_str = content.split('=', 1)[1].strip()
            if json_str.endswith(';'):
                json_str = json_str[:-1].strip()
            data = json.loads(json_str)
        except Exception as e:
            print(f"Parsing Error: {e}. Ensure the JS file contains valid JSON after the '=' sign.")
            return

    # 3. Match and Update Nested Properties
    updated_count = 0
    if 'features' in data:
        for feature in data['features']:
            # GeoJSON stores attributes in 'properties'
            props = feature.get('properties', {})
            js_id = str(props.get('ID') or props.get('id') or '').strip()
            
            if js_id in updates:
                props.update(updates[js_id])
                updated_count += 1
    
    print(f"Matches found and updated: {updated_count}")

    # 4. Save Changes with original variable name
    if updated_count > 0:
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write(f"{var_name} = {json.dumps(data, ensure_ascii=False, indent=2)};")
        print(f"SUCCESS: {js_file} updated.")
    else:
        print("FAILED: No IDs matched. Double-check that CSV IDs match JS 'ID' values exactly.")

if __name__ == "__main__":
    update_data()
