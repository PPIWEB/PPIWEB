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
                interactive: true,
                title: '<img src="styles/legend/F_0.png" /> F'
            });

        var lyr_MAPA_1 = new ol.layer.Tile({
            'title': 'MAPA',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_42_2 = new ol.format.GeoJSON();
var features_42_2 = format_42_2.readFeatures(json_42_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_42_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_42_2.addFeatures(features_42_2);
var lyr_42_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_42_2, 
                style: style_42_2,
                popuplayertitle: '42',
                interactive: true,
                title: '<img src="styles/legend/42_2.png" /> 42'
            });
var format_41SanAgustin_3 = new ol.format.GeoJSON();
var features_41SanAgustin_3 = format_41SanAgustin_3.readFeatures(json_41SanAgustin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_41SanAgustin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_41SanAgustin_3.addFeatures(features_41SanAgustin_3);
var lyr_41SanAgustin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_41SanAgustin_3, 
                style: style_41SanAgustin_3,
                popuplayertitle: '41 San Agustin',
                interactive: true,
                title: '<img src="styles/legend/41SanAgustin_3.png" /> 41 San Agustin'
            });
var format_40_4 = new ol.format.GeoJSON();
var features_40_4 = format_40_4.readFeatures(json_40_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_40_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_40_4.addFeatures(features_40_4);
var lyr_40_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_40_4, 
                style: style_40_4,
                popuplayertitle: '40',
                interactive: true,
                title: '<img src="styles/legend/40_4.png" /> 40'
            });
var format_39_5 = new ol.format.GeoJSON();
var features_39_5 = format_39_5.readFeatures(json_39_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_5.addFeatures(features_39_5);
var lyr_39_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_5, 
                style: style_39_5,
                popuplayertitle: '39',
                interactive: true,
    title: '39<br />\
    <img src="styles/legend/39_5_0.png" /> <br />\
    <img src="styles/legend/39_5_1.png" /> <br />\
    <img src="styles/legend/39_5_2.png" /> <br />\
    <img src="styles/legend/39_5_3.png" /> <br />\
    <img src="styles/legend/39_5_4.png" /> <br />\
    <img src="styles/legend/39_5_5.png" /> <br />' });
var format_38_6 = new ol.format.GeoJSON();
var features_38_6 = format_38_6.readFeatures(json_38_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_6.addFeatures(features_38_6);
var lyr_38_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_6, 
                style: style_38_6,
                popuplayertitle: '38',
                interactive: true,
    title: '38<br />\
    <img src="styles/legend/38_6_0.png" /> <br />\
    <img src="styles/legend/38_6_1.png" /> <br />\
    <img src="styles/legend/38_6_2.png" /> <br />\
    <img src="styles/legend/38_6_3.png" /> <br />\
    <img src="styles/legend/38_6_4.png" /> <br />\
    <img src="styles/legend/38_6_5.png" /> <br />' });
var format_37_7 = new ol.format.GeoJSON();
var features_37_7 = format_37_7.readFeatures(json_37_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_7.addFeatures(features_37_7);
var lyr_37_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_7, 
                style: style_37_7,
                popuplayertitle: '37',
                interactive: true,
    title: '37<br />\
    <img src="styles/legend/37_7_0.png" /> <br />\
    <img src="styles/legend/37_7_1.png" /> <br />\
    <img src="styles/legend/37_7_2.png" /> <br />\
    <img src="styles/legend/37_7_3.png" /> <br />\
    <img src="styles/legend/37_7_4.png" /> <br />\
    <img src="styles/legend/37_7_5.png" /> <br />\
    <img src="styles/legend/37_7_6.png" /> <br />' });
var format_36_8 = new ol.format.GeoJSON();
var features_36_8 = format_36_8.readFeatures(json_36_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_36_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_36_8.addFeatures(features_36_8);
var lyr_36_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_36_8, 
                style: style_36_8,
                popuplayertitle: '36',
                interactive: true,
                title: '<img src="styles/legend/36_8.png" /> 36'
            });
var format_35BOSQUESDEYACAREY_9 = new ol.format.GeoJSON();
var features_35BOSQUESDEYACAREY_9 = format_35BOSQUESDEYACAREY_9.readFeatures(json_35BOSQUESDEYACAREY_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35BOSQUESDEYACAREY_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35BOSQUESDEYACAREY_9.addFeatures(features_35BOSQUESDEYACAREY_9);
var lyr_35BOSQUESDEYACAREY_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35BOSQUESDEYACAREY_9, 
                style: style_35BOSQUESDEYACAREY_9,
                popuplayertitle: '35-BOSQUES DE YACAREY',
                interactive: true,
                title: '<img src="styles/legend/35BOSQUESDEYACAREY_9.png" /> 35-BOSQUES DE YACAREY'
            });
var format_34_10 = new ol.format.GeoJSON();
var features_34_10 = format_34_10.readFeatures(json_34_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_10.addFeatures(features_34_10);
var lyr_34_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_10, 
                style: style_34_10,
                popuplayertitle: '34',
                interactive: true,
                title: '<img src="styles/legend/34_10.png" /> 34'
            });
