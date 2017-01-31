import Vue from 'vue'
import app from './app.vue'
import store from './store.vue'

Vue.config.devtools = true;

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: (h) => h(app)
});
