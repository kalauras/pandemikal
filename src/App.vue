<template>
  <v-app id="inspire">

    <v-navigation-drawer
      clipped
      app
      fixed
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" no-action>
            <v-list-tile  slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="$router.push(child.link)"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="$router.push(item.link)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">{{this.$store.getters.nomeSito}} <sup style="font-size: small;"><img :src="this.$store.getters.featuredDataLuoghi[0].miniLogo" /></sup></router-link>
      </v-toolbar-title>
      <!--v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 200px; min-width: 128px"
        class="ml-4"
      ></v-text-field-->
      <div class="d-flex align-center" style="margin-left: auto">
      	    <v-menu offset-y v-for="item in menuItems">

        <v-btn
          flat
                  slot="activator"
          
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
        <v-list v-if="item.submenu">
        <v-list-tile
          v-for="(item, index) in item.submenu"
          :key="index"
          @click="$router.push(item.link)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
        <!--v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          {{$t("esci")}}

        </v-btn>
        <v-btn 
          icon
          >
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn 
          icon 
          @click="onTest">
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          to="/profile"
           icon large>
          <v-avatar size="32px" tile>
            <img
              src="/static/logo.png"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn-->
      </div>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>



    <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="top"
      hover
      fixed
      transition="slide-y-reverse-transition"
    >
      <v-btn
        slot="activator"
        color="secondary"
        dark
        fab
        hover
        v-model="fab"
        to="/tel"
      >
        <v-icon>{{icoAction}}</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        to="/places"
        fab
        v-if="this.$can('read', 'Place')"
        dark
        small
        color="indigo"
      >
        <v-icon>visibility</v-icon>
      </v-btn>
      <v-btn
        to="/new/all"
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        v-if="this.$can('update', 'Place')"
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        v-if="this.$can('delete', 'Place')"
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>

    <!-- <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn> -->




    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">Altro</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Annulla</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-footer color="primary" app>
      <div class="white--text" style="width:100%; text-align:center" v-html="infoFooter"></div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: false,
      fab: false
    }),
    metaInfo () {
      return {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: "Web App",
        // all titles will be injected into this template
        titleTemplate: '%s | ' + this.$store.getters.nomeSito,

        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            'property': 'og:title',
            'content': 'Home',
            'template': chunk => `${chunk} - ` + this.$store.getters.nomeSito, //or as string template: '%s - My page'
            'vmid': 'og:title',
          },
          {
            'property': 'og:description',
            'content': this.$store.getters.descrizioneSito,
            'vmid': 'og:description',
          },
          {
            'name': "msapplication-TileColor",
            'content': '#da532c'
          },
          {
            'name': 'theme-color',
            'content': '#ffffff'
          },
          {
            'property': 'og:image',
            'content': this.$store.getters.bannerSito,
            'vmid': 'og:image',
          }
        ],
        link: [
          { rel: 'stylesheet', type: "text/css", href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Material+Icons' },
          { rel: 'apple-touch-icon', sizes: "180x180", href: '/static/favicons/apple-touch-icon.png' },
          { rel: 'icon', type: "image/png", sizes: "32x32", href: '/static/favicons/favicon-32x32.png' },
          { rel: 'icon', type: "image/png", sizes: "16x16", href: '/static/favicons/favicon-16x16.png' },
          { rel: 'manifest', href: '/static/favicons/site.webmanifest' },
          { rel: 'mask-icon', color: "#5bbad5", href: '/static/favicons/safari-pinned-tab.svg' }
        ]
      }
    },
    props: {
      source: String
    },
    computed: {
      
      items () {

        let operazioni = [
          
        ]

        /*let pasta = [
            { icon: 'account_balance', text: 'Pasta Secca', link: "/places/-LW2fZghwTEZXhP0Hz7s" },
            { icon: 'beenhere', text: 'Pasta Fresca', link: "/places/-LW2fgwJZIUwyZc0DIhc" },
            { icon: 'account_balance', text: 'Pasta Senza Glutine', link: "/places/-LW2g--oguOOJZJ195HW" },
            { icon: 'beenhere', text: 'Pasta Bio', link: "/places/-LW2g78NqT7XpefCWGD9" },
            ]
*/
        let items = [
        { icon: 'home', text: this.$t("home"), link: "/" },
        { icon: 'contacts', text: 'Chi Siamo', link: "/places/-LW2fC_Ubdo2Pfgaqn6B"        },
        { icon: 'place', text: this.$t("leggi_luoghi"), link: "/places" },
        { icon: 'content_copy', text: this.$t("leggi_articoli"), link: "/articoli" },
        /*{
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Pasta',
          model: true,
          children: pasta
        },*/

        
    { icon: 'photo_library', text: 'Servizi', link: "/places/-LW2hxotYEAKB6EhIxml" },
    { icon: 'photo_library', text: 'Premiazioni', link: "/places/-LW2hxotYEAKB6EhIxml" },
    { icon: 'photo_library', text: 'Eventi', link: "/places/-LW2hxotYEAKB6EhIxml" },
		{ icon: 'contacts', text: 'Contatti', link: "/places/-LW2i6CR1zZOdvTKKVH1" },

        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: this.$t("operazioni"),
          model: true,
          children: operazioni
        }
        
      ]

      if (!this.userIsAuthenticated) {
          items.push(
            { icon: 'person_add', text: this.$t("registrati"), link: '/signup' },
            { icon: 'lock_open', text: this.$t("entra"), link: '/signin' })
        }
      else{
        items.push(
          { icon: 'person', text: this.$t("profilo"), link: '/profile' },
          { icon: 'exit_to_app', text: this.$t("esci"), link: '/onLogout' }
        )

        if(this.$can('insert', "Place")){
          operazioni.push(
            { icon: 'add_location', text: this.$t("inserisci_place"), link: "/new/all" }
          )
        }

        operazioni.push(
          { icon: 'note_add', text: this.$t("inserisci_articolo"), link: "/articolo/new" }
        )
      }

      items.push(
          { icon: 'build', text: "Powered by eBasilicata", link: "/ebasilicata.com" }
        )
      return items
    },
      menuItems () {
        let menuItems = [
          /*{icon: 'person', title: this.$t("registrati"), link: '/signup'},
        	{icon: 'lock_open', title: this.$t("entra"), link: '/signin'}*/
        {  title: 'Chi Siamo', link: "/places/-LW2fC_Ubdo2Pfgaqn6B"        },
        /*{  title: 'Pasta', link: "#" ,
          submenu: [{title: "Secca" , link: "/places/-LW2fZghwTEZXhP0Hz7s"}, 
                {title: "Fresca" , link: "/places/-LW2fgwJZIUwyZc0DIhc"}, 
                {title: "Senza Glutine" , link: "/places/-LW2g--oguOOJZJ195HW"}, 
                {title: "Biologica" , link: "/places/-LW2g78NqT7XpefCWGD9"}]  
        
        },*/
        {  title: 'Servizi', link: "/places/-LW2hxotYEAKB6EhIxml"},
        {  title: 'Premiazioni', link: "/places/-LW2hxotYEAKB6EhIxml"},
        {  title: 'Eventi', link: "/places/-LW2hxotYEAKB6EhIxml"},
		    {  title: 'Contatti', link: "/places/-LW2i6CR1zZOdvTKKVH1" }
        ]
        /*if (this.userIsAuthenticated) {
          menuItems = [
            
          ]
        }*/
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      infoFooter (){
        let footerString = this.$store.getters.nomeSito

        if(this.$store.getters.featuredDataLuoghi[0].indirizzo !== undefined)
          footerString +=  " - " + this.$store.getters.featuredDataLuoghi[0].indirizzo 
        if(this.$store.getters.featuredDataLuoghi[0].cap !== undefined)
          footerString += " " + this.$store.getters.featuredDataLuoghi[0].cap + " "
        if(this.$store.getters.featuredDataLuoghi[0].comune !== undefined)
          footerString +=  this.$store.getters.featuredDataLuoghi[0].comune + " (" 
        if(this.$store.getters.featuredDataLuoghi[0].provincia !== undefined)
           footerString += this.$store.getters.featuredDataLuoghi[0].provincia + ") " 
        if(this.$store.getters.featuredDataLuoghi[0].partitaIva !== undefined)
          footerString += " P.IVA " + this.$store.getters.featuredDataLuoghi[0].partitaIva

        return footerString 

      },
      imgSfondo () {
        return this.$store.getters.featuredDataLuoghi[0].imgIntro
      },
      icoAction (){
        if(this.$store.getters.featuredDataLuoghi[0].icoAction !== undefined)
          return this.$store.getters.featuredDataLuoghi[0].icoAction
        else
          return "home"
      },

    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      },
      onTest () {
        Notification.requestPermission((permission) => {
          switch (permission) {
            case 'granted': {
              console.log('Now we can send notifications!');
              break;
            }
            case 'denied': {
              console.log('User close the request pop-up!')
            }
            case 'default': {
              console.log('We can\'t send any notifications in both denied and default cases');
            }
          }
        });
      }
      

    }
  }

</script>
<style lang="stylus">
  @import './stylus/main'
</style>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .speed-dial {
    position: absolute;
  }

  #create .btn--floating {
    position: relative;
  }
</style>