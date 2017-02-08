import Vue from 'vue'
import app from './app.vue'
import store from './store.vue'
import KeenUI from 'keen-ui';

Vue.config.devtools = true;
Vue.use(KeenUI);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: (h) => h(app)
});
