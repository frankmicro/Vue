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
    });
    onRenderTriggered(({ key, target, type }) => {
      console.log("onRenderTriggered!")
      console.log({ key, target, type });
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


// When to use methods

// To react on some event happening in the DOM

// To call a function when something happens in your component. You can call a methods from computed properties or watchers.

// When to use computed properties

// You need to compose new data from existing data sources
// You have a variable you use in your template that’s built from one or more data properties
// You want to reduce a complicated, nested property name to a more readable and easy to use one, yet update it when the original property changes
// You need to reference a value from the template. In this case, creating a computed property is the best thing because it’s cached.
// You need to listen to changes of more than one data property
// When to use watchers

// You want to listen when a data property changes, and perform some action
// You want to listen to a prop value change
// You only need to listen to one specific property (you can’t watch multiple properties at the same time)
// You want to watch a data property until it reaches some specific value and then do something

// Is there any case where created would be used over mounted?
// Created is generally used for fetching data from backend API and setting it to data properties. But in SSR mounted() hook is not present you need to perform tasks like fetching data in created hook only

// What can I use the created event for, in real-life (real-code) situation?
// For fetching any initial required data to be rendered(like JSON) from external API and assigning it to any reactive data properties

// created() {
//console.log(this.inventory) since the processing of the options is finished you have access to reactive data properties and change them if you want. At this stage DOM has not been mounted or added yet. So you cannot do any DOM manipulation here
//   },
//   mounted() {
// called after the DOM has been mounted or rendered. Here you have access to the DOM elements and DOM manipulation can be performed for example get the innerHTML
//   },

// colorCode : { //it has default methods get and set use with v-models
//       get() {
//         return this.$store.state.colorCode
//       },
//       set(newValue) {
//         this.$store.dispatch('setColorCode', newValue)
//       }
//     },
// https://codesandbox.io/s/v3o0923ov5?file=/src/components/ContactList.vue
// https://www.npmjs.com/package/vue-error-boundary