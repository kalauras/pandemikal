import Vue from 'vue'
import Vuex from 'vuex'

import articolo from './articolo'
import place from './place'
import luogo from './luogo'
import user from './user'
import shared from './shared'
import langIT from './lang-it'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    articolo: articolo,
    place: place,
    luogo: luogo,
    user: user,
    shared: shared,
    langIT: langIT
  }
})
