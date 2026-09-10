/*Bài tập tổng hợp Components In-Depth */
(Dùng v-model & $refs)

<template>
  <div class="custom-input">
    <label><slot name="label">Nhập:</slot></label>
    <input
      ref="inputRef"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['value'],
  methods: {
    focusInput() {
      this.$refs.inputRef.focus()
    }
  }
}
</script>

<style scoped>
.custom-input { margin: 8px 0; }
input { padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; }
</style>