export default {
  state: {
    loading: false,
    error: null,
    abilities: null,
    nomeSito: 'Ferramenta De Donato',
    bannerSito: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2Fferramentadedonato%2Fbackground_ferramenta.jpg?alt=media&token=8ccede43-4020-45ca-bc21-b7409121bd8d',
    descrizioneSito: 'Ferramenta De Donato',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'ferramentadedonato',
    gruppo: 'ferramenta',
    coordinate_default: {lat: 40.1377228, lng: 16.3022048},
    theme: {
      primary: '#90A4AE',
      secondary: '#7CB342',
      accent: '#ffffff',
      error: '#b71c1c'
    },
    idAnalytics: 'UA-101993142-11',

  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setAbilities (state, payload) {
      state.abilities = payload
    },
    clearError (state) {
      state.error = null
    },
    setPageID (state, payload) {
      state.pageID = payload
    },
    setPlaceID (state, payload) {
      state.placeID = payload
    }
  },
  actions: {
    setAbilities ({commit}, payload) {
      commit('setAbilities', payload)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    abilities (state) {
      return state.abilities
    },
    pageID (state) {
      return state.pageID
    },
    placeID (state) {
      return state.placeID
    },
    dominio (state) {
      return state.dominio
    },
    gruppo (state) {
      return state.gruppo
    },
    nomeSito (state) {
      return state.nomeSito
    },
    descrizioneSito (state) {
      return state.descrizioneSito
    },
    bannerSito (state) {
      return state.bannerSito
    },
    coordinate_default (state) {
      return state.coordinate_default
    },
    theme (state) {
      return state.theme
    },
    idAnalytics (state) {
      return state.idAnalytics
    }
    
  }
}
