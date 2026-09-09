<template>
  <div class="product-card">
    <header class="card-header">
      <slot name="header"></slot>
    </header>

    <div class="card-body">
      <slot></slot>
    </div>

    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 12px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.card-header {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
  margin-bottom: 12px;
}
.card-footer {
  border-top: 1px solid #f0f0f0;
  padding-top: 8px;
  margin-top: 12px;
}
</style>