<template>
  <div v-if="product" style="border: 1px solid #2b8a3e; padding: 20px; border-radius: 8px;">
    <h2>Chi Tiết Sản Phẩm (ID: {{ $route.params.id }})</h2>
    <p><strong>Tên sản phẩm:</strong> {{ product.name }}</p>
    <p><strong>Giá bán:</strong> <span style="color: red;">{{ product.price }}</span></p>
    <p><strong>Danh mục:</strong> {{ product.category }}</p>

    <hr />
    <p>Gợi ý xem thêm sản phẩm khác:</p>
    <button @click="$router.push('/san-pham/1')">Đến sản phẩm #1</button>
    <button @click="$router.push('/san-pham/2')">Đến sản phẩm #2</button>
    <button @click="$router.push('/san-pham/4')">Đến sản phẩm #4</button>
  </div>
  <div v-else>
    <p>Không tìm thấy sản phẩm!</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null,
      database: [
        { id: 1, name: 'Tai nghe Bluetooth Gaming', price: '450.000đ', category: 'Phụ kiện' },
        { id: 2, name: 'Bàn phím Cơ RGB', price: '890.000đ', category: 'Thiết bị' },
        { id: 3, name: 'Chuột Không Dây Silent', price: '250.000đ', category: 'Thiết bị' },
        { id: 4, name: 'Mũ Bảo Hiểm Fullface', price: '1.200.000đ', category: 'Đồ bảo hộ' },
        { id: 5, name: 'Găng Tay Xe Máy Chống Nước', price: '180.000đ', category: 'Đồ bảo hộ' }
      ]
    }
  },
  created() {
    // Chạy mỗi khi mount/tạo mới component
    this.fetchData()
  },
  methods: {
    fetchData() {
      const id = Number(this.$route.params.id)
      this.product = this.database.find(item => item.id === id)
      console.log('created() / fetchData() đã chạy cho ID:', id)
    }
  }
}
</script>