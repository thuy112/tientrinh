<!-- <template>
  <div>
    <h1>Trang Đăng Nhập</h1>
    <button @click="login">Đăng nhập (Lưu Token)</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem('token', 'fake-token-123')
      this.$router.push('/account')
    }
  }
}
</script> -->


// Bài tập tổng hợp 2 buổi
<template>
  <div>
    <h3>Đăng Nhập</h3>
    <button @click="handleLogin">Giả Lập Đăng Nhập (Lưu Token)</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      localStorage.setItem('token', 'auth-token-xyz-123')
      this.$router.push('/account')
    }
  }
}
</script>