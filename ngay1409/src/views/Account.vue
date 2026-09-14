<template>
  <div>
    <h1>Quản Lý Tài Khoản</h1>
    <p>Thành công! Bạn chỉ xem được trang này khi đã có Token trong localStorage.</p>
    <button @click="logout">Đăng xuất</button>
  </div>
</template>

<script>
export default {
  name: 'AccountView',
  methods: {
    logout() {
      localStorage.removeItem('token')
      alert('Đã đăng xuất!')
      this.$router.push('/login')
    }
  }
}
</script>