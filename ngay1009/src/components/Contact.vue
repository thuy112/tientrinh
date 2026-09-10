/* Bài tập phần Dynamic Components */
<!--
<template>
  <div class="page-box">
    <h2>Liên Hệ</h2>
    <p>Email: support@techstore.vn</p>
    <p>Hotline: 1900 1234</p>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.page-box {
  padding: 20px;
  background-color: #e8f5e9;
  border-radius: 8px;
}
</style> -->

/*Bài tập phần Keep-alive */

<template>
  <div class="page-box contact-box">
    <h2>Thông Tin Liên Hệ</h2>
    <p><strong>Hotline:</strong> 1900 1234</p>
    <p><strong>Email:</strong> hotro@techstore.vn</p>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact-box {
  background-color: #e8f5e9;
  border: 1px solid #c8e6c9;
  padding: 15px;
  border-radius: 6px;
}
</style>