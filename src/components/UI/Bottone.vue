  <template>
    <v-layout
      column
      wrap
      class="my-3"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <v-btn 
            large 
            v-if="datimodulo.condizione"
            router :to="datimodulo.link" 
            color="primary">{{ datimodulo.testo }}</v-btn>
        </div>
      </v-flex>
    </v-layout>
    
</template>

<script>

export default {
  
  props: ['posizione'],
  
  computed: {
    datimodulo () {
        return this.$store.getters.luogo[0].moduliPagina[this.posizione]
    }
  }
}
</script>