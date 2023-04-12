ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32631").setExtent([360595.573400, 775638.619689, 402501.341780, 809821.753611]);
var wms_layers = [];

var format_Zonetrseloigne_0 = new ol.format.GeoJSON();
var features_Zonetrseloigne_0 = format_Zonetrseloigne_0.readFeatures(json_Zonetrseloigne_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zonetrseloigne_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonetrseloigne_0.addFeatures(features_Zonetrseloigne_0);
var lyr_Zonetrseloigne_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonetrseloigne_0, 
                style: style_Zonetrseloigne_0,
                interactive: false,
                title: '<img src="styles/legend/Zonetrseloigne_0.png" /> Zone très eloignée'
            });
var format_Zoneeloigne_1 = new ol.format.GeoJSON();
var features_Zoneeloigne_1 = format_Zoneeloigne_1.readFeatures(json_Zoneeloigne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zoneeloigne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneeloigne_1.addFeatures(features_Zoneeloigne_1);
var lyr_Zoneeloigne_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneeloigne_1, 
                style: style_Zoneeloigne_1,
                interactive: false,
                title: '<img src="styles/legend/Zoneeloigne_1.png" /> Zone eloignée'
            });
var format_Zonemoyene_2 = new ol.format.GeoJSON();
var features_Zonemoyene_2 = format_Zonemoyene_2.readFeatures(json_Zonemoyene_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zonemoyene_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonemoyene_2.addFeatures(features_Zonemoyene_2);
var lyr_Zonemoyene_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonemoyene_2, 
                style: style_Zonemoyene_2,
                interactive: false,
                title: '<img src="styles/legend/Zonemoyene_2.png" /> Zone moyene'
            });
var format_Zoneproche_3 = new ol.format.GeoJSON();
var features_Zoneproche_3 = format_Zoneproche_3.readFeatures(json_Zoneproche_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Zoneproche_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneproche_3.addFeatures(features_Zoneproche_3);
var lyr_Zoneproche_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneproche_3, 
                style: style_Zoneproche_3,
                interactive: false,
                title: '<img src="styles/legend/Zoneproche_3.png" /> Zone proche'
            });
var format_localite_4 = new ol.format.GeoJSON();
var features_localite_4 = format_localite_4.readFeatures(json_localite_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_localite_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localite_4.addFeatures(features_localite_4);
var lyr_localite_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localite_4, 
                style: style_localite_4,
                interactive: true,
                title: 'localite'
            });
var format_habitat_dense_5 = new ol.format.GeoJSON();
var features_habitat_dense_5 = format_habitat_dense_5.readFeatures(json_habitat_dense_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_habitat_dense_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_habitat_dense_5.addFeatures(features_habitat_dense_5);
var lyr_habitat_dense_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_habitat_dense_5, 
                style: style_habitat_dense_5,
                interactive: false,
                title: '<img src="styles/legend/habitat_dense_5.png" /> habitat_dense'
            });
var format_limite_administrative_6 = new ol.format.GeoJSON();
var features_limite_administrative_6 = format_limite_administrative_6.readFeatures(json_limite_administrative_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_limite_administrative_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_administrative_6.addFeatures(features_limite_administrative_6);
var lyr_limite_administrative_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limite_administrative_6, 
                style: style_limite_administrative_6,
                interactive: true,
                title: '<img src="styles/legend/limite_administrative_6.png" /> limite_administrative'
            });
var format_route_z_7 = new ol.format.GeoJSON();
var features_route_z_7 = format_route_z_7.readFeatures(json_route_z_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_route_z_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_z_7.addFeatures(features_route_z_7);
var lyr_route_z_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_route_z_7, 
                style: style_route_z_7,
                interactive: true,
    title: 'route_z<br />\
    <img src="styles/legend/route_z_7_0.png" /> Non renseigné<br />\
    <img src="styles/legend/route_z_7_1.png" /> RN21<br />\
    <img src="styles/legend/route_z_7_2.png" /> RNIE4<br />\
    <img src="styles/legend/route_z_7_3.png" /> <br />'
        });
var format_piste_z_8 = new ol.format.GeoJSON();
var features_piste_z_8 = format_piste_z_8.readFeatures(json_piste_z_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_piste_z_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piste_z_8.addFeatures(features_piste_z_8);
var lyr_piste_z_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_piste_z_8, 
                style: style_piste_z_8,
                interactive: true,
                title: '<img src="styles/legend/piste_z_8.png" /> piste_z'
            });
var format_infrastructure_de_sante_9 = new ol.format.GeoJSON();
var features_infrastructure_de_sante_9 = format_infrastructure_de_sante_9.readFeatures(json_infrastructure_de_sante_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_infrastructure_de_sante_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastructure_de_sante_9.addFeatures(features_infrastructure_de_sante_9);
var lyr_infrastructure_de_sante_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_infrastructure_de_sante_9, 
                style: style_infrastructure_de_sante_9,
                interactive: true,
    title: 'infrastructure_de_sante<br />\
    <img src="styles/legend/infrastructure_de_sante_9_0.png" /> Autres<br />\
    <img src="styles/legend/infrastructure_de_sante_9_1.png" /> C_S<br />\
    <img src="styles/legend/infrastructure_de_sante_9_2.png" /> (CH_DEP)<br />\
    <img src="styles/legend/infrastructure_de_sante_9_3.png" /> Clinique<br />\
    <img src="styles/legend/infrastructure_de_sante_9_4.png" /> Dispensaire<br />\
    <img src="styles/legend/infrastructure_de_sante_9_5.png" /> (HOPITAL_ZONE)<br />\
    <img src="styles/legend/infrastructure_de_sante_9_6.png" /> Maternité<br />\
    <img src="styles/legend/infrastructure_de_sante_9_7.png" /> Pharmacie<br />\
    <img src="styles/legend/infrastructure_de_sante_9_8.png" /> <br />'
        });

