<template>
    <div id="app" class="flex-container">
        <!--<modal></modal>-->
        <sidebar></sidebar>
        <color-container></color-container>
    </div>
</template>

<script>
    import Modal from './components/Modal'
    import Sidebar from './components/Sidebar'
    import ColorContainer from './components/ColorContainer'

    export default {
        components: {
            Modal,
            Sidebar,
            ColorContainer
        }
    }
</script>

<style lang="scss">

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
