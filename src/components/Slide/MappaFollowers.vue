<template>
  <div class="k-map">
    <v-map :zoom="zoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
      <v-marker :lat-lng="marker"></v-marker>
    </v-map>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      zoom: 13,
      center: [47.413220, -1.219482],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  }

}

</script>
<style type="text/css">
  @import "~leaflet/dist/leaflet.css";

  .k-map {
  width: 80%;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>