var format_33BOSQUESDEITACURUBIII_11 = new ol.format.GeoJSON();
var features_33BOSQUESDEITACURUBIII_11 = format_33BOSQUESDEITACURUBIII_11.readFeatures(json_33BOSQUESDEITACURUBIII_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33BOSQUESDEITACURUBIII_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33BOSQUESDEITACURUBIII_11.addFeatures(features_33BOSQUESDEITACURUBIII_11);
var lyr_33BOSQUESDEITACURUBIII_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33BOSQUESDEITACURUBIII_11, 
                style: style_33BOSQUESDEITACURUBIII_11,
                popuplayertitle: '33- BOSQUES DE ITACURUBI II',
                interactive: true,
                title: '<img src="styles/legend/33BOSQUESDEITACURUBIII_11.png" /> 33- BOSQUES DE ITACURUBI II'
            });
var format_32BISQUESDEITACURUBII_12 = new ol.format.GeoJSON();
var features_32BISQUESDEITACURUBII_12 = format_32BISQUESDEITACURUBII_12.readFeatures(json_32BISQUESDEITACURUBII_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_32BISQUESDEITACURUBII_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_32BISQUESDEITACURUBII_12.addFeatures(features_32BISQUESDEITACURUBII_12);
var lyr_32BISQUESDEITACURUBII_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_32BISQUESDEITACURUBII_12, 
                style: style_32BISQUESDEITACURUBII_12,
                popuplayertitle: '32 -BISQUES DE ITACURUBI I ',
                interactive: true,
                title: '<img src="styles/legend/32BISQUESDEITACURUBII_12.png" /> 32 -BISQUES DE ITACURUBI I '
            });
var format_31AIRESDEVILLAREAL_13 = new ol.format.GeoJSON();
var features_31AIRESDEVILLAREAL_13 = format_31AIRESDEVILLAREAL_13.readFeatures(json_31AIRESDEVILLAREAL_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31AIRESDEVILLAREAL_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31AIRESDEVILLAREAL_13.addFeatures(features_31AIRESDEVILLAREAL_13);
var lyr_31AIRESDEVILLAREAL_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_31AIRESDEVILLAREAL_13, 
                style: style_31AIRESDEVILLAREAL_13,
                popuplayertitle: '31-AIRES DE VILLA REAL',
                interactive: true,
                title: '<img src="styles/legend/31AIRESDEVILLAREAL_13.png" /> 31-AIRES DE VILLA REAL'
            });
var format_30LAARBOLEDA_14 = new ol.format.GeoJSON();
var features_30LAARBOLEDA_14 = format_30LAARBOLEDA_14.readFeatures(json_30LAARBOLEDA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30LAARBOLEDA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30LAARBOLEDA_14.addFeatures(features_30LAARBOLEDA_14);
var lyr_30LAARBOLEDA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30LAARBOLEDA_14, 
                style: style_30LAARBOLEDA_14,
                popuplayertitle: '30 - LA ARBOLEDA',
                interactive: true,
                title: '<img src="styles/legend/30LAARBOLEDA_14.png" /> 30 - LA ARBOLEDA'
            });
var format_29ESPERANZAII_15 = new ol.format.GeoJSON();
var features_29ESPERANZAII_15 = format_29ESPERANZAII_15.readFeatures(json_29ESPERANZAII_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_29ESPERANZAII_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_29ESPERANZAII_15.addFeatures(features_29ESPERANZAII_15);
var lyr_29ESPERANZAII_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_29ESPERANZAII_15, 
                style: style_29ESPERANZAII_15,
                popuplayertitle: '29-ESPERANZA II',
                interactive: true,
                title: '<img src="styles/legend/29ESPERANZAII_15.png" /> 29-ESPERANZA II'
            });
var format_28ESPERANZAI_16 = new ol.format.GeoJSON();
var features_28ESPERANZAI_16 = format_28ESPERANZAI_16.readFeatures(json_28ESPERANZAI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28ESPERANZAI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28ESPERANZAI_16.addFeatures(features_28ESPERANZAI_16);
var lyr_28ESPERANZAI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28ESPERANZAI_16, 
                style: style_28ESPERANZAI_16,
                popuplayertitle: '28- ESPERANZA I',
                interactive: true,
                title: '<img src="styles/legend/28ESPERANZAI_16.png" /> 28- ESPERANZA I'
            });
var format_27NUEVOAMANECERII_17 = new ol.format.GeoJSON();
var features_27NUEVOAMANECERII_17 = format_27NUEVOAMANECERII_17.readFeatures(json_27NUEVOAMANECERII_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27NUEVOAMANECERII_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27NUEVOAMANECERII_17.addFeatures(features_27NUEVOAMANECERII_17);
var lyr_27NUEVOAMANECERII_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_27NUEVOAMANECERII_17, 
                style: style_27NUEVOAMANECERII_17,
                popuplayertitle: '27-NUEVO AMANECER II',
                interactive: true,
                title: '<img src="styles/legend/27NUEVOAMANECERII_17.png" /> 27-NUEVO AMANECER II'
            });
