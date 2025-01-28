var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_Obszaropracowania_1 = new ol.format.GeoJSON();
var features_Obszaropracowania_1 = format_Obszaropracowania_1.readFeatures(json_Obszaropracowania_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszaropracowania_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszaropracowania_1.addFeatures(features_Obszaropracowania_1);
var lyr_Obszaropracowania_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszaropracowania_1, 
                style: style_Obszaropracowania_1,
                popuplayertitle: 'Obszar opracowania',
                interactive: true,
                title: '<img src="styles/legend/Obszaropracowania_1.png" /> Obszar opracowania'
            });
var format_heksagony1ArchiwalneVmapshp_2 = new ol.format.GeoJSON();
var features_heksagony1ArchiwalneVmapshp_2 = format_heksagony1ArchiwalneVmapshp_2.readFeatures(json_heksagony1ArchiwalneVmapshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heksagony1ArchiwalneVmapshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heksagony1ArchiwalneVmapshp_2.addFeatures(features_heksagony1ArchiwalneVmapshp_2);
var lyr_heksagony1ArchiwalneVmapshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heksagony1ArchiwalneVmapshp_2, 
                style: style_heksagony1ArchiwalneVmapshp_2,
                popuplayertitle: 'heksagony1/Archiwalne-Vmap.shp',
                interactive: true,
    title: 'heksagony1/Archiwalne-Vmap.shp<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_0.png" /> -100 - -75<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_1.png" /> -75 - -50<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_2.png" /> -50 - -25<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_3.png" /> -25 - 0<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_4.png" /> 0 - 25<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_5.png" /> 25 - 50<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_6.png" /> 50 - 75<br />\
    <img src="styles/legend/heksagony1ArchiwalneVmapshp_2_7.png" /> 75 - 100<br />'
        });
var format_heksagony2VmapSentinelshp_3 = new ol.format.GeoJSON();
var features_heksagony2VmapSentinelshp_3 = format_heksagony2VmapSentinelshp_3.readFeatures(json_heksagony2VmapSentinelshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heksagony2VmapSentinelshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heksagony2VmapSentinelshp_3.addFeatures(features_heksagony2VmapSentinelshp_3);
var lyr_heksagony2VmapSentinelshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heksagony2VmapSentinelshp_3, 
                style: style_heksagony2VmapSentinelshp_3,
                popuplayertitle: 'heksagony2/Vmap-Sentinel.shp',
                interactive: true,
    title: 'heksagony2/Vmap-Sentinel.shp<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_0.png" /> -100 - -75<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_1.png" /> -75 - -50<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_2.png" /> -50 - -25<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_3.png" /> -25 - 0<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_4.png" /> 0 - 25<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_5.png" /> 25 - 50<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_6.png" /> 50 - 75<br />\
    <img src="styles/legend/heksagony2VmapSentinelshp_3_7.png" /> 75 - 100<br />'
        });
var format_Obszargdzierzekapyneaprzynajmniejraz_4 = new ol.format.GeoJSON();
var features_Obszargdzierzekapyneaprzynajmniejraz_4 = format_Obszargdzierzekapyneaprzynajmniejraz_4.readFeatures(json_Obszargdzierzekapyneaprzynajmniejraz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszargdzierzekapyneaprzynajmniejraz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszargdzierzekapyneaprzynajmniejraz_4.addFeatures(features_Obszargdzierzekapyneaprzynajmniejraz_4);
var lyr_Obszargdzierzekapyneaprzynajmniejraz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszargdzierzekapyneaprzynajmniejraz_4, 
                style: style_Obszargdzierzekapyneaprzynajmniejraz_4,
                popuplayertitle: 'Obszar-gdzie rzeka płyneła przynajmniej raz',
                interactive: true,
                title: '<img src="styles/legend/Obszargdzierzekapyneaprzynajmniejraz_4.png" /> Obszar-gdzie rzeka płyneła przynajmniej raz'
            });
