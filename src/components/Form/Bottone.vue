  <template>
    <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
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
  
  props: ['datimodulo'],
  
  computed: {
    datimodulo2 () {
      if(this.$store.getters.createPlaceData !== undefined)
        return this.$store.getters.createPlaceData
    }
  }
}
</script>