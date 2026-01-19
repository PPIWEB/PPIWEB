import csv
import json
import os
import ast

def update_data():
    # 1. Setup paths - This ensures the script finds 'layers/' from the repo root
    base_dir = os.path.dirname(os.path.abspath(__file__))
    # If running from root, these point to the 'layers' folder
    csv_file = 'layers/PPI_TABLA.csv'
    js_file = 'layers/COMBINADO_3.js'

    print(f"Checking for files in: {os.getcwd()}")

    # 2. Read the CSV updates
    updates = {}
    if not os.path.exists(csv_file):
        print(f"CRITICAL ERROR: {csv_file} not found. Ensure the file is in the 'layers' folder.")
        return

    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Match IDs as strings to avoid type mismatch
            item_id = str(row.get('ID', '')).strip()
            if item_id:
                updates[item_id] = row

    print(f"Loaded {len(updates)} updates from CSV.")

    # 3. Read and Update the JavaScript file
    if os.path.exists(js_file):
        with open(js_file, 'r', encoding='utf-8') as f:
            content = f.read().strip()
            
            try:
                # Isolate the JSON/Object part
                json_str = content.split('=', 1)[1].strip()
                if json_str.endswith(';'):
                    json_str = json_str[:-1].strip()
                
                # Use literal_eval for JS-style single quotes
                data = ast.literal_eval(json_str)
            except Exception as e:
                print(f"Error parsing JS file structure: {e}")
                return

        # 4. Perform the Update
        updated_count = 0
        if isinstance(data, list):
            for item in data:
                # Match IDs accurately
                item_id = str(item.get('ID', '')).strip()
                if item_id in updates:
                    item.update(updates[item_id])
                    updated_count += 1
        
        print(f"Successfully matched and updated {updated_count} layers in memory.")

        # 5. Write back only if changes were made
        if updated_count > 0:
            with open(js_file, 'w', encoding='utf-8') as f:
                # Reconstruct the JS variable format
                f.write(f"var data = {json.dumps(data, ensure_ascii=False, indent=2)};")
            print(f"DONE: {js_file} has been updated and saved.")
        else:
            print("WARNING: No matching IDs found between CSV and JS. Check if IDs match exactly.")
    else:
        print(f"ERROR: {js_file} not found in 'layers' directory.")

if __name__ == "__main__":
    update_data()
