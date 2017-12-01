export default {
  state: {
    loading: false,
    error: null,
    pageID: 'articoli'
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
    }
  }
}
