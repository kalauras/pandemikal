<template>
  
    <google-map :center="datimodulo.centro" :zoom="datimodulo.zoom" class="k-map">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div v-html="infoContent"></div>
      </gmap-info-window>
      <google-cluster>
        <google-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true"  @click="toggleInfoWindow(m,i)"></google-marker>
      </google-cluster>
</google-map>

</template>
<script>
export default {
  props: ['datimodulo'],
  data: function () {
    return {
      center: this.$store.getters.coordinate_default,
      markers: this.getMarcatori(),
      infoContent: '',
          infoWindowPos: {
            lat: 0,
            lng: 0
          },
          infoWinOpen: false,
          currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
    }
  },
  methods: {
    getMarcatori() {
        let luoghi = this.$store.getters.loadedPlaces
        let posizioni = []


        for (var i = luoghi.length - 1; i >= 0; i--) {
          let luogo = luoghi[i]
          if(luogo.coordinate_place !== undefined){
            let coor2 = luogo.coordinate_place.split(',')
            let position2 = { position: {
                lat: parseFloat(coor2[0]),
                lng: parseFloat(coor2[1])
              },
              infoText: '<a href="/places/'+luogo.id+'">'+luogo.title+'</a>'
              }
              posizioni.push(position2)
          }
        }

      return posizioni
    }
    ,
  toggleInfoWindow: function(marker, idx) {

    this.infoWindowPos = marker.position;
    this.infoContent = marker.infoText;

    //check if its the same marker that was selected if yes toggle
    if (this.currentMidx == idx) {
      this.infoWinOpen = !this.infoWinOpen;
    }
    //if different marker set infowindow to open and reset current marker index
    else {
      this.infoWinOpen = true;
      this.currentMidx = idx;

    }
  }
  }
}

</script>
<style type="text/css">
 
  .k-map {
  width: 80%;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>