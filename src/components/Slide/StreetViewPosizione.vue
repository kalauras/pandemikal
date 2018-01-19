<template>
  <v-container fluid class="grey lighten-4">
    <v-layout
      column
      wrap
      class="my-3"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-1" style="font-weight:300">Guarda dove siamo</h2>
          <span class="subheading">
            La visita a 360 gradi della nostra sede
          </span>
        </div>
      </v-flex>
    </v-layout>
  <gmap-street-view-panorama class="google-map" :position="{lat: 40.08111187, lng: 16.2045113}"
      :pov="pov" :zoom="1" @pano_changed="updatePano" @pov_changed="updatePov">
</gmap-street-view-panorama>

</v-container>
</template>
<script>

/* global google */
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 40.08111187,
        longitude: 16.2045113
      }],
      map: null,
      bounds: null,
      markers: [],
      pov: {
        pitch: -12,
        heading: 170
      },
          pano: null,
    }
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
  /* width: 800px; */
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
