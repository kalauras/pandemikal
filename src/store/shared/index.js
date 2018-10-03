export default {
  state: {
    loading: false,
    error: null,
    abilities: null,
    nomeSito: 'ChaletSellaDelTitolo',
    bannerSito: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2Fchaletselladeltitolo%2FIMG_20180624_125145-EFFECTS.jpg?alt=media&token=d80848f6-4616-46cc-9421-6ef85a8d5095',
    descrizioneSito: 'Chalet Sella del Titolo',
    pageID: 'articoli',
    placeID: 'places',
    dominio: 'chaletselladeltitolo',
    gruppo: 'ristorazione',
    coordinate_default: {lat: 40.0793955, lng: 15.7588882},
    theme: {
      primary: '#795548',
      secondary: '#558B2F',
      accent: '#ffffff',
      error: '#b71c1c'
    },
    idAnalytics: 'UA-101993142-10',

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
