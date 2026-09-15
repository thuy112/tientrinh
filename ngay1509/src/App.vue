<!-- <template>
  <div id="app" style="font-family: sans-serif; padding: 20px;">
    <nav style="margin-bottom: 20px; background: #eee; padding: 10px;">
      <router-link to="/">Trang chủ</router-link> | 
      <router-link to="/san-pham">Sản phẩm</router-link> | 
      <router-link to="/account">Tài khoản</router-link> | 
      <router-link to="/login">Đăng nhập</router-link>
    </nav>
    <hr />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script> -->


// Bài tập tổng hợp 2 buổi
<template>
  <div id="app" style="font-family: sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
    <h2>Ứng Dụng Tổng Hợp Vue Router 3 + Vuex 3</h2>
    <nav style="background: #f0f0f0; padding: 10px; margin-bottom: 20px; border-radius: 4px;">
      <router-link to="/">Trang chủ</router-link> | 
      <router-link to="/san-pham?page=1">Danh sách sản phẩm</router-link> | 
      <router-link to="/account">Tài khoản (Bảo vệ)</router-link> | 
      <router-link to="/login">Đăng nhập</router-link>
    </nav>
    <hr />
    <!-- Bẫy Reactivity: Đặt :key="$route.fullPath" để reload khi đổi param/query -->
    <router-view :key="$route.fullPath" />
  </div>
</template>