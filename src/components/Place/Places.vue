<template>
  <v-container>
    <v-layout row wrap v-for="place in places" :key="place.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card color="secondary">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="place.imageUrl"
                  height="130px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">{{ place.title }}</h5>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="'/places/' + place.id">
                    <v-icon left light>arrow_forward</v-icon>
                    {{ $t("guarda_il_luogo") }}
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      places () {
        return this.$store.getters.loadedPlaces
      }
    }
  }
</script>
