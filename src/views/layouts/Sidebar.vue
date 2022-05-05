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

    <div class="cart-body">
      <table class="cart-table">
        <thead>
          <tr>
            <th><span class="sr-only">Icon</span></th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th><span class="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val, key, index) in shoppingCart" :key="key">
            <td><i :class="['icofont-'+val?.icon+'  icofont-3x']"></i></td>
            <td>{{ val?.name }}</td>
            <td>{{ val?.price['USD'] }}</td>
            <td class="center">{{ val.totalQuantity }}</td>
            <td>{{ val?.total }}</td>
            <td class="center">
              <button @click="removeItem(val?.id, index)" class="btn btn-light cart-remove">
                &times;
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="center" v-if="!shoppingCart.length"><em>No items in cart</em></p>
      <div class="spread">
        <span><strong>Total:</strong> ${{ cartSubtotal.toFixed(2) }}</span>
        <button class="btn btn-light">Checkout</button>
      </div>
    </div>
  </div>
</aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '@/store/types'
export default {
  props:['toggle','cart','inventory','remove'],
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
    },
    getPriceByProductName(name) {
      let product = this.inventory.find((val) => {
        return val.name === name;
      });
      return product.price['USD'];
    },
    calculateSubTotal(key) {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + (curr[1] * this.getPriceByProductName(curr[0]));
      },0);
      return total.toFixed(2);
    }
  }
}
</script>

<style scoped></style>