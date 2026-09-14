<template>
  <div id="app" style="font-family: sans-serif; padding: 20px;">
    <nav style="background: #f0f0f0; padding: 10px; border-radius: 6px; margin-bottom: 20px;">
      <router-link to="/">Trang chủ</router-link> | 
      <router-link to="/san-pham">Tất cả Sản phẩm</router-link> | 
      <router-link to="/account">Tài khoản</router-link> | 
      <router-link to="/login">Đăng nhập</router-link>
    </nav>

    <!-- Thẻ router-view kèm :key để fix lỗi created() không chạy khi đổi URL cùng Component -->
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>