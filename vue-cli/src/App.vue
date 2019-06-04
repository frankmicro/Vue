<template>
    <div class="container">
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
           <h1>Filter & Mixins</h1>
           <p>{{ text | toUppercase | to-lowercase }}</p>
           <input type="text" v-model="filterText">
           <ul>
               <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
           </ul>
           <hr>
           <!-- <app-list></app-list> -->
       </div> 
    </div>
</template>

<script>
   // import List from './List.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
      mixins: [fruitMixin],
      data() {
          return {
              text:"hello there",
              //fruits:['apple','banana','orange'],
              //filterText:''
          }
      },
      filters:{
          toUppercase(value) {
              return value.toUpperCase()
          }
      },
      components: {
            //appList: List
        }
    }
</script>

<style>

</style>
