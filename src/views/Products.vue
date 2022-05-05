<template>
    <main class="wrapper">
        <h1>Products</h1>

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
</template>

<script>
import * as types from '@/store/types'
import {mapActions} from 'vuex'
export default {
  props:['inventory'],
  created() {

  },
  methods : {
    addToCart(name, index, quantity, id) {
      let payload = {
        "name" : name,
        "index" : index,
        "quantity" : quantity,
        "id" : id
      }
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
