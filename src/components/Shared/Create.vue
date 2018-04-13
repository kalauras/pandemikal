<template>
  <v-container>
    <v-layout row align-center>
      <v-flex class="py-2">
        <h1 class="display-1" style="font-weight:300" >{{campiModulo['titolo']}}</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
          <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>

            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in cards"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  @click="caricaForm"
                  clickable
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="caricaForm">
                    <v-icon>add_circle</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
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
    props: ['id'],
    
    data: () => ({
      
    }),
    computed: {
      cards (){
        let cards = []
        let place = this.campiModulo
          let obj = {}
          obj['title'] = place['place']
          obj['src'] = place['bannerUrl']
          obj['flex'] = 12
          cards.push(obj)
        
        return cards
      },
      campiModulo () {
        if(this.$store.getters.createPlaceData !== undefined)
          return this.$store.getters.createPlaceData
      }
    },
    methods: {
      caricaForm () {
        
        //this.$store.dispatch('loadComponentiModuloPlaces', this.id)
        //this.$swal("Ottimo Lavoro!", "Modulo caricato correttamente", "success")
        this.$router.push('/place/new/'+ this.id)
      }
    },
    beforeMount(){
      if(this.id !== null && this.id !== undefined)
        this.$store.dispatch('loadComponentiModuloPlaces', this.id)
    },
  }
</script>
