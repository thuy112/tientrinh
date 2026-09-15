<!-- <template>
  <div>
    <h1>Chi Tiết Sản Phẩm</h1>
    <p>ID Sản phẩm: {{ $route.params.id }}</p>
  </div>
</template> -->


// Bài tập tổng hợp 2 buổi
<template>
  <div>
    <h3>Màn Hình Chi Tiết Sản Phẩm</h3>
    <p>ID nhận từ URL Dynamic Route (`$route.params.id`): <strong>{{ $route.params.id }}</strong></p>
    
    <div style="margin-top: 15px;">
      <button @click="chuyenSanPham(1)">Chuyển sang SP 1</button>
      <button @click="chuyenSanPham(2)">Chuyển sang SP 2</button>
      <button @click="$router.back()">Quay lại</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  methods: {
    chuyenSanPham(id) {
      this.$router.push(`/san-pham/${id}`)
    }
  }
}
</script>