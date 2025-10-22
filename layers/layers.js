var wms_layers = [];


        var lyr_MAPA_0 = new ol.layer.Tile({
            'title': 'MAPA',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FRACCION_1 = new ol.format.GeoJSON();
var features_FRACCION_1 = format_FRACCION_1.readFeatures(json_FRACCION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRACCION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRACCION_1.addFeatures(features_FRACCION_1);
cluster_FRACCION_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FRACCION_1
});
var lyr_FRACCION_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FRACCION_1, 
                style: style_FRACCION_1,
                popuplayertitle: 'FRACCION',
                interactive: false,
                title: '<img src="styles/legend/FRACCION_1.png" /> FRACCION'
            });
var format_F_2 = new ol.format.GeoJSON();
var features_F_2 = format_F_2.readFeatures(json_F_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_F_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_F_2.addFeatures(features_F_2);
var lyr_F_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_F_2, 
                style: style_F_2,
                popuplayertitle: 'F',
                interactive: false,
                title: '<img src="styles/legend/F_2.png" /> F'
            });
var format_PARAGUAYPROPIEDADES_3 = new ol.format.GeoJSON();
var features_PARAGUAYPROPIEDADES_3 = format_PARAGUAYPROPIEDADES_3.readFeatures(json_PARAGUAYPROPIEDADES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARAGUAYPROPIEDADES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARAGUAYPROPIEDADES_3.addFeatures(features_PARAGUAYPROPIEDADES_3);
var lyr_PARAGUAYPROPIEDADES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARAGUAYPROPIEDADES_3, 
                style: style_PARAGUAYPROPIEDADES_3,
                popuplayertitle: 'PARAGUAY PROPIEDADES',
                interactive: true,
    title: 'PARAGUAY PROPIEDADES<br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_0.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_1.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_2.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_3.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_4.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_5.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_6.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_7.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_8.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_3_9.png" /> <br />' });
var format_MANZANAS_4 = new ol.format.GeoJSON();
var features_MANZANAS_4 = format_MANZANAS_4.readFeatures(json_MANZANAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_4.addFeatures(features_MANZANAS_4);
var lyr_MANZANAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANAS_4, 
                style: style_MANZANAS_4,
                popuplayertitle: 'MANZANAS',
                interactive: false,
                title: '<img src="styles/legend/MANZANAS_4.png" /> MANZANAS'
            });

lyr_MAPA_0.setVisible(true);lyr_FRACCION_1.setVisible(true);lyr_F_2.setVisible(false);lyr_PARAGUAYPROPIEDADES_3.setVisible(true);lyr_MANZANAS_4.setVisible(true);
var layersList = [lyr_MAPA_0,lyr_FRACCION_1,lyr_F_2,lyr_PARAGUAYPROPIEDADES_3,lyr_MANZANAS_4];
lyr_FRACCION_1.set('fieldAliases', {'FRACCION': 'FRACCION', });
lyr_F_2.set('fieldAliases', {'F': 'F', });
lyr_PARAGUAYPROPIEDADES_3.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Entrega': 'Entrega', 'Cuota': 'Cuota', 'Total': 'Total', 'Descuento': 'Descuento', 'Contado': 'Contado', 'Estado': 'Estado', });
lyr_MANZANAS_4.set('fieldAliases', {'id': 'id', });
lyr_FRACCION_1.set('fieldImages', {'FRACCION': 'TextEdit', });
lyr_F_2.set('fieldImages', {'F': 'TextEdit', });
lyr_PARAGUAYPROPIEDADES_3.set('fieldImages', {'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Superficie': 'TextEdit', 'Entrega': 'TextEdit', 'Cuota': 'TextEdit', 'Total': 'TextEdit', 'Descuento': '', 'Contado': '', 'Estado': 'TextEdit', });
lyr_MANZANAS_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FRACCION_1.set('fieldLabels', {'FRACCION': 'header label - always visible', });
lyr_F_2.set('fieldLabels', {'F': 'header label - always visible', });
lyr_PARAGUAYPROPIEDADES_3.set('fieldLabels', {'ID': 'hidden field', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Superficie': 'header label - always visible', 'Entrega': 'header label - always visible', 'Cuota': 'header label - always visible', 'Total': 'header label - always visible', 'Descuento': 'no label', 'Contado': 'header label - always visible', 'Estado': 'header label - visible with data', });
lyr_MANZANAS_4.set('fieldLabels', {'id': 'header label - always visible', });
lyr_MANZANAS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});