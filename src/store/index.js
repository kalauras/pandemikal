import Vue from 'vue'
import Vuex from 'vuex'

import articolo from './articolo'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    articolo: articolo,
    user: user,
    shared: shared
  }
})
