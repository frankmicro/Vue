<template>
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
            <td>{{ val?.total.toFixed(2) }}</td>
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
</template>

<script>
export default {
    props:['shoppingCart','cartSubtotal'],
    emits:['remove'],
    methods:{
        removeItem(id) {
            this.$emit("remove",id);
        }
    }
}
</script>