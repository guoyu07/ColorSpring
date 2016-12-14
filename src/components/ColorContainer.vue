<!-- Template -->
<template>
  <main id="colorGrid">
    <colorbox></colorbox>
  </main>
</template>

<!-- JS-->
<script>

  import store from 'src/store/store.js'
  import Colorbox from '../components/Colorbox.vue'

  export default {

    name: 'colorcontainer',

    components: {
      Colorbox
    },

    methods: {},

    computed: {},

  }

</script>


<!-- CSS -->
<style lang="scss">

  @import './src/scss/variables.scss';
  @import './src/scss/mixins.scss';

  main {
    order: 2;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    margin-left: $sidebar-width;
  }

</style>