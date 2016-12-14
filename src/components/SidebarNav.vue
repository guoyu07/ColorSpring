<!-- Template -->
<template>
  <div class="sidebar-nav-container">

    <ul class="sidebar-nav top">
      <li class="sidebar-nav-logo" @click.prevent="updatecolorfilter()">
        <a href="" title="Show All Colors" class="sidebarnav-image" ><img src="../assets/cs_logo.svg" title="Show All Colors"></a>
      </li>
      <li v-for="item in links">
        <!--<a href="" class="rounded" title="Show {{ item.colorgrouplinktitle }}" @click.prevent="updatecolorfilter(item.colorgrouplinktitle )" v-bind:style="{ background: item.linkbgcolor }">{{ item.colorgrouplinktitle }}</a>-->
        <a href=""
          v-bind:title="item.colorgrouplinktitle" 
          v-bind:style="{ background: item.linkbgcolor }"
          @click.prevent="updatecolorfilter(item.colorgrouplinktitle )"
        >{{ item.colorgrouplinktitle }}</a>
      </li>
    </ul>
    
    <ul class="sidebar-nav bottom">
      <li v-if="!showasgrid"><a href="" title="Display as Grid" @click.prevent="toggleGrid()" class="sidebarnav-image"><img src="../assets/gridon.svg"></a></li>
      <li v-else><a href="" title="Display as List" @click.prevent="toggleGrid()" class="sidebarnav-image"><img src="../assets/gridoff.svg"></a></li>

      <!--<li><a class="disabled" href="" title="COMING SOON: Search Color Names"><img src="../assets/search.svg"></a></li>-->
      <li><a href="" title="About ColorSpring" @click.stop.prevent="toggleModal()"><img src="../assets/info.svg"></a></li>
    </ul>

  </div>
</template>

<!-- JS-->
<script>

  import Modal from '../components/Modal'  
  import store from 'src/store/store.js'

  export default {

    name: 'sidebarnav',

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
      toggleModal: function(event) {

        if (this.showmodal) {
            // Modal is active
            store.commit('togglemodal', {
              newmodalstate: 0
            })
        } else {
            // Modal is not active
            store.commit('togglemodal', {
              newmodalstate: 1
            })
        }

      },

      toggleGrid: function() {

        if (this.showasgrid) {
            // Grid is active
            store.commit('togglegridview', {
              newgridviewstate: 0
            })
        } else {
            // Grid is not active
            store.commit('togglegridview', {
              newgridviewstate: 1
            })
        }

      },

      updatecolorfilter: function(val) {

        store.commit('updatecolorfilter', {
          newcolorfilter: val
        })

      }

    },

    computed: {

      showmodal: function () {
        return store.state.showmodal
      },

      showasgrid: function () {
        return store.state.gridview
      }

    },

  }
</script>


<!-- CSS -->
<style lang="scss" scoped>

  @import './src/scss/variables.scss';
  @import './src/scss/mixins.scss';

  .sidebar-nav-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .sidebar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    color: white;
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
    color: transparent;
    text-align: center;
    font-size: 12px;
    height: 30px;
    width: 30px;
    margin: 0 auto;
    @include rounded;
  }

  .sidebar-nav a:hover {
    color: transparent;
    border-radius: 10px;
  }

  .sidebarnav-image img {
    max-width: 36px;
    max-height: 36px;
  }

   .disabled {
      pointer-events: none;
      cursor: default;
      opacity: 0.6;
    }

</style>