var format_26VILLAVERDE_18 = new ol.format.GeoJSON();
var features_26VILLAVERDE_18 = format_26VILLAVERDE_18.readFeatures(json_26VILLAVERDE_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_26VILLAVERDE_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_26VILLAVERDE_18.addFeatures(features_26VILLAVERDE_18);
var lyr_26VILLAVERDE_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_26VILLAVERDE_18, 
                style: style_26VILLAVERDE_18,
                popuplayertitle: '26- VILLA VERDE',
                interactive: true,
                title: '<img src="styles/legend/26VILLAVERDE_18.png" /> 26- VILLA VERDE'
            });
var format_25ISLAVERDE_19 = new ol.format.GeoJSON();
var features_25ISLAVERDE_19 = format_25ISLAVERDE_19.readFeatures(json_25ISLAVERDE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25ISLAVERDE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25ISLAVERDE_19.addFeatures(features_25ISLAVERDE_19);
var lyr_25ISLAVERDE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25ISLAVERDE_19, 
                style: style_25ISLAVERDE_19,
                popuplayertitle: '25-ISLA VERDE',
                interactive: true,
                title: '<img src="styles/legend/25ISLAVERDE_19.png" /> 25-ISLA VERDE'
            });
var format_24ELPROGRESO_20 = new ol.format.GeoJSON();
var features_24ELPROGRESO_20 = format_24ELPROGRESO_20.readFeatures(json_24ELPROGRESO_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24ELPROGRESO_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24ELPROGRESO_20.addFeatures(features_24ELPROGRESO_20);
var lyr_24ELPROGRESO_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24ELPROGRESO_20, 
                style: style_24ELPROGRESO_20,
                popuplayertitle: '24-EL PROGRESO',
                interactive: true,
                title: '<img src="styles/legend/24ELPROGRESO_20.png" /> 24-EL PROGRESO'
            });
var format_23ECOBARRIOCERROVISTA_21 = new ol.format.GeoJSON();
var features_23ECOBARRIOCERROVISTA_21 = format_23ECOBARRIOCERROVISTA_21.readFeatures(json_23ECOBARRIOCERROVISTA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_23ECOBARRIOCERROVISTA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_23ECOBARRIOCERROVISTA_21.addFeatures(features_23ECOBARRIOCERROVISTA_21);
var lyr_23ECOBARRIOCERROVISTA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_23ECOBARRIOCERROVISTA_21, 
                style: style_23ECOBARRIOCERROVISTA_21,
                popuplayertitle: '23-ECOBARRIO CERRO VISTA',
                interactive: true,
                title: '<img src="styles/legend/23ECOBARRIOCERROVISTA_21.png" /> 23-ECOBARRIO CERRO VISTA'
            });
var format_22PANAMBI_22 = new ol.format.GeoJSON();
var features_22PANAMBI_22 = format_22PANAMBI_22.readFeatures(json_22PANAMBI_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22PANAMBI_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22PANAMBI_22.addFeatures(features_22PANAMBI_22);
var lyr_22PANAMBI_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22PANAMBI_22, 
                style: style_22PANAMBI_22,
                popuplayertitle: '22-PANAMBI',
                interactive: true,
                title: '<img src="styles/legend/22PANAMBI_22.png" /> 22-PANAMBI'
            });
var format_20NACIENTESDEYTU_23 = new ol.format.GeoJSON();
var features_20NACIENTESDEYTU_23 = format_20NACIENTESDEYTU_23.readFeatures(json_20NACIENTESDEYTU_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20NACIENTESDEYTU_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20NACIENTESDEYTU_23.addFeatures(features_20NACIENTESDEYTU_23);
var lyr_20NACIENTESDEYTU_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20NACIENTESDEYTU_23, 
                style: style_20NACIENTESDEYTU_23,
                popuplayertitle: '20-NACIENTES DE YTU',
                interactive: true,
                title: '<img src="styles/legend/20NACIENTESDEYTU_23.png" /> 20-NACIENTES DE YTU'
            });
var format_19SALADOII_24 = new ol.format.GeoJSON();
var features_19SALADOII_24 = format_19SALADOII_24.readFeatures(json_19SALADOII_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19SALADOII_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19SALADOII_24.addFeatures(features_19SALADOII_24);
var lyr_19SALADOII_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19SALADOII_24, 
                style: style_19SALADOII_24,
                popuplayertitle: '19-SALADO II',
                interactive: true,
                title: '<img src="styles/legend/19SALADOII_24.png" /> 19-SALADO II'
            });
var format_18SALADOI_25 = new ol.format.GeoJSON();
var features_18SALADOI_25 = format_18SALADOI_25.readFeatures(json_18SALADOI_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18SALADOI_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18SALADOI_25.addFeatures(features_18SALADOI_25);
var lyr_18SALADOI_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18SALADOI_25, 
                style: style_18SALADOI_25,
                popuplayertitle: '18-SALADO I',
                interactive: true,
                title: '<img src="styles/legend/18SALADOI_25.png" /> 18-SALADO I'
            });
