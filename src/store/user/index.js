import * as firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    registerUserForArticolo (state, payload) {
      const id = payload.id
      if (state.user.registeredArticoli.findIndex(articolo => articolo.id === id) >= 0) {
        return
      }
      state.user.registeredArticoli.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserFromArticolo (state, payload) {
      const registeredArticoli = state.user.registeredArticoli
      registeredArticoli.splice(registeredArticoli.findIndex(articolo => articolo.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    registerUserForArticolo ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/registrations/')
        .push(payload)
        .then(data => {
          commit('setLoading', false)
          commit('registerUserForArticolo', {id: payload, fbKey: data.key})
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserFromArticolo ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id + '/registrations/').child(fbKey)
        .remove()
        .then(() => {
          commit('setLoading', false)
          commit('unregisterUserFromArticolo', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredArticoli: [],
              fbKeys: {},
              dataPan: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserUpFb ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredArticoli: [],
              fbKeys: {},
              dataPan: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserUpGoogle ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredArticoli: [],
              fbKeys: {},
              dataPan: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredArticoli: [],
              fbKeys: {},
              dataPan: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        registeredArticoli: [],
        fbKeys: {},
        dataPan: {}
      })
    },
    fetchUserData ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('/users/' + getters.user.id + '/registrations/').once('value')
        .then(data => {
          const dataPairs = data.val()
          let registeredArticoli = []
          let swappedPairs = {}
          for (let key in dataPairs) {
            registeredArticoli.push(dataPairs[key])
            swappedPairs[dataPairs[key]] = key
          }
          const updatedUser = {
            id: getters.user.id,
            registeredArticoli: registeredArticoli,
            fbKeys: swappedPairs
          }
          commit('setLoading', false)
          commit('setUser', updatedUser)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    fetchUserDataPan ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('/users/' + getters.user.id + '/data/').once('value')
        .then(data => {
          const dataPairs = data.val()
          const utenti = {}
          for (let key in dataPairs) {  
            utenti[key] = dataPairs[key]
          }
          const updatedUser = {
            id: getters.user.id+"ppppp",
            dataPan: utenti
          }
          commit('setLoading', false)
          commit('setUser', updatedUser)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    utenteDatiFB (state) {
      return state.user
    },
  }
}
