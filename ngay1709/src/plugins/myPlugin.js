const MyPlugin = {
  install(Vue, options) {

    // 1. Thêm method dùng chung
    Vue.prototype.$thongBao = function (message) {
      alert(options.prefix + message)
    }

    // 2. Thêm dữ liệu dùng chung
    Vue.prototype.$appName = options.appName

    // 3. Component toàn cục
    Vue.component('global-box', {
      template: `
        <div class="global-box">
          <h3>Global Component</h3>
          <p>Đây là component được đăng ký bởi Plugin.</p>
        </div>
      `
    })

    // 4. Directive toàn cục
    Vue.directive('color', {
      inserted(el) {
        el.style.color = options.color
      }
    })
  }
}

export default MyPlugin