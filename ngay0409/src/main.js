import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Khởi tạo app theo chuẩn Vue 2
new Vue({
  render: h => h(App),
}).$mount('#app')