var format_17CUATROBOCAS_26 = new ol.format.GeoJSON();
var features_17CUATROBOCAS_26 = format_17CUATROBOCAS_26.readFeatures(json_17CUATROBOCAS_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17CUATROBOCAS_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17CUATROBOCAS_26.addFeatures(features_17CUATROBOCAS_26);
var lyr_17CUATROBOCAS_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17CUATROBOCAS_26, 
                style: style_17CUATROBOCAS_26,
                popuplayertitle: '17-CUATRO BOCAS',
                interactive: true,
                title: '<img src="styles/legend/17CUATROBOCAS_26.png" /> 17-CUATRO BOCAS'
            });
var format_16COSTAARENA_27 = new ol.format.GeoJSON();
var features_16COSTAARENA_27 = format_16COSTAARENA_27.readFeatures(json_16COSTAARENA_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16COSTAARENA_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16COSTAARENA_27.addFeatures(features_16COSTAARENA_27);
var lyr_16COSTAARENA_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16COSTAARENA_27, 
                style: style_16COSTAARENA_27,
                popuplayertitle: '16-COSTA ARENA',
                interactive: true,
                title: '<img src="styles/legend/16COSTAARENA_27.png" /> 16-COSTA ARENA'
            });
var format_15BRISASDELSUR_28 = new ol.format.GeoJSON();
var features_15BRISASDELSUR_28 = format_15BRISASDELSUR_28.readFeatures(json_15BRISASDELSUR_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15BRISASDELSUR_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15BRISASDELSUR_28.addFeatures(features_15BRISASDELSUR_28);
var lyr_15BRISASDELSUR_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15BRISASDELSUR_28, 
                style: style_15BRISASDELSUR_28,
                popuplayertitle: '15-BRISAS DEL SUR',
                interactive: true,
                title: '<img src="styles/legend/15BRISASDELSUR_28.png" /> 15-BRISAS DEL SUR'
            });
var format_14SIERRAVERDE_29 = new ol.format.GeoJSON();
var features_14SIERRAVERDE_29 = format_14SIERRAVERDE_29.readFeatures(json_14SIERRAVERDE_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14SIERRAVERDE_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14SIERRAVERDE_29.addFeatures(features_14SIERRAVERDE_29);
var lyr_14SIERRAVERDE_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14SIERRAVERDE_29, 
                style: style_14SIERRAVERDE_29,
                popuplayertitle: '14-SIERRA VERDE',
                interactive: true,
                title: '<img src="styles/legend/14SIERRAVERDE_29.png" /> 14-SIERRA VERDE'
            });
var format_11ALTOSDELMONTEII_30 = new ol.format.GeoJSON();
var features_11ALTOSDELMONTEII_30 = format_11ALTOSDELMONTEII_30.readFeatures(json_11ALTOSDELMONTEII_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11ALTOSDELMONTEII_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11ALTOSDELMONTEII_30.addFeatures(features_11ALTOSDELMONTEII_30);
var lyr_11ALTOSDELMONTEII_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11ALTOSDELMONTEII_30, 
                style: style_11ALTOSDELMONTEII_30,
                popuplayertitle: '11-ALTOS DEL MONTE II',
                interactive: true,
                title: '<img src="styles/legend/11ALTOSDELMONTEII_30.png" /> 11-ALTOS DEL MONTE II'
            });
var format_10ALTOSDELMONTEI_31 = new ol.format.GeoJSON();
var features_10ALTOSDELMONTEI_31 = format_10ALTOSDELMONTEI_31.readFeatures(json_10ALTOSDELMONTEI_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10ALTOSDELMONTEI_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10ALTOSDELMONTEI_31.addFeatures(features_10ALTOSDELMONTEI_31);
var lyr_10ALTOSDELMONTEI_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10ALTOSDELMONTEI_31, 
                style: style_10ALTOSDELMONTEI_31,
                popuplayertitle: '10-ALTOS DEL MONTE I',
                interactive: true,
                title: '<img src="styles/legend/10ALTOSDELMONTEI_31.png" /> 10-ALTOS DEL MONTE I'
            });
var format_9_32 = new ol.format.GeoJSON();
var features_9_32 = format_9_32.readFeatures(json_9_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9_32.addFeatures(features_9_32);
var lyr_9_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9_32, 
                style: style_9_32,
                popuplayertitle: '9',
                interactive: true,
                title: '<img src="styles/legend/9_32.png" /> 9'
            });
var format_8_33 = new ol.format.GeoJSON();
var features_8_33 = format_8_33.readFeatures(json_8_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_33.addFeatures(features_8_33);
var lyr_8_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8_33, 
                style: style_8_33,
                popuplayertitle: '8',
                interactive: true,
                title: '<img src="styles/legend/8_33.png" /> 8'
            });
var format_07LOSMANGALESII_34 = new ol.format.GeoJSON();
var features_07LOSMANGALESII_34 = format_07LOSMANGALESII_34.readFeatures(json_07LOSMANGALESII_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07LOSMANGALESII_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07LOSMANGALESII_34.addFeatures(features_07LOSMANGALESII_34);
var lyr_07LOSMANGALESII_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07LOSMANGALESII_34, 
                style: style_07LOSMANGALESII_34,
                popuplayertitle: '07-LOS MANGALES II',
                interactive: true,
                title: '<img src="styles/legend/07LOSMANGALESII_34.png" /> 07-LOS MANGALES II'
            });
