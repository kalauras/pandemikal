<template>
  <v-parallax :key="imgSfondo" :src="imgSfondo" height="600">
    <v-layout
    column
    align-center
    justify-center
    class="white--text"
    >
      <div style="position:absolute; height: 600px; width:100%">
        <vue-particles
          color="#ffffff"
          :particleOpacity="0.7"
          linesColor="#ffffff"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="5"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles>
      </div>
          <h1 class="white--text display-3 text-xs-center" style="font-weight:300">{{titoloIntro}}</h1>
        <div class="subheading ma-3 text-xs-center" v-html="sottoTitoloIntro"></div>

     
      

        
          <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false" v-if="userIsAuthenticated && user.dataPan !== null && user.dataPan !== undefined && user.dataPan.coordinate_user !== undefined">
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
      }
    },
    methods: {
      onLoadLuogo (id) {
        this.$router.push('/luoghi/' + id)
      }
    }
  }
</script>

<style type="text/css">
  #particles-js {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>