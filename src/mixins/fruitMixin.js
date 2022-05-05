import food from '../food.json'
import * as types from '@/store/types';
import {mapActions, mapGetters, mapState} from 'vuex';
export const fruitMixin = {
   data() {
       return {
           fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
           filterText: '',
           inventory : food
       }
   },
   computed: {
    ...mapState({
        cartVal: (state) => state.shopping.cart
    }),
       filteredFruits() {
           return this.fruits.filter((element) => {
               return element.match(this.filterText);
           }); 
       },
       activeInventory() {
           //return status => this.inventory.filter //in computed argument is passed this way
        return this.inventory.filter((element) => { 
            return element.status == "active"
        })
       },
       allInventory() {
        return this.inventory
       }
   },
   methods : {
    addToShoppingCart(type, index) {
        if (this.cart[type]) {
            this.cart[type] += this.inventory[index].quantity;
          } else {
            this.cart[type] = this.inventory[index].quantity;
          }
          this.dispatchShoppingCart(this.cart)
          this.inventory[index].quantity = 0;
    },
    ...mapActions({
        dispatchShoppingCart: types.ADD_TO_CART 
    }),
   },
   created() {
       console.log('mixins',this.cartVal);
   }
};