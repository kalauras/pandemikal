  <template>
    <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
        <div class="text-xs-center">
          <v-text-field
                :name="datimodulo.name"
                :label="datimodulo.label"
                :id="datimodulo.id"
                v-model="datimodulo.model"
                :required="datimodulo.required"
                :multi-line="datimodulo.multiline">
                
          </v-text-field>

            
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