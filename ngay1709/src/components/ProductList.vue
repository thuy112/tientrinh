<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  render(h) {
    // Render + v-if
    if (this.products.length === 0) {
      return h('p', { style: { color: '#888', italic: true } }, 'Không tìm thấy sản phẩm nào.');
    }

    // Render + v-for & Dynamic Component
    return h(
      'div',
      { style: { display: 'flex', flexWrap: 'wrap', gap: '10px' } },
      this.products.map((item) => {
        return h(ProductCard, {
          key: item.id,
          props: { product: item }
        });
      })
    );
  }
};
</script>