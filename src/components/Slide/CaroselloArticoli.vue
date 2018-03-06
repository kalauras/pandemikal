  <template>
    <v-container fluid>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="articolo in articoli"
            :src="articolo.imageUrl"
            :key="articolo.id"
            @click="onLoadArticolo(articolo.id)">
            <div class="title">
              {{ articolo.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>{{$t("txt_ultimi_articoli")}}</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/articoli" color="primary" v-if="this.$can('read', 'Articolo')">{{$t("leggi_articoli")}}</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/articolo/new" class="primary" v-if="this.$can('insert', 'Articolo')">{{$t("inserisci_articolo")}}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      articoli () {
        return this.$store.getters.featuredArticoli
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadArticolo (id) {
        this.$router.push('/articoli/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>