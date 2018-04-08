<template>
  
    <google-map :center="datimodulo.centro" :zoom="datimodulo.zoom" class="k-map">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        {{infoContent}}
      </gmap-info-window>
      <google-cluster>
        <google-marker v-for="m in markers" :position="m.position" @click="toggleInfoWindow(m,i)"></google-marker>
      </google-cluster>
</google-map>

</template>
<script>
export default {
  props: {
      datimodulo:{
        type: Object,
      }, 
      idPlace:{
        type: String,
      }, 
    },
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
        let followers = this.$store.getters.loadedPlace(this.idPlace).followers
        let posizioni = []
        for (let follower in followers) {
          let luogo = followers[follower]
          if(luogo.coordinate_followers !== undefined){
            let coor2 = luogo.coordinate_followers.split(',')
            let position2 = {
              position: {
                lat: parseFloat(coor2[0]),
                lng: parseFloat(coor2[1])
              },
              infoText: "PIPPPP"

            }
            posizioni.push(position2)
          }
        }

      return posizioni
    }
  },
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

</script>
<style type="text/css">
 
  .k-map {
  width: 80%;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>