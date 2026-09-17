// Test buổi 2 
<script>
export default {
  name: 'MyButton',

  methods: {
    xuLyClick() {
      this.$thongBao('Bạn vừa click button!')
    }
  },

  render(h) {
    return h(
      'button',
      {
        class: 'my-button',

        attrs: {
          type: 'button'
        },

        on: {
          click: this.xuLyClick
        }
      },
      this.$slots.default
    )
  }
}
</script>

<style scoped>
.my-button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>