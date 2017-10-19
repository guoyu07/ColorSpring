<template>
  <transition name="modal">
  <div class="modal" v-show="showmodal" transition="modal">
    <div class="modal-inner">
      <img src="../assets/colorspring_logo.png"><br>
      <p>CSS defines a large set of “named colors” that can be used in place of hex or RGB values. 16 of these named colours are originally from HTML: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, &amp; yellow. The rest mainly derive from the X11 color system, used in Unix derived systems.</p>
      <p>All color names are case-insensitive</p>
      <p>Created with Vue.js</p>
      <p><a href="https://github.com/pixelspring/ColorSpring">Github Repo</a></p>
      <button @click.stop="toggleModal">Close</button>
    </div>
  </div>
  </transition>
</template>

<script>

  import store from '../store/store.js'

  export default {

    name: 'Modal',

    components: {},

    data: function() {
      return {
      active: false
      }
    },

    methods: {

      toggleModal: function(event) {

        console.log("ToggleModal");

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

      }

    },

    computed: {
      showmodal: function () {
        return store.state.showmodal
      }
    },

  }

</script>


<style lang="scss" scoped>

  @import './src/scss/variables.scss';
  @import './src/scss/mixins.scss';

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 100;
    background-color: rgba(black, .8);
    @include transitionAll;
  }

  .modal-inner {
    margin: 5% auto;
    padding: 50px;
    max-width: 75%;
    z-index: 101;
    color: #eeeeee;
    font-size: 20px;
    background: black;
  }

  // Transitions
  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  button {
    color: #fff;
    background-color: #1eaedb;

    display: inline-block;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #1eaedb;
    height: 38px;
    line-height: 38px;
    padding: 0 30px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    white-space: nowrap;
    box-sizing: border-box;
    margin-bottom: 1.6em;

    &:hover {
      background:   #449754;
      border-color: #449754;
    }
  }

  a {
    color: #1eaedb;
    text-decoration: none;
  }

  /*.modal-enter .modal-inner,
  .modal-leave-active .modal-inner {
    transform: scale(0.9);
  }*/

</style>