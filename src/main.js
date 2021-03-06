import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.component('v-input', () => import('./components/VKInput.vue'));

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
