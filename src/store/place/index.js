import * as firebase from 'firebase'

export default {
  state: {
    loadedPlaces: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'place in New York',
        location: 'New York',
        description: 'New York, New York!',
        moduli: [{
            "nome" : "introDati",
            "titolo" : "eBasilicata"
          }]
      }
    ],
    createPlaceData: {}
  },
  mutations: {
    loadComponentiModuloPlaces (state, payload) {

      state.createPlaceData = payload
      
    },
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
    createAll (state, payload) {
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
              creatorId: obj[key].creatorId,
              moduli: obj[key].moduli,
              followers: obj[key].followers
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
              coordinate_place: obj[key].coordinate_place,
              creatorId: obj[key].creatorId,
              moduli: obj[key].moduli,
              followers: obj[key].followers
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
    loadComponentiModuloPlaces ({commit, getters}, payload) {
      commit('setLoading', true)
      //carico gli places legati alla pagina
      firebase.database().ref("/categoria/"+payload+"/").once('value')
        .then((data) => {
          const componentiModulo = []
          const obj = data.val()
          
          /*let campixxx = obj.campiModulo
          console.log(campixxx)

          for (let key in campixxx) {
           
            componentiModulo.push({
              id: key,
              campiModulo: campixxx[key].campiModulo,
              titolo: campixxx[key].titolo
            })
          }

          obj.campiModulo = componentiModulo*/
          //console.log(componentiModulo[0].titolo)
          commit('loadComponentiModuloPlaces', obj)
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
    createAll ({commit, getters}, payload) {
      const place = payload
      let key
      firebase.database().ref('places').push(place)
        .then((data) => {
          key = data.key
          return key
        })
        .then(() => {
          place['id'] = key
          commit('createAll', place)
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
    },

    // fetchModuliPlace ({commit, getters}) {
    //     commit('setLoading', true)
    //     const idPlacePROVA = '-L7aJguiFDrWIcpU7iP6'
    //     firebase.database().ref('places/'+ idPlacePROVA + '/moduli/').once('value')
    //       .then(data => {

    //         const dataPairs = data.val()
    //         let moduliPagina = []
    //         let swappedPairs = {}
    //         for (let key in dataPairs) {
    //           moduliPagina.push(dataPairs[key])
    //           swappedPairs[dataPairs[key]] = key
    //         }
    //         moduliPagina.sort(function (a, b) {
    //           return a.posiz - b.posiz;
    //         });
    //         const updatedPlace = [{

    //           title: getters.loadedPlaces[0].title,
    //           description: getters.loadedPlaces[0].description,
    //           imageUrl: getters.loadedPlaces[0].imageUrl,
    //           location: getters.loadedPlaces[0].location,
    //           coordinate_place: getters.loadedPlaces[0].coordinate_place,
    //           creatorId: getters.loadedPlaces[0].creatorId,
    //           id: getters.loadedPlaces[0].id,
              
    //           moduliPagina: moduliPagina

    //         }]
    //         commit('setLoading', false)
    //         commit('setLoadedPlaces', updatedPlace)
    //       })
    //       .catch(error => {
    //         console.log(error)
    //         commit('setLoading', false)
    //       })
    // },
  },
  getters: {
    createPlaceData (state){
      return state.createPlaceData
    },

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
