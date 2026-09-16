<template>
  <div class="product-card">
    <h3>
      {{ product.name | uppercase }}
    </h3>
    <p>
      Giá:
      <strong>
        {{ product.price | currency }}
      </strong>
    </p>
    <p>
      Plugin:
      {{ $formatPrice(product.price) }}
    </p>
    <p :class="{ 'in-stock': product.stock > 0, 'out-stock': product.stock === 0}">
      {{ product.stock | stockStatus }}
    </p>
    <p>
      Số lượng:
      {{ product.quantity }}
    </p>

    <button @click="decrease">
      -
    </button>

    <button @click="increase">
      +
    </button>

    <button v-if="$isAvailable(product)" class="add-button" @click="addToCart">
      Thêm vào giỏ
    </button>
  </div>
</template>

<script>
import productMixin from '../mixins/productMixin'

export default {
  name: 'ProductCard',

  mixins: [
    productMixin
  ],

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
  increase() {
    this.$emit('update-quantity', this.product.id, this.product.quantity + 1)
  },

  decrease() {
    if (this.product.quantity > 1) {
      this.$emit('update-quantity', this.product.id, this.product.quantity - 1)
    }
  },

  addToCart() {
    this.$emit('add', this.product)
  }
}
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}

.in-stock {
  color: green;
}

.out-stock {
  color: red;
}

button {
  margin: 5px;
  padding: 7px 12px;
  cursor: pointer;
}

.add-button {
  background: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>