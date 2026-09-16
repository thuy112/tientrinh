import Vue from 'vue'

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },

  update(el) {
    console.log('v-focus: update')
  },

  unbind(el) {
    console.log('v-focus: unbind')
  }
})