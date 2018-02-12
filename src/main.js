import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import './style/common.scss'

import { showLoading, hideLoading } from './component/loading/index.js'
Vue.prototype.$showLoading = showLoading;
Vue.prototype.$hideLoading = hideLoading;

const _vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

window.$vue = _vue;
