<!-- <template>
  <div>
    <h1>Trang Tài Khoản</h1>
    <button @click="logout">Đăng xuất</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script> -->

// Bài tập tổng hợp 2 buổi
<template>
  <div>
    <h3>Trang Quản Lý Tài Khoản</h3>
    <p style="color: green;">✔ Bạn đã đăng nhập thành công và vượt qua Navigation Guard!</p>
    <button @click="handleLogout">Đăng Xuất</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>