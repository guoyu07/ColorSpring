import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    colorFilter: '',
    toggleGrid: 0,
    testString: "Boodle"
}


const mutations = {

    UPDATECOLORFILTER (state, colorgroup) {
        state.colorFilter = colorgroup
    },

    TOGGLEGRID (state, toggleGridValue) {
        state.toggleGrid = !state.toggleGrid
    }

}


export default new Vuex.Store({
    state,
    mutations
})