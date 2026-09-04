<template>
  <div id="task-app">
    <h1>📋 QUẢN LÝ CÔNG VIỆC (DAY 2 PROJECT)</h1>

    <!-- ==================== 1. v-if / v-else: Trạng thái hoàn thành ==================== -->
    <div class="card">
      <h2>1. Thống kê tiến độ (v-if / v-else)</h2>
      <p v-if="tasks.length === 0" class="danger-text">
        🚨 Chưa có công việc nào! Hãy thêm việc mới ngay.
      </p>
      <p v-else class="success-text">
        🎯 Bạn đang có tổng cộng {{ tasks.length }} công việc trong danh sách.
      </p>
    </div>


    <!-- ==================== 2. v-show: Ẩn/Hiện hướng dẫn nhanh ==================== -->
    <div class="card">
      <h2>2. Mẹo làm việc hiệu quả (v-show)</h2>
      <button @click="showGuide = !showGuide">
        {{ showGuide ? 'Ẩn mẹo' : 'Xem mẹo nhanh' }}
      </button>

      <div v-show="showGuide" class="guide-box">
        💡 <b>Mẹo:</b> Luôn sử dụng ID làm `:key` và nhớ dùng `this.$set` khi cập nhật phần tử mảng trong Vue 2!
      </div>
    </div>


    <!-- ==================== 3. Nhiều nhánh điều kiện (v-if / v-else-if / v-else) ==================== -->
    <div class="card">
      <h2>3. Đánh giá khối lượng công việc (v-if / v-else-if / v-else)</h2>
      <p>Số lượng task cần làm hiện tại: <b>{{ tasks.length }}</b></p>

      <!-- Nhiều nhánh rẽ hướng hiển thị -->
      <p v-if="tasks.length === 0" class="level-none">💤 Thảnh thơi: Không có việc gì làm!</p>
      <p v-else-if="tasks.length <= 2" class="level-low">🟢 Nhẹ nhàng: Ít việc, thong thả giải quyết.</p>
      <p v-else-if="tasks.length <= 5" class="level-medium">🟡 Vừa sức: Khối lượng công việc ổn định.</p>
      <p v-else class="level-high">🔥 Quá tải: Việc chồng chất, tăng tốc lên nào!</p>
    </div>


    <!-- ==================== 4, 5 & 6. v-for, :Key chuẩn & Thêm/Xóa/Sửa mảng ==================== -->
    <div class="card">
      <h2>4, 5 & 6. Danh sách công việc (v-for & :key)</h2>
      
      <div class="action-bar">
        <input 
          type="text" 
          v-model="newTaskText" 
          placeholder="Nhập tên việc cần làm..." 
          @keyup.enter="addTask"
        />
        <button @click="addTask" class="btn-primary">+ Thêm việc</button>
        <button @click="updateFirstTask" class="btn-warning">Đổi tên việc đầu ($set)</button>
      </div>

      <ul>
        <!-- ĐÚNG: Dùng task.id làm key, KHÔNG dùng index -->
        <li v-for="(task, index) in tasks" :key="task.id" :class="{ completed: task.done }">
          <div class="task-info">
            <input type="checkbox" v-model="task.done" />
            <span>{{ index + 1 }}. <b>{{ task.title }}</b></span>
          </div>
          <button @click="removeTask(index)" class="btn-delete">Xóa</button>
        </li>
      </ul>
    </div>


    <!-- ==================== 7. v-for với Object ==================== -->
    <div class="card">
      <h2>7. Bảng thông số hệ thống (Lặp Object)</h2>
      <ul class="stats-list">
        <li v-for="(val, key) in systemStats" :key="key">
          <code>{{ key }}</code>: <b>{{ val }}</b>
        </li>
      </ul>
    </div>


    <!-- ==================== 8. Lifecycle Demo ==================== -->
    <div class="card">
      <h2>8. Theo dõi Lifecycle & Hoạt động</h2>
      <p>Số lần tương tác giao diện: <b>{{ interactionCount }}</b></p>
      <button @click="interactionCount++">Tăng số đếm</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TaskManagerApp',
  data() {
    return {
      // 1. v-if data
      newTaskText: '',

      // 2. v-show data
      showGuide: false,

      // 4, 5, 6. v-for & Reactivity ($set)
      tasks: [
        { id: 1, title: 'Ôn tập lý thuyết Vue 2', done: true },
        { id: 2, title: 'Thực hành v-if và v-show', done: false },
        { id: 3, title: 'Xử lý lỗi :key trong v-for', done: false }
      ],

      // 7. v-for với Object
      systemStats: {
        version: 'Vue 2.7.16',
        environment: 'Vite Plugin Vue 2',
        author: 'Thuy Developer',
        status: 'Stable 🟢'
      },

      // 8. Lifecycle counter
      interactionCount: 0,
      timer: null
    }
  },

  methods: {
    // Thêm task mới
    addTask() {
      if (!this.newTaskText.trim()) return;
      
      const newItem = {
        id: Date.now(), // ID độc nhất làm key
        title: this.newTaskText,
        done: false
      };

      this.tasks.push(newItem);
      this.newTaskText = ''; // Reset input
    },

    // Xóa task theo index
    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    // Cập nhật task đầu tiên bằng $set chuẩn Vue 2
    updateFirstTask() {
      if (this.tasks.length > 0) {
        const updatedTask = {
          ...this.tasks[0],
          title: '🔥 [Đã cập nhật bằng $set] Ôn tập Vue 2'
        };
        // Dùng $set để Vue nhận diện thay đổi
        this.$set(this.tasks, 0, updatedTask);
      }
    }
  },

  // ==================== VÒNG ĐỜI (LIFECYCLE HOOKS) ====================
  created() {
    console.log('🚀 [created]: Component đã khởi tạo xong dữ liệu tasks:', this.tasks);
  },

  mounted() {
    console.log('💻 [mounted]: Giao diện Task Manager đã được render ra DOM.');
    
    // Giả lập tiến trình ngầm (Ví dụ: đồng bộ dữ liệu 10 giây)
    this.timer = setInterval(() => {
      console.log('🔄 Đang kiểm tra trạng thái đồng bộ hệ thống ngầm...');
    }, 10000);
  },

  beforeUpdate() {
    console.log('⚡ [beforeUpdate]: Dữ liệu thay đổi, chuẩn bị vẽ lại giao diện...');
  },

  updated() {
    console.log('🎨 [updated]: Giao diện đã được vẽ lại xong!');
  },

  beforeDestroy() {
    console.log('🧹 [beforeDestroy]: Hủy component, tiến hành dọn dẹp bộ nhớ...');
    clearInterval(this.timer);
  }
}
</script>

