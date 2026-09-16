import Vue from 'vue'
import App from './App.vue'

// 1. Import Plugin & Kích hoạt
import ProductPlugin from './plugins/productPlugin' // Kiểm tra lại đúng đường dẫn file plugin của bạn
Vue.use(ProductPlugin)

// 2. Import Filters (file chứa currency & stockStatus)
import './filters' // Kiểm tra lại đúng đường dẫn file filters của bạn

// 3. Global Filter & Directive
Vue.filter('uppercase', function(value) {
  if (!value) return ''
  return value.toUpperCase()
})

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

/* Khởi tạo Vue */
new Vue({
  render: h => h(App)
}).$mount('#app')