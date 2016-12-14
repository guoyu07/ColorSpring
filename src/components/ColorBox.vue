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
          <li class="colorname">{{ item.colorname }}</li>
          <li class="colorgroup">{{ item.colorgroup }}</li>
          <li class="colorhex">{{ item.colorhex }}</li>
          <li class="colorrgb">{{ item.colorrgb }}</li>
        </ul>
      </div>
    </li>
  </ul>
</template>


<script>

  import store from 'src/store/store.js'

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
      text-transform: uppercase
    }
    .colorrgb {}

  }

</style>