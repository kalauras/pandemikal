import * as firebase from 'firebase'

export default {
  state: {
    loadedDataLuoghi: [
      {
        imgIntro: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        coordinate: '',
        indirizzo: 'caricamento indirizzo',
        openWeek: '',
        shopCollectionId: '',
        telefono: 'caricamento telefono',
        titolo: 'eBasilicata',
        email: 'caricamento email',
        cap: 'caricamento cap',
        comune: 'caricameto comune',
        provincia: 'caricamento provincia'
      }
    ]
  },
  mutations: {
    setLoadedDataLuoghi (state, payload) {
      state.loadedDataLuoghi = payload
    },
    createLuogo (state, payload) {
      state.loadedDataLuoghi.push(payload)
    },
    updateLuogo (state, payload) {
      const luogo = state.loadedDataLuoghi.find(luogo => {
        return luogo.id === payload.id
      })
      if (payload.title) {
        luogo.title = payload.title
      }
      if (payload.description) {
        luogo.description = payload.description
      }
      if (payload.date) {
        luogo.date = payload.date
      }
    }
  },
  actions: {
    loadDataLuoghi ({commit}) {
      commit('setLoading', true)
      firebase.database().ref(this.getters.dominio).once('value')
        .then((data) => {
          const luoghi = []
          const obj = data.val()
          for (let key in obj) {
            luoghi.push({
              id: key,
              coordinate: obj[key].coordinate,
              indirizzo: obj[key].indirizzo,
              imgIntro: obj[key].imgIntro,
              openWeek: obj[key].openWeek,
              shopCollectionId: obj[key].shopCollectionId,
              titolo: obj[key].titolo,
              sottotitolo: obj[key].sottotitolo,
              telefono: obj[key].telefono,
              email: obj[key].email,
              cap: obj[key].cap,
              comune: obj[key].comune,
              provincia: obj[key].provincia
            })
          }
          commit('setLoadedDataLuoghi', luoghi)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createLuogo ({commit, getters}, payload) {
      const luogo = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }
      let imgIntro
      let key
      firebase.database().ref('luoghi').push(luogo)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('luoghi/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imgIntro = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('luoghi').child(key).update({imgIntro: imgIntro})
        })
        .then(() => {
          commit('createLuogo', {
            //...luogo, //...
            title: luogo.title,
            location: luogo.location,
            description: luogo.description,
            date: luogo.date,
            creatorId: luogo.creatorId,
            img: imgIntro,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
    updateLuogoData ({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.date) {
        payload.date = payload.date.toISOString()
        updateObj.date = payload.date
      }
      firebase.database().ref('luoghi').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateLuogo', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    }
  },
  getters: {
    loadedDataLuoghi (state) {
      return state.loadedDataLuoghi.sort((luogoA, luogoB) => {
        return luogoA.shopCollectionId > luogoB.shopCollectionId
      })
    },
    featuredDataLuoghi (state, getters) {
      return getters.loadedDataLuoghi.slice(0, 5)
    },
    loadedLuogo (state) {
      return (luogoId) => {
        return state.loadedDataLuoghi.find((luogo) => {
          return luogo.id === luogoId
        })
      }
    }
  }
}
