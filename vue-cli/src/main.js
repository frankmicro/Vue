import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
    bind(el, binding, vnode) {
      var delay = 0
      if (binding.modifiers['delayed']) {
        delay = 3000
      }
      setTimeout(() => {
          if (binding.args == 'background') {
            el.style.backgroundColor = binding.value
          } else {
            el.style.backgroundColor = binding.value
          }
      }, delay);
    }
})

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
          this.$emit('changeAge',age)
        }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
