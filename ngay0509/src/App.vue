<template>
  <div id="app">
    <h1>🛒 PRODUCT MANAGER - DAY 3</h1>

    <div class="card">
      <h2>1. Thêm sản phẩm</h2>
      <input
        v-model.trim="newProductName"
        placeholder="Tên sản phẩm"
        @keyup.enter="addProduct"
      />
      <input
        v-model.number="newProductPrice"
        type="number"
        placeholder="Giá sản phẩm"
        @keyup.enter="addProduct"
      />
      <input
        v-model.number="newProductStock"
        type="number"
        placeholder="Số lượng"
        @keyup.enter="addProduct"
      />
      <button @click="addProduct">+ Thêm sản phẩm</button>
    </div>

    <div class="card">
      <h2>2. Tìm kiếm sản phẩm</h2>
      <input
        v-model.trim="search"
        placeholder="Nhập tên sản phẩm..."
      />
      <p>Từ khóa: <strong>{{ search }}</strong></p>
      <p>Số sản phẩm tìm thấy: <strong>{{ filteredProducts.length }}</strong></p>
    </div>

    <div class="card">
      <h2>3. v-show</h2>
      <button @click="showGuide = !showGuide">
        {{ showGuide ? 'Ẩn hướng dẫn' : 'Hiện hướng dẫn' }}
      </button>
      <div v-show="showGuide" class="guide">
        💡 Nội dung này sử dụng <strong>v-show</strong>.
        <br />
        Khi ẩn, element vẫn tồn tại trong DOM, chỉ được thêm:
        <code>display: none</code>
      </div>
    </div>

    <div class="card">
      <h2>4. v-if / v-else</h2>
      <p v-if="filteredProducts.length === 0">
        ❌ Không tìm thấy sản phẩm.
      </p>
      <p v-else>
        ✅ Có {{ filteredProducts.length }} sản phẩm.
      </p>
    </div>

    <div class="card selected-box">
      <h2>5. Sản phẩm đang chọn</h2>
      <div v-if="selectedProduct">
        <p>ID: <strong>{{ selectedProduct.id }}</strong></p>
        <p>Tên: <strong>{{ selectedProduct.name }}</strong></p>
        <p>Giá: <strong>{{ formatPrice(selectedProduct.price) }}</strong></p>
      </div>
      <p v-else>
        Chưa chọn sản phẩm nào.
      </p>
    </div>

    <div class="card">
      <h2>6. Danh sách sản phẩm</h2>
      <p>
        Cha gửi prop cho con: <strong>{{ parentMessage }}</strong>
      </p>
      <p>
        Con gửi sự kiện lại cho cha: <strong>{{ childMessage }}</strong>
      </p>

      <product-item
        v-for="(product, index) in filteredProducts"
        :key="product.id"
        :product="product"
        :selected-id="selectedProductId"
        :parent-message="parentMessage"
        @delete="deleteProduct($event)"
        @select="selectProduct($event)"
        @child-click="handleChildClick($event)"
      >
        <span class="slot-content">
          ⭐ Sản phẩm số {{ index + 1 }} trong danh sách
        </span>
      </product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from './components/Appcon.vue'

export default {
  components: {
    ProductItem
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: 'iPhone 15',
          price: 20000000,
          stock: 5
        },
        {
          id: 2,
          name: 'MacBook Air',
          price: 25000000,
          stock: 3
        },
        {
          id: 3,
          name: 'AirPods Pro',
          price: 6000000,
          stock: 0
        }
      ],
      search: '',
      newProductName: '',
      newProductPrice: null,
      newProductStock: null,
      showGuide: true,
      selectedProductId: null,
      parentMessage: 'Tôi là dữ liệu từ cha gửi xuống con',
      childMessage: 'Chưa có dữ liệu từ con'
    }
  },

  computed: {
    filteredProducts() {
      const keyword = this.search.toLowerCase()
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(keyword)
      })
    },

    selectedProduct() {
      return this.products.find(product => {
        return product.id === this.selectedProductId
      })
    }
  },

  methods: {
    addProduct() {
      if (!this.newProductName) {
        alert('Vui lòng nhập tên sản phẩm!')
        return
      }

      const product = {
        id: Date.now(),
        name: this.newProductName,
        price: this.newProductPrice || 0,
        stock: this.newProductStock || 0
      }

      this.products.push(product)

      this.newProductName = ''
      this.newProductPrice = null
      this.newProductStock = null
    },

    deleteProduct(id) {
      const index = this.products.findIndex(product => {
        return product.id === id
      })

      if (index !== -1) {
        this.products.splice(index, 1)
      }
 
      if (this.selectedProductId === id) {
        this.selectedProductId = null
      }
    },

    selectProduct(id) {
      this.selectedProductId = id
    },

    handleChildClick(message) {
      this.childMessage = `Con vừa gửi: ${message}`
    },

    formatPrice(price) {
      return price.toLocaleString('vi-VN') + ' VNĐ'
    }
  },

  created() {
    console.log('CHA: created')
  },

  mounted() {
    console.log('CHA: mounted')
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.card {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

input {
  padding: 10px;
  margin-right: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #333;
  color: white;
}

button:hover {
  opacity: 0.8;
}

.guide {
  margin-top: 15px;
  padding: 15px;
  background: #fff3cd;
  border-radius: 6px;
}

.selected-box {
  border-left: 5px solid #333;
}

.slot-content {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background: #eee;
  border-radius: 5px;
}

pre {
  background: #222;
  color: white;
  padding: 15px;
  overflow-x: auto;
  border-radius: 6px;
}
</style>