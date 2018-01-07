<template>
  <div>
    <p>La pagina &egrave; in costruzione</p>
    
    <v-list two-line>
          <template v-for="(child, i) in user.dataPan">
            <v-divider></v-divider>
            <v-list-tile avatar @click="">
              
              <v-list-tile-content>
                <v-list-tile-title v-html="i"></v-list-tile-title>
                <v-list-tile-sub-title v-html="child"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>

      
    </div>
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