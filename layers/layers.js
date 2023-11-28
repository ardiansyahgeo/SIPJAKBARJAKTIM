var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKotaAdministratif_2 = new ol.format.GeoJSON();
var features_BatasKotaAdministratif_2 = format_BatasKotaAdministratif_2.readFeatures(json_BatasKotaAdministratif_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKotaAdministratif_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKotaAdministratif_2.addFeatures(features_BatasKotaAdministratif_2);
var lyr_BatasKotaAdministratif_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKotaAdministratif_2, 
                style: style_BatasKotaAdministratif_2,
                interactive: true,
                title: '<img src="styles/legend/BatasKotaAdministratif_2.png" /> Batas Kota Administratif'
            });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_BatasKelurahan_4 = new ol.format.GeoJSON();
var features_BatasKelurahan_4 = format_BatasKelurahan_4.readFeatures(json_BatasKelurahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_4.addFeatures(features_BatasKelurahan_4);
var lyr_BatasKelurahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKelurahan_4,
maxResolution:1.4002233076130983,
 
                style: style_BatasKelurahan_4,
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_4.png" /> Batas Kelurahan'
            });
var format_TITIKSIPJAKBARJAKTIM_5 = new ol.format.GeoJSON();
var features_TITIKSIPJAKBARJAKTIM_5 = format_TITIKSIPJAKBARJAKTIM_5.readFeatures(json_TITIKSIPJAKBARJAKTIM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKSIPJAKBARJAKTIM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKSIPJAKBARJAKTIM_5.addFeatures(features_TITIKSIPJAKBARJAKTIM_5);
var lyr_TITIKSIPJAKBARJAKTIM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIKSIPJAKBARJAKTIM_5, 
                style: style_TITIKSIPJAKBARJAKTIM_5,
                interactive: true,
                title: '<img src="styles/legend/TITIKSIPJAKBARJAKTIM_5.png" /> TITIK SIP JAKBAR JAKTIM'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BatasKotaAdministratif_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_BatasKelurahan_4.setVisible(true);lyr_TITIKSIPJAKBARJAKTIM_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_BatasKotaAdministratif_2,lyr_BatasKecamatan_3,lyr_BatasKelurahan_4,lyr_TITIKSIPJAKBARJAKTIM_5];
lyr_BatasKotaAdministratif_2.set('fieldAliases', {'WADMKK': 'WADMKK', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_BatasKecamatan_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_BatasKelurahan_4.set('fieldAliases', {'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'KDEPUM': 'KDEPUM', 'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_TITIKSIPJAKBARJAKTIM_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOURUT': 'No Urut', 'ALAMAT_RUM': 'Alamat Rumah', 'NO__RUMAH': 'No rumah', 'NO__FORM': 'No Form', 'NAMA_PENGH': 'Nama Penghuni', 'PENGELUARA': 'Tanggal Dikeluarkan', 'BERAKHIR': 'Tanggal Berakhir', 'PEMILIK': 'Pemilik', 'Nama_Pewaw': 'Surveyor', 'Kota': 'Kota', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'HAT_DARI_J': 'Hak Atas Tanah (Jakarta Satu)', 'Nama_Pemil': 'Nama Pemilik', 'Tempat_Lah': 'Tempat Lahir', 'Tanggal_la': 'Tanggal Lahir', 'Jenis_Kela': 'Jenis Kelamin', 'Pekerjaan': 'Pekerjaan', 'Lama_Mengh': 'Lama Menghuni', 'Kegiatan': 'Kegiatan', 'Kegiatan_l': 'Lainnya Kegiatan', 'Apakah_bap': 'Apakah mengertahui rumah ini ber SIP', 'Apakah_b_1': 'Apakah Rutin Membayar Sewa?', 'Status_tan': 'Status Tanah', 'luas_tanah': 'Luas Tanah (m2)', 'luas_bangu': 'Luas Bangunan (m2)', 'jumlah_lan': 'Jumlah Lantai', 'y': 'y', 'x': 'x', 'foto_obyek': 'Foto Obyek', 'foto_lokas': 'Foto Lokasi', });
lyr_BatasKotaAdministratif_2.set('fieldImages', {'WADMKK': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_BatasKelurahan_4.set('fieldImages', {'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_TITIKSIPJAKBARJAKTIM_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOURUT': 'TextEdit', 'ALAMAT_RUM': 'TextEdit', 'NO__RUMAH': 'TextEdit', 'NO__FORM': 'TextEdit', 'NAMA_PENGH': 'TextEdit', 'PENGELUARA': 'DateTime', 'BERAKHIR': 'DateTime', 'PEMILIK': 'TextEdit', 'Nama_Pewaw': 'TextEdit', 'Kota': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'HAT_DARI_J': 'TextEdit', 'Nama_Pemil': 'TextEdit', 'Tempat_Lah': 'TextEdit', 'Tanggal_la': 'TextEdit', 'Jenis_Kela': 'TextEdit', 'Pekerjaan': 'TextEdit', 'Lama_Mengh': 'TextEdit', 'Kegiatan': 'TextEdit', 'Kegiatan_l': 'TextEdit', 'Apakah_bap': 'TextEdit', 'Apakah_b_1': 'TextEdit', 'Status_tan': 'TextEdit', 'luas_tanah': 'TextEdit', 'luas_bangu': 'TextEdit', 'jumlah_lan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'foto_obyek': 'ExternalResource', 'foto_lokas': 'ExternalResource', });
lyr_BatasKotaAdministratif_2.set('fieldLabels', {'WADMKK': 'inline label', 'KDPKAB': 'inline label', 'LUASWH': 'inline label', 'SRS_ID': 'inline label', });
lyr_BatasKecamatan_3.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'KDCPUM': 'inline label', 'KDPKAB': 'inline label', 'LUASWH': 'inline label', 'SRS_ID': 'inline label', });
lyr_BatasKelurahan_4.set('fieldLabels', {'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'KDEPUM': 'inline label', 'KDCPUM': 'inline label', 'KDPKAB': 'inline label', 'LUASWH': 'inline label', 'SRS_ID': 'inline label', });
lyr_TITIKSIPJAKBARJAKTIM_5.set('fieldLabels', {'OBJECTID': 'inline label', 'NOURUT': 'inline label', 'ALAMAT_RUM': 'inline label', 'NO__RUMAH': 'inline label', 'NO__FORM': 'inline label', 'NAMA_PENGH': 'inline label', 'PENGELUARA': 'inline label', 'BERAKHIR': 'inline label', 'PEMILIK': 'inline label', 'Nama_Pewaw': 'inline label', 'Kota': 'inline label', 'Kecamatan': 'inline label', 'Kelurahan': 'inline label', 'HAT_DARI_J': 'inline label', 'Nama_Pemil': 'inline label', 'Tempat_Lah': 'inline label', 'Tanggal_la': 'inline label', 'Jenis_Kela': 'inline label', 'Pekerjaan': 'inline label', 'Lama_Mengh': 'inline label', 'Kegiatan': 'inline label', 'Kegiatan_l': 'inline label', 'Apakah_bap': 'inline label', 'Apakah_b_1': 'inline label', 'Status_tan': 'inline label', 'luas_tanah': 'inline label', 'luas_bangu': 'inline label', 'jumlah_lan': 'inline label', 'y': 'inline label', 'x': 'inline label', 'foto_obyek': 'inline label', 'foto_lokas': 'inline label', });
lyr_TITIKSIPJAKBARJAKTIM_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});