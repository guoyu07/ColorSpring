<template>
  <div id="app" class="flex-container">
    <modal></modal>
    <sidebar></sidebar>
    <colorcontainer></colorcontainer>
  </div>
</template>

<script>

  import Modal from './components/Modal'
  import Sidebar from './components/Sidebar'
  import Colorcontainer from './components/Colorcontainer'

  export default {
    components: {
      Modal,
      Sidebar,
      Colorcontainer
    }
  }

</script>

<style lang="scss">

  @import './src/scss/variables.scss';
  @import './src/scss/mixins.scss';
  @import './src/scss/main.scss';

  * {
    box-sizing: border-box;
    font-family: "Source Sans Pro", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
  }


  body {
    margin: 0;
    background: #444444;
    font-size: 14px;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
  }

</style>