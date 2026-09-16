<template>
  <div id="app">
    <h1>
      {{ $appName }}
    </h1>

    <!-- Thông báo -->
    <Notification :message="message"/>

    <!-- Form thêm sản phẩm -->
    <ProductForm @add-product="addProduct"/>

    <!-- Tìm kiếm -->
    <div class="search">
      <input v-model="search" type="text" placeholder="Tìm kiếm sản phẩm...">
    </div>

    <!-- Danh sách -->
    <ProductList :products="products" :search="search" @add="addToCart"/>

    <!-- Render Function -->
    <RenderMessage :count="products.length"/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ProductForm from './components/ProductForm.vue'
import Notification from './components/Notification.vue'

/* Render Function */

const RenderMessage = {
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  render(h) {
    return h('p',
      {
        class: 'total'
      },
      [
        `Tổng số sản phẩm: ${this.count}`
      ]
    )
  }
}

export default {
  name: 'App',

  components: {
    ProductList,
    ProductForm,
    Notification,
    RenderMessage
  },

  data() {
    return {
      search: '',
      message: '',

      products: [

        {
          id: 1,
          name: 'Laptop Dell',
          price: 15000000,
          stock: 5,
          quantity: 1
        },

        {
          id: 2,
          name: 'iPhone 15',
          price: 22000000,
          stock: 3,
          quantity: 1
        },

        {
          id: 3,
          name: 'Tai nghe Bluetooth',
          price: 750000,
          stock: 0,
          quantity: 1
        },

        {
          id: 4,
          name: 'Bàn phím cơ',
          price: 1200000,
          stock: 8,
          quantity: 1
        }
      ]
    }
  },

  methods: {
    addProduct(product) {
      this.products.push(product)
      this.showMessage(
        `Đã thêm sản phẩm "${product.name}"`
      )
    },

    addToCart(product) {
      this.showMessage(
        `Đã thêm "${product.name}" vào giỏ hàng`
      )
    },

    showMessage(message) {
      this.message = message
      setTimeout(() => {
        this.message = ''
      }, 2000)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

#app {
  max-width: 1000px;
  margin: 30px auto;
  background: white;
  padding: 25px;
  border-radius: 10px;
}

.search {
  margin-bottom: 25px;
}

.search input {
  width: 100%;
  padding: 10px;
}

.total {
  margin-top: 30px;
  font-weight: bold;
}
</style>