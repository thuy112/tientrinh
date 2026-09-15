/* export default {
  namespaced: true, // Bắt buộc để định danh module
  state: {
    count: 0,
    username: 'Hiếu',
    products: [
      { id: 1, name: 'Mũ bảo hiểm Fullface', price: '1.200.000đ' },
      { id: 2, name: 'Găng tay xe máy', price: '150.000đ' },
      { id: 3, name: 'Tai nghe Bluetooth', price: '450.000đ' }
    ]
  },
  getters: {
    productCount: (state) => state.products.length,
    allProducts: (state) => state.products
  },
  mutations: {
    INCREMENT(state) {
      state.count++
    },
    SET_PRODUCTS(state, newProducts) {
      state.products = newProducts
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
    },
    fetchProductsAsync({ commit }) {
      setTimeout(() => {
        const dataFromApi = [
          { id: 1, name: 'Mũ bảo hiểm Fullface', price: '1.200.000đ' },
          { id: 2, name: 'Găng tay xe máy', price: '150.000đ' },
          { id: 3, name: 'Tai nghe Bluetooth', price: '450.000đ' },
          { id: 4, name: 'Bàn phím Cơ RGB', price: '890.000đ' }
        ]
        commit('SET_PRODUCTS', dataFromApi)
      }, 1000)
    }
  }
} */

// Bài tập tổng hợp 2 buổi
import request from '../../api/request'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  getters: {
    productList: state => state.list,
    isLoading: state => state.loading,
    totalProducts: state => state.list.length
  },
  mutations: {
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_PRODUCTS(state, items) {
      state.list = items
    },
    // MUTATION MỚI: Thêm 1 sản phẩm vào mảng state.list
    ADD_PRODUCT(state, newProduct) {
      state.list.unshift(newProduct) // Đưa lên đầu danh sách
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      try {
        const res = await request.get('/products')
        commit('SET_PRODUCTS', res.data)
      } catch (err) {
        console.error(err)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    // ACTION MỚI: Nhận dữ liệu sản phẩm mới và commit mutation
    addProduct({ commit }, productData) {
      // Giả lập tạo ID tự động
      const productWithId = {
        ...productData,
        id: Date.now()
      }
      commit('ADD_PRODUCT', productWithId)
    }
  }
}