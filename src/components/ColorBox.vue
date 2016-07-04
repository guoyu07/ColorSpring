<!-- Template -->
<template>
    <div class="colorbox animated zoomIn" v-for="item in colors | filterBy colorFilter in 'colorgroup' " v-bind:style="{ background: item.colorname }">
        <div class="color-info">
            {{ item.colorname | uppercase }}<br>
            {{ item.colorhex | uppercase }}<br>
            {{ item.colorgroup | uppercase }}
        </div>
    </div>
</template>

<!-- JS-->
<script>

    import * as actions from '../actions'

    export default {

        name: 'color-box',

        vuex: {
            getters: {
                colorFilter: state => state.colorFilter
            },
            actions: actions
        },

        data: function () {
            return {
                colors: [

                    { colorname: 'aliceblue', colorhex: '#f0f8ff', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'antiquewhite', colorhex: '#faebd7', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'aqua', colorhex: '#00ffff', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'aquamarine', colorhex: '#7fffd4', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'azure', colorhex: '#f0ffff', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'beige', colorhex: '#f5f5dc', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'bisque', colorhex: '#ffe4c4', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'black', colorhex: '#000000', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'blanchedalmond', colorhex: '#ffebcd', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'blue', colorhex: '#0000ff', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'blueviolet', colorhex: '#8a2be2', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'brown', colorhex: '#a52a2a', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'burlywood', colorhex: '#deb887', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'cadetblue', colorhex: '#5f9ea0', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'chartreuse', colorhex: '#7fff00', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'chocolate', colorhex: '#d2691e', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'coral', colorhex: '#ff7f50', colorrgb: '', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'cornflowerblue', colorhex: '#6495ed', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'cornsilk', colorhex: '#fff8dc', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'crimson', colorhex: '#dc143c', colorrgb: '', colorgroup: 'reds', colorgrouprank: '3' },
                    { colorname: 'cyan', colorhex: '#00ffff', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'darkblue', colorhex: '#00008b', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'darkcyan', colorhex: '#008b8b', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkgoldenrod', colorhex: '#b8860b', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'darkgray', colorhex: '#a9a9a9', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'darkgreen', colorhex: '#006400', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkkhaki', colorhex: '#bdb76b', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'darkmagenta', colorhex: '#8b008b', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'darkolivegreen', colorhex: '#556b2f', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkorange', colorhex: '#ff8c00', colorrgb: '', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'darkorchid', colorhex: '#9932cc', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'darkred', colorhex: '#8b0000', colorrgb: '', colorgroup: 'reds', colorgrouprank: '1' },
                    { colorname: 'darksalmon', colorhex: '#e9967a', colorrgb: '', colorgroup: 'reds', colorgrouprank: '7' },
                    { colorname: 'darkseagreen', colorhex: '#8fbc8f', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkslateblue', colorhex: '#483d8b', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'darkslategray', colorhex: '#2f4f4f', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'darkturquoise', colorhex: '#00ced1', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'darkviolet', colorhex: '#9400d3', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'deeppink', colorhex: '#ff1493', colorrgb: '', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'deepskyblue', colorhex: '#00bfff', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'dimgray', colorhex: '#696969', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'dodgerblue', colorhex: '#1e90ff', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'firebrick', colorhex: '#b22222', colorrgb: '', colorgroup: 'reds', colorgrouprank: '2' },
                    { colorname: 'floralwhite', colorhex: '#fffaf0', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'forestgreen', colorhex: '#228b22', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'fuchsia', colorhex: '#ff00ff', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'gainsboro', colorhex: '#dcdcdc', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'ghostwhite', colorhex: '#f8f8ff', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'gold', colorhex: '#ffd700', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'goldenrod', colorhex: '#daa520', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'gray', colorhex: '#808080', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'green', colorhex: '#008000', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'greenyellow', colorhex: '#adff2f', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'honeydew', colorhex: '#f0fff0', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'hotpink', colorhex: '#ff69b4', colorrgb: '', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'indianred', colorhex: '#cd5c5c', colorrgb: '', colorgroup: 'reds', colorgrouprank: '4' },
                    { colorname: 'indigo', colorhex: '#4b0082', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'ivory', colorhex: '#fffff0', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'khaki', colorhex: '#f0e68c', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lavender', colorhex: '#e6e6fa', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'lavenderblush', colorhex: '#fff0f5', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'lawngreen', colorhex: '#7cfc00', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'lemonchiffon', colorhex: '#fffacd', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lightblue', colorhex: '#add8e6', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightcoral', colorhex: '#f08080', colorrgb: '', colorgroup: 'reds', colorgrouprank: '5' },
                    { colorname: 'lightcyan', colorhex: '#e0ffff', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightgoldenrodyellow', colorhex: '#fafad2', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lightgrey', colorhex: '#d3d3d3', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'lightgreen', colorhex: '#90ee90', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'lightpink', colorhex: '#ffb6c1', colorrgb: '', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'lightsalmon', colorhex: '#ffa07a', colorrgb: '', colorgroup: 'reds', colorgrouprank: '8' },
                    { colorname: 'lightseagreen', colorhex: '#20b2aa', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'lightskyblue', colorhex: '#87cefa', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightslategray', colorhex: '#778899', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'lightsteelblue', colorhex: '#b0c4de', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightyellow', colorhex: '#ffffe0', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lime', colorhex: '#00ff00', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'limegreen', colorhex: '#32cd32', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'linen', colorhex: '#faf0e6', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'magenta', colorhex: '#ff00ff', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'maroon', colorhex: '#800000', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'mediumaquamarine', colorhex: '#66cdaa', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'mediumblue', colorhex: '#0000cd', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'mediumorchid', colorhex: '#ba55d3', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'mediumpurple', colorhex: '#9370d8', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'mediumseagreen', colorhex: '#3cb371', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'mediumslateblue', colorhex: '#7b68ee', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'mediumspringgreen', colorhex: '#00fa9a', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'mediumturquoise', colorhex: '#48d1cc', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'mediumvioletred', colorhex: '#c71585', colorrgb: '', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'midnightblue', colorhex: '#191970', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'mintcream', colorhex: '#f5fffa', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'mistyrose', colorhex: '#ffe4e1', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'moccasin', colorhex: '#ffe4b5', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'navajowhite', colorhex: '#ffdead', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'navy', colorhex: '#000080', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'oldlace', colorhex: '#fdf5e6', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'olive', colorhex: '#808000', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'olivedrab', colorhex: '#6b8e23', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'orange', colorhex: '#ffa500', colorrgb: '', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'orangered', colorhex: '#ff4500', colorrgb: '', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'orchid', colorhex: '#da70d6', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'palegoldenrod', colorhex: '#eee8aa', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'palegreen', colorhex: '#98fb98', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'paleturquoise', colorhex: '#afeeee', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'palevioletred', colorhex: '#d87093', colorrgb: '', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'papayawhip', colorhex: '#ffefd5', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'peachpuff', colorhex: '#ffdab9', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'peru', colorhex: '#cd853f', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'pink', colorhex: '#ffc0cb', colorrgb: '', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'plum', colorhex: '#dda0dd', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'powderblue', colorhex: '#b0e0e6', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'purple', colorhex: '#800080', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'rebeccapurple', colorhex: '#663399', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'red', colorhex: '#ff0000', colorrgb: '', colorgroup: 'reds', colorgrouprank: '0' },
                    { colorname: 'rosybrown', colorhex: '#bc8f8f', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'royalblue', colorhex: '#4169e1', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'saddlebrown', colorhex: '#8b4513', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'salmon', colorhex: '#fa8072', colorrgb: '', colorgroup: 'reds', colorgrouprank: '6' },
                    { colorname: 'sandybrown', colorhex: '#f4a460', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'seagreen', colorhex: '#2e8b57', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'seashell', colorhex: '#fff5ee', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'sienna', colorhex: '#a0522d', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'silver', colorhex: '#c0c0c0', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'skyblue', colorhex: '#87ceeb', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'slateblue', colorhex: '#6a5acd', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'slategray', colorhex: '#708090', colorrgb: '', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'snow', colorhex: '#fffafa', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'springgreen', colorhex: '#00ff7f', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'steelblue', colorhex: '#4682b4', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'tan', colorhex: '#d2b48c', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'teal', colorhex: '#008080', colorrgb: '', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'thistle', colorhex: '#d8bfd8', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'tomato', colorhex: '#ff6347', colorrgb: '', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'turquoise', colorhex: '#40e0d0', colorrgb: '', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'violet', colorhex: '#ee82ee', colorrgb: '', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'wheat', colorhex: '#f5deb3', colorrgb: '', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'white', colorhex: '#ffffff', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'whitesmoke', colorhex: '#f5f5f5', colorrgb: '', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'yellow', colorhex: '#ffff00', colorrgb: '', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'yellowgreen', colorhex: '#9acd32', colorrgb: '' , colorgroup: 'greens' , colorgrouprank: ''}

                ]
            }
        }
    }

</script>


<!-- CSS -->
<style lang="scss">

    @import './src/scss/main.scss';

    .colorbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .color-info {
        text-align: center;
        width: 80%;
        padding: 20px;
        opacity: 0;
        color: white;
        text-shadow: 0px -1px dimgray;
        background: rgba(0, 0, 0, 0.5);
        cursor: help;
        //cursor: crosshair;
    }

    .color-info:hover {
        opacity: 1;
        animation: fadeIn 0.3s;
    }
</style>