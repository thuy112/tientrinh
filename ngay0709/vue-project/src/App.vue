<!-- Bài tập 1: Search Product
<template>
  <div id="app">
    <input v-model="keyword">

    <div
    v-for="product in filteredProducts"
    :key="product.id"
    >
    {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    keyword: '',

    products: [
      {
        id: 1,
        name: 'Laptop',
        price: 15000000
      },
      {
        id: 2,
        name: 'iPhone',
        price: 20000000
      },
      {
        id: 3,
        name: 'Mouse',
        price: 500000
      }
    ]
  }
},
  computed: {
  filteredProducts() {
    // lọc products theo keyword
    const keywordLower = this.keyword.toLowerCase()
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(keywordLower)
      })
  }
}
}
</script> -->

Bài tập 2: Todo List
<!--
<template>
  <div id="app">
    <h1>Todo List</h1>

    <div class="add-todo">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Nhập công việc mới"
        @keyup.enter="addTodo"
      >
      <button @click="addTodo">
        Thêm
      </button>
    </div>

    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <label>
          <input
            v-model="todo.completed"
            type="checkbox"
          >
          <span>{{ todo.title }}</span>
        </label>

        <span v-if="todo.completed"> Hoàn thành</span>
        <span v-else>Chưa hoàn thành</span>

        <button @click="removeTodo(todo.id)">
          Xóa
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      keyword: '',
      todos: [
        {
          id: 1,
          title: 'Học Vue 2',
          completed: false
        },
        {
          id: 2,
          title: 'Học Git',
          completed: true
        }
      ]
    }
  },
  methods: {
    addTodo() {
      const title = this.newTodo.trim()

      if (!title) {
        return
      }

      this.todos.push({
        id: Date.now(),
        title,
        completed: false
      })
      this.newTodo = ''
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    }
  }
}
</script> -->

BÀI TỔNG HỢP TẤT CẢ KIẾN THỨC 4 HÔM HỌC Essentials: lõi của Vue 2

