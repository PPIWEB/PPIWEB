import csv
import json
import os
import ast

def update_data():
    # Corrected paths to point to the 'layers' folder
    csv_file = 'layers/PPI_TABLA.csv'
    js_file = 'layers/COMBINADO_3.js'

    # 1. Read the CSV updates
    updates = {}
    
    # Check if CSV exists before opening
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} not found.")
        return

    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Using 'ID' as the unique key to match records
            updates[row['ID']] = row

    # 2. Read the existing JavaScript file
    if os.path.exists(js_file):
        with open(js_file, 'r', encoding='utf-8') as f:
            content = f.read().strip()
            
            # Extract the data between 'var data = ' and the trailing ';'
            try:
                # Find the first '=' and take everything after it
                json_str = content.split('=', 1)[1].strip()
                # Remove the trailing semicolon if it exists
                if json_str.endswith(';'):
                    json_str = json_str[:-1].strip()
                
                # Use ast.literal_eval because JS files often use single quotes
                data = ast.literal_eval(json_str)
            except (IndexError, SyntaxError, ValueError) as e:
                print(f"Error parsing JS file: {e}")
                return

        # 3. Update the data
        updated_count = 0
        for item in data:
            item_id = str(item.get('ID'))
            if item_id in updates:
                item.update(updates[item_id])
                updated_count += 1
        
        print(f"Updated {updated_count} records.")

        # 4. Write the updated data back to the JS file
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write(f"var data = {json.dumps(data, ensure_ascii=False, indent=2)};")
        print(f"Successfully saved changes to {js_file}")
    else:
        print(f"Error: {js_file} not found.")

if __name__ == "__main__":
    update_data()
