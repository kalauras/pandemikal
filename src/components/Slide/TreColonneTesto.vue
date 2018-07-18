  <template>
    <v-layout
            column
            wrap
            class="my-3"
            align-center
          >
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="primary--text text--lighten-2">{{ datimodulo.icona1 }}</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">{{ datimodulo.titolo1 }}</div>
                      </v-card-title>
                      <v-card-text>
                        <div v-html="$t(datimodulo.txt1)"></div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="primary--text text--lighten-2">{{ datimodulo.icona2 }}</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">{{ datimodulo.titolo2 }}</div>
                      </v-card-title>
                      <v-card-text>
                        <div v-html="$t(datimodulo.txt2)"></div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="primary--text text--lighten-2">{{ datimodulo.icona3 }}</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">{{ datimodulo.titolo3 }}</div>
                      </v-card-title>
                      <v-card-text>
                        <div v-html="$t(datimodulo.txt3)"></div>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
</template>

<script>

export default {
  
  props: ['datimodulo']
  
}
</script>