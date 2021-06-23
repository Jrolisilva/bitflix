import App from './app.vue';
import router from './routes.js';    
import store from './store';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'slick-carousel/slick/slick.css';
import 'vue-dplayer/dist/vue-dplayer.css';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)

new Vue({
  vuetify : new Vuetify(),
  el: '#app',
  router,
  store,
  render: h => h(App)
 })
