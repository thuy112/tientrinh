<template>
  <form @submit.prevent="handleSubmit" class="product-form">
    <h3>Thêm sản phẩm mới</h3>
    <div class="form-group">
      <label>Tên sản phẩm:</label>
      <!-- Custom Directive v-autofocus -->
      <input v-model="name" v-autofocus placeholder="Nhập tên..." />
    </div>
    <div class="form-group">
      <label>Giá (VNĐ):</label>
      <input v-model.number="price" type="number" placeholder="Nhập giá..." />
    </div>
    <button type="submit" class="btn-submit">Lưu sản phẩm</button>
  </form>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      name: '',
      price: 0
    };
  },
  methods: {
    handleSubmit() {
      if (!this.name || this.price <= 0) {
        // Sử dụng prototype $notify từ Plugin
        this.$notify('Vui lòng nhập đầy đủ thông tin hợp lệ!');
        return;
      }
      this.$emit('add-product', {
        id: Date.now(),
        name: this.name,
        price: this.price,
        inStock: true
      });
      this.name = '';
      this.price = 0;
      this.$notify('Đã thêm sản phẩm thành công!');
    }
  }
};
</script>

<style scoped>
.product-form {
  border: 1px dashed #aaa;
  padding: 16px;
  border-radius: 6px;
  margin-top: 15px;
}
.form-group {
  margin-bottom: 10px;
}
.form-group input {
  padding: 6px 10px;
  margin-left: 8px;
}
.btn-submit {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
}
</style>