export default {
  state: {
    loading: false,
    error: null,
    abilities: null,
    nomeSito: 'Biscottificio V.d.S.',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'biscottificiovalledelsinni',
    gruppo: 'attivita',
    coordinate_default: {lat: 40.6637693, lng: 16.6121927},
    theme: {
      primary: '#0277BD',
      secondary: '#FF8F00',
      accent: 'wheat',
      error: '#b71c1c'
    },
    idAnalytics: 'UA-101993142-3'
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
