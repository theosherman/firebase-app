import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'

Vue.use(Vuex)

pathify.options.mapping = 'simple'

const state = {
  user: null
}

export default new Vuex.Store({
  state,
  mutations: make.mutations(state),
  plugins: [ pathify.plugin ],
})
