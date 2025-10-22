var wms_layers = [];


        var lyr_gogle_0 = new ol.layer.Tile({
            'title': 'gogle',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}
'
            })
        });

        var lyr_MAPA_1 = new ol.layer.Tile({
            'title': 'MAPA',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FRACCION_2 = new ol.format.GeoJSON();
var features_FRACCION_2 = format_FRACCION_2.readFeatures(json_FRACCION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRACCION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRACCION_2.addFeatures(features_FRACCION_2);
cluster_FRACCION_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FRACCION_2
});
var lyr_FRACCION_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FRACCION_2, 
                style: style_FRACCION_2,
                popuplayertitle: 'FRACCION',
                interactive: false,
                title: '<img src="styles/legend/FRACCION_2.png" /> FRACCION'
            });
var format_F_3 = new ol.format.GeoJSON();
var features_F_3 = format_F_3.readFeatures(json_F_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_F_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_F_3.addFeatures(features_F_3);
var lyr_F_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_F_3, 
                style: style_F_3,
                popuplayertitle: 'F',
                interactive: false,
                title: '<img src="styles/legend/F_3.png" /> F'
            });
var format_PARAGUAYPROPIEDADES_4 = new ol.format.GeoJSON();
var features_PARAGUAYPROPIEDADES_4 = format_PARAGUAYPROPIEDADES_4.readFeatures(json_PARAGUAYPROPIEDADES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARAGUAYPROPIEDADES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARAGUAYPROPIEDADES_4.addFeatures(features_PARAGUAYPROPIEDADES_4);
var lyr_PARAGUAYPROPIEDADES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARAGUAYPROPIEDADES_4, 
                style: style_PARAGUAYPROPIEDADES_4,
                popuplayertitle: 'PARAGUAY PROPIEDADES',
                interactive: true,
    title: 'PARAGUAY PROPIEDADES<br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_0.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_1.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_2.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_3.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_4.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_5.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_6.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_7.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_8.png" /> <br />\
    <img src="styles/legend/PARAGUAYPROPIEDADES_4_9.png" /> <br />' });
var format_MANZANAS_5 = new ol.format.GeoJSON();
var features_MANZANAS_5 = format_MANZANAS_5.readFeatures(json_MANZANAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_5.addFeatures(features_MANZANAS_5);
var lyr_MANZANAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANAS_5, 
                style: style_MANZANAS_5,
                popuplayertitle: 'MANZANAS',
                interactive: false,
                title: '<img src="styles/legend/MANZANAS_5.png" /> MANZANAS'
            });

lyr_gogle_0.setVisible(true);lyr_MAPA_1.setVisible(true);lyr_FRACCION_2.setVisible(true);lyr_F_3.setVisible(false);lyr_PARAGUAYPROPIEDADES_4.setVisible(true);lyr_MANZANAS_5.setVisible(true);
var layersList = [lyr_gogle_0,lyr_MAPA_1,lyr_FRACCION_2,lyr_F_3,lyr_PARAGUAYPROPIEDADES_4,lyr_MANZANAS_5];
lyr_FRACCION_2.set('fieldAliases', {'FRACCION': 'FRACCION', });
lyr_F_3.set('fieldAliases', {'F': 'F', });
lyr_PARAGUAYPROPIEDADES_4.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Entrega': 'Entrega', 'Cuota': 'Cuota', 'Total': 'Total', 'Estado': 'Estado', });
lyr_MANZANAS_5.set('fieldAliases', {'id': 'id', });
lyr_FRACCION_2.set('fieldImages', {'FRACCION': 'TextEdit', });
lyr_F_3.set('fieldImages', {'F': 'TextEdit', });
lyr_PARAGUAYPROPIEDADES_4.set('fieldImages', {'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Superficie': 'TextEdit', 'Entrega': 'TextEdit', 'Cuota': 'TextEdit', 'Total': 'TextEdit', 'Estado': 'TextEdit', });
lyr_MANZANAS_5.set('fieldImages', {'id': 'TextEdit', });
lyr_FRACCION_2.set('fieldLabels', {'FRACCION': 'header label - always visible', });
lyr_F_3.set('fieldLabels', {'F': 'header label - always visible', });
lyr_PARAGUAYPROPIEDADES_4.set('fieldLabels', {'ID': 'hidden field', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Superficie': 'header label - always visible', 'Entrega': 'header label - always visible', 'Cuota': 'header label - always visible', 'Total': 'header label - always visible', 'Estado': 'header label - always visible', });
lyr_MANZANAS_5.set('fieldLabels', {'id': 'header label - always visible', });
lyr_MANZANAS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});