<template>
  <div>
     <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>
  <Main-wrapper :pageName='"Top Recommended"'>
    <Products-component :inventory="inventory" :type="'displayProducts'" />
  </Main-wrapper>
    <!-- <button @click="$store.dispatch('increaseCounter')">Counter {{ $store.state.counter }}</button> -->
    <!-- <button class="btn btn-primary" @click="incrementClick">Increment {{ doubleCounter }}</button> -->
    <!-- <p :style="{ color : $store.state.colorCode }">{{ $store.getters.counterSquared }}</p> -->
    <!-- <p><input type="text" class="text" v-model="colorCode"></p> -->
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
import MainWrapper from './MainWrapper.vue'
import ProductsComponent from './ProductsComponent.vue'
import * as types from '@/store/types';
export default {
  components:{
    MainWrapper,
    ProductsComponent
  },
  computed: {
    ...mapGetters({
      inventory: types.GET_ACTIVE_INVENTORY
    }),
  }
}
</script>

<style>

</style>