<template>
  <div class="custom-input">
    <label>Tên cửa hàng: </label>
    <input
      ref="input"
      type="text"
      :value="value"
      @input="handleInput"
      placeholder="Nhập tên cửa hàng..."
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(event) {
      // Phát ra sự kiện 'input' để v-model ở component cha cập nhật tự động
      this.$emit('input', event.target.value)
    },
    // Hàm được gọi thông qua $refs từ App.vue
    focusInput() {
      if (this.$refs.input) {
        this.$refs.input.focus()
      }
    }
  }
}
</script>

<style scoped>
.custom-input {
  margin: 10px 0;
}
input {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>