<template>
  <div id="product-app">
    <h1>Quản lý sản phẩm</h1>

    <!-- Khu vực tìm kiếm và lọc sản phẩm -->
    <section class="filters">
      <!-- v-model liên kết nội dung ô nhập với biến keyword -->
      <input v-model="keyword" placeholder="Tìm kiếm sản phẩm">

      <!-- Lọc sản phẩm theo danh mục -->
      <select v-model="selectedCategory">
        <option value="all">Tất cả</option>
        <option value="phone">Điện thoại</option>
        <option value="laptop">Laptop</option>
        <option value="accessory">Phụ kiện</option>
      </select>

      <!-- Lọc sản phẩm theo tình trạng kho -->
      <select v-model="selectedStatus">
        <option value="all">Tất cả</option>
        <option value="in-stock">Còn hàng</option>
        <option value="out-of-stock">Hết hàng</option>
      </select>
    </section>

    <!-- Hiển thị thống kê được tính bằng computed -->
    <p>
      Tổng sản phẩm: {{ totalProducts }} |
      Còn hàng: {{ inStockProducts }} |
      Hết hàng: {{ outOfStockProducts }}
    </p>

    <!-- Form dùng chung cho chức năng thêm và sửa sản phẩm -->
    <section class="product-form">
      <!-- editingId là null thì thêm, ngược lại là cập nhật -->
      <h2>{{ editingId === null ? 'Thêm sản phẩm' : 'Cập nhật sản phẩm' }}</h2>
      <input v-model="newProduct.name" placeholder="Tên sản phẩm">

      <select v-model="newProduct.category">
        <option value="phone">Điện thoại</option>
        <option value="laptop">Laptop</option>
        <option value="accessory">Phụ kiện</option>
      </select>

      <label>
        Giá sản phẩm:
        <input v-model.number="newProduct.price" type="number" min="0" placeholder="Nhập giá sản phẩm">
      </label>
      <label>
        Số lượng trong kho:
        <input v-model.number="newProduct.stock" type="number" min="0" placeholder="Nhập số lượng">
      </label>
      <label>
        <input v-model="newProduct.active" type="checkbox">
        Đang bán
      </label>

      <!-- Hiển thị nút phù hợp với chế độ hiện tại của form -->
      <button v-if="editingId === null" @click="addProduct">Thêm</button>
      <button v-else @click="updateProduct">Cập nhật</button>
      <button v-if="editingId !== null" @click="resetForm">Hủy</button>
    </section>

    <!-- Danh sách sản phẩm sau khi đã tìm kiếm và lọc -->
    <ul class="product-list">
      <li
        v-for="product in filteredProducts"
        :key="product.id"
        :class="{
          'status-in-stock': product.stock > 0,
          'status-out-stock': product.stock === 0
        }"
      >
        <h2>{{ product.name }}</h2>
        <p>Danh mục: {{ categoryName(product.category) }}</p>
        <p>Giá: {{ formatPrice(product.price) }}đ</p>
        <p>Kho: {{ product.stock }}</p>
        <!-- v-if/v-else hiển thị trạng thái dựa vào số lượng tồn kho -->
        <p v-if="product.stock > 0"> Còn hàng</p>
        <p v-else> Hết hàng</p>
        <p>Trạng thái bán: {{ product.active ? 'Đang bán' : 'Ngừng bán' }}</p>
        <!-- Truyền sản phẩm hoặc id vào method khi bấm nút -->
        <button @click="editProduct(product)">Sửa</button>
        <button @click="deleteProduct(product.id)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data chứa dữ liệu gốc của component
  data() {
    return {
      keyword: '',
      selectedCategory: 'all',
      selectedStatus: 'all',
      products: [
        {
          id: 1,
          name: 'iPhone 15',
          category: 'phone',
          price: 20000000,
          stock: 10,
          active: true
        },
        {
          id: 2,
          name: 'MacBook Air M2',
          category: 'laptop',
          price: 25000000,
          stock: 0,
          active: true
        },
        {
          id: 3,
          name: 'AirPods Pro',
          category: 'accessory',
          price: 6000000,
          stock: 5,
          active: true
        },
        {
          id: 4,
          name: 'Dell XPS 13',
          category: 'laptop',
          price: 22000000,
          stock: 0,
          active: false
        },
        {
          id: 5,
          name: 'Samsung Galaxy S24',
          category: 'phone',
          price: 18000000,
          stock: 8,
          active: true
        }
      ],
      newProduct: {
        name: '',
        category: 'phone',
        price: 0,
        stock: 0,
        active: true
      },
      editingId: null
    }
  },
  // computed tự động tính lại khi dữ liệu liên quan thay đổi
  computed: {
    filteredProducts() {
      // Kết hợp đồng thời điều kiện tìm kiếm, danh mục và trạng thái
      const keyword = this.keyword.toLowerCase().trim()

      return this.products.filter(product => {
        const matchesKeyword = product.name.toLowerCase().includes(keyword)
        const matchesCategory = this.selectedCategory === 'all'
          || product.category === this.selectedCategory
        const matchesStatus = this.selectedStatus === 'all'
          || (this.selectedStatus === 'in-stock' && product.stock > 0)
          || (this.selectedStatus === 'out-of-stock' && product.stock === 0)

        return matchesKeyword && matchesCategory && matchesStatus
      })
    },
    totalProducts() {
      // Đếm tổng số sản phẩm
      return this.products.length
    },
    inStockProducts() {
      // Đếm sản phẩm có số lượng lớn hơn 0
      return this.products.filter(product => product.stock > 0).length
    },
    outOfStockProducts() {
      // Đếm sản phẩm có số lượng bằng 0
      return this.products.filter(product => product.stock === 0).length
    }
  },
  // methods xử lý các hành động khi người dùng bấm nút
  methods: {
    categoryName(category) {
      // Đổi mã danh mục thành tên tiếng Việt để hiển thị
      const categories = {
        phone: 'Điện thoại',
        laptop: 'Laptop',
        accessory: 'Phụ kiện'
      }

      return categories[category]
    },
    formatPrice(price) {
      // Định dạng giá theo kiểu số Việt Nam
      return price.toLocaleString('vi-VN')
    },
    addProduct() {
      // Không thêm nếu chưa nhập tên sản phẩm
      if (!this.newProduct.name.trim()) {
        return
      }

      // Thêm sản phẩm mới vào cuối mảng products
      this.products.push({
        ...this.newProduct,
        id: Date.now(),
        name: this.newProduct.name.trim()
      })
      this.resetForm()
    },
    editProduct(product) {
      // Đưa dữ liệu sản phẩm được chọn lên form để sửa
      this.editingId = product.id
      this.newProduct = { ...product }
    },
    updateProduct() {
      // Tìm vị trí sản phẩm đang được sửa
      const index = this.products.findIndex(product => product.id === this.editingId)

      if (index === -1 || !this.newProduct.name.trim()) {
        return
      }

      // $set giúp Vue 2 theo dõi việc thay thế phần tử trong mảng
      this.$set(this.products, index, {
        ...this.newProduct,
        id: this.editingId,
        name: this.newProduct.name.trim()
      })
      this.resetForm()
    },
    deleteProduct(id) {
      // Lọc bỏ sản phẩm có id được truyền vào
      this.products = this.products.filter(product => {
        return product.id !== id
      })

      if (this.editingId === id) {
        this.resetForm()
      }
    },
    resetForm() {
      // Đưa form về trạng thái ban đầu sau khi thêm, sửa hoặc hủy
      this.editingId = null
      this.newProduct = {
        name: '',
        category: 'phone',
        price: 0,
        stock: 0,
        active: true
      }
    },
    replaceFirstProductWithSplice(product) {
      // splice thay thế phần tử trong mảng và vẫn kích hoạt reactivity của Vue 2
      this.products.splice(0, 1, product)
    }
  },
  // watch theo dõi sự thay đổi của dữ liệu
  watch: {
    keyword: {
      // Chạy ngay khi component được tạo và chạy lại khi keyword đổi
      immediate: true,
      handler(newValue, oldValue) {
        console.log('Keyword cũ:', oldValue)
        console.log('Keyword mới:', newValue)
      }
    },
    newProduct: {
      // deep theo dõi cả các thuộc tính bên trong object newProduct
      deep: true,
      handler(newValue) {
        console.log('Form thay đổi:', newValue)
      }
    }
  }
}
</script>

