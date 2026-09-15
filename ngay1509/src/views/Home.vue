<!-- <template>
  <div>
    <h1>Trang Chủ</h1>
  </div>
</template> -->


// Bài tổng hợp 2 buổi 
<template>
  <div>
    <h3>Trang Chủ</h3>
    <p>Chào mừng bạn đến với project tổng hợp Vue Router 3 và Vuex 3!</p>

    <!-- FORM THÊM SẢN PHẨM MỚI -->
    <div style="background: #eef9f5; padding: 15px; border-radius: 8px; border: 1px solid #42b983; margin-top: 15px;">
      <h4 style="margin-top: 0; color: #2c3e50;">➕ Thêm Sản Phẩm Mới</h4>
      <form @submit.prevent="handleCreateProduct" style="display: flex; gap: 10px; align-items: center;">
        <input 
          v-model="newName" 
          type="text" 
          placeholder="Tên sản phẩm..." 
          required 
          style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; flex: 1;"
        />
        <input 
          v-model="newPrice" 
          type="text" 
          placeholder="Giá (VD: 250.000đ)..." 
          required 
          style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; flex: 1;"
        />
        <button 
          type="submit" 
          style="padding: 8px 16px; background: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
        >
          Thêm Ngay
        </button>
      </form>
    </div>

    <!-- DANH SÁCH SẢN PHẨM -->
    <div style="margin-top: 25px; border-top: 2px solid #eee; padding-top: 15px;">
      <h4>Sản Phẩm Nổi Bật (Lấy Từ Vuex Store)</h4>

      <div v-if="isLoading">
        <em>Đang tải danh sách sản phẩm...</em>
      </div>

      <div v-else>
        <p>Tổng số sản phẩm hiện có: <strong>{{ totalProducts }}</strong></p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
          <div 
            v-for="sp in productList" 
            :key="sp.id" 
            style="border: 1px solid #ddd; padding: 12px; border-radius: 6px; background: #fafafa;"
          >
            <h5 style="margin: 0 0 8px 0; color: #2c3e50;">{{ sp.name }}</h5>
            <p style="margin: 0 0 10px 0; color: #e74c3c; font-weight: bold;">{{ sp.price }}</p>
            <button 
              @click="xemChiTiet(sp.id)" 
              style="padding: 6px 12px; cursor: pointer; background: #35495e; color: white; border: none; border-radius: 4px;"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      newName: '',
      newPrice: ''
    }
  },
  computed: {
    ...mapGetters('product', ['productList', 'isLoading', 'totalProducts'])
  },
  methods: {
    // Lấy action fetchProducts và addProduct từ module product
    ...mapActions('product', ['fetchProducts', 'addProduct']),
    
    handleCreateProduct() {
      // 1. Dispatch action thêm sản phẩm
      this.addProduct({
        name: this.newName,
        price: this.newPrice
      })

      // 2. Clear ô input
      this.newName = ''
      this.newPrice = ''
    },
    
    xemChiTiet(id) {
      this.$router.push(`/san-pham/${id}`)
    }
  },
  created() {
    if (this.productList.length === 0) {
      this.fetchProducts()
    }
  }
}
</script>