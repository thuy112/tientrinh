/* Bài tập phần Dynamic Components */
<!--
<template>
  <div class="page-box">
    <h2> Danh Sách Sản Phẩm</h2>
    <ul>
      <li>iPhone 15 - 20.000.000 VNĐ</li>
      <li>MacBook Air M2 - 25.000.000 VNĐ</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Product'
}
</script>

<style scoped>
.page-box {
  padding: 20px;
  background-color: #f3e5f5;
  border-radius: 8px;
}
</style> -->

/* Bài tập phần Keep-alive */
<template>
  <div class="page-box form-box">
    <h2>Thêm Sản Phẩm Mới</h2>
    
    <div class="form-group">
      <label for="p-name">Tên sản phẩm: </label>
      <input 
        id="p-name"
        v-model="productName" 
        type="text" 
        placeholder="Gõ thử tên sản phẩm ở đây..."
      />
    </div>

    <p class="preview">
      Dữ liệu lưu trong data: <strong>"{{ productName }}"</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      productName: ''
    }
  },
  // Các hooks để kiểm tra sự khác biệt giữa 2 phiên bản
  created() {
    console.log('ProductForm: CREATED (Tạo mới instance)')
  },
  destroyed() {
    console.log('ProductForm: DESTROYED (Đã bị hủy hẳn khỏi bộ nhớ)')
  },
  activated() {
    console.log('ProductForm: ACTIVATED (Lấy lại từ Cache - Chỉ khi có keep-alive)')
  },
  deactivated() {
    console.log('ProductForm: DEACTIVATED (Tạm ẩn và đưa vào Cache - Chỉ khi có keep-alive)')
  }
}
</script>

<style scoped>
.form-box {
  background-color: #fff3e0;
  border: 1px solid #ffe0b2;
  padding: 15px;
  border-radius: 6px;
}
.form-group {
  margin: 10px 0;
}
input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
}
.preview {
  margin-top: 10px;
  color: #e65100;
}
</style>