<template>
  <div class="form">

    <h2>Thêm sản phẩm</h2>

    <input v-focus v-model="name" type="text" placeholder="Tên sản phẩm">
    <input v-model.number="price" type="number" placeholder="Giá">
    <input v-model.number="stock" type="number" placeholder="Số lượng tồn kho">

    <button @click="submitProduct">
      Thêm sản phẩm
    </button>
  </div>
</template>
<script>

export default {
  name: 'ProductForm',
  data() {
    return {
      name: '',
      price: '',
      stock: ''
    }
  },

  methods: {
    submitProduct() {
      if (!this.name) {
        alert('Vui lòng nhập tên sản phẩm')
        return
      }
      const product = {
        id: Date.now(),
        name: this.name,
        price: this.price,
        stock: this.stock,
        quantity: 1
      }
      this.$emit('add-product', product)
      this.name = ''
      this.price = 0
      this.stock = 0
    }
  }
}
</script>

<style scoped>
.form {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}

button {
  padding: 8px 15px;
  cursor: pointer;
}
</style>