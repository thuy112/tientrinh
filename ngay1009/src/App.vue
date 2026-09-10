/* Bài tập phần Dynamic Components*/
<!--
<template>
  <div id="app">
    <!-- Thanh điều hướng Buttons 
    <nav class="nav-bar">
      <button 
        :class="{ active: currentComponent === 'Home' }"
        @click="currentComponent = 'Home'"
      >
        Trang chủ
      </button>

      <button 
        :class="{ active: currentComponent === 'Product' }"
        @click="currentComponent = 'Product'"
      >
        Sản phẩm
      </button>

      <button 
        :class="{ active: currentComponent === 'Contact' }"
        @click="currentComponent = 'Contact'"
      >
        Liên hệ
      </button>
    </nav>

    <!-- Dynamic Component: Bắt buộc sử dụng theo yêu cầu đề bài 
    <main class="content">
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Home,
    Product,
    Contact
  },
  data() {
    return {
      // Giá trị 'Home' trùng với tên đại diện đã đăng ký ở mục `components`
      currentComponent: 'Home'
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 30px auto;
  text-align: center;
}
.nav-bar {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}
button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 4px;
}
button.active {
  background-color: #1976d2;
  color: white;
  border-color: #1976d2;
}
.content {
  margin-top: 15px;
}
</style> -->

