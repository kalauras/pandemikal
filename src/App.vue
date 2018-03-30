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
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}

        </v-btn>
        <v-btn
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
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
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
        color="blue darken-2"
        dark
        fab
        hover
        v-model="fab"
      >
        <v-icon>place</v-icon>
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
        to="/place/new"
        fab
        v-if="this.$can('insert', 'Articolo')"
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
      <div class="white--text" v-html="infoFooter"></div>
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
    props: {
      source: String
    },
    computed: {
      items () {

        let operazioni = [
          
        ]

        let items = [
        { icon: 'home', text: this.$t("home"), link: "/" },
        { icon: 'place', text: this.$t("leggi_luoghi"), link: "/places" },
        { icon: 'content_copy', text: this.$t("leggi_articoli"), link: "/articoli" },
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
          { icon: 'person', text: this.$t("profilo"), link: '/profile' }
        )

        if(this.$can('insert', "Place")){
          operazioni.push(
            { icon: 'add_location', text: this.$t("inserisci_place"), link: "/place/new" }
          )
        }

        operazioni.push(
          { icon: 'note_add', text: this.$t("inserisci_articolo"), link: "/articolo/new" }
        )
      }
      return items
    },
      menuItems () {
        let menuItems = [
          {icon: 'person', title: this.$t("registrati"), link: '/signup'},
          {icon: 'lock_open', title: this.$t("entra"), link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      infoFooter (){
        return this.$store.getters.nomeSito + " - " + 
          this.$store.getters.featuredDataLuoghi[0].indirizzo + " " +
          this.$store.getters.featuredDataLuoghi[0].cap + " " +
          this.$store.getters.featuredDataLuoghi[0].comune + " (" +
          this.$store.getters.featuredDataLuoghi[0].provincia + ") " +
          " P.Iva " + this.$store.getters.featuredDataLuoghi[0].partitaIva
      }

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