<!-- Template -->
<template>
    <aside class="sidebar">
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

    @import './src/scss/variables.scss';

    aside {
        height: 100vh;
        order: 1;
        width: $sidebar-width;
        position: fixed;
        left: 0;

        background: $sidebar-bg;
        color: #efefef;
        overflow: auto;
    }

</style>