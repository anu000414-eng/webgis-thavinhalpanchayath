var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GEOLOGY_1 = new ol.format.GeoJSON();
var features_GEOLOGY_1 = format_GEOLOGY_1.readFeatures(json_GEOLOGY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_1.addFeatures(features_GEOLOGY_1);
var lyr_GEOLOGY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_1, 
                style: style_GEOLOGY_1,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_1_0.png" /> Alkaline rocks<br />\
    <img src="styles/legend/GEOLOGY_1_1.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/GEOLOGY_1_2.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/GEOLOGY_1_3.png" /> <br />' });
var format_SOIL_2 = new ol.format.GeoJSON();
var features_SOIL_2 = format_SOIL_2.readFeatures(json_SOIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_2.addFeatures(features_SOIL_2);
var lyr_SOIL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_2, 
                style: style_SOIL_2,
                popuplayertitle: 'SOIL',
                interactive: false,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_2_0.png" /> Alluvial Soil<br />\
    <img src="styles/legend/SOIL_2_1.png" /> Forest Soil<br />\
    <img src="styles/legend/SOIL_2_2.png" /> Hill Soil<br />' });
var format_GEOMORPHOLOGY_3 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_3 = format_GEOMORPHOLOGY_3.readFeatures(json_GEOMORPHOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_3.addFeatures(features_GEOMORPHOLOGY_3);
var lyr_GEOMORPHOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_3, 
                style: style_GEOMORPHOLOGY_3,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_0.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_1.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_2.png" /> Piedmont Zone<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_3.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_4.png" /> Residual Mount(Upper Plateau)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_5.png" /> Upper Plateau (Lateritic)- Dissected<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_6.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_7.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_8.png" /> <br />' });
var format_WARDBOUNDARY_4 = new ol.format.GeoJSON();
var features_WARDBOUNDARY_4 = format_WARDBOUNDARY_4.readFeatures(json_WARDBOUNDARY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDBOUNDARY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDBOUNDARY_4.addFeatures(features_WARDBOUNDARY_4);
var lyr_WARDBOUNDARY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDBOUNDARY_4, 
                style: style_WARDBOUNDARY_4,
                popuplayertitle: 'WARD BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/WARDBOUNDARY_4.png" /> WARD BOUNDARY'
            });
var format_DRAINAGE_5 = new ol.format.GeoJSON();
var features_DRAINAGE_5 = format_DRAINAGE_5.readFeatures(json_DRAINAGE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_5.addFeatures(features_DRAINAGE_5);
var lyr_DRAINAGE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_5, 
                style: style_DRAINAGE_5,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
    title: 'DRAINAGE<br />\
    <img src="styles/legend/DRAINAGE_5_0.png" /> 1<br />\
    <img src="styles/legend/DRAINAGE_5_1.png" /> 2<br />\
    <img src="styles/legend/DRAINAGE_5_2.png" /> 3<br />\
    <img src="styles/legend/DRAINAGE_5_3.png" /> 4<br />\
    <img src="styles/legend/DRAINAGE_5_4.png" /> 5<br />\
    <img src="styles/legend/DRAINAGE_5_5.png" /> 0<br />' });
var format_ROAD_6 = new ol.format.GeoJSON();
var features_ROAD_6 = format_ROAD_6.readFeatures(json_ROAD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_6.addFeatures(features_ROAD_6);
var lyr_ROAD_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_6, 
                style: style_ROAD_6,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_6.png" /> ROAD'
            });
