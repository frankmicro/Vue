<template>
    <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <a @click="toggle" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ cartQuantity }})</span>
    </a>
  </header>
</template>

<script>
import * as types from '@/store/types'
import {mapGetters} from 'vuex'
export default {
    computed: {
      ...mapGetters({
        cartQuantity : types.GET_CART_SUBQUANTITY
      }),
    },
    props: ['toggle'],
    watch:{
      cartQuantity(newValue) {
        if (newValue > 6) {
          alert("only 6 product allowed!")
        }
      }
    }
}
</script>