var format_06LOSMANGALESI_35 = new ol.format.GeoJSON();
var features_06LOSMANGALESI_35 = format_06LOSMANGALESI_35.readFeatures(json_06LOSMANGALESI_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06LOSMANGALESI_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06LOSMANGALESI_35.addFeatures(features_06LOSMANGALESI_35);
var lyr_06LOSMANGALESI_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06LOSMANGALESI_35, 
                style: style_06LOSMANGALESI_35,
                popuplayertitle: '06 - LOS MANGALES I',
                interactive: true,
                title: '<img src="styles/legend/06LOSMANGALESI_35.png" /> 06 - LOS MANGALES I'
            });
var format_3PARQUEDELNORTE_36 = new ol.format.GeoJSON();
var features_3PARQUEDELNORTE_36 = format_3PARQUEDELNORTE_36.readFeatures(json_3PARQUEDELNORTE_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3PARQUEDELNORTE_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3PARQUEDELNORTE_36.addFeatures(features_3PARQUEDELNORTE_36);
var lyr_3PARQUEDELNORTE_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3PARQUEDELNORTE_36, 
                style: style_3PARQUEDELNORTE_36,
                popuplayertitle: '3-PARQUE DEL NORTE',
                interactive: true,
    title: '3-PARQUE DEL NORTE<br />\
    <img src="styles/legend/3PARQUEDELNORTE_36_0.png" /> <br />\
    <img src="styles/legend/3PARQUEDELNORTE_36_1.png" /> <br />\
    <img src="styles/legend/3PARQUEDELNORTE_36_2.png" /> <br />\
    <img src="styles/legend/3PARQUEDELNORTE_36_3.png" /> <br />\
    <img src="styles/legend/3PARQUEDELNORTE_36_4.png" /> <br />\
    <img src="styles/legend/3PARQUEDELNORTE_36_5.png" /> <br />\
    <img src="styles/legend/3PARQUEDELNORTE_36_6.png" /> <br />' });
var format_2RESIDENCIALGUILLERMINA_37 = new ol.format.GeoJSON();
var features_2RESIDENCIALGUILLERMINA_37 = format_2RESIDENCIALGUILLERMINA_37.readFeatures(json_2RESIDENCIALGUILLERMINA_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2RESIDENCIALGUILLERMINA_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2RESIDENCIALGUILLERMINA_37.addFeatures(features_2RESIDENCIALGUILLERMINA_37);
var lyr_2RESIDENCIALGUILLERMINA_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2RESIDENCIALGUILLERMINA_37, 
                style: style_2RESIDENCIALGUILLERMINA_37,
                popuplayertitle: '2-RESIDENCIAL GUILLERMINA',
                interactive: true,
    title: '2-RESIDENCIAL GUILLERMINA<br />\
    <img src="styles/legend/2RESIDENCIALGUILLERMINA_37_0.png" /> <br />\
    <img src="styles/legend/2RESIDENCIALGUILLERMINA_37_1.png" /> <br />\
    <img src="styles/legend/2RESIDENCIALGUILLERMINA_37_2.png" /> <br />\
    <img src="styles/legend/2RESIDENCIALGUILLERMINA_37_3.png" /> <br />\
    <img src="styles/legend/2RESIDENCIALGUILLERMINA_37_4.png" /> <br />\
    <img src="styles/legend/2RESIDENCIALGUILLERMINA_37_5.png" /> <br />\
    <img src="styles/legend/2RESIDENCIALGUILLERMINA_37_6.png" /> <br />' });
var format_MANZANAS_38 = new ol.format.GeoJSON();
var features_MANZANAS_38 = format_MANZANAS_38.readFeatures(json_MANZANAS_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_38.addFeatures(features_MANZANAS_38);
var lyr_MANZANAS_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANAS_38, 
                style: style_MANZANAS_38,
                popuplayertitle: 'MANZANAS',
                interactive: true,
                title: '<img src="styles/legend/MANZANAS_38.png" /> MANZANAS'
            });
var format_FRACCION_39 = new ol.format.GeoJSON();
var features_FRACCION_39 = format_FRACCION_39.readFeatures(json_FRACCION_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRACCION_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRACCION_39.addFeatures(features_FRACCION_39);
cluster_FRACCION_39 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FRACCION_39
});
var lyr_FRACCION_39 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FRACCION_39, 
                style: style_FRACCION_39,
                popuplayertitle: 'FRACCION',
                interactive: true,
                title: '<img src="styles/legend/FRACCION_39.png" /> FRACCION'
            });
var lyr_15BRISASDELSURModel_georeferenced_40 = new ol.layer.Image({
        opacity: 1,
        
    title: '15-BRISAS DEL SUR-Model_georeferenced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/15BRISASDELSURModel_georeferenced_40.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6260396.008318, -3142409.132893, -6260156.680500, -3141988.469845]
        })
    });
var lyr_37COLINASDEITACURUBI33333_41 = new ol.layer.Image({
        opacity: 1,
        
    title: '37-COLINAS DE ITACURUBI-33333<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/37COLINASDEITACURUBI33333_41.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6328568.916366, -2930918.862621, -6328137.989197, -2930690.567909]
        })
    });
