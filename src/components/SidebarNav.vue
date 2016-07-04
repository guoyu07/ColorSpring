<!-- Template -->
<template>
    <ul class="sidebar-nav">
        <li v-if="tg"><a href="" title="Display as Grid" @click.prevent="togglegrid()"><img src="../assets/gridicon.svg"></a></li>
        <li v-else><a href="" title="Display as List" @click.prevent="togglegrid()"><img src="../assets/listicon.svg"></a></li>
    </ul>

    <ul class="sidebar-nav">
        <li><a href="" title="Sort colors alphabetically" class="multicolor rounded" @click.prevent="updatecolorfilter()"></a></li>

        <li v-for="item in links">
            <a href="" class="rounded" title="Show {{ item.colorgrouplinktitle }}" @click.prevent="updatecolorfilter(item.colorgrouplinktitle )" v-bind:style="{ background: item.linkbgcolor }"></a>
        </li>
    </ul>

    <ul class="sidebar-nav">
        <li><a href="" title="Search Color Names">&#128270;</a></li>
    </ul>
</template>

<!-- JS-->
<script>

    import * as actions from '../actions'

    export default {

        name: 'sidebar-nav',

        vuex: {
            getters: {
                colorFilter: state => state.colorFilter,
                toggleGrid: state => state.togglegridvalue,
                tg: state => state.toggleGrid,
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
        // background: black;
        color: #ddd;
    }

    .sidebar-nav img {
        max-width: 50%;
    }

    .multicolor {
        background: linear-gradient(to right,
            red 10%, hotpink 10%,
            hotpink 20%, tomato 20%,
            tomato 30%, gold 30%,
            gold 40%, darkorchid 40%,
            darkorchid 50%, seagreen 50%,
            seagreen 60%, dodgerblue 60%,
            dodgerblue 70%, sienna 70%,
            sienna 80%, white 80%,
            white 90%, silver 90% );
    }
</style>