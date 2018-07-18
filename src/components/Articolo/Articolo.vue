<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="title primary--text">{{ articolo.title }}</h6>
            <template v-if="userIsAuthorized">
              <v-spacer></v-spacer>
              <app-edit-articolo-details-dialog :articolo="articolo"></app-edit-articolo-details-dialog>
            </template>
          </v-card-title>
          <v-card-media
            :src="articolo.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div v-if="showDataeLuogo" class="info--text">{{ articolo.date | date }} - {{ articolo.location }}</div>
            <div>
              <app-edit-articolo-date-dialog
                :articolo="articolo" v-if="userIsAuthorized">
              </app-edit-articolo-date-dialog>
              <app-edit-articolo-time-dialog
                :articolo="articolo" v-if="userIsAuthorized">
              </app-edit-articolo-time-dialog>
            </div>
            <div align="center">
              <h1>{{ articolo.title }}</h1>
              <v-layout row  >
                <v-flex mx-5>
                <div align="justify"  v-html="articolo.description"></div>
              </v-flex>
            </v-layout>
              </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-articolo-register-dialog
              :articoloId="articolo.id"
              v-if="userIsAuthenticated"></app-articolo-register-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      articolo () {
        return this.$store.getters.loadedArticolo(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsAuthorized () {
        if (!this.userIsAuthenticated) {
          return false
        }
        if(this.$store.getters.user.id === this.articolo.creatorId || this.$can('update', "Articolo"))
          return true 
      },
      showDataeLuogo(){
        return false
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
