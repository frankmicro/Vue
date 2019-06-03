<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username : {{ switchName() }}</p>
        <p>Age : {{ userAge }}</p>
        <button @click="resetName()">Reset</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'

    export default {
        props:{ //props validation set default
            myName: {
                type:String,
                required:true,
                default:''
            },
            userAge:Number,
            resetFn:Function
        },
        created() {
            eventBus.$on('changeAge',(age) => {
                this.userAge = age
            })
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            },
            resetName() {
                this.myName = 'Max'
                this.$emit('nameWasReset', this.myName)
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
