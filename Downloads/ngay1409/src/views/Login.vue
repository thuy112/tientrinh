<template>
  <div>
    <h1>Trang Đăng Nhập</h1>
    <button @click="login">Đăng nhập (Giả lập cấp Token)</button>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  methods: {
    login() {
      localStorage.setItem('token', 'my-secret-token')
      alert('Đăng nhập thành công!')
      this.$router.push('/account')
    }
  }
}
</script>