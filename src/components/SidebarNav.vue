<!-- Template -->
<template>
    <ul class="sidebar-nav">
        <li class="sidebar-nav-logo" @click.prevent="updatecolorfilter()"><a href="" title="Show All Colors" class="sidebarnav-image" ><img src="../assets/cs_logo.svg" title="Show All Colors"></a></li>
    </ul>

    <ul class="sidebar-nav">
        <li v-for="item in links">
            <a href="" class="rounded" title="Show {{ item.colorgrouplinktitle }}" @click.prevent="updatecolorfilter(item.colorgrouplinktitle )" v-bind:style="{ background: item.linkbgcolor }"></a>
        </li>
    </ul>

    <ul class="sidebar-nav">
        <li v-if="tg"><a href="" title="Display as Grid" @click.prevent="togglegrid()" class="sidebarnav-image"><img src="../assets/gridicon.svg"></a></li>
        <li v-else><a href="" title="Display as List" @click.prevent="togglegrid()" class="sidebarnav-image"><img src="../assets/listicon.svg"></a></li>
    </ul>

    <ul class="sidebar-nav">
        <li><a href="" title="Search Color Names">Search</a></li>
        <li><a href="" title="About ColorSpring" @click.stop="toggleModal()">Info</a></li>
    </ul>
</template>

<!-- JS-->
<script>

    import Modal from '../components/Modal'

    import * as actions from '../actions'

    export default {

        name: 'sidebar-nav',

        vuex: {
            getters: {
                colorFilter: state => state.colorFilter,
                toggleGrid: state => state.togglegridvalue,
                tg: state => state.toggleGrid,

                toggleModal: state => state.toggleModal,
            },
            actions: actions
        },

        data: function () {
            return {
                links: [
                    { colorgrouplinktitle: 'Reds', linkbgcolor: 'red' },
                    { colorgrouplinktitle: 'Pinks', linkbgcolor: 'hotpink' },
                    { colorgrouplinktitle: 'Oranges', linkbgcolor: 'tomato' },
                    { colorgrouplinktitle: 'Yellows', linkbgcolor: 'gold' },
                    { colorgrouplinktitle: 'Purples', linkbgcolor: 'darkorchid' },
                    { colorgrouplinktitle: 'Greens', linkbgcolor: 'seagreen' },
                    { colorgrouplinktitle: 'Blues', linkbgcolor: 'dodgerblue' },
                    { colorgrouplinktitle: 'Browns', linkbgcolor: 'sienna' },
                    { colorgrouplinktitle: 'Whites', linkbgcolor: 'white' },
                    { colorgrouplinktitle: 'Grays', linkbgcolor: 'silver' },
                ]
            }
        },

        methods: {

        }

    }
</script>


<!-- CSS -->
<style lang="scss">
    .sidebar-nav {
        list-style: none;
        margin: 0;
        padding: 0;
        // margin-top: 20px;
    }

    .sidebar-nav-logo {
        list-style: none;
        margin: 0;
        padding: 20px 0;
        background: black;

    }

    .sidebar-nav li {
        margin-bottom: 10px;
    }

    .sidebar-nav a {
        display: block;

        text-decoration: none;
        padding: 10px 0;
        color: white;
        text-align: center;
        font-size: 12px;
        height: 36px;
        width: 36px;
        margin: 0 auto;
    }

    .sidebar-nav a:hover {
        color: #ddd;
        border-radius: 5px;
    }

    .sidebarnav-image img {
        max-width: 36px;
        max-height: 36px;
    }
</style>