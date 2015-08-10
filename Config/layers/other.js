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
  }

};
