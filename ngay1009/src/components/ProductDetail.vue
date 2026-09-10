/*Bài tập tổng hợp Components In-Depth */
(Được load dạng Async Component)

<template>
  <div class="detail-box">
    <h3>Chi Tiết Sản Phẩm (Loaded Async)</h3>
    <p>Component này chỉ được tải về khi bạn click chuyển tab!</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  created() {
    console.log('⚡ ProductDetail.vue đã được tải về thành công!')
  }
}
</script>

<style scoped>
.detail-box { background: #e1f5fe; padding: 15px; border-radius: 6px; }
</style>