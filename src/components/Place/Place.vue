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
        
        let moduliPagina = []
        let swappedPairs = {}
        let dataPairs = this.$store.getters.loadedPlace(this.id).moduliPagina//this.$store.getters.loadedPlaces[0].moduliPagina
        for (let key in dataPairs) {
              moduliPagina.push(dataPairs[key])
              swappedPairs[dataPairs[key]] = key
            }
            moduliPagina.sort(function (a, b) {
              return a.posiz - b.posiz;
            });

        return moduliPagina
      }

    }

  }
</script>


