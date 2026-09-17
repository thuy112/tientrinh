//Kiến thức: Custom Directive, Directive Hooks (bind, inserted, update, unbind)

import Vue from 'vue';

// Custom Directive: v-autofocus & v-highlight
Vue.directive('autofocus', {
  inserted(el) {
    el.focus();
  }
});

Vue.directive('highlight', {
  bind(el, binding) {
    el.style.transition = 'background-color 0.3s';
    el.style.backgroundColor = binding.value || '#fff3cd';
  },
  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      el.style.backgroundColor = binding.value;
    }
  },
  unbind(el) {
    el.style.backgroundColor = '';
  }
});