import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' 
import { BootstrapVue, IconsPlugin, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
//import axios from 'axios'
import Vuex from 'vuex'
// import firebase from 'firebase';
// import database from './firebase.js';

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(Vuesax) 
Vue.use(Vuex)

Vue.config.productionTip = false

//Step 3 - Register Routes
// const myRouter = new VueRouter({
//   routes: Routes,
//   mode: 'history'
// });


new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')
