<!--Test buổi 2
<template>
  <div id="app">
    <h1>{{ $appName }}</h1>
    <hr>
    <h2>1. Vue.prototype + Plugin</h2>
    <button @click="thongBao">
      Gọi $thongBao
    </button>
    <hr>
    <h2>2. Global Component</h2>
    <global-box />
    <hr>
    <h2>3. Global Directive</h2>
    <p v-color>
      Dòng này sử dụng v-color
    </p>
    <hr>
    <h2>4. Render Function</h2>
    <my-button>
      Click Render Function
    </my-button>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue'

export default {
  name: 'App',

  components: {
    MyButton
  },

  methods: {
    thongBao() {
      this.$thongBao('Xin chào từ App.vue!')
    }
  }
}
</script> -->


<template>
  <div id="app" class="app-container">
    <h2>{{ $appName }} <PluginBadge /></h2>

    <!-- Search Box -->
    <div class="search-box">
      <label>Tìm kiếm: </label>
      <input v-model="searchQuery" placeholder="Nhập tên sản phẩm..." />
    </div>

    <p><strong>Số sản phẩm:</strong> {{ filteredProducts.length }}</p>

    <!-- Main Content Area -->
    <main class="content-area">
      <keep-alive>
        <component 
          :is="currentTabComponent" 
          :products="filteredProducts"
          @add-product="handleAddProduct"
        />
      </keep-alive>
    </main>

    <!-- Navigation Buttons sử dụng Render Component ProductButton -->
    <div class="nav-buttons">
      <ProductButton 
        :variant="currentTab === 'ProductList' ? 'primary' : 'secondary'"
        @click="currentTab = 'ProductList'"
      >
        Danh sách
      </ProductButton>

      <ProductButton 
        :variant="currentTab === 'ProductForm' ? 'primary' : 'secondary'"
        @click="currentTab = 'ProductForm'"
      >
        Form thêm
      </ProductButton>
    </div>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';
import ProductButton from './components/ProductButton.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    ProductForm,
    ProductButton
  },
  data() {
    return {
      currentTab: 'ProductList',
      searchQuery: '',
      products: [
        { id: 1, name: 'iPhone 15 Pro', price: 28000000, inStock: true },
        { id: 2, name: 'MacBook Air M2', price: 24500000, inStock: true },
        { id: 3, name: 'Bàn phím cơ', price: 1500000, inStock: false },
        { id: 4, name: 'Chuột không dây', price: 850000, inStock: true }
      ]
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab;
    },
    filteredProducts() {
      return this.products.filter(p => 
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    handleAddProduct(newProduct) {
      this.products.push(newProduct);
      this.currentTab = 'ProductList';
    }
  }
};
</script>

<style>
.app-container {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}
.search-box {
  margin-bottom: 15px;
}
.search-box input {
  padding: 6px;
  width: 60%;
}
.content-area {
  min-height: 220px;
  margin-bottom: 20px;
}
.nav-buttons {
  border-top: 1px solid #ccc;
  padding-top: 15px;
}
</style>