/* Phần bài tập Keep-alive */
<!--
<template>
  <div id="app">
    <h2>So Sánh Dynamic Component & Keep-Alive</h2>

    <!-- 1. Thanh chọn Chế độ (Bật/Tắt Keep-Alive) --
    <div class="toggle-mode">
      <span><strong>Chế độ: </strong></span>
      <button 
        :class="{ active: useKeepAlive }" 
        @click="useKeepAlive = true"
      >
        Phiên bản B (Có Keep-Alive)
      </button>
      <button 
        :class="{ active: !useKeepAlive }" 
        @click="useKeepAlive = false"
      >
        Phiên bản A (Không Keep-Alive)
      </button>
    </div>

    <!-- 2. Thanh điều hướng 3 Trang --
    <nav class="nav-bar">
      <button 
        :class="{ selected: currentComponent === 'Home' }"
        @click="currentComponent = 'Home'"
      >
        Trang Chủ
      </button>
      <button 
        :class="{ selected: currentComponent === 'ProductForm' }"
        @click="currentComponent = 'ProductForm'"
      >
        Form Sản Phẩm
      </button>
      <button 
        :class="{ selected: currentComponent === 'Contact' }"
        @click="currentComponent = 'Contact'"
      >
        Liên Hệ
      </button>
    </nav>

    <hr />

    <!-- 3. Khu vực hiển thị linh hoạt --
    <main class="content-area">
      <p class="badge">
        Trạng thái hiện tại: 
        <strong>{{ useKeepAlive ? 'Đang BẬT Keep-Alive' : 'Đang TẮT Keep-Alive' }}</strong>
      </p>

      <!-- PHIÊN BẢN B: Có Keep-Alive (Giữ lại dữ liệu input) --
      <keep-alive v-if="useKeepAlive">
        <component :is="currentComponent" />
      </keep-alive>

      <!-- PHIÊN BẢN A: Không Keep-Alive (Mất dữ liệu input khi chuyển trang) --
      <component :is="currentComponent" v-else />
    </main>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import ProductForm from './components/Product.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Home,
    ProductForm,
    Contact
  },
  data() {
    return {
      currentComponent: 'ProductForm', // Mặc định mở Form trước để dễ test input
      useKeepAlive: true             // Mặc định bật Keep-Alive
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 550px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.toggle-mode, .nav-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  align-items: center;
}
button {
  padding: 6px 12px;
  border: 1px solid #aaa;
  background-color: #f8f9fa;
  cursor: pointer;
  border-radius: 4px;
}
button.active {
  background-color: #2e7d32;
  color: white;
  border-color: #2e7d32;
  font-weight: bold;
}
button.selected {
  background-color: #0288d1;
  color: white;
  border-color: #0288d1;
}
.badge {
  background-color: #f0f0f0;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.85rem;
  margin-bottom: 15px;
}
.content-area {
  margin-top: 10px;
}
</style> -->

/*Bài tập tổng hợp Components In-Depth */

<template>
  <div id="app">
    <h1>Quản Lý Sản Phẩm - Project Tổng Hợp</h1>

    <!-- 1. CustomInput (v-model, $refs) -->
    <div class="panel">
      <CustomInput ref="shopInputRef" v-model="shopName">
        <template v-slot:label>Tên Cửa Hàng (v-model): </template>
      </CustomInput>

      <button @click="focusShopInput">Focus Input ($refs)</button>
      <button @click="triggerEventBus">Bắn Thông Báo (EventBus)</button>
    </div>

    <!-- 2. Nút chuyển Tab (Dynamic Component) -->
    <div class="tabs">
      <button 
        :class="{ active: currentTab === 'ProductList' }" 
        @click="currentTab = 'ProductList'"
      >
        Danh Sách ({{ products.length }})
      </button>

      <button 
        :class="{ active: currentTab === 'ProductForm' }" 
        @click="currentTab = 'ProductForm'"
      >
        Thêm Mới (.sync & keep-alive)
      </button>

      <button 
        :class="{ active: currentTab === 'ProductDetail' }" 
        @click="currentTab = 'ProductDetail'"
      >
        Chi Tiết (Async Component)
      </button>
    </div>

    <hr />

    <!-- 3. Dynamic Component + keep-alive -->
    <keep-alive include="ProductForm">
      <component 
        :is="currentTab" 
        :products="products"
        :newProductName.sync="tempProductName"
        @add-product="handleAddProduct"
      >
        <!-- Scoped Slot nhận dữ liệu từ ProductList -->
        <template v-slot:default="slotProps">
          <ProductCard>
            <!-- Named Slot: header -->
            <template v-slot:header>
              <h4>{{ slotProps.product.name }}</h4>
            </template>

            <!-- Default Slot -->
            <p><strong>Giá:</strong> {{ slotProps.product.price.toLocaleString() }} VNĐ</p>

            <!-- Named Slot: footer + $emit -->
            <template v-slot:footer>
              <button class="btn-delete" @click="deleteProduct(slotProps.product.id)">Xóa ($emit)</button>
            </template>
          </ProductCard>
        </template>
      </component>
    </keep-alive>

    <!-- Hiển thị dữ liệu đồng bộ từ .sync -->
    <p v-if="tempProductName && currentTab !== 'ProductForm'">
      Sản phẩm đang nhập dở từ Form (.sync): <strong>{{ tempProductName }}</strong>
    </p>
  </div>
</template>

<script>
import CustomInput from './components/CustomInput.vue'
import ProductList from './components/ProductList.vue'
import ProductCard from './components/ProductCard.vue'
import EventBus from './eventBus'

export default {
  name: 'App',
  components: {
    CustomInput,
    ProductList,
    ProductCard,
    ProductDetail: () => import('./components/ProductDetail.vue'),
    ProductForm: () => import('./components/ProductForm.vue')
  },
  data() {
    return {
      shopName: 'TechStore VN',
      currentTab: 'ProductList',
      tempProductName: '',
      products: [
        { id: 1, name: 'iPhone 15', price: 20000000 },
        { id: 2, name: 'MacBook M2', price: 25000000 }
      ]
    }
  },
  provide() {
    return {
      shopName: this.shopName
    }
  },
  methods: {
    // Nhận object newProduct được $emit từ ProductForm.vue
    handleAddProduct(newProduct) {
      this.products.unshift(newProduct) // Thêm sản phẩm mới lên đầu danh sách
      this.tempProductName = ''         // Reset ô tên sản phẩm (.sync)
      this.currentTab = 'ProductList'  // Tự động chuyển về tab Danh Sách để xem kết quả
    },
    focusShopInput() {
      this.$refs.shopInputRef.focusInput()
    },
    triggerEventBus() {
      EventBus.$emit('global-notify', 'Khuyến mãi khủng giảm 20% hôm nay!')
    },
    deleteProduct(id) {
      this.products = this.products.filter(p => p.id !== id)
    }
  }
}
</script>

<style>
#app { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
.panel, .tabs { display: flex; gap: 8px; margin-bottom: 15px; align-items: center; }
button { padding: 6px 12px; cursor: pointer; border-radius: 4px; border: 1px solid #aaa; background: #f0f0f0; }
button.active { background-color: #0288d1; color: white; border-color: #0288d1; font-weight: bold; }
button:hover { opacity: 0.9; }
.btn-delete { background-color: #e53935; color: white; border: none; }
</style>