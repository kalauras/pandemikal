export default {
  state: {
    loading: false,
    error: null,
    abilities: null,
    nomeSito: 'Oleificio Sagroli',
    bannerSito: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/articoli%2F-L4SiTbSNPNU4ctwoyuo..jpg?alt=media&token=1cdd9bc4-a4a4-41f1-9177-46eaa917552e',
    descrizioneSito: 'Olio di oliva di Qualità superiore',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'sagroli',
    gruppo: 'attivita',
    coordinate_default: {lat: 40.6637693, lng: 16.6121927},
    theme: {
      primary: '#558B2F',
      secondary: '#827717',
      accent: 'transparent',
      error: '#b71c1c'
    },
    idAnalytics: 'UA-101993142-4',

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
