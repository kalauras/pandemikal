export default {
  state: {
    loading: false,
    error: null,
    nomeSito: 'eBasilicata',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'ebasilicata',
    gruppo: 'area',
    coordinate_default: {lat: 40.6637693, lng: 16.6121927}
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
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
    }
    
  }
}
