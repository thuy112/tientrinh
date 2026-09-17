<script>
export default {
  name: 'ProductButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'primary'
    }
  },
  render(h) {
    return h(
      'button',
      {
        attrs: { type: this.type },
        style: {
          padding: '8px 16px',
          marginRight: '8px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: this.variant === 'primary' ? '#007bff' : '#6c757d',
          color: '#fff'
        },
        on: {
          click: (event) => this.$emit('click', event)
        }
      },
      this.$slots.default
    );
  }
};
</script>