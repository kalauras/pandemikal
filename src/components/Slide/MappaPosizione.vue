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
            Scorri la mappa e scopri come raggiungerci
          </span>
        </div>
      </v-flex>
    </v-layout>
  <gmap-map
    :center="center"
    :zoom="7"
    class="google-map"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</v-container>
</template>
<script>

/* global google */
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      center: {lat: 40.08111187, lng: 16.2045113},
        markers: [{
          position: {lat: 40.08111187, lng: 16.2045113}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]

   /*     mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 40.08111187,
        longitude: 16.2045113
      }],
      map: null,
      bounds: null,
      markers: []*/
    }
  }/*,
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds()
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
      zoom: 14,
      styles: [{
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]  // Turn off POI.
      },
      {
        featureType: 'transit.station',
        stylers: [{ visibility: 'off' }]  // Turn off bus, train stations etc.
      }]
    }
    this.map = new google.maps.Map(element, options)
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude)
      const marker = new google.maps.Marker({
        position,
        map: this.map
      })
      this.markers.push(marker)
      //this.map.fitBounds(this.bounds.extend(position))
    })
  }*/
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
