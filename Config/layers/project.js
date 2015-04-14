/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {

  //Note - as of April 12, 2015, this is returning empty images
  landcover: {
    name: 'MODIS Landcover 2011',
    type: 'wms',
    theme: 'project',
    url: 'http://ags.servirlabs.net/arcgis/rest/services/Global/MODIS_Landcover_Type1_2011/MapServer/WMSServer',
    layers: '0',
    properties: {
      legend: ""
    }
  }

};