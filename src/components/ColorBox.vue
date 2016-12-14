<template>
  <ul class="color-list">
    <li 
        class="color-list-item"
        :class="{'rows': !gridview}"
        v-for="item in filterBy(colors, colorfilter)"
        v-bind:style="{ background: item.colorname }"
    >
      <div class="color-info">
        <ul>

          <li :key="item.id" :id="item.colorname" class="colorname">
            {{ item.colorname }}<button class="copybtn" :data-clipboard-text="item.colorname" title="Copy Colorname To Clipboard">&#128203;</button>
          </li>

          <li class="colorgroup">{{ item.colorgroup }}</li>
          <li :key="item.id" :id="item.colorhex" class="colorhex">
            {{ item.colorhex }}<button class="copybtn" :data-clipboard-text="item.colorhex" title="Copy Hex To Clipboard">&#128203;</button>
          </li>
          <li :key="item.id" :id="item.colorrgb" class="colorrgb">
            {{ item.colorrgb }}<button class="copybtn" :data-clipboard-text="item.colorrgb" title="Copy RGB To Clipboard">&#128203;</button>
          </li>

        </ul>
      </div>
    </li>
  </ul>
</template>


<script>

  import store from 'src/store/store.js'

  var clipboard = require('clipboard');
  new clipboard('.copybtn');


  export default {

    name: 'colorbox',

    data: function () {
      return {
        colors: store.state.colors,
      }
    },

    computed: {
      colorfilter: function () {
        return store.state.colorfilter
      },
      gridview: function () {
        return store.state.gridview
      }
    }

  }

</script>


<style lang="scss" scoped>

  @import './src/scss/variables.scss';
  @import './src/scss/mixins.scss';

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .color-list {
    display: flex;
    flex-wrap: wrap;
  }

  .color-list-item {
    display: flex; 
    width: 20%;
    @include transitionAll;
  }

  .copybtn {
    float: right;
    cursor: pointer;

    color: #fff;
    background-color: transparent;

    display: inline-block;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    border: 0;
    padding: 0 10px;
    white-space: nowrap;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px) {
        .color-list-item {
            width:  50%;
            font-size: 12px;
        }
    }

  .rows {
    width: 100%
  }


  .color-info {
    width: 100%;
    margin: 15px;

    padding: 20px;
    opacity: 0;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    cursor: crosshair;
    word-wrap: break-word;

    &:hover {
      opacity: 1;
      @include transitionAll;
    }

    .colorname {
      font-weight: 600;
      border-bottom: 1px solid white;
      padding-bottom: 5px;
      text-transform: uppercase;
    }

    .colorgroup {
      padding-top: 5px;

      &::first-letter{text-transform: uppercase}
    }

    .colorhex {
      text-transform: uppercase;
    }
    .colorrgb {
      text-transform: uppercase;
    }

  }

</style>