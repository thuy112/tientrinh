<template>
  <div class="product-list">
    <!-- Hiển thị thông tin Inject từ App.vue -->
    <div class="shop-info">
      <h3> Cửa hàng: {{ shopName }}</h3>
    </div>

    <!-- Thông báo nhận từ EventBus -->
    <div v-if="busMessage" class="alert-box">
      📢 {{ busMessage }}
    </div>

    <!-- Lặp qua danh sách và expose dữ liệu qua Scoped Slot -->
    <div class="list-container">
      <div v-for="product in products" :key="product.id">
        <slot :product="product"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventBus'

export default {
  name: 'ProductList',
  // Nhận dữ liệu do App.vue cung cấp qua provide
  inject: ['shopName'],
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      busMessage: ''
    }
  },
  created() {
    // Lắng nghe sự kiện từ EventBus
    EventBus.$on('notify-product', this.handleNotification)
  },
  beforeDestroy() {
    // Luôn dọn dẹp listener khi component bị destroy để tránh memory leak
    EventBus.$off('notify-product', this.handleNotification)
  },
  methods: {
    handleNotification(message) {
      this.busMessage = message
    }
  }
}
</script>

<style scoped>
.product-list {
  margin-top: 20px;
}
.shop-info {
  background-color: #e8f5e9;
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 12px;
}
.alert-box {
  background-color: #fff3e0;
  color: #e65100;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #ffe0b2;
}
</style>