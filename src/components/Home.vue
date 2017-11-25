<template>
  <v-app>
     <section>
          <v-parallax src="https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2Fpangaro-consulting%2Fintro%2Fpangaro-consulting.jpg?alt=media&token=5a617377-b937-43d0-8af2-de4266364ca4" height="600">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
          <v-card  class="white--text blue-grey darken-2" style="background: rgba(0,  0,  0,  0.75) !important">
            <v-card-title primary-title>
               <h1 class="white--text mb-2 display-1 text-xs-center">Pangaro dott. Vincenzo</h1>
            </v-card-title>
            <div class="subheading mb-3 text-xs-center">Powered by eBasilicata</div>
            <v-card-actions>
              <v-btn flat dark>Indicazioni Stradali</v-btn>
            </v-card-actions>
            <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(0039) 333-1234567</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(0039) 0973-577287</v-list-tile-title>
              <v-list-tile-sub-title>Lavoro</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>info@pangaroconsulting.it</v-list-tile-title>
              <v-list-tile-sub-title>Lavoro</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>via Roma 91</v-list-tile-title>
              <v-list-tile-sub-title>85034 Francavilla in Sinni (PZ)</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
          </v-card>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-3"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">Il tuo compagno di viaggio</h2>
                <span class="subheading">
                  Contattaci per una consulenza gratuita
                </span>
              </div>
            </v-flex>
          </v-layout>
        </section>

        <section>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="articolo in articoli"
            :src="articolo.imageUrl"
            :key="articolo.id"
            @click="onLoadArticolo(articolo.id)">
            <div class="title">
              {{ articolo.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Questi sono i nostri ultimi articoli!</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/articoli" color="primary">Leggi gli Articoli</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/articolo/new" class="primary">Inserisci un Articolo</v-btn>
      </v-flex>
    </v-layout>
  </v-container>

</section>
  <google-map
  name="mappaPos"
></google-map>


<section>
<minivetrina-shopify></minivetrina-shopify>
</section>

<section>
<google-streetView
  name="streetPos"
></google-streetView>
</section>




<section>
          <v-layout
            column
            wrap
            class="my-3"
            align-center
          >
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Virtual</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Social</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Local</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

</v-app>
</template>

<script>
  export default {
    computed: {
      articoli () {
        return this.$store.getters.featuredArticoli
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadArticolo (id) {
        this.$router.push('/articoli/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
