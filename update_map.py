import csv
import json
import os
import ast

def update_data():
    csv_file = 'layers/PPI_TABLA.csv'
    js_file = 'layers/COMBINADO_3.js'

    print(f"--- STARTING UPDATE ---")

    # 1. Read CSV and identify the ID column
    updates = {}
    if not os.path.exists(csv_file):
        print(f"ERROR: {csv_file} not found.")
        return

    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames
        print(f"CSV Headers found: {headers}")
        
        # Try to find the correct ID column name (case-insensitive)
        id_col = next((h for h in headers if h.upper() == 'ID'), None)
        
        if not id_col:
            print(f"CRITICAL: No 'ID' column found in CSV. Please rename your ID column to 'ID'.")
            return

        for row in reader:
            item_id = str(row.get(id_col, '')).strip()
            if item_id:
                updates[item_id] = row

    print(f"Loaded {len(updates)} records from CSV.")

    # 2. Read and Update JS File
    if os.path.exists(js_file):
        with open(js_file, 'r', encoding='utf-8') as f:
            content = f.read().strip()
            try:
                json_str = content.split('=', 1)[1].strip()
                if json_str.endswith(';'):
                    json_str = json_str[:-1].strip()
                data = ast.literal_eval(json_str)
            except Exception as e:
                print(f"Parsing Error: {e}")
                return

        # 3. Match and Update
        updated_count = 0
        for item in data:
            # Check for 'ID' or 'id' in the JS objects
            js_id = str(item.get('ID') or item.get('id') or '').strip()
            if js_id in updates:
                item.update(updates[js_id])
                updated_count += 1
        
        print(f"Matches found and updated: {updated_count}")

        # 4. Save Changes
        if updated_count > 0:
            with open(js_file, 'w', encoding='utf-8') as f:
                f.write(f"var data = {json.dumps(data, ensure_ascii=False, indent=2)};")
            print(f"SUCCESS: {js_file} updated.")
        else:
            print("FAILED: No IDs in the JS file matched IDs in the CSV.")
    else:
        print(f"ERROR: {js_file} not found.")

if __name__ == "__main__":
    update_data()
