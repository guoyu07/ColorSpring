<!-- Template -->
<template>
    <main id="colorGrid" :class="{'rows': tg}">
        <color-box></color-box>
    </main>
</template>

<!-- JS-->
<script>

    import * as actions from '../actions'

    import ColorBox from '../components/ColorBox.vue'

    export default {

        name: 'color-container',

        components: {
            ColorBox
        },

        vuex: {
            getters: {
                tg: state => state.toggleGrid,
                thingy: state => state.testString
            },
            actions: actions
        },

        methods: {

        }

    }

</script>


<!-- CSS -->
<style lang="scss">

    @import './src/scss/main.scss';

    main {
        order: 2;
        width: 100%;
        height: 100%;
        flex-grow: 1;
        margin-left: $sidebar-width;

        display: flex;
        flex-flow: row wrap;
    }

    main > * {
        flex-basis: 20%;
        max-width: 20%;
    }
    main > * {
        min-height: 140px;
    }

    @media screen and (max-width: 768px) {
        main > * {
            flex-basis: 50%;
            max-width:  50%;
            font-size: 12px;
        }
    }

    main.rows > * {
        flex-basis: 100%;
        max-width: 100%;
    }


</style>