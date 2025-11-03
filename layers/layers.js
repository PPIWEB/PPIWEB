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
var lyr_39_georeferenced_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '39_georeferenced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/39_georeferenced_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6341717.786776, -2931019.454328, -6340331.403385, -2930284.930930]
        })
    });
var lyr_40Model_georeferenced_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '40-Model_georeferenced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/40Model_georeferenced_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6328935.830982, -2933520.575560, -6328509.109128, -2933291.258042]
        })
    });
var lyr_41_georeferenced_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '41_georeferenced<br />' ,
        
maxResolution:0.28004466152261964,

        minResolution:0.00028004466152261963,

        source: new ol.source.ImageStatic({
            url: "./layers/41_georeferenced_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6338024.497901, -2941265.378572, -6336361.584616, -2939510.371662]
        })
    });
var lyr_42_georeferenced_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '42_georeferenced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/42_georeferenced_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6383920.758937, -2900634.973764, -6382802.711537, -2900042.424996]
        })
    });
var format_FRACCION_8 = new ol.format.GeoJSON();
var features_FRACCION_8 = format_FRACCION_8.readFeatures(json_FRACCION_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRACCION_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRACCION_8.addFeatures(features_FRACCION_8);
cluster_FRACCION_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FRACCION_8
});
var lyr_FRACCION_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FRACCION_8, 
                style: style_FRACCION_8,
                popuplayertitle: 'FRACCION',
                interactive: false,
                title: '<img src="styles/legend/FRACCION_8.png" /> FRACCION'
            });

lyr_F_0.setVisible(false);lyr_MAPA_1.setVisible(true);lyr_COMBINADO_2.setVisible(true);lyr_MANZANAS_3.setVisible(true);lyr_39_georeferenced_4.setVisible(true);lyr_40Model_georeferenced_5.setVisible(true);lyr_41_georeferenced_6.setVisible(true);lyr_42_georeferenced_7.setVisible(true);lyr_FRACCION_8.setVisible(true);
var layersList = [lyr_F_0,lyr_MAPA_1,lyr_COMBINADO_2,lyr_MANZANAS_3,lyr_39_georeferenced_4,lyr_40Model_georeferenced_5,lyr_41_georeferenced_6,lyr_42_georeferenced_7,lyr_FRACCION_8];
lyr_F_0.set('fieldAliases', {'F': 'F', });
lyr_COMBINADO_2.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Estado': 'Estado', 'Cuota': 'Cuota', 'Total': 'Total', 'Descuento': 'Descuento', 'Contado': 'Contado', 'Entrega': 'Entrega', });
lyr_MANZANAS_3.set('fieldAliases', {'id': 'id', });
lyr_FRACCION_8.set('fieldAliases', {'FRACCION': 'FRACCION', });
lyr_F_0.set('fieldImages', {'F': 'TextEdit', });
lyr_COMBINADO_2.set('fieldImages', {'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Superficie': 'TextEdit', 'Estado': 'TextEdit', 'Cuota': 'TextEdit', 'Total': 'TextEdit', 'Descuento': 'TextEdit', 'Contado': 'TextEdit', 'Entrega': 'TextEdit', });
lyr_MANZANAS_3.set('fieldImages', {'id': 'TextEdit', });
lyr_FRACCION_8.set('fieldImages', {'FRACCION': 'TextEdit', });
lyr_F_0.set('fieldLabels', {'F': 'no label', });
lyr_COMBINADO_2.set('fieldLabels', {'ID': 'header label - always visible', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Superficie': 'header label - always visible', 'Estado': 'header label - always visible', 'Cuota': 'header label - always visible', 'Total': 'header label - always visible', 'Descuento': 'header label - always visible', 'Contado': 'header label - always visible', 'Entrega': 'header label - always visible', });
lyr_MANZANAS_3.set('fieldLabels', {'id': 'no label', });
lyr_FRACCION_8.set('fieldLabels', {'FRACCION': 'no label', });
lyr_FRACCION_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});