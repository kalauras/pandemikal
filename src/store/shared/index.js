export default {
  state: {
    loading: false,
    error: null,
<<<<<<< HEAD
    nomeSito: 'Oleificio Sagroli',
    pageID: 'articoli',
    dominio: 'sagroli',
    gruppo: 'attivita',
=======
    nomeSito: 'eBasilicata',
    pageID: 'articoli',
    dominio: 'ebasilicata',
    gruppo: 'area',
>>>>>>> 1b04ac9f521cdc60aeb8461ea85a1c86773513ee
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
