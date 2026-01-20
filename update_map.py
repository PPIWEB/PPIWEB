import csv
import json
import os

def update_data():
    csv_file = 'layers/PPI_TABLA.csv'
    js_file = 'layers/COMBINADO_3.js'

    print(f"--- STARTING UPDATE ---")

    # 1. Read CSV
    updates = {}
    if not os.path.exists(csv_file):
        print(f"ERROR: {csv_file} not found.")
        return

    with open(csv_file, 'r', encoding='utf-8-sig') as f: # Added sig to handle Excel BOM
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

    # 2. Read JS File
    if not os.path.exists(js_file):
        print(f"ERROR: {js_file} not found.")
        return

    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read().strip()
        try:
            # Extract JSON part
            json_str = content.split('=', 1)[1].strip()
            if json_str.endswith(';'):
                json_str = json_str[:-1].strip()
            
            # Use json.loads instead of ast for better JS compatibility
            # Note: This requires the JS file to be valid JSON after the "var data ="
            data = json.loads(json_str)
        except Exception as e:
            print(f"Parsing Error: {e}. Check if your JS file has valid JSON format.")
            return

    # 3. Match and Update (Supports GeoJSON and flat lists)
    updated_count = 0
    
    # Check if it's a GeoJSON FeatureCollection
    items_to_process = data.get('features', data) if isinstance(data, dict) else data

    for item in items_to_process:
        # Determine if ID is in 'properties' (GeoJSON) or top-level
        props = item.get('properties', item) if isinstance(item, dict) else {}
        js_id = str(props.get('ID') or props.get('id') or '').strip()
        
        if js_id in updates:
            props.update(updates[js_id])
            updated_count += 1
    
    print(f"Matches found and updated: {updated_count}")

    # 4. Save Changes
    if updated_count > 0:
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write(f"var data = {json.dumps(data, ensure_ascii=False, indent=2)};")
        print(f"SUCCESS: {js_file} updated.")
    else:
        print("FAILED: No IDs matched. Check if ID formats match (e.g., '01' vs '1').")

if __name__ == "__main__":
    update_data()
