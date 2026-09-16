<template>
  <div v-if="message" class="notification">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.notification {
  margin-bottom: 20px;
  padding: 12px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 5px;
}
</style>