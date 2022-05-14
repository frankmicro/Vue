<template>
  <Main-wrapper :pageName='"Top Recommended"'>
      <Products-component :inventory="inventory" :type="'displayProducts'"/>
    </Main-wrapper>
</template>

<script>
import MainWrapper from '../components/MainWrapper.vue'
import ProductsComponent from '../components/ProductsComponent.vue'
export default {
  props:['inventory'],
  components:{
    MainWrapper,
    ProductsComponent
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
