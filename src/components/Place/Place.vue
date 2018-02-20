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
            <h6 class="title primary--text">{{ place.title }}</h6>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <!--app-edit-place-details-dialog :place="place"></app-edit-place-details-dialog-->
            </template>
          </v-card-title>
          <v-card-media
            :src="place.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">{{ place.location }}</div>
            
            <!--div>{{ articolo.description }}</div-->
                <div v-html="place.description"></div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-place-register-dialog
              :placeId="place.id"
              v-if="userIsAuthenticated && !userIsCreator"></app-place-register-dialog>
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
      place () {
        return this.$store.getters.loadedPlace(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.place.creatorId
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
