export default {
  state: {
    loading: false,
    error: null,
    abilities: null,
    nomeSito: 'eBasilicata',
    bannerSito: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/articoli%2F-L4VMUzjXGK4kdSg1HeP..jpg?alt=media&token=b0acf78c-8f9e-4ceb-8c4e-3db07b42cf3f',
    descrizioneSito: 'Una rete che porta la Realtà nel Virtuale e viceversa',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'ebasilicata',
    gruppo: 'area',
    coordinate_default: {lat: 40.6637693, lng: 16.6121927},
    theme: {
      primary: '#260881',
      secondary: '#0275d8',
      accent: '#ffffff',
      error: '#b71c1c'
    },
    idAnalytics: 'UA-101993142-6',

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
