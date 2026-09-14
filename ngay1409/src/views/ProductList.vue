<template>
  <div>
    <h1>Danh Sách Sản Phẩm</h1>
    <p>Trang hiện tại: <strong>{{ currentPage }}</strong></p>

    <div style="margin-bottom: 15px;">
      <button @click="changePage(1)">Trang 1</button>
      <button @click="changePage(2)">Trang 2</button>
    </div>

    <ul>
      <li v-for="item in pagedProducts" :key="item.id" style="margin-bottom: 10px;">
        <strong>{{ item.name }}</strong> - {{ item.price }}
        <button @click="xemChiTiet(item.id)" style="margin-left: 10px;">Xem chi tiết</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      allProducts: [
        { id: 1, name: 'Tai nghe Bluetooth Gaming', price: '450.000đ' },
        { id: 2, name: 'Bàn phím Cơ RGB', price: '890.000đ' },
        { id: 3, name: 'Chuột Không Dây Silent', price: '250.000đ' },
        { id: 4, name: 'Mũ Bảo Hiểm Fullface', price: '1.200.000đ' },
        { id: 5, name: 'Găng Tay Xe Máy Chống Nước', price: '180.000đ' }
      ]
    }
  },
  computed: {
    currentPage() {
      return this.$route.query.page || 1
    },
    pagedProducts() {
      // Phân trang đơn giản: Trang 1 lấy 3 sp đầu, Trang 2 lấy các sp còn lại
      return this.currentPage == 1 
        ? this.allProducts.slice(0, 3) 
        : this.allProducts.slice(3)
    }
  },
  methods: {
    xemChiTiet(id) {
      this.$router.push(`/san-pham/${id}`)
    },
    changePage(page) {
      this.$router.push(`/san-pham?page=${page}`)
    }
  }
}
</script>