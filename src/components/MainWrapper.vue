<template>
<main class="wrapper">
        <h2>{{ pageName?pageName:'Default' }}</h2>
        <div class="recommended">
            <slot></slot>
        </div>
</main>
</template>

<script>
export default {
    props:['pageName']
}
</script>

<style>

</style>