import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    colorFilter: '',
    toggleGrid: 0,
    toggleModal: 0
}


const mutations = {

    UPDATECOLORFILTER (state, colorgroup) {
        state.colorFilter = colorgroup
    },

    TOGGLEGRID (state, toggleGridValue) {
        state.toggleGrid = !state.toggleGrid
    },

    TOGGLEMODAL (state, toggleModalValue) {
        state.toggleModal = !state.toggleModal
    }

}


export default new Vuex.Store({
    state,
    mutations
})