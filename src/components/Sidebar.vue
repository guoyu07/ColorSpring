<!-- Template -->
<template>
    <aside class="sidebar">
        <!--<div class="logo">ColorSpring</div>-->
        <sidebar-nav></sidebar-nav>
    </aside>
</template>

<!-- JS-->
<script>


    import SidebarNav from '../components/SidebarNav.vue'

    export default {

        name: 'Sidebar',

        components: {
            SidebarNav
        }

    }
</script>


<!-- CSS -->
<style lang="scss">

    @import './src/scss/main.scss';

    aside {
        height: 100vh;
        order: 1;
        width: $sidebar-width;
        position: fixed;

        background: #2B3239;
        color: #efefef;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: auto;
    }

    .logo {
        background: black;
        font-size: 12px;
        text-align: center;
        padding: 20px 0;
    }
</style>