<style>
#task-app {
  font-family: Arial, sans-serif;
  max-width: 650px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f6f8;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
}

h1 {
  color: #35495e;
  text-align: center;
  margin-bottom: 20px;
}

.card {
  background: white;
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.action-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input[type="text"] {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 14px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: white;
}

.btn-primary { background-color: #42b883; }
.btn-warning { background-color: #f39c12; }
.btn-delete { background-color: #e74c3c; padding: 4px 8px; font-size: 12px; }

button:hover { opacity: 0.9; }

.success-text { color: #27ae60; font-weight: bold; }
.danger-text { color: #c0392b; font-weight: bold; }

/* Style cho các nhánh điều kiện */
.level-none { color: #7f8c8d; font-weight: bold; }
.level-low { color: #27ae60; font-weight: bold; }
.level-medium { color: #d35400; font-weight: bold; }
.level-high { color: #c0392b; font-weight: bold; }

.guide-box {
  margin-top: 10px;
  padding: 10px;
  background-color: #e8f8f5;
  border: 1px dashed #27ae60;
  border-radius: 4px;
  font-size: 14px;
}

ul {
  padding-left: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fafafa;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #eee;
}

li.completed span {
  text-decoration: line-through;
  color: #888;
}

.stats-list li {
  background: #fff;
  border: none;
  border-bottom: 1px solid #f0f0f0;
  padding: 6px 0;
}
</style>