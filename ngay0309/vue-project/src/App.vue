<template>
  <!-- @mouseover (1/9) trên container -->
  <div class="playground-container" @mouseover="handleMouseOver">
    <h2>🌟 Bài tập Tổng hợp Ngày 1: Đủ kiến thức & Trọn bộ Sự kiện (@)</h2>

    <!-- ================= PHẦN 1: KIẾN THỨC NGÀY 1 ================= -->
    <div class="section-box">
      <h3>1. Hiển thị & Bind dữ liệu ({{ }}, :bind, :class, :style)</h3>
      
      <!-- Interpolation {{ }} -->
      <p>Xin chào, <b>{{ fullName }}</b>!</p>

      <!-- v-bind (:src, :href) -->
      <div class="media-box">
        <img :src="avatarUrl" alt="Avatar" width="60" />
        <br />
        <a :href="socialLink" target="_blank">Truy cập trang chủ Vue.js</a>
      </div>

      <!-- :class và :style động dạng Object -->
      <div :class="{ 'highlight-box': isHighlighted }" 
           :style="{ color: customColor, fontSize: fontSize + 'px' }">
        Đoạn văn bản này thay đổi class và style động dựa trên dữ liệu!
      </div>
      
      <!-- @click (2/9) -->
      <button @click="toggleHighlight" class="btn-action">Đổi trạng thái Highlight & Style</button>
    </div>


    <!-- ================= PHẦN 2: TRỌN BỘ 9 LOẠI SỰ KIỆN & MODIFIERS ================= -->
    <div class="section-box">
      <h3>2. Sân chơi 9 loại sự kiện (@) và Modifiers</h3>
      
      <!-- Log trạng thái chuột cho @mouseover -->
      <p class="log-text">Trạng thái chuột: <b>{{ mouseStatus }}</b></p>

      <!-- @click & @click.stop -->
      <div class="bubble-box" @click="handleClickOuter">
        <p style="margin: 0; font-size: 13px;">Vùng ngoài (Click vào đây sẽ báo vùng ngoài)</p>
        <!-- @click (3/9) kết hợp .stop -->
        <button @click.stop="handleClickInner" class="btn-stop">
          Bấm vào đây (Có .stop ngăn lan sự kiện)
        </button>
      </div>

      <!-- Form tổng hợp các sự kiện input, phím và v-model với modifiers -->
      <!-- @submit (4/9) kết hợp .prevent -->
      <form @submit.prevent="handleFormSubmit">
        
        <!-- v-model.lazy -->
        <label>Tên hiển thị (v-model.lazy):</label>
        <!-- @input (5/9) và @change (6/9) -->
        <input type="text" 
               v-model.lazy="userNameLazy" 
               @input="handleInputTyping" 
               @change="handleChangeInput" 
               placeholder="Gõ thử và xem log..." />
        <p class="sub-log">Kết quả lazy: {{ userNameLazy }} | Đang gõ: {{ typingText }}</p>

        <!-- v-model.number -->
        <label>Tuổi (v-model.number):</label>
        <input type="number" v-model.number="userAge" />
        <p class="sub-log">Kiểu dữ liệu: {{ typeof userAge }} (Giá trị: {{ userAge }})</p>

        <!-- @focus (7/9) và @blur (8/9) -->
        <label>Ô kiểm tra Focus / Blur:</label>
        <input type="text" 
               @focus="handleFocus" 
               @blur="handleBlur" 
               placeholder="Click vào rồi click ra ngoài..." />
        <p class="sub-log">Trạng thái: <b>{{ focusStatus }}</b></p>

        <!-- @keydown (9/9) & @keyup -->
        <label>Ô kiểm tra Keydown / Keyup:</label>
        <input type="text" 
               @keydown="handleKeyDown" 
               @keyup="handleKeyUp" 
               placeholder="Nhấn phím bất kỳ..." />

        <!-- v-model.trim kết hợp @keyup.enter -->
        <label>Mã giảm giá (v-model.trim + @keyup.enter):</label>
        <input type="text" 
               v-model.trim="promoCode" 
               @keyup.enter="applyPromo" 
               placeholder="Nhập mã rồi ấn Enter..." />

        <!-- Nút submit form -->
        <button type="submit" class="btn-submit">Gửi Form Hoàn Tất (@submit.prevent)</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Day1MasterPlayground',
  data() {
    return {
      // Dữ liệu Ngày 1
      fullName: 'Nguyễn Văn Thủy',
      avatarUrl: 'https://vuejs.org/images/logo.png',
      socialLink: 'https://vuejs.org',
      isHighlighted: true,
      customColor: '#2c3e50',
      fontSize: 15,
      userNameLazy: '',
      userAge: 21,
      promoCode: '',

      // Dữ liệu cho các sự kiện bổ sung
      mouseStatus: 'Chưa di chuột vào',
      typingText: '',
      focusStatus: 'Bình thường'
    }
  },
  methods: {
    // 1. Hàm Ngày 1: Đổi style và class động
    toggleHighlight() {
      this.isHighlighted = !this.isHighlighted;
      this.customColor = this.isHighlighted ? '#2c3e50' : '#27ae60';
      this.fontSize = this.isHighlighted ? 15 : 17;
    },

    // 2. Sự kiện @mouseover
    handleMouseOver() {
      this.mouseStatus = 'Chuột đang nằm trong khung!';
    },

    // 3. Sự kiện @click & @click.stop
    handleClickOuter() {
      alert('Đã click vào vùng NGOÀI!');
    },
    handleClickInner() {
      alert('Đã click nút TRONG! (Nhờ có .stop nên không bị lan ra ngoài)');
    },

    // 4. Sự kiện @submit (.prevent)
    handleFormSubmit() {
      alert(`Gửi form thành công!\nTên: ${this.userNameLazy}\nTuổi: ${this.userAge}`);
    },

    // 5. Sự kiện @input
    handleInputTyping(event) {
      this.typingText = event.target.value;
    },

    // 6. Sự kiện @change
    handleChangeInput(event) {
      console.log('Sự kiện @change kích hoạt khi thay đổi xong:', event.target.value);
    },

    // 7 & 8. Sự kiện @focus và @blur
    handleFocus() {
      this.focusStatus = 'Đang NHẬN FOCUS (Đang nhập)';
    },
    handleBlur() {
      this.focusStatus = 'Đã MẤT FOCUS (Rời đi)';
    },

    // 9. Sự kiện @keydown và @keyup
    handleKeyDown(event) {
      console.log('Keydown - Đang ấn phím:', event.key);
    },
    handleKeyUp(event) {
      console.log('Keyup - Đã thả phím:', event.key);
    },

    // Xử lý khi ấn Enter (@keyup.enter)
    applyPromo() {
      alert(`Đã nhận mã (đã trim khoảng trắng): "${this.promoCode}"`);
    }
  }
}
</script>

