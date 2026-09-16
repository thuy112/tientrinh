const ProductPlugin = {

  install(Vue) {

    Vue.prototype.$formatPrice = function(price) {
      return price.toLocaleString('vi-VN') + ' đ'
    }

    Vue.prototype.$isAvailable = function(product) {
      return product.stock > 0
    }

    Vue.prototype.$appName = 'Product Manager'
  }

}

export default ProductPlugin