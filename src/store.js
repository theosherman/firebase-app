import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'
import router from '@/router'

Vue.use(Vuex)

pathify.options.mapping = 'simple'

const state = {
  user: null,
  alreadyRedirected: false
}

const actions = {
  setUser({ commit }, user) {
    commit('user', user)
    
    if (!!user && router.currentRoute.path === '/login') {
      router.replace('/account')
    }

    else if (!user && router.currentRoute.path === '/account') {
      router.replace('/login')
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations: make.mutations(state),
  plugins: [ pathify.plugin ],
})
