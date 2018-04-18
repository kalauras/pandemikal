<template>
  <v-container>
    <v-layout row align-center>
      <v-flex class="py-2">
        <h1 class="display-1" style="font-weight:300" >{{titolo}}</h1>
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
                  @click="caricaForm(card.id)"
                  clickable
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                        <div class="white--text">{{card.descrizione}}</div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  
                <v-tooltip bottom>
                  <v-btn slot="activator" icon @click="caricaForm(card.id)">
                      <v-icon>add_circle</v-icon>
                  </v-btn>
                  <span>Aggiungi un luogo</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn slot="activator" icon @click="caricaLink(card.link)">
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <span>Informazioni Utili</span>
                </v-tooltip>
                 <v-tooltip bottom>
                  <v-btn slot="activator" icon @click="$router.push('/')">
                    <v-icon>share</v-icon>
                  </v-btn>
                  <span>Guarda la Mappa</span>
                </v-tooltip>
                  
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
    computed: {
      cards (){
        let cards = []          

          for (let placeData in this.campiModulo){
            let place = this.campiModulo[placeData]
            let obj = {}
            if(place !== null){
              obj['title'] = place['place']
              obj['src'] = place['bannerUrl']
              obj['link'] = place['link']
              obj['descrizione'] = place['descrizione']
              obj['flex'] = 12
              if(this.id != "all")
                obj['id'] = this.id
              else
                obj['id'] = placeData
              cards.push(obj)
            }
          }

        return cards
      },
      campiModulo () {
        if(this.$store.getters.createPlaceData !== undefined)
          return this.$store.getters.createPlaceData
      },
      titolo () {
        if (this.campiModulo['payload'] != null && this.campiModulo['payload'] != undefined)
          return this.campiModulo['payload'].titolo
        else 
          return "Scegli cosa Aggiungere"
      }
    },
    methods: {
      caricaForm (idCat) {
        
        //this.$store.dispatch('loadComponentiModuloPlaces', this.id)
        //this.$swal("Ottimo Lavoro!", "Modulo caricato correttamente", "success")
        
        this.$router.push('/place/new/'+ idCat)
      },
      caricaLink (link){
        //console.log(link)
        window.location.href = link
      }
    },
    beforeMount(){
      //if(this.id !== null && this.id !== undefined)
        this.$store.dispatch('loadComponentiModuloPlaces', this.id)
    },
  }
</script>
