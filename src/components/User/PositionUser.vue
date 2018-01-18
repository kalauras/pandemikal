<template>
  <v-container>
    <form @submit.prevent="onUpadateDataUser">
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Aggiorna la tua posizione</h3>
                <div>
                  Digita il comune o l'indirizzo della tua posizione nel campo qui in basso<br>oppure clicca e autorizza la tua posizione del dispositivo
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
                  v-model="coordinate_user"
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
        dataUser: {},
        center: {
          lat: 40.08111187, 
          lng: 16.2045113
        },
        zoom: 8,
        coordinate_user: ""
      }
    },
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      marker: {
        get: function () {
          if(this.userIsAuthenticated){
            if(this.$store.getters.user.dataPan.coordinate_user !== undefined){
              let coor = this.$store.getters.user.dataPan.coordinate_user.split(',')
              this.coordinate_user = coor
              let marker = {
                position: {
                  lat: parseFloat(coor[0]),
                  lng: parseFloat(coor[1])
                }

              }
              this.center = marker.position
              return marker
            }
          }
          return {
            position: {
              lat: 40.08,
              lng: 16.20
            }     
          }   
        }
      }
    },
    
    methods: {
      updateCenter(newCenter) {
        
        let pos = {
          lat: newCenter.lat(),
          lng: newCenter.lng(),
        }
        this.centraMarcatore(pos)
      },
      setPlace(place) {

        let pos = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        }
        this.centraMarcatore(pos)
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
        this.center = pos
        this.marker.position = pos
      },
      onUpadateDataUser () {
        console.log(this.marker.position.lat + ", " + this.marker.position.lng)
        this.coordinate_user = this.marker.position.lat + ", " + this.marker.position.lng
        this.dataUser.coordinate_user = this.coordinate_user

        this.$store.dispatch('registraDatiUtente', this.dataUser)
        this.$router.push('/profile')
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
