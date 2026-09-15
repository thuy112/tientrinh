/* import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product' // Import module product

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product // Khai báo module tại đây
  }
}) */

// Bài tập tổng hợp 2 buổi
import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product
  }
})