<style scoped>
.playground-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 2px solid #27ae60;
  border-radius: 8px;
  max-width: 500px;
  margin: 20px auto;
  background-color: #f9f9f9;
  color: #000; /* Đảm bảo chữ toàn bộ màu đen */
}

h2, h3 {
  color: #2c3e50;
  margin-top: 0;
}

.section-box {
  background: #ffffff;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
}

.media-box {
  margin-bottom: 10px;
}

.highlight-box {
  background-color: #e8f8f5;
  padding: 8px;
  border-left: 4px solid #27ae60;
  margin: 10px 0;
}

.bubble-box {
  background: #ebdef0;
  padding: 10px;
  border-radius: 4px;
  border: 1px dashed #8e44ad;
  margin-bottom: 10px;
}

.log-text, .sub-log {
  font-size: 12px;
  color: #555;
  margin: 4px 0 10px 0;
}

label {
  display: block;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 3px;
  margin-top: 8px;
}

input {
  display: block;
  padding: 6px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #000;
}

button {
  cursor: pointer;
  font-weight: bold;
  border: none;
  border-radius: 4px;
}

.btn-action {
  padding: 6px 12px;
  background-color: #34495e;
  color: white;
  margin-top: 5px;
}
.btn-action:hover {
  background-color: #2c3e50;
}

.btn-stop {
  padding: 5px 10px;
  background-color: #8e44ad;
  color: white;
  margin-top: 5px;
}
.btn-stop:hover {
  background-color: #732d91;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #27ae60;
  color: white;
  margin-top: 15px;
}
.btn-submit:hover {
  background-color: #219653;
}
</style>