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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_MAPA_2 = new ol.layer.Tile({
            'title': 'MAPA',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_COMBINADO_3 = new ol.format.GeoJSON();
var features_COMBINADO_3 = format_COMBINADO_3.readFeatures(json_COMBINADO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMBINADO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMBINADO_3.addFeatures(features_COMBINADO_3);
var lyr_COMBINADO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMBINADO_3, 
                style: style_COMBINADO_3,
               maxResolution: 20, // Prueba con 2, 5 o 10 hasta hallar el punto ideal
                minResolution: 0,
                popuplayertitle: 'COMBINADO',
                interactive: true,
    title: 'COMBINADO<br />\
    <img src="styles/legend/COMBINADO_3_0.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_1.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_2.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_3.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_4.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_5.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_6.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_7.png" /> <br />\
    <img src="styles/legend/COMBINADO_3_8.png" /> <br />' });
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
var format_FRACCION_5 = new ol.format.GeoJSON();
var features_FRACCION_5 = format_FRACCION_5.readFeatures(json_FRACCION_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRACCION_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRACCION_5.addFeatures(features_FRACCION_5);
cluster_FRACCION_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FRACCION_5
});
var lyr_FRACCION_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FRACCION_5, 
                style: style_FRACCION_5,
                popuplayertitle: 'FRACCION',
                interactive: false,
                title: '<img src="styles/legend/FRACCION_5.png" /> FRACCION'
            });
var format_NOMBREFRACCION_6 = new ol.format.GeoJSON();
var features_NOMBREFRACCION_6 = format_NOMBREFRACCION_6.readFeatures(json_NOMBREFRACCION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOMBREFRACCION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NOMBREFRACCION_6.addFeatures(features_NOMBREFRACCION_6);
var lyr_NOMBREFRACCION_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NOMBREFRACCION_6, 
                style: style_NOMBREFRACCION_6,
                popuplayertitle: 'NOMBRE FRACCION',
                interactive: true,
                title: '<img src="styles/legend/NOMBREFRACCION_6.png" /> NOMBRE FRACCION'
            });

lyr_F_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_MAPA_2.setVisible(true);lyr_COMBINADO_3.setVisible(true);lyr_MANZANAS_4.setVisible(true);lyr_FRACCION_5.setVisible(true);lyr_NOMBREFRACCION_6.setVisible(true);
var layersList = [lyr_F_0,lyr_OpenStreetMap_1,lyr_MAPA_2,lyr_COMBINADO_3,lyr_MANZANAS_4,lyr_FRACCION_5,lyr_NOMBREFRACCION_6];
lyr_F_0.set('fieldAliases', {'F': 'F', });
lyr_COMBINADO_3.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Estado': 'Estado', 'Cuota': 'Cuota', 'Total': 'Total', 'Descuento': 'Descuento', 'Contado': 'Contado', 'Entrega': 'Entrega', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_MANZANAS_4.set('fieldAliases', {'id': 'id', });
lyr_FRACCION_5.set('fieldAliases', {'FRACCION': 'FRACCION', });
lyr_NOMBREFRACCION_6.set('fieldAliases', {'NAME': 'NAME', });
lyr_F_0.set('fieldImages', {'F': 'TextEdit', });
lyr_COMBINADO_3.set('fieldImages', {'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Superficie': 'TextEdit', 'Estado': 'TextEdit', 'Cuota': 'TextEdit', 'Total': 'TextEdit', 'Descuento': 'TextEdit', 'Contado': 'TextEdit', 'Entrega': 'TextEdit', 'field_11': 'TextEdit', 'field_12': '', });
lyr_MANZANAS_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FRACCION_5.set('fieldImages', {'FRACCION': 'TextEdit', });
lyr_NOMBREFRACCION_6.set('fieldImages', {'NAME': 'TextEdit', });
lyr_F_0.set('fieldLabels', {'F': 'no label', });
lyr_COMBINADO_3.set('fieldLabels', {'ID': 'header label - always visible', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Superficie': 'header label - always visible', 'Estado': 'header label - always visible', 'Cuota': 'header label - always visible', 'Total': 'header label - always visible', 'Descuento': 'header label - always visible', 'Contado': 'header label - always visible', 'Entrega': 'header label - always visible', 'field_11': 'no label', 'field_12': 'no label', });
lyr_MANZANAS_4.set('fieldLabels', {'id': 'no label', });
lyr_FRACCION_5.set('fieldLabels', {'FRACCION': 'no label', });
lyr_NOMBREFRACCION_6.set('fieldLabels', {'NAME': 'no label', });
lyr_NOMBREFRACCION_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
