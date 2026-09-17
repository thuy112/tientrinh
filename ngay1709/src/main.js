/*import Vue from 'vue'
import App from './App.vue'
import MyPlugin from './plugins/myPlugin'

Vue.use(MyPlugin, {
  prefix: '[APP] ',
  appName: 'Vue 2 Lab',
  color: 'red'
})

new Vue({
  render: h => h(App)
}).$mount('#app')*/


import Vue from 'vue';
import App from './App.vue';

// 1. Import Side-effect Files (Filters & Directives)
import './filters';
import './directives';

// 2. Import & Sử dụng Plugin qua Vue.use()
import { AppPlugin } from './plugins/appPlugin';

Vue.use(AppPlugin, {
  appName: 'Vue 2 Product Manager',
  env: 'development'
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');