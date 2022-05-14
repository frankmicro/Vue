<template>
  <aside class="cart-container">
  <div class="cart">
    <h1 class="cart-title spread">
      <span>
        Cart
        <i class="icofont-cart-alt icofont-1x"></i>
      </span>
      <button @click="toggle" class="cart-close">&times;</button>
    </h1>
    <products-component :type="'displayCart'"/>
  </div>
</aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductsComponent from '../../components/ProductsComponent.vue'
import * as types from '@/store/types'
export default {
  props:['toggle'],
  components:{
    ProductsComponent
  },
  computed : {
    ...mapGetters({
      shoppingCart : types.GET_SHOPPING_CART,
      cartSubtotal : types.GET_CART_SUBTOTAL
    })
  },
  methods : {
    ...mapActions({
      dispatchDeleteCartItem : types.DELETE_CART_ITEM
    }),
    removeItem(id) {
      let payload = {
          'id':id
      }
      this.dispatchDeleteCartItem(payload)
    }
  }
}
</script>

<style scoped></style>