export default {
  state: {
    loading: false,
    error: null,
    nomeSito: 'Pangaro Consulting',
    pageID: 'articoli',
    dominio: 'pangaroconsulting.it',
    gruppo: 'commercialisti'
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
    }
  }
}
