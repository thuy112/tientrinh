<template>
  <div>
    <h1>Trang Chủ - Sản Phẩm Nổi Bật</h1>

    <div style="display: flex; gap: 15px; margin-top: 15px;">
      <div 
        v-for="item in featuredProducts" 
        :key="item.id" 
        style="border: 1px solid #ccc; padding: 15px; border-radius: 8px; width: 200px;"
      >
        <h3>{{ item.name }}</h3>
        <p style="color: red; font-weight: bold;">{{ item.price }}</p>
        <button @click="goDetail(item.id)">Xem chi tiết</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      featuredProducts: [
        { id: 1, name: 'Tai nghe Bluetooth Gaming', price: '450.000đ' },
        { id: 4, name: 'Mũ Bảo Hiểm Fullface', price: '1.200.000đ' }
      ]
    }
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/san-pham/${id}`)
    }
  }
}
</script>