<template>
  <Header :toggle="toggleSideBar"/>
  <Sidebar v-if="showSidebar" :toggle="toggleSideBar"/>
  <router-view :inventory="inventory"/>
  
</template>

<script>
import Header from "@/views/layouts/Header.vue"
import Sidebar from "@/views/layouts/Sidebar.vue"
import food from './food.json'
import {mapActions, mapState} from 'vuex'
import * as types from './store/types'

export default {
  components:{
    Sidebar,
    Header
  },
  data() {
    return {
      showSidebar : false
    }
  },
  computed: {
    ...mapState({
        inventory: (state) => state.shopping.inventory
    }),
  },
  methods : {
    toggleSideBar() {
      this.showSidebar = !this.showSidebar
    },
    ...mapActions({
      setInventory: types.SET_INVENTORY,
    })
  },
  created() {
    this.setInventory(food)
  }
}
</script>

<style>

</style>