<template>
    <div class="row">
        <div class="col-xs-12">
            <header>
                <h1>Server Status</h1>
            </header>
        </div>
        <div>
            <app-server></app-server>
        </div>
        <div>
            <app-serverdetails></app-serverdetails>
        </div>
        <div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import footers from './Footer.vue'
import server from '../Server/Servers.vue'
import serverDetails from '../Server/ServerDetails.vue'

export default {
    components:{
        appFooter:footers,
        appServer:server,
        appServerdetails:serverDetails
    }
}
</script>

<style>

</style>
