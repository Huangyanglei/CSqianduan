import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'

Vue.config.productionTip = false
Vue.prototype.$http=axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
