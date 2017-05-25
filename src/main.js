// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
Vue.prototype.$http = axios
Vue.config.productionTip = false

const FastClick = require('fastclick')//手动点击事件解决延迟问题
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store, //在根实例中注册store，方便之后所有的组件调用
  template: '<App/>',
  components: { App }
})
