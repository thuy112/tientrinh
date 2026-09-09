<template>
  <div id="app">
    <h1>Ứng Dụng Quản Lý Sản Phẩm</h1>

    <!-- 1. CustomInput với v-model & $refs -->
    <div class="control-panel">
      <CustomInput ref="shopInput" v-model="shopName" />
      <button @click="focusShopInput">Focus tên cửa hàng</button>
      
      <!-- 2. Nút kích hoạt EventBus -->
      <button @click="sendNotification">Thông báo sản phẩm</button>
    </div>

    <hr />

    <!-- 3. ProductList sử dụng Scoped Slot + Named Slots trong ProductCard -->
    <ProductList :products="products">
      <template v-slot:default="slotProps">
        <ProductCard>
          <!-- Header Slot -->
          <template v-slot:header>
            <h2>{{ slotProps.product.name }}</h2>
          </template>

          <!-- Default Slot -->
          <div>
            <p><strong>Giá:</strong> {{ formatPrice(slotProps.product.price) }} VNĐ</p>
            <p><strong>Số lượng tồn kho:</strong> {{ slotProps.product.stock }} sản phẩm</p>
          </div>

          <!-- Footer Slot -->
          <template v-slot:footer>
            <button @click="buyProduct(slotProps.product)">
              Mua ngay
            </button>
          </template>
        </ProductCard>
      </template>
    </ProductList>
  </div>
</template>

<script>
import CustomInput from './components/CustomInput.vue'
import ProductList from './components/ProductList.vue'
import ProductCard from './components/ProductCard.vue'
import EventBus from './eventBus'

export default {
  name: 'App',
  components: {
    CustomInput,
    ProductList,
    ProductCard
  },
  data() {
    return {
      shopName: 'TechStore Việt Nam',
      products: [
        { id: 1, name: 'iPhone 15', price: 20000000, stock: 10 },
        { id: 2, name: 'Samsung S24', price: 18000000, stock: 8 },
        { id: 3, name: 'MacBook Air M2', price: 25000000, stock: 5 },
        { id: 4, name: 'AirPods Pro 2', price: 6000000, stock: 15 },
        { id: 5, name: 'iPad Air', price: 16000000, stock: 7 }
      ]
    }
  },
  // 4. provide shopName cho các component con (lưu ý: mặc định provide/inject trong Vue 2 không tự động reactive nếu truyền giá trị primitive trực tiếp)
  provide() {
    return {
      shopName: this.shopName // Hoặc truyền getter/object nếu muốn đồng bộ realtime
    }
  },
  methods: {
    // 5. Sử dụng $refs để gọi hàm từ component con
    focusShopInput() {
      this.$refs.shopInput.focusInput()
    },
    // 6. Phát sự kiện qua EventBus
    sendNotification() {
      EventBus.$emit('notify-product', 'Sản phẩm đang được cập nhật!')
    },
    formatPrice(price) {
      return price.toLocaleString('vi-VN')
    },
    buyProduct(product) {
      if (product.stock > 0) {
        product.stock--
        alert(`Bạn đã mua ${product.name}!`)
      } else {
        alert('Sản phẩm đã hết hàng!')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}
.control-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
button {
  cursor: pointer;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
}
button:hover {
  background-color: #45a049;
}
</style>