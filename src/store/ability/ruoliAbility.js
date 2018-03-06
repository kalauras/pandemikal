import * as firebase from 'firebase'

export default {
  state: {
    ruoliAbility : {
        "guest": {
            "Post": ['read'],
            "Place": ['read'],
            "Articolo": ['read'],
        },
        "administrator": {
            "Post": ['update', 'delete'],
            "Place": ['read', 'insert', 'update', 'delete'],
            "Articolo": ['read', 'insert', 'update', 'delete'],
        },
      }
  },
  mutations: {
    setRuoli (state, payload) {
      state.ruoliAbility = payload
    }
  },
  actions: {
    loadRuoli ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('lang/it-IT').once('value')
        .then((data) => {
          let obj = data.val() 
          commit('setRuoli', obj)
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
    ruoliAbility (state) {
      return state.ruoliAbility
    }
  }
}