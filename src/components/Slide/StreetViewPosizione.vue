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
  <div class="google-map" :id="mapName"></div>
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
      markers: []
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds()
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      position: {lat: mapCentre.latitude, lng: mapCentre.longitude},
      pov: {heading: 0, pitch: 0},
      zoom: 0
    }
    this.map = new google.maps.StreetViewPanorama(element, options)
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude)
      const marker = new google.maps.Marker({
        position,
        map: this.map
      })
      this.markers.push(marker)
      // this.map.fitBounds(this.bounds.extend(position))
    })
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
