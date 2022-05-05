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
              <button @click="addToCart(item.id)" class="btn btn-light">
                Add to cart
              </button>
            </div>
          </div>
        </div>

      </main>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import * as types from '@/store/types';
export default {
  computed: {
    ...mapGetters({
      inventory: types.GET_ACTIVE_INVENTORY
    }),
  },
  methods: {
    addToCart(id) {
      let payload = this.inventory.find(res => res.id == id)
      this.dispatchToCart(payload)
    },
    ...mapActions({
                dispatchToCart : types.ADD_TO_CART
            })
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