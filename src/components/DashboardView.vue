<template>
  <div>
     <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>

      <main class="wrapper">
        <h2>Top Recommended</h2>
    <!-- <button @click="$store.dispatch('increaseCounter')">Counter {{ $store.state.counter }}</button> -->
    <!-- <button class="btn btn-primary" @click="incrementClick">Increment {{ doubleCounter }}</button> -->
    <!-- <p :style="{ color : $store.state.colorCode }">{{ $store.getters.counterSquared }}</p> -->
    <!-- <p><input type="text" class="text" v-model="colorCode"></p> -->
        <div class="recommended">
          <div v-for="(item, i) in inventory" :key="i" class="card">
            <div class="card-title">
              {{ item.name }}
            </div>
            <div class="card-body">
              <i :class="['icofont-10x icofont-' + item.icon]"></i>
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>{{ item.type }}</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    ${{ item.price['USD'] }}
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" v-model.number="item.quantity">
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button @click="addToCart(item.name, i, item.quantity, item.id)" class="btn btn-light">
                Add to cart
              </button>
            </div>
          </div>
        </div>

      </main>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import * as types from '@/store/types';
export default {
  //mixins: [fruitMixin],
  created() {
    //console.log(this.inventory) since the processing of the options is finished you have access to reactive data properties and change them if you want. At this stage DOM has not been mounted or added yet. So you cannot do any DOM manipulation here
  },
  mounted() {
   // called after the DOM has been mounted or rendered. Here you have access to the DOM elements and DOM manipulation can be performed for example get the innerHTML
  },
  data() {
    return {
      cart : {}
    }
  },
  computed: {
    ...mapState({
        cartVal: (state) => state.shopping.cart
    }),
    colorCode : { //it has default methods get and set use with v-models
      get() {
        return this.$store.state.colorCode
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue)
      }
    },
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr;
      },0);
    },
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      inventory: types.GET_ACTIVE_INVENTORY
    }),
    //...mapState('shopping',['test'])
  },
  methods: {
    addToCart(name, index, quantity, id) {
      let payload = {
        "name" : name,
        "index" : index,
        "quantity" : quantity,
        "id" : id
      }
      this.dispatchToCart(payload)
    },
    toggleSideBar() {
      this.showSidebar = !this.showSidebar;
    },
    removeItem(name) {
      delete this.cart[name];
    },
    ...mapActions({
                increment: types.COUNTER_INCREMENT,
                decrement: types.COUNTER_DECREMENT,
                dispatchToCart : types.ADD_TO_CART
            }),
    incrementClick() {
      this.increment(100)
    }
  }
}
</script>

<style scoped>
.recommended, .card-container {
    display: inline-block;
}
.card {
    margin-right: 20px;
}
</style>

// Is there any case where created would be used over mounted?
// Created is generally used for fetching data from backend API and setting it to data properties. But in SSR mounted() hook is not present you need to perform tasks like fetching data in created hook only

// What can I use the created event for, in real-life (real-code) situation?
// For fetching any initial required data to be rendered(like JSON) from external API and assigning it to any reactive data properties