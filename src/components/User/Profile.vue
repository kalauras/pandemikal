<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Il tuo profilo</h3>
                <div>
                  Qui trovi elencati i dati associati al tuo profilo
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary" to="/dataUser">MODIFICA</v-btn> 
              
            </v-card-actions>
          </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
        <v-list two-line>
          <template v-for="(child, i) in user.dataPan">
            <v-divider></v-divider>
            <v-list-tile avatar @click="">
              <v-list-tile-avatar>
              <v-icon class="'grey lighten-1 white--text'">info</v-icon>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="i"></v-list-tile-title>
                <v-list-tile-sub-title v-html="child"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn 
          to="/dataUser" 
          class="primary">
            <v-icon>edit</v-icon> Modifica i tuoi dati
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container> 
</template>

<script>
  export default {
    
    computed: {
      user () {
        return this.$store.getters.utenteDatiFB
      },
      loading () {
        return this.$store.getters.loading
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>