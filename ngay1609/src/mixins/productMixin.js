export default {
  data() {
    return {
      mixinMessage: 'Logic dùng chung từ Product Mixin'
    }
  },

  computed: {
    totalProducts() {
      return this.products ? this.products.length : 0
    }
  },

  methods: {
    formatPrice(price) {
      return price.toLocaleString('vi-VN') + ' đ'
    },

    getStockStatus(stock) {
      return stock > 0 ? 'Còn hàng' : 'Hết hàng'
    }
  },

  created() {
    console.log('productMixin: created')
  }
}