  <template>
    <v-parallax src="https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2Fpangaro-consulting%2Fintro%2Fpangaro-consulting.jpg?alt=media&token=5a617377-b937-43d0-8af2-de4266364ca4" height="600">
    <v-layout
    column
    align-center
    justify-center
    class="white--text"
    >
    <v-card  class="white--text blue-grey darken-2" style="background: rgba(0,  0,  0,  0.75) !important">
      <v-card-title primary-title>
       <h1 class="white--text mb-2 display-1 text-xs-center">Pangaro dott. Vincenzo</h1>
     </v-card-title>
     <div class="subheading mb-3 text-xs-center">Powered by eBasilicata</div>
     <v-card-actions>
      <v-btn flat dark>Indicazioni Stradali</v-btn>
    </v-card-actions>
    <v-list two-line>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="indigo">phone</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>(0039) 333-1234567</v-list-tile-title>
          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>(0039) 0973-577287</v-list-tile-title>
          <v-list-tile-sub-title>Lavoro</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="indigo">mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>info@pangaroconsulting.it</v-list-tile-title>
          <v-list-tile-sub-title>Lavoro</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon color="indigo">location_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>via Roma 91</v-list-tile-title>
          <v-list-tile-sub-title>85034 Francavilla in Sinni (PZ)</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</v-layout>
</v-parallax>
</template>