var format_Obszargdzierzekapyneabezprzerwy_5 = new ol.format.GeoJSON();
var features_Obszargdzierzekapyneabezprzerwy_5 = format_Obszargdzierzekapyneabezprzerwy_5.readFeatures(json_Obszargdzierzekapyneabezprzerwy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obszargdzierzekapyneabezprzerwy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obszargdzierzekapyneabezprzerwy_5.addFeatures(features_Obszargdzierzekapyneabezprzerwy_5);
var lyr_Obszargdzierzekapyneabezprzerwy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obszargdzierzekapyneabezprzerwy_5, 
                style: style_Obszargdzierzekapyneabezprzerwy_5,
                popuplayertitle: 'Obszar gdzie rzeka płyneła bezprzerwy',
                interactive: true,
                title: '<img src="styles/legend/Obszargdzierzekapyneabezprzerwy_5.png" /> Obszar gdzie rzeka płyneła bezprzerwy'
            });
var format_BugdaneVmap2002shp_6 = new ol.format.GeoJSON();
var features_BugdaneVmap2002shp_6 = format_BugdaneVmap2002shp_6.readFeatures(json_BugdaneVmap2002shp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BugdaneVmap2002shp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BugdaneVmap2002shp_6.addFeatures(features_BugdaneVmap2002shp_6);
var lyr_BugdaneVmap2002shp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BugdaneVmap2002shp_6, 
                style: style_BugdaneVmap2002shp_6,
                popuplayertitle: 'Bug dane Vmap 2002.shp',
                interactive: true,
                title: '<img src="styles/legend/BugdaneVmap2002shp_6.png" /> Bug dane Vmap 2002.shp'
            });
var format_Bugdanearchiwalne19351940shp_7 = new ol.format.GeoJSON();
var features_Bugdanearchiwalne19351940shp_7 = format_Bugdanearchiwalne19351940shp_7.readFeatures(json_Bugdanearchiwalne19351940shp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bugdanearchiwalne19351940shp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bugdanearchiwalne19351940shp_7.addFeatures(features_Bugdanearchiwalne19351940shp_7);
var lyr_Bugdanearchiwalne19351940shp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bugdanearchiwalne19351940shp_7, 
                style: style_Bugdanearchiwalne19351940shp_7,
                popuplayertitle: 'Bug dane archiwalne 1935-1940.shp',
                interactive: true,
                title: '<img src="styles/legend/Bugdanearchiwalne19351940shp_7.png" /> Bug dane archiwalne 1935-1940.shp'
            });
var format_BugdaneSentinel2017shp_8 = new ol.format.GeoJSON();
var features_BugdaneSentinel2017shp_8 = format_BugdaneSentinel2017shp_8.readFeatures(json_BugdaneSentinel2017shp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BugdaneSentinel2017shp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BugdaneSentinel2017shp_8.addFeatures(features_BugdaneSentinel2017shp_8);
var lyr_BugdaneSentinel2017shp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BugdaneSentinel2017shp_8, 
                style: style_BugdaneSentinel2017shp_8,
                popuplayertitle: 'Bug dane Sentinel 2017.shp',
                interactive: true,
                title: '<img src="styles/legend/BugdaneSentinel2017shp_8.png" /> Bug dane Sentinel 2017.shp'
            });

