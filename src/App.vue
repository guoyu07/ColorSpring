<template>
    <div id="app" class="flex-container">
        <sidebar></sidebar>
        <color-container></color-container>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar'
    import ColorContainer from './components/ColorContainer'

    export default {
        components: {
            Sidebar,
            ColorContainer,
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
        background: #444;
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
