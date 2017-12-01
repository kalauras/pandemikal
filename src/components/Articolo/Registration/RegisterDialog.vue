<template>
  <v-dialog persistent v-model="registerDialog">
    <v-btn color="primary" accent slot="activator">
      {{ userIsRegistered ? 'Unregister' : 'Register' }}
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title v-if="userIsRegistered">Non vuoi pi&ugrave; seguire l' Articolo?</v-card-title>
            <v-card-title v-else>Vuoi seguire l'Articolo?</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>Puoi cambiare quasta scelta anche successivamente.</v-card-text>
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
    props: ['articoloId'],
    data () {
      return {
        registerDialog: false
      }
    },
    computed: {
      userIsRegistered () {
        return this.$store.getters.user.registeredArticoli.findIndex(articoloId => {
          return articoloId === this.articoloId
        }) >= 0
      }
    },
    methods: {
      onAgree () {
        if (this.userIsRegistered) {
          this.$store.dispatch('unregisterUserFromArticolo', this.articoloId)
        } else {
          this.$store.dispatch('registerUserForArticolo', this.articoloId)
        }
      }
    }
  }
</script>
