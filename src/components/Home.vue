<template>
  <v-app>
    <section v-for="(modulo, index) in moduli">
      <component :is="modulo.nome" :key="modulo.nome+index" :posizione="index"></component>
    </section>
  </v-app>
</template>

<script>
  export default {
    /*data () {
      return {
        moduli: [ 
          {
            "nome" : "introDati",
            "titolo" : "TITOOOOOLO"
          },
          {
            "nome" : "titoloSezione",
            "titolo" : "TITOOOOOLO"
          } ,
          {
            "nome" : "caroselloArticoli",
            "titolo" : "TITOOOOOLO"
          } ,
          {
            "nome" : "google-map",
            "titolo" : "TITOOOOOLO"
          } ,
          {
            "nome" : "minivetrina-shopify",
            "titolo" : "TITOOOOOLO"
          } ,
          {
            "nome" : "google-streetView",
            "titolo" : "TITOOOOOLO"
          } ,
          {
            "nome" : "treColonneTesto",
            "titolo" : "TITOOOOOLO"
          } 
        ]
      }
    },*/
    computed: {
      moduli () {
        return this.$store.getters.luogo[0].moduliPagina
      }
    }

  }
</script>
