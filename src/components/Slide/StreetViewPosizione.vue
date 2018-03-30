<template>
  <v-container fluid class="grey lighten-4">
    
    <gmap-street-view-panorama class="google-map" :position="marker.position"
      :pov="pov" :zoom="1" @pano_changed="updatePano" @pov_changed="updatePov">
    </gmap-street-view-panorama>

  </v-container>
</template>

<script>

/* global google */
export default {
  name: 'google-street',
  props: ['posizione'],
  data: function () {
    return {
      mapName: 'pippo-map',
      pov: {
        pitch: -12,
        heading: 170
      },
      pano: null,
      caricato : "no"
    }
  },
  computed: {
    datimodulo () {
        return this.$store.getters.luogo[0].moduliPagina[this.posizione]
    },
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
</style>
