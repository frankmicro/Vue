<template>
    <ul class="nav nav-pills">
        <router-link tag="li" :to="{name:'home'}" active-class="active"><a>Home</a></router-link>
        <router-link tag="li" :to="{name:'users'}" active-class="active"><a>User</a></router-link>
        <router-link tag="li" :to="{name:'login'}" active-class="active" exact><a>Logout</a></router-link>
    </ul>
</template>

