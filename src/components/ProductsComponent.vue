<template>
<div v-if="type == 'displayProducts'">
    <div v-for="(item, i) in inventory" :key="i" class="card">
        <!-- <ErrorBoundary :fall-back="fallBack" :key="i"> -->
            <product-list :key="i" @add="addToCart" :item="item"></product-list>
        <!-- </ErrorBoundary> -->
    </div>
</div>
<cart-view @remove="removeItem" :shoppingCart="shoppingCart" :cartSubtotal="cartSubtotal" v-if="type == 'displayCart'"></cart-view>
</template>

<script>
import ProductList from '../views/ProductList.vue'
import {mapActions, mapGetters} from 'vuex';
import CartView from '../views/CartView.vue'
// import ErrorBoundary from "vue-error-boundary";
// import ErrorView from '../views/layouts/ErrorView.vue'
import * as types from '@/store/types';
export default {
    data : () => ({
        //fallback : ErrorView
    }),
    props:['inventory','type'],
    components:{
        ProductList,
        CartView,
        //ErrorBoundary
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