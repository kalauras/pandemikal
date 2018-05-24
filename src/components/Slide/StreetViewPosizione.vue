<template>
  <v-container fluid class="grey lighten-4" :style="datimodulo.style">
    
    <gmap-street-view-panorama class="google-map" :position="marker.position"
      :pov="pov" :zoom="zoom" @pano_changed="updatePano" @pov_changed="updatePov">
    </gmap-street-view-panorama>
    <v-layout column
    align-center
    justify-center>
            <v-flex xs12 sm12 >
    Per un'esperienza immersiva, accedi a questi contenuti sullo smartphone con un visore VR <svg width="24px" height="24px" class="icocard" viewBox="0 0 24 24"><path d="M20.74 6H3.21C2.55 6 2 6.57 2 7.28v10.44c0 .7.55 1.28 1.23 1.28h4.79c.52 0 .96-.33 1.14-.79l1.4-3.48c.23-.59.79-1.01 1.44-1.01s1.21.42 1.45 1.01l1.39 3.48c.19.46.63.79 1.11.79h4.79c.71 0 1.26-.57 1.26-1.28V7.28c0-.7-.55-1.28-1.26-1.28zM7.5 14.62c-1.17 0-2.13-.95-2.13-2.12 0-1.17.96-2.13 2.13-2.13 1.18 0 2.12.96 2.12 2.13s-.95 2.12-2.12 2.12zm9 0c-1.17 0-2.13-.95-2.13-2.12 0-1.17.96-2.13 2.13-2.13s2.12.96 2.12 2.13-.95 2.12-2.12 2.12z"></path></svg>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

/* global google */
export default {
  name: 'google-street',
  props: ['datimodulo'],
  data: function () {
    return {
      mapName: 'pippo-map',
      pov: {
        pitch: this.datimodulo.pitch,
        heading: this.datimodulo.heading
      },
      pano: null,
      caricato : "no",
      zoom: this.datimodulo.zoom
    }
  },
  computed: {
    marker: {
        get: function () {
            if(this.$store.getters.featuredDataLuoghi[0].coordinate !== undefined && this.$store.getters.featuredDataLuoghi[0].coordinate !== ''){

              let coor = this.$store.getters.featuredDataLuoghi[0].coordinate.split(',')
              let marker = {
                position: {
                  lat: parseFloat(coor[0]),
                  lng: parseFloat(coor[1])
                }

              }
              this.caricato = "si"
              return marker
            }
            return {

              position: this.$store.getters.coordinate_default
            }   
          
          }   
        },
      },
  methods: {
          updatePov(pov) {
            this.pov = pov;
          },
          updatePano(pano) {
            this.pano = pano;
          }
        }
}
</script>
<style scoped>
.google-map {
   width: 80%; 
  height: 600px;
  margin: 0 auto;
  background: gray;
}
.icocard {
  width: 40px;
  height: 40px;
  margin-top: -7px;
  margin-right: 5px;
  fill: #757575;
  vertical-align: middle;
}
</style>
