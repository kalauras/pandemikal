<template>
  <v-container fluid :style="datimodulo.style">
    
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            
            <div align="center">
              <v-layout row  >
                <v-flex mx-5>
                <div align="justify"  v-html="datimodulo.testo"></div>
              </v-flex>
            </v-layout>
              </div>
          </v-card-text>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['datimodulo']
  }
</script>