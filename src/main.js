import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditArticoloDetailsDialog from './components/Articolo/Edit/EditArticoloDetailsDialog.vue'
import EditArticoloDateDialog from './components/Articolo/Edit/EditArticoloDateDialog.vue'
import EditArticoloTimeDialog from './components/Articolo/Edit/EditArticoloTimeDialog.vue'
import RegisterDialog from './components/Articolo/Registration/RegisterDialog.vue'

import MappaPosizione from './components/Slide/MappaPosizione'
import StreetViewPosizione from './components/Slide/StreetViewPosizione'
import miniVetrinaShopify from './components/Slide/miniVetrinaShopify'
import introDati from './components/Slide/introDati'
import titoloSezione from './components/Slide/TitoloSezione'
import treColonneTesto from './components/Slide/TreColonneTesto'
import caroselloArticoli from './components/Slide/CaroselloArticoli'

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-articolo-details-dialog', EditArticoloDetailsDialog)
Vue.component('app-edit-articolo-date-dialog', EditArticoloDateDialog)
Vue.component('app-edit-articolo-time-dialog', EditArticoloTimeDialog)
Vue.component('app-articolo-register-dialog', RegisterDialog)
Vue.component('google-map', MappaPosizione)
Vue.component('google-streetView', StreetViewPosizione)
Vue.component('minivetrina-shopify', miniVetrinaShopify)
Vue.component('introDati', introDati)
Vue.component('titoloSezione', titoloSezione)
Vue.component('treColonneTesto', treColonneTesto)
Vue.component('caroselloArticoli', caroselloArticoli)

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
    this.$store.dispatch('loadArticoli')
    this.$store.dispatch('loadDataLuoghi')
  }
})
