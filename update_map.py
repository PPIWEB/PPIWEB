import csv
import json
import os

def update_data():
    csv_file = 'layers/PPI_TABLA.csv'
    js_file = 'layers/COMBINADO_3.js'
    # The script will now try to preserve the existing variable name automatically
    
    print(f"--- STARTING UPDATE ---")

    # 1. Read CSV into a dictionary
    updates = {}
    if not os.path.exists(csv_file):
        print(f"ERROR: {csv_file} not found.")
        return

    try:
        with open(csv_file, 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            # Find ID column regardless of case (ID, id, Id)
            id_col = next((h for h in reader.fieldnames if h.strip().upper() == 'ID'), None)
            
            if not id_col:
                print(f"CRITICAL: No 'ID' column found. Found columns: {reader.fieldnames}")
                return

            for row in reader:
                # Clean the ID: remove spaces and make consistent
                item_id = str(row.get(id_col, '')).strip()
                if item_id:
                    updates[item_id] = row
    except Exception as e:
        print(f"Error reading CSV: {e}")
        return

    print(f"Loaded {len(updates)} records from CSV.")

    # 2. Read and Parse the JS File
    if not os.path.exists(js_file):
        print(f"ERROR: {js_file} not found.")
        return

    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read().strip()
        try:
            # Dynamically find the variable name and the JSON part
            parts = content.split('=', 1)
            var_declaration = parts[0].strip() # e.g., "var json_COMBINADO_3"
            json_str = parts[1].strip()
            
            if json_str.endswith(';'):
                json_str = json_str[:-1].strip()
            
            data = json.loads(json_str)
        except Exception as e:
            print(f"Parsing Error: {e}. Check if the JS file format is 'var name = {{...}};'")
            return

    # 3. Match and Update
    updated_count = 0
    skipped_ids = []

    if 'features' in data:
        for feature in data['features']:
            props = feature.get('properties', {})
            # Try 'ID' or 'id' from the JS properties
            js_id = str(props.get('ID') or props.get('id') or '').strip()
            
            if js_id in updates:
                # Update properties with CSV data
                props.update(updates[js_id])
                updated_count += 1
            else:
                if js_id:
                    skipped_ids.append(js_id)

    print(f"Matches found and updated: {updated_count}")
    if skipped_ids and updated_count == 0:
        print(f"Sample IDs from JS that didn't match CSV: {skipped_ids[:5]}")

    # 4. Save Changes
    if updated_count > 0:
        try:
            with open(js_file, 'w', encoding='utf-8') as f:
                # Reconstruct the file using the original variable declaration
                f.write(f"{var_declaration} = {json.dumps(data, ensure_ascii=False, indent=2)};")
            print(f"SUCCESS: {js_file} updated.")
        except Exception as e:
            print(f"Error writing to file: {e}")
    else:
        print("FAILED: No IDs matched. Ensure the ID format (e.g., '1-1-1') is identical in both files.")

if __name__ == "__main__":
    update_data()
