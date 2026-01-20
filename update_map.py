import pandas as pd
import json
import re
import os

def update_data():
    # Use the filenames seen in your GitHub screenshot
    csv_file = 'layers/PPI_TABLA.csv'
    js_file = 'layers/COMBINADO_3.js' 
    
    allowed_columns = [
        "ID", "Manzana", "Lote", "Superficie", 
        "Estado", "Cuota", "Total", "Descuento", "Contado"
    ]

    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} no encontrado.")
        return
    if not os.path.exists(js_file):
        print(f"Error: {js_file} no encontrado.")
        return

    # --- CSV Processing ---
    df = pd.read_csv(csv_file)
    df = df[df['ID'].notnull()]
    df['ID'] = df['ID'].astype(str).str.strip()
    df = df.drop_duplicates('ID', keep='first')
    csv_lookup = df.set_index('ID', drop=False).to_dict(orient='index')

    print(f"Cargados {len(csv_lookup)} registros desde el CSV.")

    # --- JS/JSON Processing ---
    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract JSON between the first { and last }
    start = content.find('{')
    end = content.rfind('}')
    json_str = content[start:end+1]
    
    # Clean JS format to valid JSON using RegEx
    json_str = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
    json_str = re.sub(r',\s*([}\]])', r'\1', json_str)
    
    try:
        data = json.loads(json_str)
    except Exception as e:
        print(f"Error al procesar JSON: {e}")
        return

    # Update data
    updated_count = 0
    for feature in data.get('features', []):
        fid = str(feature['properties'].get('ID', '')).strip()
        
        if fid in csv_lookup:
            raw_row = csv_lookup[fid]
            clean_properties = {}
            
            for col in allowed_columns:
                if col in raw_row:
                    val = raw_row[col]
                    
                    # --- NEW FIX: Remove .0 from numeric values ---
                    if pd.notnull(val):
                        # Convert to string and strip .0 if it exists
                        str_val = str(val)
                        if str_val.endswith('.0'):
                            clean_properties[col] = str_val[:-2]
                        else:
                            clean_properties[col] = str_val
                    else:
                        clean_properties[col] = ""
            
            # Final check: if ID is still missing for some reason, force it back in
            if "ID" not in clean_properties or not clean_properties["ID"]:
                clean_properties["ID"] = fid
                
            feature['properties'] = clean_properties
            updated_count += 1

    # --- Save back to JS ---
    if updated_count > 0:
        with open(js_file, 'w', encoding='utf-8') as f:
            # Use the exact variable name from your JS screenshot
            f.write("var json_COMBINADO_3 = " + json.dumps(data, indent=2, ensure_ascii=False) + ";")
        print(f"¡Éxito! {updated_count} propiedades actualizadas en {js_file}.")
    else:
        print("Aviso: No se encontraron coincidencias de ID. Revisa el formato de los IDs en el CSV.")

if __name__ == "__main__":
    update_data()
