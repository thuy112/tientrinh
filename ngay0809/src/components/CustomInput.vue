Component này dùng để minh họa v-model trên Component.

<template>
  <div>
    <label>Tên cửa hàng:</label>

    <input
      :value="value"
      @input="handleInput"
    >
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
      this.$emit('input', event.target.value)
    }
  }
}
</script>