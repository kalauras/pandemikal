  <template>
    <v-layout
      column
      wrap
      class="my-3"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-1" style="font-weight:300">{{ $t(datimodulo.titolo) }}</h2>
          <span class="subheading">
            {{ $t(datimodulo.sottotitolo) }}
          </span>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
  export default {
    props: ['datimodulo']
  }
</script>