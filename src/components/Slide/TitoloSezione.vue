  <template>
    <v-container fluid :style="datimodulo.style">
    <v-layout
      column
      wrap
      class="my-3"
      align-center
    >
      <v-flex xs12 sm6 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-1" style="font-weight:300">{{ $t(datimodulo.titolo) }}</h2>
          <span class="subheading" v-html="$t(datimodulo.sottotitolo)">
            
          </span>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['datimodulo']
  }
</script>