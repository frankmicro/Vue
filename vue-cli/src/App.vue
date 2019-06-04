<template>
    <div class="container">
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
           <h1>Built in Directive</h1>
           <p v-highlight:background.delayed="'blue'">ss</p>
           <p v-local-highlight:background.delayed="'blue'">ss</p>
       </div> 
    </div>
</template>

<script>
    export default {
      directives:{
        'local-highlight':{
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
        }
      }
    }
</script>

<style>

</style>
