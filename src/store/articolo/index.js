import * as firebase from 'firebase'

export default {
  state: {
    loadedArticoli: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Articolo in New York',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Articolo in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      }
    ]
  },
  mutations: {
    setLoadedArticoli (state, payload) {
      state.loadedArticoli = payload
    },
    createArticolo (state, payload) {
      state.loadedArticoli.push(payload)
    },
    updateArticolo (state, payload) {
      const articolo = state.loadedArticoli.find(articolo => {
        return articolo.id === payload.id
      })
      if (payload.title) {
        articolo.title = payload.title
      }
      if (payload.description) {
        articolo.description = payload.description
      }
      if (payload.date) {
        articolo.date = payload.date
      }
    }
  },
  actions: {
    loadArticoli ({commit, getters}) {
      commit('setLoading', true)
      const articoli = []
      //carico gli articoli legati alla pagina
      firebase.database().ref(getters.pageID).orderByChild('creatorId').equalTo('RjraNQf2MHhbIXIHb6OYp2QT7YH3').once('value')
        .then((data) => {
          
          const obj = data.val()
          for (let key in obj) {
            articoli.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              location: obj[key].location,
              creatorId: obj[key].creatorId
            })
          }
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )

        // carico gli articoli del gruppo evitando i doppioni 
       firebase.database().ref(getters.pageID).orderByChild('gruppo').equalTo('commercialisti').once('value')
        .then((data) => {
          const obj = data.val()
          for (let key in obj) {
            if(obj[key].creatorId == 'RjraNQf2MHhbIXIHb6OYp2QT7YH3')
              continue
            articoli.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              location: obj[key].location,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedArticoli', articoli)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        ) 
    },
    
    createArticolo ({commit, getters}, payload) {
      const articolo = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('articoli').push(articolo)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('articoli/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('articoli').child(key).update({imageUrl: imageUrl})
        })
        .then(() => {
          commit('createArticolo', {
            //...articolo, //...
            title: articolo.title,
            location: articolo.location,
            description: articolo.description,
            date: articolo.date,
            creatorId: articolo.creatorId,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
    updateArticoloData ({commit}, payload) {
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
      firebase.database().ref('articoli').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateArticolo', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    }
  },
  getters: {
    loadedArticoli (state) {
      return state.loadedArticoli.sort((articoloA, articoloB) => {
        return articoloA.date > articoloB.date
      })
    },
    featuredArticoli (state, getters) {
      return getters.loadedArticoli.slice(0, 5)
    },
    loadedArticolo (state) {
      return (articoloId) => {
        return state.loadedArticoli.find((articolo) => {
          return articolo.id === articoloId
        })
      }
    }
  }
}
