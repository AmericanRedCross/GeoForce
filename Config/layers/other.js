module.exports = {

  snow: {
    name: 'Snow',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png'
  },

  pressurecontour: {
    name: 'Pressure Contour',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png',
    opacity: 0.9
  },

  pressure: {
    name: 'Pressure',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png'
  },

  temperature: {
    name: 'Temperature',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png'
  },

  wind: {
    name: 'Wind',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png'
  },

  clouds: {
    name: 'Cloud Cover',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png',
    opacity: 0.5 // optional. opacity is 0.5 if not specified
  },

  precipitationclassic: {
    name: 'Precipitation (Classic)',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png',
    opacity: 0.4
  },

  rainclassic: {
    name: 'Rain (Classic)',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/rain_cls/{z}/{x}/{y}.png'
  },

  laccommunities: {
    name: 'LAC Communities',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/anonymous/d58e51d612add6483257/raw/LAC_Communities_styled.geojson'
  },

  rflinstructors: {
    name: 'RFL Instructors',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/danbjoseph/711f92bfae1b11eee1e9/raw/rfl-instructors.geojson'
  },

  missingmaps_mapathons: {
    name: 'Missing Maps Mapathons',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/MissingMaps/missingmaps.github.io/master/data/events.json'
  },
  //Infrom Risk Layers
  inform_world_index: {
    name: 'Inform World Risk Index',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/inform/INFORM_world_index.geojson'
  },
  inform_world_index_natural_hazards: {
    name: 'Inform Natural Hazards',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/inform/INFORM_world_index_natural_hazard.geojson'
  },
  inform_world_index_topline: {
    name: 'Inform Risk Top Line',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/inform/INFORM_world_index_topline_metrics.geojson'
  },
  wri_risk2014: {
    name: 'World Risk Index 2014',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/WRI_risk2014.geojson'
  },
  active_hurricane: {
    name: 'Active Hurricanes',
    type: 'kml',
    theme: 'other',
    url: 'http://www.nhc.noaa.gov/gis/kml/nhc_active.kml'
  },
  arc_offices: {
    name: 'ISD Offices',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/dalekunce/eaa40f314ad5a6d28a6e/raw/arc_offices.geojson'
  },
  redcross_offices: {
    name: 'Red Cross Offices World Wide',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/dalekunce/5fb2a4b37cd86e7cb82e/raw/9c41579bfedf5a0a50c9a7afea06d16dc3ca9eb2/rcrc_locations.geojson'
  }

};
