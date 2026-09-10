/* Bài tập phần Dynamic Components*/
<!--
<template>
  <div class="page-box">
    <h2>Trang Chủ</h2>
    <p>Chào mừng bạn đến với cửa hàng trực tuyến của chúng tôi!</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.page-box {
  padding: 20px;
  background-color: #e3f2fd;
  border-radius: 8px;
}
</style> -->

/* Bài tập dùng Keep-alive */
<template>
  <div class="page-box home-box">
    <h2>Trang Chủ</h2>
    <p>Chào mừng bạn đến với hệ thống quản lý cửa hàng!</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-box {
  background-color: #e3f2fd;
  border: 1px solid #bbdefb;
  padding: 15px;
  border-radius: 6px;
}
</style>