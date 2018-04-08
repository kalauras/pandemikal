<template>
  <v-dialog persistent v-model="registerDialog">
    <v-btn color="primary" accent slot="activator" v-if="userIsAuthenticated">
      <v-icon>timelines</v-icon>{{ userIsRegistered ? 'Già Contagiato' : 'Contagio' }}
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title v-if="userIsRegistered">Non vuoi pi&ugrave; ricevere aggiornamenti sul Luogo?</v-card-title>
            <v-card-title v-else>Vuoi ricevere aggiornamenti sul Luogo?</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>Puoi cambiare questa scelta anche successivamente.</v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                class="red--text darken-1"
                flat
                @click="registerDialog = false">Cancella</v-btn>
              <v-btn
                class="green--text darken-1"
                flat
                @click="onAgree">Conferma</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['idPlace'],
    data () {
      return {
        registerDialog: false
      }
    },
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsRegistered () {
        if(!this.userIsAuthenticated)
          return false

        return this.$store.getters.user.registeredPlaces.findIndex(idPlace => {
          return idPlace === this.idPlace
        }) >= 0
      }
    },
    methods: {
      onAgree () {
        if (this.userIsRegistered) {
          this.$store.dispatch('unregisterUserFromPlace', this.idPlace)
        } else {
          this.$store.dispatch('registerUserForPlace', this.idPlace)
        }
        this.registerDialog = false
      }
    }
  }
</script>
