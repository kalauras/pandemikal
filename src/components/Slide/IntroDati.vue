<template>
  <v-parallax :key="imgSfondo" :src="imgSfondo" height="600">
    <v-layout
    column
    align-center
    justify-center
    class="white--text"
    >
      <v-card class="white--text blue-grey darken-2" style="max-width:600px; background: rgba(0,  0,  0,  0.55) !important">
        <v-card-media v-if="logo" :contain=true :src="datimodulo.logo" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <h1 class="white--text display-3 text-xs-center" style="font-weight:300">{{titoloIntro}}</h1>
        </v-card-title>
        <div class="subheading ma-3 text-xs-center" v-html="sottoTitoloIntro"></div>
        <v-card-actions>
          <v-container 
            v-if="userIsAuthenticated && user.dataPan !== null && user.dataPan !== undefined && user.dataPan.coordinate_user !== undefined"
            fluid="fluid" class="text-xs-center">

            <v-layout row justify-center>
              <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-btn color="primary" round dark slot="activator"><v-icon>navigation</v-icon> {{$t("indicazioni_stradali")}}</v-btn>
                <v-card>
                  <v-toolbar dark color="primary">
                    <v-btn icon @click.native="dialog = false" dark>
                      <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>{{$t("indicazioni_stradali")}}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn dark flat @click.native="dialog = false">{{$t("chiudi")}}</v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <iframe :src="'https://www.google.com/maps/embed/v1/directions?key=AIzaSyATTyxRJn5Howi-QHna-9iaaXxrErEyLGM&origin='+ user.dataPan.coordinate_user +'&destination='+luogo.coordinate+'&avoid=tolls|highways'"width="100%" height="800" frameborder="0" style="border:0" allowfullscreen></iframe>
                </v-card>
              </v-dialog>
            </v-layout>
          </v-container>
        </v-card-actions>
        
        <v-list v-if="datimodulo.contatti" two-line style="background: rgba(255,  255,  255,  0.75) !important">
          <v-list-tile v-if="luogo.telefono" :href="'tel:'+luogo.telefono">
            <v-list-tile-action>
              <v-icon color="primary">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{luogo.telefono}}</v-list-tile-title>
              <v-list-tile-sub-title>{{$t("telefono")}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile v-if="luogo.email" :href="'mailto:'+luogo.email">
            <v-list-tile-action>
              <v-icon color="primary">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{luogo.email}}</v-list-tile-title>
              <v-list-tile-sub-title>{{$t("email")}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile v-if="luogo.comune" :href="'https://www.google.com/maps/@'+luogo.coordinate+',13z??hl=it-IT&gl=US'">
            <v-list-tile-action>
              <v-icon color="primary">location_on</v-icon>
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
    props: ['datimodulo'],
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    },
    computed: {
      luogo() {
        return this.luoghi[0]
      },
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
      },
      titoloIntro () {
        if(this.datimodulo.titolo !== null  && this.datimodulo.titolo !== undefined)
          return this.datimodulo.titolo
        else
          return this.luogo.titolo
      },
      sottoTitoloIntro () {
        if(this.datimodulo.sottotitolo !== null  && this.datimodulo.sottotitolo !== undefined)
          return this.datimodulo.sottotitolo
        else
          return this.luogo.sottotitolo
      },
      imgSfondo () {
        if(this.datimodulo.sfondo !== null  && this.datimodulo.sfondo !== undefined)
          return this.datimodulo.sfondo
        else
          return this.luogo.imgIntro
      },
      logo () {
        if(this.datimodulo.logo !== null  && this.datimodulo.logo !== undefined)
          return true
        else
          return false
      }
    },
    methods: {
      onLoadLuogo (id) {
        this.$router.push('/luoghi/' + id)
      }
    }
  }
</script>