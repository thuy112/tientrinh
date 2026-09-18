<template>
  <div class="container">
    <h1>Quản lý đơn hàng</h1>

    <div class="card">
      <h2>Thông tin đơn hàng</h2>

      <p>
        <strong>Khách hàng:</strong>
        {{ donHang.khachHang }}
      </p>

      <p>
        <strong>Trạng thái:</strong>
        {{ donHang.trangThai }}
      </p>

      <p>
        <strong>Địa chỉ:</strong>
        {{ donHang.diaChi }}
      </p>

      <hr>

      <h3>Thông tin vận chuyển</h3>

      <p>
        <strong>Đơn vị vận chuyển:</strong>
        {{ donHang.donViVanChuyen || 'Chưa có' }}
      </p>

      <p>
        <strong>Mã vận đơn:</strong>
        {{ donHang.maVanDon || 'Chưa có' }}
      </p>
    </div>

    <div class="buttons">
      <button @click="doiTrangThai">
        Đổi trạng thái
      </button>

      <button @click="themVanChuyenSai">
        Thêm vận chuyển - SAI
      </button>

      <button @click="themVanChuyenDung">
        Thêm vận chuyển - ĐÚNG
      </button>

      <button @click="doiMaVanDon">
        Đổi mã vận đơn
      </button>

      <button @click="reset">
        Reset
      </button>
    </div>

    <div class="data">
      <h3>Dữ liệu thực tế trong JavaScript</h3>

      <pre>{{ donHang }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      donHang: {
        khachHang: 'Nguyễn Văn A',
        trangThai: 'Đang xử lý',
        diaChi: 'Hà Nội'
      }
    }
  },

  methods: {
    // Key đã tồn tại từ đầu
    // => Vue 2 đã tạo getter/setter
    doiTrangThai() {
      this.donHang.trangThai = 'Đang giao'
    },

    // Thêm key mới bằng cách thông thường
    // => Vue 2 không theo dõi được key này
    themVanChuyenSai() {
      this.donHang.donViVanChuyen = 'GHTK'
    },

    // Thêm key mới bằng $set
    // => Vue tạo reactive property
    themVanChuyenDung() {
      this.$set(
        this.donHang,
        'donViVanChuyen',
        'GHTK'
      )

      this.$set(
        this.donHang,
        'maVanDon',
        'VN123456'
      )
    },

    // Sau khi key đã được tạo reactive
    // => có thể thay đổi bình thường
    doiMaVanDon() {
      this.donHang.maVanDon = 'VN999999'
    },

    reset() {
      this.donHang = {
        khachHang: 'Nguyễn Văn A',
        trangThai: 'Đang xử lý',
        diaChi: 'Hà Nội'
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 700px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

.card,
.data {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

pre {
  background: #f5f5f5;
  padding: 15px;
  white-space: pre-wrap;
}
</style>