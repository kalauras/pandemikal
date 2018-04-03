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
          <h2 class="display-1" style="font-weight:300">{{datimodulo.titolo}}</h2>
          <span class="subheading">
            {{datimodulo.sottotitolo}}
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
      :position="marker.position"
      :clickable="true"
      :draggable="true"
      @click="center=marker.position"
    ></gmap-marker>
  </gmap-map>
</v-container>
</template>
<script>

/* global google */
export default {
  name: 'google-map',
  props: ['datimodulo'],
  data: function () {
    return {
      center: this.$store.getters.coordinate_default,
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
              this.center = marker.position
              return marker
            }

            return {
              position: this.$store.getters.coordinate_default
            }   
          
          }   
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
