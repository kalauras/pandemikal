export default {
  state: {
    loading: false,
    error: null,
    abilities: null,
    nomeSito: 'Link Matera 2019',
    bannerSito: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fspeciale%2Fmt19_eu%2Fintro%2Fmatera.jpg?alt=media&token=02cb89c4-faf4-4740-9220-9e3ea230dcf2',
    descrizioneSito: 'Piattaforma Web NON ufficiale che crea un collegamento Virtuale per sostenere le attività della Capitale Europea della Cultura 2019 - Mettiamo in rete anche i Sassi',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'mt19_eu',
    gruppo: 'turismo',
    coordinate_default: {lat: 40.6637693, lng: 16.6121927},
    theme: {
      primary: '#1687BC',
      secondary: '#614C37',
      accent: 'wheat',
      error: '#b71c1c'
    },
    idAnalytics: 'UA-101993142-2',

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
