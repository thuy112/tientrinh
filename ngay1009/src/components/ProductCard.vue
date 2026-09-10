/*Bài tập tổng hợp Components In-Depth */
(Dùng Default Slot, Named Slot)

<template>
  <div class="card">
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
.card { border: 1px solid #ddd; padding: 12px; margin: 10px 0; border-radius: 6px; background: #fff; }
.card-header { border-bottom: 1px solid #eee; padding-bottom: 6px; }
.card-footer { border-top: 1px solid #eee; padding-top: 6px; margin-top: 8px; }
</style>