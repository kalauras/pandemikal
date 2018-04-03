<template>
  
    <google-map :center="datimodulo.centro" :zoom="datimodulo.zoom" class="k-map">
      <google-cluster>
        <google-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></google-marker>
      </google-cluster>
</google-map>

</template>
<script>
export default {
  props: ['datimodulo'],
  data: function () {
    return {
      center: this.$store.getters.coordinate_default,
      markers: this.getMarcatori()
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
            let position2 = {position: {
                lat: parseFloat(coor2[0]),
                lng: parseFloat(coor2[1])
              }
              }
              posizioni.push(position2)
          }
        }

      return posizioni
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