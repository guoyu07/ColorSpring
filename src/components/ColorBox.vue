<!-- Template -->
<template>
    <div class="colorbox animated zoomIn" v-for="item in colors | filterBy colorFilter in 'colorgroup' " v-bind:style="{ background: item.colorname }">
        <div class="color-info">
            <ul>
                <li class="colorname">{{ item.colorname | uppercase }}</li>
                <li class="colorgroup">{{ item.colorgroup | uppercase }}</li>
                <li class="colorhex">{{ item.colorhex | uppercase }}</li>
                <li class="colorrgb">{{ item.colorrgb | uppercase }}</li>
            </ul>
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

                    { colorname: 'aliceblue', colorhex: '#f0f8ff', colorrgb: '240,248,255', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'antiquewhite', colorhex: '#faebd7', colorrgb: '250,235,215', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'aqua', colorhex: '#00ffff', colorrgb: '0,255,255', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'aquamarine', colorhex: '#7fffd4', colorrgb: '127,255,212', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'azure', colorhex: '#f0ffff', colorrgb: '240,255,255', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'beige', colorhex: '#f5f5dc', colorrgb: '245,245,220', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'bisque', colorhex: '#ffe4c4', colorrgb: '255,228,196', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'black', colorhex: '#000000', colorrgb: '0,0,0', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'blanchedalmond', colorhex: '#ffebcd', colorrgb: '255,235,205', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'blue', colorhex: '#0000ff', colorrgb: '0,0,255', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'blueviolet', colorhex: '#8a2be2', colorrgb: '138,43,226', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'brown', colorhex: '#a52a2a', colorrgb: '165,42,42', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'burlywood', colorhex: '#deb887', colorrgb: '222,184,135', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'cadetblue', colorhex: '#5f9ea0', colorrgb: '95,158,160', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'chartreuse', colorhex: '#7fff00', colorrgb: '127,255,0', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'chocolate', colorhex: '#d2691e', colorrgb: '210,105,30', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'coral', colorhex: '#ff7f50', colorrgb: '255,127,80', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'cornflowerblue', colorhex: '#6495ed', colorrgb: '100,149,237', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'cornsilk', colorhex: '#fff8dc', colorrgb: '255,248,220', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'crimson', colorhex: '#dc143c', colorrgb: '220,20,60', colorgroup: 'reds', colorgrouprank: '3' },
                    { colorname: 'cyan', colorhex: '#00ffff', colorrgb: '0,255,255', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'darkblue', colorhex: '#00008b', colorrgb: '0,0,139', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'darkcyan', colorhex: '#008b8b', colorrgb: '0,139,139', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkgoldenrod', colorhex: '#b8860b', colorrgb: '184,134,11', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'darkgray', colorhex: '#a9a9a9', colorrgb: '169,169,169', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'darkgreen', colorhex: '#006400', colorrgb: '0,100,0', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkkhaki', colorhex: '#bdb76b', colorrgb: '189,183,107', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'darkmagenta', colorhex: '#8b008b', colorrgb: '139,0,139', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'darkolivegreen', colorhex: '#556b2f', colorrgb: '85,107,47', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkorange', colorhex: '#ff8c00', colorrgb: '255,140,0', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'darkorchid', colorhex: '#9932cc', colorrgb: '153,50,204', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'darkred', colorhex: '#8b0000', colorrgb: '139,0,0', colorgroup: 'reds', colorgrouprank: '1' },
                    { colorname: 'darksalmon', colorhex: '#e9967a', colorrgb: '233,150,122', colorgroup: 'reds', colorgrouprank: '7' },
                    { colorname: 'darkseagreen', colorhex: '#8fbc8f', colorrgb: '143,188,143', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'darkslateblue', colorhex: '#483d8b', colorrgb: '72,61,139', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'darkslategray', colorhex: '#2f4f4f', colorrgb: '47,79,79', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'darkturquoise', colorhex: '#00ced1', colorrgb: '0,206,209', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'darkviolet', colorhex: '#9400d3', colorrgb: '148,0,211', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'deeppink', colorhex: '#ff1493', colorrgb: '255,20,147', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'deepskyblue', colorhex: '#00bfff', colorrgb: '0,191,255', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'dimgray', colorhex: '#696969', colorrgb: '105,105,105', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'dodgerblue', colorhex: '#1e90ff', colorrgb: '30,144,255', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'firebrick', colorhex: '#b22222', colorrgb: '178,34,34', colorgroup: 'reds', colorgrouprank: '2' },
                    { colorname: 'floralwhite', colorhex: '#fffaf0', colorrgb: '255,250,240', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'forestgreen', colorhex: '#228b22', colorrgb: '34,139,34', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'fuchsia', colorhex: '#ff00ff', colorrgb: '255,0,255', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'gainsboro', colorhex: '#dcdcdc', colorrgb: '220,220,220', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'ghostwhite', colorhex: '#f8f8ff', colorrgb: '248,248,255', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'gold', colorhex: '#ffd700', colorrgb: '255,215,0', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'goldenrod', colorhex: '#daa520', colorrgb: '218,165,32', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'gray', colorhex: '#808080', colorrgb: '128,128,128', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'green', colorhex: '#008000', colorrgb: '0,128,0', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'greenyellow', colorhex: '#adff2f', colorrgb: '173,255,47', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'honeydew', colorhex: '#f0fff0', colorrgb: '240,255,240', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'hotpink', colorhex: '#ff69b4', colorrgb: '255,105,180', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'indianred', colorhex: '#cd5c5c', colorrgb: '205,92,92', colorgroup: 'reds', colorgrouprank: '4' },
                    { colorname: 'indigo', colorhex: '#4b0082', colorrgb: '75,0,130', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'ivory', colorhex: '#fffff0', colorrgb: '255,255,240', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'khaki', colorhex: '#f0e68c', colorrgb: '240,230,140', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lavender', colorhex: '#e6e6fa', colorrgb: '230,230,250', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'lavenderblush', colorhex: '#fff0f5', colorrgb: '255,240,245', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'lawngreen', colorhex: '#7cfc00', colorrgb: '124,252,0', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'lemonchiffon', colorhex: '#fffacd', colorrgb: '255,250,205', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lightblue', colorhex: '#add8e6', colorrgb: '173,216,230', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightcoral', colorhex: '#f08080', colorrgb: '240,128,128', colorgroup: 'reds', colorgrouprank: '5' },
                    { colorname: 'lightcyan', colorhex: '#e0ffff', colorrgb: '224,255,255', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightgoldenrodyellow', colorhex: '#fafad2', colorrgb: '250,250,210', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lightgrey', colorhex: '#d3d3d3', colorrgb: '211,211,211', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'lightgreen', colorhex: '#90ee90', colorrgb: '144,238,144', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'lightpink', colorhex: '#ffb6c1', colorrgb: '255,182,193', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'lightsalmon', colorhex: '#ffa07a', colorrgb: '255,160,122', colorgroup: 'reds', colorgrouprank: '8' },
                    { colorname: 'lightseagreen', colorhex: '#20b2aa', colorrgb: '32,178,170', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'lightskyblue', colorhex: '#87cefa', colorrgb: '135,206,250', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightslategray', colorhex: '#778899', colorrgb: '119,136,153', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'lightsteelblue', colorhex: '#b0c4de', colorrgb: '176,196,222', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'lightyellow', colorhex: '#ffffe0', colorrgb: '255,255,224', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'lime', colorhex: '#00ff00', colorrgb: '0,255,0', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'limegreen', colorhex: '#32cd32', colorrgb: '50,205,50', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'linen', colorhex: '#faf0e6', colorrgb: '250,240,230', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'magenta', colorhex: '#ff00ff', colorrgb: '255,0,255', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'maroon', colorhex: '#800000', colorrgb: '128,0,0', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'mediumaquamarine', colorhex: '#66cdaa', colorrgb: '102,205,170', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'mediumblue', colorhex: '#0000cd', colorrgb: '0,0,205', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'mediumorchid', colorhex: '#ba55d3', colorrgb: '186,85,211', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'mediumpurple', colorhex: '#9370d8', colorrgb: '147,112,219', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'mediumseagreen', colorhex: '#3cb371', colorrgb: '60,179,113', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'mediumslateblue', colorhex: '#7b68ee', colorrgb: '123,104,238', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'mediumspringgreen', colorhex: '#00fa9a', colorrgb: '0,250,154', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'mediumturquoise', colorhex: '#48d1cc', colorrgb: '72,209,204', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'mediumvioletred', colorhex: '#c71585', colorrgb: '199,21,133', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'midnightblue', colorhex: '#191970', colorrgb: '25,25,112', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'mintcream', colorhex: '#f5fffa', colorrgb: '245,255,250', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'mistyrose', colorhex: '#ffe4e1', colorrgb: '255,228,225', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'moccasin', colorhex: '#ffe4b5', colorrgb: '255,228,181', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'navajowhite', colorhex: '#ffdead', colorrgb: '255,222,173', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'navy', colorhex: '#000080', colorrgb: '0,0,128', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'oldlace', colorhex: '#fdf5e6', colorrgb: '253,245,230', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'olive', colorhex: '#808000', colorrgb: '128,128,0', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'olivedrab', colorhex: '#6b8e23', colorrgb: '107,142,35', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'orange', colorhex: '#ffa500', colorrgb: '255,165,0', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'orangered', colorhex: '#ff4500', colorrgb: '255,69,0', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'orchid', colorhex: '#da70d6', colorrgb: '218,112,214', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'palegoldenrod', colorhex: '#eee8aa', colorrgb: '238,232,170', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'palegreen', colorhex: '#98fb98', colorrgb: '152,251,152', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'paleturquoise', colorhex: '#afeeee', colorrgb: '175,238,238', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'palevioletred', colorhex: '#d87093', colorrgb: '219,112,147', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'papayawhip', colorhex: '#ffefd5', colorrgb: '255,239,213', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'peachpuff', colorhex: '#ffdab9', colorrgb: '255,218,185', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'peru', colorhex: '#cd853f', colorrgb: '205,133,63', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'pink', colorhex: '#ffc0cb', colorrgb: '255,192,203', colorgroup: 'pinks', colorgrouprank: '' },
                    { colorname: 'plum', colorhex: '#dda0dd', colorrgb: '221,160,221', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'powderblue', colorhex: '#b0e0e6', colorrgb: '176,224,230', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'purple', colorhex: '#800080', colorrgb: '128,0,128', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'rebeccapurple', colorhex: '#663399', colorrgb: '102,51,153', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'red', colorhex: '#ff0000', colorrgb: '255,0,0', colorgroup: 'reds', colorgrouprank: '0' },
                    { colorname: 'rosybrown', colorhex: '#bc8f8f', colorrgb: '188,143,143', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'royalblue', colorhex: '#4169e1', colorrgb: '65,105,225', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'saddlebrown', colorhex: '#8b4513', colorrgb: '139,69,19', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'salmon', colorhex: '#fa8072', colorrgb: '250,128,114', colorgroup: 'reds', colorgrouprank: '6' },
                    { colorname: 'sandybrown', colorhex: '#f4a460', colorrgb: '244,164,96', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'seagreen', colorhex: '#2e8b57', colorrgb: '46,139,87', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'seashell', colorhex: '#fff5ee', colorrgb: '255,245,238', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'sienna', colorhex: '#a0522d', colorrgb: '160,82,45', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'silver', colorhex: '#c0c0c0', colorrgb: '192,192,192', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'skyblue', colorhex: '#87ceeb', colorrgb: '135,206,235', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'slateblue', colorhex: '#6a5acd', colorrgb: '106,90,205', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'slategray', colorhex: '#708090', colorrgb: '112,128,144', colorgroup: 'grays', colorgrouprank: '' },
                    { colorname: 'snow', colorhex: '#fffafa', colorrgb: '255,250,250', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'springgreen', colorhex: '#00ff7f', colorrgb: '0,255,127', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'steelblue', colorhex: '#4682b4', colorrgb: '70,130,180', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'tan', colorhex: '#d2b48c', colorrgb: '210,180,140', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'teal', colorhex: '#008080', colorrgb: '0,128,128', colorgroup: 'greens', colorgrouprank: '' },
                    { colorname: 'thistle', colorhex: '#d8bfd8', colorrgb: '216,191,216', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'tomato', colorhex: '#ff6347', colorrgb: '255,99,71', colorgroup: 'oranges', colorgrouprank: '' },
                    { colorname: 'turquoise', colorhex: '#40e0d0', colorrgb: '64,224,208', colorgroup: 'blues', colorgrouprank: '' },
                    { colorname: 'violet', colorhex: '#ee82ee', colorrgb: '238,130,238', colorgroup: 'purples', colorgrouprank: '' },
                    { colorname: 'wheat', colorhex: '#f5deb3', colorrgb: '245,222,179', colorgroup: 'browns', colorgrouprank: '' },
                    { colorname: 'white', colorhex: '#ffffff', colorrgb: '255,255,255', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'whitesmoke', colorhex: '#f5f5f5', colorrgb: '245,245,245', colorgroup: 'whites', colorgrouprank: '' },
                    { colorname: 'yellow', colorhex: '#ffff00', colorrgb: '255,255,0', colorgroup: 'yellows', colorgrouprank: '' },
                    { colorname: 'yellowgreen', colorhex: '#9acd32', colorrgb: '154,205,50' , colorgroup: 'greens' , colorgrouprank: ''}

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
        // align-items: center;
        // justify-content: center;
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
            animation: fadeIn 0.3s;
        }

        ul {

            list-style: none;
            margin: 0;
            padding: 0;
        }

        .colorname {
            font-weight: 600;
            border-bottom: 1px solid white;
            padding-bottom: 5px;
        }

        .colorgroup {
            padding-top: 5px;
        }

        .colorhex {

        }
        .colorrgb {}




    }
</style>