var format_WARDNAME_7 = new ol.format.GeoJSON();
var features_WARDNAME_7 = format_WARDNAME_7.readFeatures(json_WARDNAME_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDNAME_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDNAME_7.addFeatures(features_WARDNAME_7);
var lyr_WARDNAME_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDNAME_7, 
                style: style_WARDNAME_7,
                popuplayertitle: 'WARD NAME',
                interactive: true,
    title: 'WARD NAME<br />\
    <img src="styles/legend/WARDNAME_7_0.png" /> Aalattil<br />\
    <img src="styles/legend/WARDNAME_7_1.png" /> Ambalakkolli<br />\
    <img src="styles/legend/WARDNAME_7_2.png" /> Chulli<br />\
    <img src="styles/legend/WARDNAME_7_3.png" /> Edathana<br />\
    <img src="styles/legend/WARDNAME_7_4.png" /> Idikkara<br />\
    <img src="styles/legend/WARDNAME_7_5.png" /> Irumanathoor<br />\
    <img src="styles/legend/WARDNAME_7_6.png" /> Kaithakolli<br />\
    <img src="styles/legend/WARDNAME_7_7.png" /> Karachal<br />\
    <img src="styles/legend/WARDNAME_7_8.png" /> Kattimoola<br />\
    <img src="styles/legend/WARDNAME_7_9.png" /> Kolangodu<br />\
    <img src="styles/legend/WARDNAME_7_10.png" /> Muthirery<br />\
    <img src="styles/legend/WARDNAME_7_11.png" /> Periya<br />\
    <img src="styles/legend/WARDNAME_7_12.png" /> Porur<br />\
    <img src="styles/legend/WARDNAME_7_13.png" /> Puthiyidam<br />\
    <img src="styles/legend/WARDNAME_7_14.png" /> Puthoor<br />\
    <img src="styles/legend/WARDNAME_7_15.png" /> Thalappuzha<br />\
    <img src="styles/legend/WARDNAME_7_16.png" /> Thavirhal<br />\
    <img src="styles/legend/WARDNAME_7_17.png" /> Thazheperiya<br />\
    <img src="styles/legend/WARDNAME_7_18.png" /> Valad<br />\
    <img src="styles/legend/WARDNAME_7_19.png" /> Vallithoud<br />\
    <img src="styles/legend/WARDNAME_7_20.png" /> Varayal<br />\
    <img src="styles/legend/WARDNAME_7_21.png" /> Vattoli<br />\
    <img src="styles/legend/WARDNAME_7_22.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GEOLOGY_1.setVisible(true);lyr_SOIL_2.setVisible(true);lyr_GEOMORPHOLOGY_3.setVisible(true);lyr_WARDBOUNDARY_4.setVisible(true);lyr_DRAINAGE_5.setVisible(true);lyr_ROAD_6.setVisible(true);lyr_WARDNAME_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GEOLOGY_1,lyr_SOIL_2,lyr_GEOMORPHOLOGY_3,lyr_WARDBOUNDARY_4,lyr_DRAINAGE_5,lyr_ROAD_6,lyr_WARDNAME_7];
lyr_GEOLOGY_1.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_SOIL_2.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_GEOMORPHOLOGY_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_WARDBOUNDARY_4.set('fieldAliases', {'id': 'id', });
lyr_DRAINAGE_5.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_ROAD_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_WARDNAME_7.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'type': 'type', 'ward': 'ward', 'id': 'id', });
lyr_GEOLOGY_1.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_SOIL_2.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_GEOMORPHOLOGY_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_WARDBOUNDARY_4.set('fieldImages', {'id': 'TextEdit', });
lyr_DRAINAGE_5.set('fieldImages', {'ORDER1': 'Range', });
lyr_ROAD_6.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_WARDNAME_7.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'local_auth': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'ward': 'TextEdit', 'id': 'TextEdit', });
lyr_GEOLOGY_1.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_SOIL_2.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_GEOMORPHOLOGY_3.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_WARDBOUNDARY_4.set('fieldLabels', {'id': 'no label', });
lyr_DRAINAGE_5.set('fieldLabels', {'ORDER1': 'no label', });
lyr_ROAD_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_WARDNAME_7.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'ward': 'no label', 'id': 'no label', });
lyr_WARDNAME_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});