lyr_Raster_0.setVisible(true);lyr_Obszaropracowania_1.setVisible(true);lyr_heksagony1ArchiwalneVmapshp_2.setVisible(true);lyr_heksagony2VmapSentinelshp_3.setVisible(true);lyr_Obszargdzierzekapyneaprzynajmniejraz_4.setVisible(true);lyr_Obszargdzierzekapyneabezprzerwy_5.setVisible(true);lyr_BugdaneVmap2002shp_6.setVisible(true);lyr_Bugdanearchiwalne19351940shp_7.setVisible(true);lyr_BugdaneSentinel2017shp_8.setVisible(true);
var layersList = [lyr_Raster_0,lyr_Obszaropracowania_1,lyr_heksagony1ArchiwalneVmapshp_2,lyr_heksagony2VmapSentinelshp_3,lyr_Obszargdzierzekapyneaprzynajmniejraz_4,lyr_Obszargdzierzekapyneabezprzerwy_5,lyr_BugdaneVmap2002shp_6,lyr_Bugdanearchiwalne19351940shp_7,lyr_BugdaneSentinel2017shp_8];
lyr_Obszaropracowania_1.set('fieldAliases', {'Id': 'Id', });
lyr_heksagony1ArchiwalneVmapshp_2.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'paraA_B': 'paraA_B', 'paraB_C': 'paraB_C', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_heksagony2VmapSentinelshp_3.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'paraA_B': 'paraA_B', 'paraB_C': 'paraB_C', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Obszargdzierzekapyneaprzynajmniejraz_4.set('fieldAliases', {'FID_Bugdan': 'FID_Bugdan', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_Bugd_1': 'FID_Bugd_1', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_staror': 'FID_staror', 'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'RODZAJ': 'RODZAJ', 'IDMPHP': 'IDMPHP', 'NAZWA': 'NAZWA', 'IDPRNG': 'IDPRNG', 'BDOT500': 'BDOT500', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Obszargdzierzekapyneabezprzerwy_5.set('fieldAliases', {'FID_Bugdan': 'FID_Bugdan', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'FID_staror': 'FID_staror', 'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'RODZAJ': 'RODZAJ', 'IDMPHP': 'IDMPHP', 'NAZWA': 'NAZWA', 'IDPRNG': 'IDPRNG', 'BDOT500': 'BDOT500', 'FID_Bugd_1': 'FID_Bugd_1', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BugdaneVmap2002shp_6.set('fieldAliases', {'TERYT': 'TERYT', 'LOKALNYID': 'LOKALNYID', 'PRZES_NAZW': 'PRZES_NAZW', 'WERSJA': 'WERSJA', 'POCZ_WERSJ': 'POCZ_WERSJ', 'OZNA_ZMIAN': 'OZNA_ZMIAN', 'ZRO_DANYCH': 'ZRO_DANYCH', 'KAT_ISTNIE': 'KAT_ISTNIE', 'UWAGI': 'UWAGI', 'INFO_DODAT': 'INFO_DODAT', 'KOD10K': 'KOD10K', 'SKROT_KART': 'SKROT_KART', 'RODZAJ': 'RODZAJ', 'IDMPHP': 'IDMPHP', 'NAZWA': 'NAZWA', 'IDPRNG': 'IDPRNG', 'BDOT500': 'BDOT500', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'shape_inde': 'shape_inde', });
lyr_Bugdanearchiwalne19351940shp_7.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'area': 'area', 'obwód': 'obwód', 'Shap': 'Shap', });
lyr_BugdaneSentinel2017shp_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'shape_inde': 'shape_inde', });
lyr_Obszaropracowania_1.set('fieldImages', {'Id': 'Range', });
lyr_heksagony1ArchiwalneVmapshp_2.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'paraA_B': 'TextEdit', 'paraB_C': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_heksagony2VmapSentinelshp_3.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'paraA_B': 'TextEdit', 'paraB_C': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Obszargdzierzekapyneaprzynajmniejraz_4.set('fieldImages', {'FID_Bugdan': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_Bugd_1': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_staror': 'TextEdit', 'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'RODZAJ': 'TextEdit', 'IDMPHP': 'TextEdit', 'NAZWA': 'TextEdit', 'IDPRNG': 'TextEdit', 'BDOT500': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Obszargdzierzekapyneabezprzerwy_5.set('fieldImages', {'FID_Bugdan': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FID_staror': 'TextEdit', 'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'RODZAJ': 'TextEdit', 'IDMPHP': 'TextEdit', 'NAZWA': 'TextEdit', 'IDPRNG': 'TextEdit', 'BDOT500': 'TextEdit', 'FID_Bugd_1': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BugdaneVmap2002shp_6.set('fieldImages', {'TERYT': 'TextEdit', 'LOKALNYID': 'TextEdit', 'PRZES_NAZW': 'TextEdit', 'WERSJA': 'TextEdit', 'POCZ_WERSJ': 'TextEdit', 'OZNA_ZMIAN': 'TextEdit', 'ZRO_DANYCH': 'TextEdit', 'KAT_ISTNIE': 'TextEdit', 'UWAGI': 'TextEdit', 'INFO_DODAT': 'TextEdit', 'KOD10K': 'TextEdit', 'SKROT_KART': 'TextEdit', 'RODZAJ': 'TextEdit', 'IDMPHP': 'TextEdit', 'NAZWA': 'TextEdit', 'IDPRNG': 'TextEdit', 'BDOT500': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'shape_inde': 'TextEdit', });
lyr_Bugdanearchiwalne19351940shp_7.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', 'obwód': 'TextEdit', 'Shap': 'TextEdit', });
lyr_BugdaneSentinel2017shp_8.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'shape_inde': 'TextEdit', });
lyr_Obszaropracowania_1.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_heksagony1ArchiwalneVmapshp_2.set('fieldLabels', {'GRID_ID': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', 'paraA_B': 'inline label - always visible', 'paraB_C': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_heksagony2VmapSentinelshp_3.set('fieldLabels', {'GRID_ID': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', 'paraA_B': 'inline label - always visible', 'paraB_C': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Obszargdzierzekapyneaprzynajmniejraz_4.set('fieldLabels', {'FID_Bugdan': 'inline label - always visible', 'Id': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'FID_Bugd_1': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'FID_staror': 'inline label - always visible', 'TERYT': 'inline label - always visible', 'LOKALNYID': 'inline label - always visible', 'PRZES_NAZW': 'inline label - always visible', 'WERSJA': 'inline label - always visible', 'POCZ_WERSJ': 'inline label - always visible', 'OZNA_ZMIAN': 'inline label - always visible', 'ZRO_DANYCH': 'inline label - always visible', 'KAT_ISTNIE': 'inline label - always visible', 'UWAGI': 'inline label - always visible', 'INFO_DODAT': 'inline label - always visible', 'KOD10K': 'inline label - always visible', 'SKROT_KART': 'inline label - always visible', 'RODZAJ': 'inline label - always visible', 'IDMPHP': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'IDPRNG': 'inline label - always visible', 'BDOT500': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Obszargdzierzekapyneabezprzerwy_5.set('fieldLabels', {'FID_Bugdan': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'FID_staror': 'no label', 'TERYT': 'no label', 'LOKALNYID': 'no label', 'PRZES_NAZW': 'no label', 'WERSJA': 'no label', 'POCZ_WERSJ': 'inline label - always visible', 'OZNA_ZMIAN': 'inline label - always visible', 'ZRO_DANYCH': 'inline label - always visible', 'KAT_ISTNIE': 'inline label - always visible', 'UWAGI': 'inline label - always visible', 'INFO_DODAT': 'inline label - always visible', 'KOD10K': 'inline label - always visible', 'SKROT_KART': 'inline label - always visible', 'RODZAJ': 'inline label - always visible', 'IDMPHP': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'IDPRNG': 'inline label - always visible', 'BDOT500': 'inline label - always visible', 'FID_Bugd_1': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'InPoly_FID': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_BugdaneVmap2002shp_6.set('fieldLabels', {'TERYT': 'inline label - always visible', 'LOKALNYID': 'header label - visible with data', 'PRZES_NAZW': 'inline label - always visible', 'WERSJA': 'inline label - always visible', 'POCZ_WERSJ': 'inline label - always visible', 'OZNA_ZMIAN': 'inline label - always visible', 'ZRO_DANYCH': 'inline label - always visible', 'KAT_ISTNIE': 'inline label - always visible', 'UWAGI': 'inline label - always visible', 'INFO_DODAT': 'inline label - always visible', 'KOD10K': 'inline label - always visible', 'SKROT_KART': 'inline label - always visible', 'RODZAJ': 'inline label - always visible', 'IDMPHP': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'IDPRNG': 'inline label - always visible', 'BDOT500': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'shape_inde': 'no label', });
lyr_Bugdanearchiwalne19351940shp_7.set('fieldLabels', {'Id': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'area': 'inline label - always visible', 'obwód': 'inline label - always visible', 'Shap': 'inline label - always visible', });
lyr_BugdaneSentinel2017shp_8.set('fieldLabels', {'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'InPoly_FID': 'inline label - visible with data', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'shape_inde': 'inline label - always visible', });
lyr_BugdaneSentinel2017shp_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});