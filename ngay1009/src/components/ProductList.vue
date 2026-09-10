/*Bài tập tổng hợp Components In-Depth */
(Dùng Props, $emit, Scoped Slot, EventBus, provide/inject)

<template>
  <div class="list-box">
    <h3>Cửa hàng: {{ shopName }} (Dùng inject)</h3>

    <!-- Lắng nghe EventBus -->
    <div v-if="busMsg" class="alert">{{ busMsg }}</div>

    <!-- Scoped Slot: Duyệt danh sách và truyền item ra ngoài -->
    <div v-for="item in products" :key="item.id">
      <slot :product="item"></slot>
    </div>
  </div>
</template>

<script>
import EventBus from '../eventBus'

export default {
  name: 'ProductList',
  inject: ['shopName'],
  props: {
    products: { type: Array, required: true }
  },
  data() {
    return { busMsg: '' }
  },
  created() {
    EventBus.$on('global-notify', (msg) => {
      this.busMsg = msg
    })
  }
}
</script>

<style scoped>
.list-box { background: #f1f8e9; padding: 15px; border-radius: 6px; }
.alert { background: #ffe0b2; padding: 6px 10px; margin-bottom: 10px; border-radius: 4px; }
</style>