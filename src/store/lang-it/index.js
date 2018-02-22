import * as firebase from 'firebase'

export default {
  state: {
    translationsIt : {
        "home": "Home",
        "content": "contenutoooooo",
        "comune_user": "Comune",
        "coordinate_user": "Coordinate",
        "email_user": "Email",
        "nome_user": "Nome",
        "indicazioni_stradali": "Indicazioni Stradali",
        "chiudi": "Chiudi",
        esci: "Esci",
        entra: "Entra",
        registrati: "Registrati",
        operazioni: "Operazioni",
        profilo: "Profilo",
        leggi_luoghi: "Guarda i Luoghi",
        inserisci_place: "Inserisci un Luogo",
        "leggi_articoli": "Leggi gli Articoli",
        "inserisci_articolo": "Inserisci un Articolo",
        "txt_ultimi_articoli": "Questi sono i nostri ultimi articoli",
        "titolo_ebasilicata": "Collegamenti tra Luoghi e Utenti lucani",
        "sottotitolo_ebasilicata": "Unisciti anche tu e inserisci i tuoi Luoghi preferiti"
      }
  },
  mutations: {
    setTranslation (state, payload) {
      state.translationsIt = payload
    }
  },
  actions: {
    loadTranslation ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('lang/it-IT').once('value')
        .then((data) => {
          let obj = data.val() 
          commit('setTranslation', obj)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    }
  },
  getters: {
    translationsIt (state) {
      return state.translationsIt
    }
  }
}