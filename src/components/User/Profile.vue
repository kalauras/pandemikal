<template>
  <div>
    <p>La pagina &egrave; in costruzione - {{user.id}}</p>
  </div>
</template>

<script>
  export default {
    
    computed: {
      user () {
        return this.$store.getters.utenteDatiFB
      },
      loading () {
        return this.$store.getters.loading
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>