var wms_layers = [];

var format_F_0 = new ol.format.GeoJSON();
var features_F_0 = format_F_0.readFeatures(json_F_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_F_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_F_0.addFeatures(features_F_0);
var lyr_F_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_F_0, 
                style: style_F_0,
                popuplayertitle: 'F',
                interactive: false,
                title: '<img src="styles/legend/F_0.png" /> F'
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
var format_COMBINADO_2 = new ol.format.GeoJSON();
var features_COMBINADO_2 = format_COMBINADO_2.readFeatures(json_COMBINADO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMBINADO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMBINADO_2.addFeatures(features_COMBINADO_2);
var lyr_COMBINADO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMBINADO_2, 
                style: style_COMBINADO_2,
                popuplayertitle: 'COMBINADO',
                interactive: true,
    title: 'COMBINADO<br />\
    <img src="styles/legend/COMBINADO_2_0.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_1.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_2.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_3.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_4.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_5.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_6.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_7.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_8.png" /> <br />\
    <img src="styles/legend/COMBINADO_2_9.png" /> <br />' });
var format_MANZANAS_3 = new ol.format.GeoJSON();
var features_MANZANAS_3 = format_MANZANAS_3.readFeatures(json_MANZANAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_3.addFeatures(features_MANZANAS_3);
var lyr_MANZANAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANAS_3, 
                style: style_MANZANAS_3,
                popuplayertitle: 'MANZANAS',
                interactive: false,
                title: '<img src="styles/legend/MANZANAS_3.png" /> MANZANAS'
            });
var format_FRACCION_4 = new ol.format.GeoJSON();
var features_FRACCION_4 = format_FRACCION_4.readFeatures(json_FRACCION_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRACCION_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRACCION_4.addFeatures(features_FRACCION_4);
cluster_FRACCION_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FRACCION_4
});
var lyr_FRACCION_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FRACCION_4, 
                style: style_FRACCION_4,
                popuplayertitle: 'FRACCION',
                interactive: false,
                title: '<img src="styles/legend/FRACCION_4.png" /> FRACCION'
            });
var format_linea_5 = new ol.format.GeoJSON();
var features_linea_5 = format_linea_5.readFeatures(json_linea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_5.addFeatures(features_linea_5);
var lyr_linea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linea_5, 
                style: style_linea_5,
                popuplayertitle: 'linea',
                interactive: true,
                title: '<img src="styles/legend/linea_5.png" /> linea'
            });

lyr_F_0.setVisible(false);lyr_MAPA_1.setVisible(true);lyr_COMBINADO_2.setVisible(true);lyr_MANZANAS_3.setVisible(true);lyr_FRACCION_4.setVisible(true);lyr_linea_5.setVisible(true);
var layersList = [lyr_F_0,lyr_MAPA_1,lyr_COMBINADO_2,lyr_MANZANAS_3,lyr_FRACCION_4,lyr_linea_5];
lyr_F_0.set('fieldAliases', {'F': 'F', });
lyr_COMBINADO_2.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Estado': 'Estado', 'Cuota': 'Cuota', 'Total': 'Total', 'Descuento': 'Descuento', 'Contado': 'Contado', 'Entrega': 'Entrega', });
lyr_MANZANAS_3.set('fieldAliases', {'id': 'id', });
lyr_FRACCION_4.set('fieldAliases', {'FRACCION': 'FRACCION', });
lyr_linea_5.set('fieldAliases', {'id': 'id', 'dim': 'dim', });
lyr_F_0.set('fieldImages', {'F': 'TextEdit', });
lyr_COMBINADO_2.set('fieldImages', {'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Superficie': 'TextEdit', 'Estado': 'TextEdit', 'Cuota': 'TextEdit', 'Total': 'TextEdit', 'Descuento': 'TextEdit', 'Contado': 'TextEdit', 'Entrega': 'TextEdit', });
lyr_MANZANAS_3.set('fieldImages', {'id': 'TextEdit', });
lyr_FRACCION_4.set('fieldImages', {'FRACCION': 'TextEdit', });
lyr_linea_5.set('fieldImages', {'id': 'TextEdit', 'dim': 'Range', });
lyr_F_0.set('fieldLabels', {'F': 'no label', });
lyr_COMBINADO_2.set('fieldLabels', {'ID': 'header label - always visible', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Superficie': 'header label - always visible', 'Estado': 'header label - always visible', 'Cuota': 'header label - always visible', 'Total': 'header label - always visible', 'Descuento': 'header label - always visible', 'Contado': 'header label - always visible', 'Entrega': 'header label - always visible', });
lyr_MANZANAS_3.set('fieldLabels', {'id': 'no label', });
lyr_FRACCION_4.set('fieldLabels', {'FRACCION': 'no label', });
lyr_linea_5.set('fieldLabels', {'id': 'no label', 'dim': 'no label', });
lyr_linea_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});