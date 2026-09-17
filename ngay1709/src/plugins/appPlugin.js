//Kiến thức: Plugin, install(), options, Vue.use(), Vue.prototype, $, Plugin + Component, Plugin + Directive, Plugin + Mixin

export const AppPlugin = {
  install(Vue, options = {}) {
    // 1. Vue.prototype & $ trong Vue
    Vue.prototype.$appName = options.appName || 'Vue 2 Product Manager';
    Vue.prototype.$notify = function (msg) {
      alert(`[${this.$appName}] ${msg}`);
    };

    // 2. Plugin + Mixin (Global Mixin)
    Vue.mixin({
      created() {
        if (this.$options.name) {
          // Log tên component khi khởi tạo
        }
      }
    });

    // 3. Plugin + Directive (Global Directive từ Plugin)
    Vue.directive('status-badge', {
      bind(el, binding) {
        el.style.padding = '4px 8px';
        el.style.borderRadius = '4px';
        el.style.fontSize = '12px';
        el.style.fontWeight = 'bold';
        if (binding.value) {
          el.style.backgroundColor = '#d4edda';
          el.style.color = '#155724';
        } else {
          el.style.backgroundColor = '#f8d7da';
          el.style.color = '#721c24';
        }
      }
    });

    // 4. Plugin + Component (Global Component từ Plugin)
    Vue.component('PluginBadge', {
      render(h) {
        return h('span', { style: { color: 'gray', fontSize: '11px' } }, `v1.0 - ${options.env || 'prod'}`);
      }
    });
  }
};