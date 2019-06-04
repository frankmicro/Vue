<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appUser'">User</button>
                <button @click="selectedComponent = 'appServers'">Server</button>
                <component :is="selectedComponent"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';
    import Servers from './components/Servers.vue';

    export default {
        data() {
            return {
                selectedComponent:''
            }
        },
        components: {
            appUser: User,
            appServers:Servers
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
