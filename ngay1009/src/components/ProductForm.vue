/*Bài tập tổng hợp Components In-Depth */
(Dùng Modifier .sync)

<template>
  <div class="form-box">
    <h3>Thêm Sản Phẩm Mới</h3>

    <div class="form-group">
      <label>Tên sản phẩm: </label>
      <input 
        type="text" 
        :value="newProductName" 
        @input="$emit('update:newProductName', $event.target.value)"
        placeholder="Nhập tên sản phẩm..."
      />
    </div>

    <div class="form-group">
      <label>Giá sản phẩm: </label>
      <input 
        v-model.number="price" 
        type="number" 
        placeholder="Nhập giá VNĐ..."
      />
    </div>

    <button class="btn-submit" @click="submitProduct">
      Thêm Sản Phẩm Vấn Danh Sách
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductForm',
  props: ['newProductName'],
  data() {
    return {
      price: ''
    }
  },
  methods: {
    submitProduct() {
      if (!this.newProductName || !this.price) {
        alert('Vui lòng nhập đầy đủ tên và giá sản phẩm!')
        return
      }

      // Phát sự kiện 'add-product' gửi dữ liệu lên App.vue
      this.$emit('add-product', {
        id: Date.now(), // Tạo ID duy nhất bằng timestamp
        name: this.newProductName,
        price: Number(this.price)
      })

      // Reset ô giá tiền về rỗng (tên sản phẩm được reset qua .sync ở App.vue)
      this.price = ''
      alert('Đã thêm sản phẩm thành công!')
    }
  },
  activated() {
    console.log('⚡ ProductForm activated (Keep-Alive)')
  },
  deactivated() {
    console.log('💤 ProductForm deactivated (Keep-Alive)')
  }
}
</script>

<style scoped>
.form-box { background: #fff8e1; padding: 15px; border-radius: 6px; margin: 10px 0; }
.form-group { margin-bottom: 10px; }
.form-group label { display: inline-block; width: 110px; }
input { padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; width: 220px; }
.btn-submit { background-color: #4caf50; color: white; border: none; padding: 8px 16px; margin-top: 5px; font-weight: bold; }
.btn-submit:hover { background-color: #43a047; }
</style>