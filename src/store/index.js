import Vue from 'vue'
import Vuex from 'vuex'

import articolo from './articolo'
import luogo from './luogo'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    articolo: articolo,
    luogo: luogo,
    user: user,
    shared: shared
  }
})
