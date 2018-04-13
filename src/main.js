import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex';

// load vuex i18n module
import vuexI18n from 'vuex-i18n'
//import VueEditor from 'vue2-editor'

import App from './App'
import * as firebase from 'firebase'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

import EditArticoloDetailsDialog from './components/Articolo/Edit/EditArticoloDetailsDialog.vue'
import EditArticoloDateDialog from './components/Articolo/Edit/EditArticoloDateDialog.vue'
import EditArticoloTimeDialog from './components/Articolo/Edit/EditArticoloTimeDialog.vue'
import RegisterDialog from './components/Articolo/Registration/RegisterDialog.vue'

import EditPlaceDetailsDialog from './components/Place/Edit/EditPlaceDetailsDialog.vue'
import EditPlaceDateDialog from './components/Place/Edit/EditPlaceDateDialog.vue'
import EditPlaceTimeDialog from './components/Place/Edit/EditPlaceTimeDialog.vue'
import RegisterPlaceDialog from './components/Place/Registration/RegisterPlaceDialog.vue'

import MappaPosizione from './components/Slide/MappaPosizione'
import MappaFollowers from './components/Slide/MappaFollowers'
import StreetViewPosizione from './components/Slide/StreetViewPosizione'
import miniVetrinaShopify from './components/Slide/miniVetrinaShopify'
import introDati from './components/Slide/introDati'
import introParticles from './components/Slide/introParticles'
import titoloSezione from './components/Slide/TitoloSezione'
import treColonneTesto from './components/Slide/TreColonneTesto'
import caroselloArticoli from './components/Slide/CaroselloArticoli'
import galleryImageVideo from './components/Slide/GalleryImageVideo'
import CommentGrid from './components/Comment/Comments'


import introDatiPlace from './components/Slide/introDatiPlace'
import MappaFollowersPlace from './components/Slide/MappaFollowersPlace'

import VueParticles from 'vue-particles'
import Vue2Leaflet from 'vue2-leaflet';
import VueGallery from 'vue-gallery';
import VueSwal from 'vue-swal'

//import CommentGrid from 'vue-comment-grid'

import bottoneForm from './components/Form/Bottone'
import campoTesto from './components/Form/CampoTesto'
import selectComune from './components/Form/SelectComune'


import bottone from './components/UI/Bottone'

//import translationsIt from './store/lang-it/index.js';
import translationsEn from './lang/en_US.js';



import abilityPlugin from './store/ability/abilitiesPlugin.js';
import defineAbilitiesFor from './store/ability/';



Vue.use(Vuetify, {
  theme: {
    primary: '#283593',
    secondary: '#FF8F00',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD4eErzsOnxPwoXgLwBTYZ6KcVlBtLvVc8',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-articolo-details-dialog', EditArticoloDetailsDialog)
Vue.component('app-edit-articolo-date-dialog', EditArticoloDateDialog)
Vue.component('app-edit-articolo-time-dialog', EditArticoloTimeDialog)
Vue.component('app-articolo-register-dialog', RegisterDialog)
Vue.component('google-map', MappaPosizione)
Vue.component('map-followers', MappaFollowers)
Vue.component('google-streetView', StreetViewPosizione)
Vue.component('minivetrina-shopify', miniVetrinaShopify)
Vue.component('introDati', introDati)
Vue.component('introParticles', introParticles)

Vue.component('titoloSezione', titoloSezione)
Vue.component('treColonneTesto', treColonneTesto)
Vue.component('caroselloArticoli', caroselloArticoli)
Vue.component('galleryImageVideo', galleryImageVideo)
Vue.component('gallery', VueGallery)
Vue.component('comment-grid', CommentGrid)

Vue.component('bottoneForm', bottoneForm)
Vue.component('campoTesto', campoTesto)
Vue.component('selectComune', selectComune)


Vue.component('bottone', bottone)

Vue.component('introDatiPlace', introDatiPlace)
Vue.component('map-followersPlace', MappaFollowersPlace)
Vue.component('register-place-dialog', RegisterPlaceDialog)


Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);


Vue.component('google-map', VueGoogleMaps.Map);
Vue.component('google-marker', VueGoogleMaps.Marker);
Vue.component('google-cluster', VueGoogleMaps.Cluster);

Vue.use(VueParticles)
Vue.use(vuexI18n.plugin, store);
Vue.use(VueSwal)


// set the start locale to use
Vue.i18n.set('it');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAletm2xRzxU9CPyTOYNaOLLom9dSdVBu0',
      authDomain: 'ebasilicata-1238.firebaseapp.com',
      databaseURL: 'https://ebasilicata.firebaseio.com/',
      projectId: ' ebasilicata-1238',
      storageBucket: 'gs://ebasilicata'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
        this.$store.dispatch('fetchUserDataPan')
      }
    })



    let abilities = defineAbilitiesFor("guest");
  
    Vue.use(abilityPlugin, abilities);

    this.$store.dispatch('setAbilities' , abilities)

    // carico le stringhe nelle varie lingue
    this.$store.dispatch('loadTranslation')

    // add translations directly to the application
    Vue.i18n.add('en', translationsEn);
    Vue.i18n.add('it', this.$store.getters.translationsIt);


    this.$store.dispatch('loadArticoli')
    this.$store.dispatch('loadPlaces')

    //this.$store.dispatch('loadArticoliPubblici')
    this.$store.dispatch('loadDataLuoghi')

    this.$store.dispatch('fetchModuliLuogo')    
    
    //this.$store.dispatch('fetchModuliPlace') 


    // if ('serviceWorker' in navigator) {
    //   window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js').then(registration => {
    //       console.log('SW registered: ', registration);
    //     }).catch(registrationError => {
    //       console.log('SW registration failed: ', registrationError);
    //     });
    //   });
    // }
  }
})
