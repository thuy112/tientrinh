import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Import store vừa tạo

new Vue({
  router,
  store, // Đưa store vào Vue root instance
  render: h => h(App)
}).$mount('#app')