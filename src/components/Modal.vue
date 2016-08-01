<!-- Template -->
<template>
    <div class="modal" v-show="active" transition="modal">
        <div class="modal-inner">
            <img src="../assets/colorspring_logo.png"><br>
            <p>CSS defines a large set of “named colors” that can be used in place of hex or RGB values. 16 of these named colours are originally from HTML: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, &amp; yellow. The rest mainly derive from the X11 color system, used in Unix derived systems.</p>
            <p>All color names are case-insensitive</p>
            <p>Created with Vue.js</p>
            <button @click.stop="toggleModal">Close</button>
        </div>
    </aside>
</template>

<!-- JS-->
<script>

    export default {

        name: 'Modal',

        components: {

        },

        data: function() {

            return {
                active: false
            }

        },

        methods: {

            toggleModal: function(event) {
                console.log("ToggleModal");
                this.active = ! this.active;
            }

        }

    }

</script>


<!-- CSS -->
<style lang="scss">

    @import './src/scss/main.scss';

    .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 100;
          background-color: rgba(black, .85);

          .modal-active {
              background: red;
          }
    }

    .modal-inner {
        margin: 0 auto;
        padding: 30px;
        max-width: 75%;

        z-index: 101;
        color: #eeeeee;
        font-size: 20px;

    }

// Transitions
.modal-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.modal-enter {
  animation: bounce-in .5s;
}
.modal-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

</style>