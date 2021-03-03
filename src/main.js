import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "./router";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/swiper-bundle.css'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import style
// import 'swiper/css/swiper.css'
 


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false


Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
