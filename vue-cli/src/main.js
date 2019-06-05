import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-js-792bf.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
    if (request.method == "POST") {
      request.method = 'PUT'
    }
    next(response => {
      response.json = () => {return {message:response.body}}
    })
})

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase()
})

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
