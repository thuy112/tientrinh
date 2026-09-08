<template>
  <div>
    <Header />

    <h2>{{ shopName }}</h2>

    <CustomInput v-model="shopName" />

    <hr>

    <!-- Danh sách sản phẩm -->
    <div class="product-list">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        :status="product.status"
        @change-price="handleChangePrice"
        @remove="handleRemove"
      />
    </div>

    <!-- Không còn sản phẩm -->
    <p v-if="products.length === 0">
      Không còn sản phẩm nào
    </p>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ProductItem from './components/ProductItem.vue'
import CustomInput from './components/CustomInput.vue'

export default {
  name: 'App',

  components: {
    Header,
    ProductItem,
    CustomInput
  },

  data() {
    return {
      shopName: 'Thủy Shop',

      products: [
        {
          id: 1,
          name: 'iPhone 15',
          price: 20000000,
          stock: 10,
          status: 'active'
        },
        {
          id: 2,
          name: 'Samsung Galaxy S24',
          price: 18000000,
          stock: 8,
          status: 'active'
        },
        {
          id: 3,
          name: 'MacBook Air M2',
          price: 25000000,
          stock: 5,
          status: 'active'
        },
        {
          id: 4,
          name: 'AirPods Pro 2',
          price: 6000000,
          stock: 15,
          status: 'active'
        },
        {
          id: 5,
          name: 'iPad Air',
          price: 16000000,
          stock: 7,
          status: 'inactive'
        }
      ]
    }
  },

  methods: {
    // Nhận giá mới từ ProductItem
    handleChangePrice(productId, newPrice) {
      const product = this.products.find(function (item) {
        return item.id === productId
      })

      if (product) {
        product.price = newPrice
      }
    },

    // Nhận yêu cầu xóa từ ProductItem
    handleRemove(productId) {
      this.products = this.products.filter(function (product) {
        return product.id !== productId
      })
    }
  }
}
</script>