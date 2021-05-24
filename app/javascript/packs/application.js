import Vue from 'vue'
  
import App from './app.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'slick-carousel/slick/slick.css';
import 'vue-dplayer/dist/vue-dplayer.css';
import router from './routes.js'    
 
Vue.use(Vuetify)

new Vue({
  vuetify : new Vuetify(),
  el: '#app',
  router,
  render: h => h(App)
 })
