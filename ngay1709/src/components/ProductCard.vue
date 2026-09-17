<!--<script>
import productMixin from '../mixins/productMixin'

export default {
  name: 'ProductCard',

  mixins: [productMixin],

  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>-->


<template>
  <div class="product-card" v-highlight="'#f8f9fa'">
    <h3>{{ product.name | capitalize }}</h3>
    <p class="price">{{ product.price | currencyFormat('VNĐ') }}</p>
    <p>
      Trạng thái: 
      <span v-status-badge="product.inStock">
        {{ product.inStock ? 'Còn hàng' : 'Hết hàng' }}
      </span>
    </p>
    <small>{{ formattedDiscount }}</small>
  </div>
</template>

<script>
import { productMixin } from '../mixins/productMixin';

export default {
  name: 'ProductCard',
  mixins: [productMixin], // Option Merging
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  filters: {
    // Local Filter
    uppercase(value) {
      return value ? value.toUpperCase() : '';
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 180px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.price {
  color: #d9534f;
  font-weight: bold;
}
</style>