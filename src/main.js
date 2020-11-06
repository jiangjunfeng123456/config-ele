import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App.vue'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.$log = function $log (...arg) {
  return console.log(...arg)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
