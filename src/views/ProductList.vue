/* eslint-disable vue/no-mutating-props */
<template>
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
              <button @click="addToCart(item.id)" class="btn btn-light">
                Add to cart
              </button>
            </div>
</template>

<script>
export default {
    props:['item'],
    emits:['add'],
    methods:{
        addToCart(id) { 
            this.$emit("add",id);
        }
    }
}
</script>

<style>

</style>