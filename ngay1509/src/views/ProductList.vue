<!--<template>
  <div>
    <h1>Danh Sách Sản Phẩm (Namespaced Module)</h1>
    <p>Xin chào: <strong>{{ username }}</strong></p>
    <p>Tổng số sản phẩm: <strong>{{ productCount }}</strong></p>
    <p>Count: <strong>{{ count }}</strong></p>

    <div style="margin-bottom: 15px;">
      <button @click="INCREMENT">Tăng Count (Mutation)</button>
      <button @click="incrementAsync">Tăng Sau 1s (Action)</button>
      <button @click="fetchProductsAsync">Tải API Sản Phẩm</button>
    </div>

    <ul>
      <li v-for="sp in allProducts" :key="sp.id" style="margin-bottom: 10px;">
        <strong>{{ sp.name }}</strong> - {{ sp.price }}
        <button @click="$router.push(`/san-pham/${sp.id}`)">Xem chi tiết</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  computed: {
    // Truyền tên namespace 'product' làm tham số đầu tiên
    ...mapState('product', ['username', 'count']),
    ...mapGetters('product', ['productCount', 'allProducts'])
  },
  methods: {
    ...mapMutations('product', ['INCREMENT']),
    ...mapActions('product', ['incrementAsync', 'fetchProductsAsync'])
  }
}
</script> -->


// Bài tập tổng hợp 2 buổi
<template>
  <div>
    <h3>Màn Hình Danh Sách Sản Phẩm</h3>
    <p>Trang hiện tại (Query Param): <strong>{{ $route.query.page || 1 }}</strong></p>

    <div v-if="isLoading"><em>Đang tải dữ liệu từ API...</em></div>

    <div v-else>
      <p>Tổng số sản phẩm trong Vuex Store: <strong>{{ totalProducts }}</strong></p>
      <ul>
        <li v-for="sp in productList" :key="sp.id" style="margin-bottom: 12px;">
          <strong>{{ sp.name }}</strong> - Giá: {{ sp.price }}
          <!-- Programmatic Navigation -->
          <button @click="xemChiTiet(sp.id)" style="margin-left: 10px;">
            Xem chi tiết (Push Route)
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  computed: {
    // Lấy getters từ namespaced module 'product'
    ...mapGetters('product', ['productList', 'isLoading', 'totalProducts'])
  },
  methods: {
    // Lấy actions từ namespaced module 'product'
    ...mapActions('product', ['fetchProducts']),
    xemChiTiet(id) {
      // Điều hướng bằng JavaScript
      this.$router.push(`/san-pham/${id}`)
    }
  },
  created() {
    // Gọi action lấy dữ liệu ngay khi mount
    this.fetchProducts()
  }
}
</script>