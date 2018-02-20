import * as firebase from 'firebase'

export default {
  state: {
    loadedPlaces: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'place in New York',
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'place in Paris',
        location: 'Paris',
        description: 'It\'s Paris!'
      }
    ]
  },
  mutations: {
    registraDatiPlace (state, payload) {

      let lastPlace = state.loadedPlaces.pop()
      for (let key in payload) {  
         lastPlace[key] = payload[key]
      }

      state.loadedPlaces.push(lastPlace)
      
    },
    setLoadedPlaces (state, payload) {
      state.loadedPlaces = payload
    },
    createPlace (state, payload) {
      state.loadedPlaces.push(payload)
    },
    updatePlace (state, payload) {
      const place = state.loadedPlaces.find(place => {
        return place.id === payload.id
      })
      if (payload.title) {
        place.title = payload.title
      }
      if (payload.description) {
        place.description = payload.description
      }
      if (payload.date) {
        place.date = payload.date
      }
    }
  },
  actions: {
    registraDatiPlace ({commit, getters}, payload) {
      commit('setLoading', true)
      const datiPlace = payload
      firebase.database().ref('/places/' ).child(payload.id+'/')
        .update(datiPlace)
        .then(user => {
            commit('setLoading', false)
            commit('registraDatiPlace', datiPlace)
          })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    loadPlaces ({commit, getters}) {
      commit('setLoading', true)
      const places = []
      //carico gli places legati alla pagina
      firebase.database().ref(getters.placeID).orderByChild('dominio').equalTo(getters.dominio).once('value')
        .then((data) => {
          
          const obj = data.val()
          for (let key in obj) {
            places.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              location: obj[key].location,
              coordinate_place: obj[key].coordinate_place,
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

        // carico gli places del gruppo evitando i doppioni 
       firebase.database().ref(getters.placeID).orderByChild('gruppo').equalTo(getters.gruppo).once('value')
        .then((data) => {
          const obj = data.val()
          for (let key in obj) {
            if(obj[key].dominio == getters.dominio)
              continue
            places.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              location: obj[key].location,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedPlaces', places)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        ) 
    },
    
    createPlace ({commit, getters}, payload) {
      const place = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        gruppo: payload.gruppo,
        dominio: payload.dominio,
        creatorId: getters.user.id,
      }
      let imageUrl
      let key
      firebase.database().ref('places').push(place)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('places/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('places').child(key).update({imageUrl: imageUrl})
        })
        .then(() => {
          commit('createPlace', {
            //...place, //...
            title: place.title,
            location: place.location,
            description: place.description,
            date: place.date,
            gruppo: place.gruppo,
            dominio: place.dominio,
            creatorId: place.creatorId,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
    updatePlaceData ({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      
      firebase.database().ref('places').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updatePlace', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    }
  },
  getters: {
    loadedPlaces (state) {
      return state.loadedPlaces
    },
    /*loadedPlaces (state) {
      return state.loadedPlaces.sort((placeA, placeB) => {
        return placeA.date < placeB.date
      })
    },*/
    featuredPlaces (state, getters) {
      return getters.loadedPlaces.slice(0, 5)
    },
    loadedPlace (state) {
      return (placeId) => {
        return state.loadedPlaces.find((place) => {
          return place.id === placeId
        })
      }
    }
  }
}