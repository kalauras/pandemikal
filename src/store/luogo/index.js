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
        partitaIva: '0000',
        titolo: 'eBasilicata',
        miniLogo: '',
        email: 'caricamento email',
        cap: 'caricamento cap',
        comune: 'caricameto comune',
        provincia: 'caricamento provincia',
        moduliPagina: [{
            "nome" : "introDati",
            "titolo" : "eBasilicata"
          }]
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
            
            if(key == "data"){
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
                partitaIva: obj[key].partitaIva,
                miniLogo: obj[key].miniLogo,
                email: obj[key].email,
                cap: obj[key].cap,
                comune: obj[key].comune,
                provincia: obj[key].provincia,
                moduliPagina: this.getters.luogo[0].moduliPagina
              })
            }
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
    },
    fetchModuliLuogo ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref(this.getters.dominio + '/moduli/').once('value')
        .then(data => {
          const dataPairs = data.val()
          let moduliPagina = []
          let swappedPairs = {}
          for (let key in dataPairs) {
            moduliPagina.push(dataPairs[key])
            swappedPairs[dataPairs[key]] = key
          }

          moduliPagina.sort(function (a, b) {
            return a.posiz - b.posiz;
          });
          const updatedLuogo = [{

            imgIntro: getters.luogo[0].imgIntro,
            id: getters.luogo[0].id,
            coordinate: getters.luogo[0].coordinate,
            indirizzo: getters.luogo[0].indirizzo,
            openWeek: getters.luogo[0].openWeek,
            shopCollectionId: getters.luogo[0].shopCollectionId,
            telefono: getters.luogo[0].telefono,
            titolo: getters.luogo[0].titolo,
            email: getters.luogo[0].email,
            cap: getters.luogo[0].cap,
            miniLogo: getters.luogo[0].miniLogo,
            comune: getters.luogo[0].comune,
            provincia: getters.luogo[0].provincia,
            moduliPagina: moduliPagina

          }]
          commit('setLoading', false)
          commit('setLoadedDataLuoghi', updatedLuogo)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
  },
  getters: {
    luogo (state) {
      return state.loadedDataLuoghi
    },
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
