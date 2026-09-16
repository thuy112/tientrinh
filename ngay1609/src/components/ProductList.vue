<template>
  <div>
    <h2>Danh sách sản phẩm</h2>

    <div class="product-list">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" @add="$emit('add', $event)"/>
    </div>

    <p v-if="filteredProducts.length === 0">
      Không tìm thấy sản phẩm.
    </p>
  </div>
</template>


<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',

  components: {
    ProductCard
  },

  props: {
    products: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      default: ''
    }
  },

  computed: {
    filteredProducts() {
      const keyword = this.search.toLowerCase()
      return this.products.filter(product => {
        return product.name
          .toLowerCase()
          .includes(keyword)
      })
    }
  }
}
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>