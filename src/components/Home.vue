<template>
  <v-app>
    <section v-for="(modulo, index) in moduli">
      <component :is="modulo.nome" :key="modulo.nome+index" :posizione="index" :datimodulo="modulo"></component>
    </section>
  </v-app>
</template>

<script>
  export default {
    computed: {
      moduli () {
        return this.$store.getters.luogo[0].moduliPagina
      }
    }

  }
</script>