var lyr_19SALADOIIModelGEO_42 = new ol.layer.Image({
        opacity: 1,
        
    title: '19-SALADO II-Model GEO<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/19SALADOIIModelGEO_42.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6394826.241285, -2898548.680818, -6394608.928009, -2898426.922167]
        })
    });
var lyr_16COSTAARENAModel_georeferenced_43 = new ol.layer.Image({
        opacity: 1,
        
    title: '16-COSTA ARENA-Model_georeferenced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/16COSTAARENAModel_georeferenced_43.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6331494.592181, -2953145.209998, -6331026.302355, -2952228.493796]
        })
    });
var lyr_18SALADOIModel_georeferenced_44 = new ol.layer.Image({
        opacity: 1,
        
    title: '18-SALADO I-Model_georeferenced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/18SALADOIModel_georeferenced_44.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6394921.875866, -2897103.640079, -6394821.473492, -2897046.571458]
        })
    });
var lyr_17CUATROBOCASModel_georeferenced_45 = new ol.layer.Image({
        opacity: 1,
        
    title: '17-CUATRO BOCAS-Model_georeferenced<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/17CUATROBOCASModel_georeferenced_45.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6295436.528051, -2776181.948957, -6295351.187776, -2776046.277556]
        })
    });

lyr_F_0.setVisible(true);lyr_MAPA_1.setVisible(true);lyr_42_2.setVisible(true);lyr_41SanAgustin_3.setVisible(true);lyr_40_4.setVisible(true);lyr_39_5.setVisible(true);lyr_38_6.setVisible(true);lyr_37_7.setVisible(true);lyr_36_8.setVisible(true);lyr_35BOSQUESDEYACAREY_9.setVisible(true);lyr_34_10.setVisible(true);lyr_33BOSQUESDEITACURUBIII_11.setVisible(true);lyr_32BISQUESDEITACURUBII_12.setVisible(true);lyr_31AIRESDEVILLAREAL_13.setVisible(true);lyr_30LAARBOLEDA_14.setVisible(true);lyr_29ESPERANZAII_15.setVisible(true);lyr_28ESPERANZAI_16.setVisible(true);lyr_27NUEVOAMANECERII_17.setVisible(true);lyr_26VILLAVERDE_18.setVisible(true);lyr_25ISLAVERDE_19.setVisible(true);lyr_24ELPROGRESO_20.setVisible(true);lyr_23ECOBARRIOCERROVISTA_21.setVisible(true);lyr_22PANAMBI_22.setVisible(true);lyr_20NACIENTESDEYTU_23.setVisible(true);lyr_19SALADOII_24.setVisible(true);lyr_18SALADOI_25.setVisible(true);lyr_17CUATROBOCAS_26.setVisible(true);lyr_16COSTAARENA_27.setVisible(true);lyr_15BRISASDELSUR_28.setVisible(true);lyr_14SIERRAVERDE_29.setVisible(true);lyr_11ALTOSDELMONTEII_30.setVisible(true);lyr_10ALTOSDELMONTEI_31.setVisible(true);lyr_9_32.setVisible(true);lyr_8_33.setVisible(true);lyr_07LOSMANGALESII_34.setVisible(true);lyr_06LOSMANGALESI_35.setVisible(true);lyr_3PARQUEDELNORTE_36.setVisible(true);lyr_2RESIDENCIALGUILLERMINA_37.setVisible(true);lyr_MANZANAS_38.setVisible(true);lyr_FRACCION_39.setVisible(true);lyr_15BRISASDELSURModel_georeferenced_40.setVisible(true);lyr_37COLINASDEITACURUBI33333_41.setVisible(true);lyr_19SALADOIIModelGEO_42.setVisible(true);lyr_16COSTAARENAModel_georeferenced_43.setVisible(true);lyr_18SALADOIModel_georeferenced_44.setVisible(true);lyr_17CUATROBOCASModel_georeferenced_45.setVisible(true);
var layersList = [lyr_F_0,lyr_MAPA_1,lyr_42_2,lyr_41SanAgustin_3,lyr_40_4,lyr_39_5,lyr_38_6,lyr_37_7,lyr_36_8,lyr_35BOSQUESDEYACAREY_9,lyr_34_10,lyr_33BOSQUESDEITACURUBIII_11,lyr_32BISQUESDEITACURUBII_12,lyr_31AIRESDEVILLAREAL_13,lyr_30LAARBOLEDA_14,lyr_29ESPERANZAII_15,lyr_28ESPERANZAI_16,lyr_27NUEVOAMANECERII_17,lyr_26VILLAVERDE_18,lyr_25ISLAVERDE_19,lyr_24ELPROGRESO_20,lyr_23ECOBARRIOCERROVISTA_21,lyr_22PANAMBI_22,lyr_20NACIENTESDEYTU_23,lyr_19SALADOII_24,lyr_18SALADOI_25,lyr_17CUATROBOCAS_26,lyr_16COSTAARENA_27,lyr_15BRISASDELSUR_28,lyr_14SIERRAVERDE_29,lyr_11ALTOSDELMONTEII_30,lyr_10ALTOSDELMONTEI_31,lyr_9_32,lyr_8_33,lyr_07LOSMANGALESII_34,lyr_06LOSMANGALESI_35,lyr_3PARQUEDELNORTE_36,lyr_2RESIDENCIALGUILLERMINA_37,lyr_MANZANAS_38,lyr_FRACCION_39,lyr_15BRISASDELSURModel_georeferenced_40,lyr_37COLINASDEITACURUBI33333_41,lyr_19SALADOIIModelGEO_42,lyr_16COSTAARENAModel_georeferenced_43,lyr_18SALADOIModel_georeferenced_44,lyr_17CUATROBOCASModel_georeferenced_45];
lyr_F_0.set('fieldAliases', {'F': 'F', });
lyr_42_2.set('fieldAliases', {'ID': 'ID', });
lyr_41SanAgustin_3.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Sup. m2': 'Sup. m2', 'Cuota': 'Cuota', 'Plazo': 'Plazo', 'Financiado': 'Financiado', 'Contado 40': 'Contado 40', 'Estado': 'Estado', });
lyr_40_4.set('fieldAliases', {'ID': 'ID', });
lyr_39_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_38_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'DEF_LOTE': 'DEF_LOTE', });
lyr_37_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_36_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_35BOSQUESDEYACAREY_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_34_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_33BOSQUESDEITACURUBIII_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_32BISQUESDEITACURUBII_12.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_31AIRESDEVILLAREAL_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_30LAARBOLEDA_14.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_29ESPERANZAII_15.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_28ESPERANZAI_16.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_27NUEVOAMANECERII_17.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_26VILLAVERDE_18.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_25ISLAVERDE_19.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_24ELPROGRESO_20.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_23ECOBARRIOCERROVISTA_21.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_22PANAMBI_22.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_20NACIENTESDEYTU_23.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', });
lyr_19SALADOII_24.set('fieldAliases', {'ID': 'ID', });
lyr_18SALADOI_25.set('fieldAliases', {'ID': 'ID', });
lyr_17CUATROBOCAS_26.set('fieldAliases', {'ID': 'ID', });
lyr_16COSTAARENA_27.set('fieldAliases', {'ID': 'ID', });
lyr_15BRISASDELSUR_28.set('fieldAliases', {'ID': 'ID', });
lyr_14SIERRAVERDE_29.set('fieldAliases', {'ID': 'ID', });
lyr_11ALTOSDELMONTEII_30.set('fieldAliases', {'ID': 'ID', });
lyr_10ALTOSDELMONTEI_31.set('fieldAliases', {'ID': 'ID', });
lyr_9_32.set('fieldAliases', {'ID': 'ID', });
lyr_8_33.set('fieldAliases', {'ID': 'ID', });
lyr_07LOSMANGALESII_34.set('fieldAliases', {'ID': 'ID', });
lyr_06LOSMANGALESI_35.set('fieldAliases', {'ID': 'ID', });
lyr_3PARQUEDELNORTE_36.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Entrega Inicial': 'Entrega Inicial', 'Cuota': 'Cuota', 'Total': 'Total', 'Estado': 'Estado', });
lyr_2RESIDENCIALGUILLERMINA_37.set('fieldAliases', {'ID': 'ID', 'Manzana': 'Manzana', 'Lote': 'Lote', 'Superficie': 'Superficie', 'Entrega Inicial': 'Entrega Inicial', 'Cuota': 'Cuota', 'Total': 'Total', 'Estado': 'Estado', });
lyr_MANZANAS_38.set('fieldAliases', {'id': 'id', });
lyr_FRACCION_39.set('fieldAliases', {'FRACCION': 'FRACCION', });
lyr_F_0.set('fieldImages', {'F': '', });
lyr_42_2.set('fieldImages', {'ID': '', });
lyr_41SanAgustin_3.set('fieldImages', {'ID': '', 'Manzana': '', 'Lote': '', 'Sup. m2': '', 'Cuota': '', 'Plazo': '', 'Financiado': '', 'Contado 40': '', 'Estado': '', });
lyr_40_4.set('fieldImages', {'ID': '', });
lyr_39_5.set('fieldImages', {'fid': '', 'ID': 'TextEdit', });
lyr_38_6.set('fieldImages', {'fid': '', 'ID': 'TextEdit', 'DEF_LOTE': '', });
lyr_37_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', });
lyr_36_8.set('fieldImages', {'fid': '', 'ID': '', });
lyr_35BOSQUESDEYACAREY_9.set('fieldImages', {'fid': '', 'ID': '', });
lyr_34_10.set('fieldImages', {'fid': '', 'ID': '', });
lyr_33BOSQUESDEITACURUBIII_11.set('fieldImages', {'fid': '', 'ID': '', });
lyr_32BISQUESDEITACURUBII_12.set('fieldImages', {'fid': '', 'ID': '', });
lyr_31AIRESDEVILLAREAL_13.set('fieldImages', {'fid': '', 'ID': '', });
lyr_30LAARBOLEDA_14.set('fieldImages', {'fid': '', 'ID': '', });
lyr_29ESPERANZAII_15.set('fieldImages', {'fid': '', 'ID': '', });
lyr_28ESPERANZAI_16.set('fieldImages', {'fid': '', 'ID': '', });
lyr_27NUEVOAMANECERII_17.set('fieldImages', {'fid': '', 'ID': '', });
lyr_26VILLAVERDE_18.set('fieldImages', {'fid': '', 'ID': '', });
lyr_25ISLAVERDE_19.set('fieldImages', {'fid': '', 'ID': '', });
lyr_24ELPROGRESO_20.set('fieldImages', {'fid': '', 'ID': '', });
lyr_23ECOBARRIOCERROVISTA_21.set('fieldImages', {'fid': '', 'ID': '', });
lyr_22PANAMBI_22.set('fieldImages', {'fid': '', 'ID': '', });
lyr_20NACIENTESDEYTU_23.set('fieldImages', {'fid': '', 'ID': '', });
lyr_19SALADOII_24.set('fieldImages', {'ID': '', });
lyr_18SALADOI_25.set('fieldImages', {'ID': '', });
lyr_17CUATROBOCAS_26.set('fieldImages', {'ID': '', });
lyr_16COSTAARENA_27.set('fieldImages', {'ID': '', });
lyr_15BRISASDELSUR_28.set('fieldImages', {'ID': '', });
lyr_14SIERRAVERDE_29.set('fieldImages', {'ID': '', });
lyr_11ALTOSDELMONTEII_30.set('fieldImages', {'ID': '', });
lyr_10ALTOSDELMONTEI_31.set('fieldImages', {'ID': '', });
lyr_9_32.set('fieldImages', {'ID': '', });
lyr_8_33.set('fieldImages', {'ID': '', });
lyr_07LOSMANGALESII_34.set('fieldImages', {'ID': '', });
lyr_06LOSMANGALESI_35.set('fieldImages', {'ID': '', });
lyr_3PARQUEDELNORTE_36.set('fieldImages', {'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Superficie': 'TextEdit', 'Entrega Inicial': 'TextEdit', 'Cuota': 'TextEdit', 'Total': 'TextEdit', 'Estado': 'TextEdit', });
lyr_2RESIDENCIALGUILLERMINA_37.set('fieldImages', {'ID': 'TextEdit', 'Manzana': 'TextEdit', 'Lote': 'TextEdit', 'Superficie': 'TextEdit', 'Entrega Inicial': 'TextEdit', 'Cuota': 'TextEdit', 'Total': 'TextEdit', 'Estado': 'TextEdit', });
lyr_MANZANAS_38.set('fieldImages', {'id': 'TextEdit', });
lyr_FRACCION_39.set('fieldImages', {'FRACCION': 'TextEdit', });
lyr_F_0.set('fieldLabels', {'F': 'no label', });
lyr_42_2.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_41SanAgustin_3.set('fieldLabels', {'ID': 'header label - always visible', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Sup. m2': 'header label - always visible', 'Cuota': 'header label - always visible', 'Plazo': 'header label - always visible', 'Financiado': 'header label - always visible', 'Contado 40': 'header label - always visible', 'Estado': 'header label - always visible', });
lyr_40_4.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_39_5.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_38_6.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', 'DEF_LOTE': 'header label - always visible', });
lyr_37_7.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_36_8.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_35BOSQUESDEYACAREY_9.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_34_10.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_33BOSQUESDEITACURUBIII_11.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_32BISQUESDEITACURUBII_12.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_31AIRESDEVILLAREAL_13.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_30LAARBOLEDA_14.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_29ESPERANZAII_15.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_28ESPERANZAI_16.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_27NUEVOAMANECERII_17.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_26VILLAVERDE_18.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_25ISLAVERDE_19.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_24ELPROGRESO_20.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_23ECOBARRIOCERROVISTA_21.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_22PANAMBI_22.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_20NACIENTESDEYTU_23.set('fieldLabels', {'fid': 'header label - always visible', 'ID': 'header label - always visible', });
lyr_19SALADOII_24.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_18SALADOI_25.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_17CUATROBOCAS_26.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_16COSTAARENA_27.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_15BRISASDELSUR_28.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_14SIERRAVERDE_29.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_11ALTOSDELMONTEII_30.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_10ALTOSDELMONTEI_31.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_9_32.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_8_33.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_07LOSMANGALESII_34.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_06LOSMANGALESI_35.set('fieldLabels', {'ID': 'header label - always visible', });
lyr_3PARQUEDELNORTE_36.set('fieldLabels', {'ID': 'header label - always visible', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Superficie': 'header label - always visible', 'Entrega Inicial': 'header label - always visible', 'Cuota': 'header label - always visible', 'Total': 'header label - always visible', 'Estado': 'header label - always visible', });
lyr_2RESIDENCIALGUILLERMINA_37.set('fieldLabels', {'ID': 'header label - always visible', 'Manzana': 'header label - always visible', 'Lote': 'header label - always visible', 'Superficie': 'header label - always visible', 'Entrega Inicial': 'header label - always visible', 'Cuota': 'header label - always visible', 'Total': 'header label - always visible', 'Estado': 'header label - always visible', });
lyr_MANZANAS_38.set('fieldLabels', {'id': 'header label - always visible', });
lyr_FRACCION_39.set('fieldLabels', {'FRACCION': 'header label - always visible', });
lyr_FRACCION_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});