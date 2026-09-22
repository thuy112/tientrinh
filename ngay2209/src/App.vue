<template>
  <div class="container">
    <h1>Mini App — Quản Lý Giỏ Hàng</h1>

    <div class="box">
      <h2>Danh sách sản phẩm trong giỏ:</h2>

      <ul v-if="gioHang.length > 0">
        <li v-for="(sp, index) in gioHang" :key="index">
          {{ index + 1 }}. {{ sp }}
        </li>
      </ul>
      <p v-else class="empty">Giỏ hàng đang trống!</p>

      <div class="buttons">
        <!-- Chức năng 1: Thêm Tai nghe bằng push() -->
        <button @click="themTaiNghe">
          1. Thêm Tai nghe (push)
        </button>

        <!-- Chức năng 2: Đổi Laptop thành MacBook bằng $set() -->
        <button @click="doiLaptopThanhMacbook">
          2. Đổi Laptop → MacBook ($set)
        </button>

        <!-- Chức năng 3: Xóa Chuột bằng splice() -->
        <button @click="xoaChuot">
          3. Xóa Chuột (splice)
        </button>

        <!-- Chức năng 4: Xóa toàn bộ giỏ hàng -->
        <button @click="xoaToanBo">
          4. Xóa sạch giỏ hàng (gioHang = [])
        </button>

        <!-- Chức năng 5 & 6: Mở ô thêm sản phẩm mới và focus qua $nextTick -->
        <button @click="moInputFocus">
          5 & 6. Mở ô nhập & Focus ($nextTick)
        </button>
      </div>

      <!-- Ô Input ẩn/hiện bằng v-if -->
      <div v-if="showInput" class="input-group">
        <input
          ref="inputSp"
          v-model="tenSpMoi"
          placeholder="Nhập tên sản phẩm mới..."
          @keyup.enter="themSanPhamMoi"
        />
        <button @click="themSanPhamMoi">Xác nhận thêm</button>
      </div>

      <hr>

      <h3>Kiểm tra Data thực tế trong state:</h3>
      <pre>{{ gioHang }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      // Dữ liệu ban đầu
      gioHang: [
        'Laptop',
        'Chuột',
        'Bàn phím'
      ],

      showInput: false,
      tenSpMoi: ''
    }
  },

  methods: {
    // 1. Thêm "Tai nghe" vào cuối mảng -> dùng push() (Mutation method được Vue patch)
    themTaiNghe() {
      this.gioHang.push('Tai nghe')
    },

    // 2. Đổi "Laptop" (vị trí index 0) thành "MacBook"
    // KHÔNG dùng: this.gioHang[0] = 'MacBook' (Không reactive trong Vue 2)
    doiLaptopThanhMacbook() {
      const indexLaptop = this.gioHang.indexOf('Laptop')
      if (indexLaptop !== -1) {
        // Cách đúng: Dùng $set()
        this.$set(this.gioHang, indexLaptop, 'MacBook')

        // Hoặc dùng splice() thay thế:
        // this.gioHang.splice(indexLaptop, 1, 'MacBook')
      }
    },

    // 3. Xóa "Chuột" khỏi mảng -> Dùng splice()
    xoaChuot() {
      const indexChuot = this.gioHang.indexOf('Chuột')
      if (indexChuot !== -1) {
        // Xóa 1 phần tử tại vị trí tìm thấy
        this.gioHang.splice(indexChuot, 1)
      }
    },

    // 4. Xóa toàn bộ giỏ hàng
    // KHÔNG dùng: this.gioHang.length = 0 (Không reactive)
    xoaToanBo() {
      // Cách 1: Gán mảng rỗng mới
      this.gioHang = []

      // Cách 2: Dùng splice xóa từ đầu mảng
      // this.gioHang.splice(0)
    },

    // 5 & 6. Hiện ô input bằng v-if, sau đó dùng $nextTick() để tự động focus()
    async moInputFocus() {
      // Bước A: Thay đổi DATA -> Cho phép vẽ ô input ra DOM
      this.showInput = true

      // Bước B: Chờ Vue cập nhật DOM xong xuôi (Ô input xuất hiện trong DOM)
      await this.$nextTick()

      // Bước C: Lúc này $refs.inputSp đã tồn tại, tiến hành focus an toàn
      this.$refs.inputSp.focus()
    },

    // Thêm sản phẩm tùy chỉnh từ input
    themSanPhamMoi() {
      if (this.tenSpMoi.trim() !== '') {
        this.gioHang.push(this.tenSpMoi.trim())
        this.tenSpMoi = ''
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
  color: #2c3e50;
}

.box {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

ul {
  padding-left: 20px;
  line-height: 1.8;
  font-size: 16px;
}

.empty {
  color: #e53e3e;
  font-style: italic;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #33a06f;
}

.input-group {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

input:focus {
  border-color: #42b983;
}

pre {
  background-color: #f8fafc;
  padding: 12px;
  border-radius: 6px;
  color: #334155;
}
</style>