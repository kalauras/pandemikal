<template>
  <v-app>
    <section v-for="(modulo, index) in moduli">
      <component :idPlace="id" :is="modulo.nome" :key="modulo.nome+index" :posizione="index" :datimodulo="modulo"></component>
    </section>
  </v-app>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      moduli () {
        
        let moduli = []
        let swappedPairs = {}
        if(this.$store.getters.loadedPlace(this.id) == undefined)
          return []
        let dataPairs = this.$store.getters.loadedPlace(this.id).moduli//this.$store.getters.loadedPlaces[0].moduliPagina
        for (let key in dataPairs) {
              moduli.push(dataPairs[key])
              swappedPairs[dataPairs[key]] = key
            }
            moduli.sort(function (a, b) {
              return a.posiz - b.posiz;
            });
        return moduli
      }

    }

  }
</script>


