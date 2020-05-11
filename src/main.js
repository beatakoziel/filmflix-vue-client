import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import JQuery from 'jquery'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueSwal from 'vue-swal'
import 'swiper/css/swiper.css'
import VueCoreVideoPlayer from 'vue-core-video-player';
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

import {
  routes
} from './routes'

Vue.use(VueCoreVideoPlayer)
Vue.use(VueSwal);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueResource)
Vue.use(Vuex);
const router = new VueRouter({
  routes,
  mode: 'history'
});

window.$ = JQuery;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
