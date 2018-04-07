<template>
  
    <google-map :center="datimodulo.centro" :zoom="datimodulo.zoom" class="k-map">
      <google-cluster>
        <google-marker v-for="m in markers" :position="m.position" @click="center=m.position"></google-marker>
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
      markers: this.getMarcatori()
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