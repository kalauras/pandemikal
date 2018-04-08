<template>
  <v-container>
    <form @submit.prevent="onUpadateDataPlace">
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Inserisci la posizione del luogo</h3>
                <div>
                  Digita il comune o l'indirizzo del luogo nel campo qui in basso<br>oppure clicca e autorizza la tua posizione del dispositivo
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn icon><v-icon>search</v-icon></v-btn><GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
              o 
              <v-btn flat color="primary" @click="posizioneGeoLocal">Geoloc</v-btn> 
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <gmap-map
            :center="center"
            @center_changed="updateCenter"
            :zoom="zoom"
            class="google-map"
          >
            <gmap-marker
              :position="marker.position"
              :clickable="true"
              :draggable="true"
              @position_changed="aggiornaPosMarker"
              @click="center=marker.position"
            ></gmap-marker>
          </gmap-map>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
                  name="coordinate_user"
                  label="Coordinate"
                  id="coordinate_user"
                  readonly
                  v-model="coordinate_place"
                  required> 
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-btn
            class="primary"
            type="submit">Salva e prosegui</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dataPlace: {},
        center: this.$store.getters.coordinate_default,
        zoom: 8,
        coordinate_place: "",
        marker: {position: this.$store.getters.coordinate_default} 
      }
    },
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
      
    },
    
    methods: {
      updateCenter(newCenter) {
        
        let pos = {
          lat: newCenter.lat(),
          lng: newCenter.lng()
        }
        this.centraMarcatore(pos)
      },
      setPlace(place) {

        let pos = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }
        this.centraMarcatore(pos)
        this.center = pos
        this.zoom = 15
    },
      aggiornaPosMarker(nemMarkPos){
       
        this.marker.position = {
          lat: nemMarkPos.lat(),
          lng: nemMarkPos.lng()
        }
      },
      posizioneGeoLocal(){
        var questo = this
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }

            questo.centraMarcatore(pos)
            questo.center = pos
            questo.zoom = 15

          }, function() {
            console.log("errore")
          })
        } else {
          // Browser doesn't support Geolocation
          console.log("error")
        }
      },
      centraMarcatore (pos){
        this.marker.position = pos
      },
      onUpadateDataPlace () {
        this.coordinate_place = this.marker.position.lat + ", " + this.marker.position.lng
        this.dataPlace.coordinate_place = this.coordinate_place
        this.dataPlace.id = this.$store.getters.loadedPlaces[this.$store.getters.loadedPlaces.length -1].id
        this.$store.dispatch('registraDatiPlace', this.dataPlace)
        this.$swal("Ottimo Lavoro!", "Posizione inserita con successo", "success")
        this.$router.push('/places')
      }
    }
  }
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
