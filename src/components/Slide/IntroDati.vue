  <template>
    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2Fpangaro-consulting%2Fintro%2Fpangaro-consulting.jpg?alt=media&token=5a617377-b937-43d0-8af2-de4266364ca4" height="600">
    <v-layout
    column
    align-center
    justify-center
    class="white--text"
    >
    <v-card
      v-for="luogo in luoghi"  
      class="white--text blue-grey darken-2" style="background: rgba(0,  0,  0,  0.75) !important">
      <v-card-title primary-title>
       <h1 class="white--text mb-2 display-3 text-xs-center" style="font-weight:300">{{luogo.titolo}}</h1>
     </v-card-title>
     <div class="subheading mb-3 text-xs-center">{{luogo.sottotitolo}}</div>
     <v-card-actions>
      <v-container 
        v-if="userIsAuthenticated && user.dataPan !== null && user.dataPan !== undefined && user.dataPan.coordinate !== undefined"
        fluid="fluid" class="text-xs-center">

      <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-btn color="primary" dark slot="activator">Indicazioni Stradali</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Indicazioni Stradali</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Chiudi</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <iframe :src="'https://www.google.com/maps/embed/v1/directions?key=AIzaSyATTyxRJn5Howi-QHna-9iaaXxrErEyLGM&origin='+ user.dataPan.coordinate +'&destination='+luogo.coordinate+'&avoid=tolls|highways'"width="100%" height="800" frameborder="0" style="border:0" allowfullscreen></iframe>
      </v-card>
    </v-dialog>
  </v-layout>
    </v-container>
    </v-card-actions>
    <v-list two-line>
      <v-list-tile :href="'tel:'+luogo.telefono">
        <v-list-tile-action>
          <v-icon color="indigo">phone</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{luogo.telefono}}</v-list-tile-title>
          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile :href="'mailto:'+luogo.email">
        <v-list-tile-action>
          <v-icon color="indigo">mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{luogo.email}}</v-list-tile-title>
          <v-list-tile-sub-title>Lavoro</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile href="https://www.google.com/maps/@40.0810537504629,16.204291546961144,13z?hl=it-IT&gl=US">
        <v-list-tile-action>
          <v-icon color="indigo">location_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{luogo.indirizzo}}</v-list-tile-title>
          <v-list-tile-sub-title>{{luogo.cap}} {{luogo.comune}} ({{luogo.provincia}})</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</v-layout>
</v-parallax>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    },
    computed: {
      luoghi () {
        return this.$store.getters.featuredDataLuoghi
      },
      user () {
        return this.$store.getters.utenteDatiFB
      },
      loading () {
        return this.$store.getters.loading
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLoadLuogo (id) {
        this.$router.push('/luoghi/' + id)
      }
    }
  }
</script>