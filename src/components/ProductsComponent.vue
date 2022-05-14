<template>
<product-list @add="addToCart" v-if="type == 'displayProducts'" :inventory="inventory"></product-list>
<cart-view @remove="removeItem" :shoppingCart="shoppingCart" :cartSubtotal="cartSubtotal" v-if="type == 'displayCart'"></cart-view>
</template>

<script>
import ProductList from '../views/ProductList.vue'
import {mapActions, mapGetters} from 'vuex';
import CartView from '../views/CartView.vue'
import * as types from '@/store/types';
export default {
    props:['inventory','type'],
    components:{
        ProductList,
        CartView
    },
    computed : {
    ...mapGetters({
        shoppingCart : types.GET_SHOPPING_CART,
        cartSubtotal : types.GET_CART_SUBTOTAL
        })
    },
    methods: {
        addToCart(id) {
            let payload = this.inventory.find(res => res.id == id)
            this.dispatchToCart(payload)
        },
        ...mapActions({
                dispatchToCart : types.ADD_TO_CART,
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

<style>

</style>