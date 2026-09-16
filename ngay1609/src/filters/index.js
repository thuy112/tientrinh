import Vue from 'vue'

Vue.filter('uppercase', function(value) {
  if (!value) return ''

  return value.toUpperCase()
})

Vue.filter('currency', function(value) {
  if (value === undefined || value === null) {
    return ''
  }

  return value.toLocaleString('vi-VN') + ' đ'
})

Vue.filter('stockStatus', function(stock) {
  return stock > 0 ? 'Còn hàng' : 'Hết hàng'
})