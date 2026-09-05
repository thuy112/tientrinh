<template>
  <div
    class="product-item"
    :class="{
      selected: product.id === selectedId
    }"
  >
    <div class="product-info">
      <h3>
        {{ product.name }}
      </h3>

      <p>
        💰 Giá:
        <strong>
          {{ formatPrice(product.price) }}
        </strong>
      </p>

      <p v-if="product.stock > 0" class="available">
        🟢 Còn hàng: {{ product.stock }}
      </p>

      <p v-else class="out-of-stock">
        🔴 Hết hàng
      </p>

      <div class="slot-area">
        <slot>
          Nội dung mặc định của slot
        </slot>
      </div>

      <p class="parent-message">
        Con nhận được từ cha: <strong>{{ parentMessage }}</strong>
      </p>

      <div class="actions">
        <button @click="selectProduct">
          Chọn
        </button>

        <button @click="sendToParent">
          Gửi cho cha
        </button>

        <button
          class="delete-button"
          @click="deleteProduct"
        >
          Xóa
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Appcon',

  props: {
    product: {
      type: Object,
      required: true
    },
    selectedId: {
      type: Number,
      default: null
    },
    parentMessage: {
      type: String,
      default: 'Không có dữ liệu từ cha'
    }
  },

  methods: {
    selectProduct() {
      this.$emit(
        'select',
        this.product.id
      )
    },

    sendToParent() {
      this.$emit(
        'child-click',
        `Sản phẩm ${this.product.name} đã được chọn ở component con`
      )
    },

    deleteProduct() {
      this.$emit(
        'delete',
        this.product.id
      )
    },

    formatPrice(price) {
      return price.toLocaleString('vi-VN') + ' VNĐ'
    }
  },

  created() {
    console.log(
      'CON created:',
      this.product.name
    )
  },

  mounted() {
    console.log(
      'CON mounted:',
      this.product.name
    )
  }
}
</script>

<style scoped>
.product-item {
  padding: 15px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: 0.2s;
}

.product-item:hover {
  transform: translateY(-2px);
}

.product-item.selected {
  border: 2px solid #333;
}

.product-info h3 {
  margin-top: 0;
}

.available {
  color: green;
}

.out-of-stock {
  color: red;
}

.slot-area {
  margin: 10px 0;
}

.parent-message {
  margin: 12px 0;
  background: #f3f4f6;
  padding: 8px 10px;
  border-radius: 6px;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.delete-button {
  background: #d33;
}
</style>