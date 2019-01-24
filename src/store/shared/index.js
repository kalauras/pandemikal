export default {
  state: {
    loading: false,
    error: null,
    abilities: null,
    nomeSito: 'L&B Sport',
    bannerSito: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2Fferramentadedonato%2Fbackground_ferramenta.jpg?alt=media&token=8ccede43-4020-45ca-bc21-b7409121bd8d',
    descrizioneSito: 'NEL CUORE DEL PARCO NAZIONALE DEL POLLINO DAL 1986 ABBIGLIAMENTO E ATTREZZATURA SPORTIVA, PREMIAZIONI E ABBIGLIAMENTO PERSONALIZZATO',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'lbsport86',
    gruppo: 'lbsport86',
    coordinate_default: {lat: 39.9793393, lng: 16.2957306},
    theme: {
      primary: '#42A5F5',
      secondary: '#E65100',
      accent: '#ffffff',
      error: '#b71c1c'
    },
    idAnalytics: 'UA-101993142-15',

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
