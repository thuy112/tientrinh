- ProductItem.vue
    Đây là component quan trọng nhất của bài.
    Nó sử dụng:
        Props
        type
        required
        default
        validator
        $emit
        truyền dữ liệu qua $emit

<template>
  <div>
    <h2>{{ product.name }}</h2>

    <p>
      Giá:
      {{ product.price }}đ
    </p>

    <p>
      Tồn kho:
      {{ product.stock }}
    </p>

    <p v-if="product.status === 'active'">
        Đang bán
    </p>

    <p v-else>
        Ngừng bán
    </p>

    <button @click="discount">
      Giảm giá 1 triệu
    </button>

    <button @click="remove">
      Xóa sản phẩm
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',

  props: {
    product: {
      type: Object,
      required: true
    },

    status: {
      type: String,

      default: 'active',

      validator: function (value) {
        return ['active', 'inactive'].includes(value)
      }
    }
  },

  methods: {
    discount() {
      const newPrice = this.product.price - 1000000

      this.$emit('change-price', newPrice)
    },

    remove() {
      this.$emit('remove', this.product.id)
    }
  }
}
</script>