<template>
  <v-container fluid :style="datimodulo.style">
   <v-layout>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
        <v-card-media height="500px" 
          :src="datimodulo.urlFoto"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ $t(datimodulo.titolo) }}</h3>
            <div v-html="$t(datimodulo.sottotitolo)">
            </div>
          </div>
        </v-card-title>

        <!--v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions-->
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>    

<script>
  export default {
    props: ['datimodulo']
  }
</script>