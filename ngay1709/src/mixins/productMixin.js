//Kiến thức: Mixins, Option Merging (data, methods, computed, watch, lifecycle, props)

export const productMixin = {
  props: {
    // Mixin + props
    theme: {
      type: String,
      default: 'light'
    }
  },
  data() {
    // Mixin + data
    return {
      discountCode: 'SUMMER2026',
      mixinMessage: 'Mixin initialized'
    }
  },
  computed: {
    // Mixin + computed
    formattedDiscount() {
      return `Mã giảm giá: ${this.discountCode}`;
    }
  },
  watch: {
    // Mixin + watch
    discountCode(newVal) {
      console.log('[Mixin Watch] Discount changed:', newVal);
    }
  },
  created() {
    // Mixin + lifecycle (chạy trước created của Component)
    console.log('[Mixin Lifecycle] Created hook triggered');
  },
  methods: {
    // Mixin + methods
    formatCurrency(val) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
    }
  }
};