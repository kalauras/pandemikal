//import Vue from 'vue'
import * as firebase from 'firebase'
import ruoliAbility from '../ability/ruoliAbility.js';

export default {
  state: {
    user: null,
    userRuolo: "guest",
    UserAbilities: null
  },
  mutations: {
    registraDatiUtente (state, payload) {
      //const id = payload.id
      //if (state.user.dataPan.findIndex(articolo => articolo.id === id) >= 0) {
      //  return
      //}
      for (let key in payload) {  
            state.user.dataPan[key] = payload[key]
          }
      //if()
      
      //state.user.dataPan.push(id)
      //state.user.fbKeys[id] = payload.fbKey
    },
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
    },
    setRuolo(state, payload){

      state.userRuolo = payload.ruolo
      state.UserAbilities =  payload.abilities

      let permessi = ruoliAbility.state.ruoliAbility[state.userRuolo]
      let abil = []
      for(let oggettoRuolo in permessi)
      {
        let perm = { subject: oggettoRuolo, actions: permessi[oggettoRuolo] }
        abil.push(perm)

      }
      state.UserAbilities.update(abil)
    }
  },
  actions: {
    registraDatiUtente ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user

      const datiUtente = payload
      firebase.database().ref('/users/' + user.id).child('/data/')
        .update(datiUtente)
        .then(user => {
            commit('setLoading', false)
            commit('registraDatiUtente', datiUtente)
            //commit('registraDatiUtente', {id: payload, fbKey: data.key})
          })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
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

            localStorage.setItem('commentToken', user.credential.idToken)
            //localStorage.setItem('commentExpirationDate', new Date("03/30/2018"))

            const newUser = {
              id: user.uid,
              displayName: user.displayName,
              email: user.email,
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

            localStorage.setItem('commentToken', user.credential.idToken)
            //localStorage.setItem('commentExpirationDate', new Date("03/30/2018"))

            const newUser = {
              id: user.uid,
              displayName: user.displayName,
              email: user.email,
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

            localStorage.setItem('commentToken', user.credential.idToken)
            //localStorage.setItem('commentExpirationDate', new Date("03/30/2018"))
            
            const newUser = {
              id: user.uid,
              displayName: user.displayName,
              email: user.email,
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

            user.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        
              localStorage.setItem('commentToken', idToken)
              //localStorage.setItem('commentExpirationDate', new Date("03/30/2018"))

            }).catch(function(error) {
              console.log(error)
            });
            
            const newUser = {
              id: user.uid,
              displayName: "",
              email: user.email,
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

      payload.getIdToken(/* forceRefresh */ true).then(function(idToken) {
  
        localStorage.setItem('commentToken', idToken)
        //localStorage.setItem('commentExpirationDate', new Date("03/30/2018"))

      }).catch(function(error) {
        console.log(error)
      });

      commit('setUser', {
        id: payload.uid,
        displayName: payload.displayName,
        email: payload.email,
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
            displayName: getters.user.displayName,
            email: getters.user.email,
            registeredArticoli: registeredArticoli,
            fbKeys: swappedPairs,
            dataPan: getters.user.dataPan
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
            id: getters.user.id,
            displayName: getters.user.displayName,
            email: getters.user.email,
            registeredArticoli: getters.user.registeredArticoli,
            fbKeys: getters.user.fbKeys,
            dataPan: utenti
          }

          localStorage.setItem('commentAdmin', true)

          const ruoliArr = {
            ruolo: utenti.ruolo[getters.dominio],
            abilities: getters.abilities
          }

          commit('setLoading', false)
          commit('setUser', updatedUser)
          commit('setRuolo', ruoliArr)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    logout ({commit, getters}) {
      firebase.auth().signOut()
      commit('setUser', null)
      const ruoliArr = {
            ruolo: "guest",
            abilities: getters.UserAbilities
          }
      commit('setRuolo', ruoliArr)
        localStorage.removeItem("commentToken")
        //localStorage.removeItem("commentExpirationDate")
        localStorage.removeItem("commentAdmin")
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    utenteDatiFB (state) {
      return state.user
    },
    userRuolo (state) {
      return state.userRuolo
    },
    UserAbilities (state) {
      return state.UserAbilities
    }
  }
}
