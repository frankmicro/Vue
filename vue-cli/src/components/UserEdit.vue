<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>{{ userAge }}</p>
        <button @click="edit">Edit Me!</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
    props:{
        userAge:Number,
    },
    methods: {
        edit() {
            this.userAge = 30
            eventBus.changeAge(this.userAge)
        }
    },
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
