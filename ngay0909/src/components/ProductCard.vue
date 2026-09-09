<template>
  <div class="product-card">
    <header class="card-header">
      <slot name="header"></slot>
      
      <!-- [MỚI] Sử dụng $parent để đọc dữ liệu từ ProductList.vue -->
      <p class="category-tag">
         Danh mục: <strong>{{ $parent.categoryName }}</strong>
      </p>
    </header>

    <div class="card-body">
      <slot></slot>
    </div>

    <footer class="card-footer">
      <slot name="footer"></slot>
      
      <!-- [MỚI] Sử dụng $root để gọi phương thức trực tiếp từ App.vue -->
      <div class="root-actions">
        <button class="btn-root" @click="$root.logSystemInfo()">
          In log hệ thống ($root)
        </button>
      </div>
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
.category-tag {
  font-size: 0.85rem;
  color: #666;
  margin-top: 4px;
}
.card-footer {
  border-top: 1px solid #f0f0f0;
  padding-top: 8px;
  margin-top: 12px;
}
.root-actions {
  margin-top: 8px;
}
.btn-root {
  background-color: #78909c;
  font-size: 0.8rem;
  padding: 4px 8px;
}
</style>