<template>
  <div>
    <button v-on:click="addToCart">Add to cart</button>
    <p>Cart{{ state }}</p>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  ref,
} from "vue";

export default {
  setup() {
    onBeforeMount(() => {//very first to be loaded
      console.log("Component is onBeforeMount!");
    });
    onMounted(() => {//last to be loaded
      console.log("Component is mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Component is onBeforeUpdate!");
    });
    onUpdated(() => {
      console.log("Component is Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Component is onBeforeUnmount!");
    });
    onUnmounted(() => {
      console.log("Component is un mounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });
    onRenderTracked(({ key, target, type }) => {//on rendering track
      console.log("onRenderTriggered!")
      console.log({ key, target, type });
      /* This will be logged when component is rendered for the first time:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
    });
    onRenderTriggered(({ key, target, type }) => {
      console.log("onRenderTriggered!")
      console.log({ key, target, type });
      /* This will be logged when component is rendered for the first time:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
    });

    let state = ref(0);
    const addToCart = () => {
      state.value += 1;
    };
    return {
      state,
      addToCart,
    };
  },
};
</script>

<style scoped></style>