lyr_Zonetrseloigne_0.setVisible(true);lyr_Zoneeloigne_1.setVisible(true);lyr_Zonemoyene_2.setVisible(true);lyr_Zoneproche_3.setVisible(true);lyr_localite_4.setVisible(true);lyr_habitat_dense_5.setVisible(true);lyr_limite_administrative_6.setVisible(true);lyr_route_z_7.setVisible(true);lyr_piste_z_8.setVisible(true);lyr_infrastructure_de_sante_9.setVisible(true);
var layersList = [lyr_Zonetrseloigne_0,lyr_Zoneeloigne_1,lyr_Zonemoyene_2,lyr_Zoneproche_3,lyr_localite_4,lyr_habitat_dense_5,lyr_limite_administrative_6,lyr_route_z_7,lyr_piste_z_8,lyr_infrastructure_de_sante_9];
lyr_Zonetrseloigne_0.set('fieldAliases', {'distance': 'distance', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'access': 'access', 'sup': 'sup', });
lyr_Zoneeloigne_1.set('fieldAliases', {'distance': 'distance', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'access': 'access', 'sup': 'sup', });
lyr_Zonemoyene_2.set('fieldAliases', {'distance': 'distance', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'access': 'access', 'sup': 'sup', });
lyr_Zoneproche_3.set('fieldAliases', {'distance': 'distance', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'access': 'access', 'sup': 'sup', });
lyr_localite_4.set('fieldAliases', {'nom_loc': 'nom_loc', 'type': 'type', 'statut_adm': 'statut_adm', 'commune': 'commune', 'arrondisst': 'arrondisst', 'village_ad': 'village_ad', 'nom_enq': 'nom_enq', });
lyr_habitat_dense_5.set('fieldAliases', {'type': 'type', 'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_limite_administrative_6.set('fieldAliases', {'type': 'type', 'source': 'source', 'shape_leng': 'shape_leng', });
lyr_route_z_7.set('fieldAliases', {'num_route': 'num_route', 'type': 'type', 'cl_admin': 'cl_admin', 'shape_leng': 'shape_leng', });
lyr_piste_z_8.set('fieldAliases', {'type': 'type', 'source': 'source', 'shape_leng': 'shape_leng', 'urbain': 'urbain', });
lyr_infrastructure_de_sante_9.set('fieldAliases', {'type': 'type', 'nature': 'nature', 'nom_san': 'nom_san', 'image': 'image', });
lyr_Zonetrseloigne_0.set('fieldImages', {'distance': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'access': 'TextEdit', 'sup': 'TextEdit', });
lyr_Zoneeloigne_1.set('fieldImages', {'distance': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'access': 'TextEdit', 'sup': 'TextEdit', });
lyr_Zonemoyene_2.set('fieldImages', {'distance': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'access': 'TextEdit', 'sup': 'TextEdit', });
lyr_Zoneproche_3.set('fieldImages', {'distance': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'access': 'TextEdit', 'sup': 'TextEdit', });
lyr_localite_4.set('fieldImages', {'nom_loc': 'TextEdit', 'type': 'TextEdit', 'statut_adm': 'TextEdit', 'commune': 'TextEdit', 'arrondisst': 'TextEdit', 'village_ad': 'TextEdit', 'nom_enq': 'TextEdit', });
lyr_habitat_dense_5.set('fieldImages', {'type': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_limite_administrative_6.set('fieldImages', {'type': '', 'source': '', 'shape_leng': '', });
lyr_route_z_7.set('fieldImages', {'num_route': 'TextEdit', 'type': 'TextEdit', 'cl_admin': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_piste_z_8.set('fieldImages', {'type': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'urbain': 'TextEdit', });
lyr_infrastructure_de_sante_9.set('fieldImages', {'type': 'ValueMap', 'nature': 'ValueMap', 'nom_san': 'TextEdit', 'image': 'ExternalResource', });
lyr_Zonetrseloigne_0.set('fieldLabels', {'distance': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'access': 'inline label', 'sup': 'inline label', });
lyr_Zoneeloigne_1.set('fieldLabels', {'distance': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'access': 'inline label', 'sup': 'inline label', });
lyr_Zonemoyene_2.set('fieldLabels', {'distance': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'access': 'inline label', 'sup': 'inline label', });
lyr_Zoneproche_3.set('fieldLabels', {'distance': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'access': 'inline label', 'sup': 'header label', });
lyr_localite_4.set('fieldLabels', {'nom_loc': 'header label', 'type': 'header label', 'statut_adm': 'header label', 'commune': 'header label', 'arrondisst': 'header label', 'village_ad': 'header label', 'nom_enq': 'header label', });
lyr_habitat_dense_5.set('fieldLabels', {'type': 'no label', 'source': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_limite_administrative_6.set('fieldLabels', {'type': 'inline label', 'source': 'inline label', 'shape_leng': 'inline label', });
lyr_route_z_7.set('fieldLabels', {'num_route': 'inline label', 'type': 'inline label', 'cl_admin': 'inline label', 'shape_leng': 'inline label', });
lyr_piste_z_8.set('fieldLabels', {'type': 'header label', 'source': 'header label', 'shape_leng': 'header label', 'urbain': 'header label', });
lyr_infrastructure_de_sante_9.set('fieldLabels', {'type': 'header label', 'nature': 'header label', 'nom_san': 'header label', 'image': 'header label', });
lyr_infrastructure_de_sante_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});