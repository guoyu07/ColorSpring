<!-- Template -->
<template>
  <aside class="sidebar">
    <sidebarnav></sidebarnav>
  </aside>
</template>

<!-- JS-->
<script>

  import Sidebarnav from '../components/Sidebarnav.vue'

  export default {

    name: 'Sidebar',

    components: {
      Sidebarnav
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