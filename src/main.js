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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'xxx ',
      authDomain: 'xxx.firebaseapp.com',
      databaseURL: 'https://xxx.firebaseio.com/',
      projectId: 'xxx-xxx',
      storageBucket: 'gs://xxx'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadArticoli')
  }
})
