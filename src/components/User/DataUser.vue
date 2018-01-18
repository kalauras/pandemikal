<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Aggiorna i tuoi dati</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onUpadateDataUser">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="nome_user"
                label="Nome"
                id="nome_user"
                v-model="nome_user"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-select
              v-bind:items="comune_elenco"
              v-model="comune_user"
              name="comune_user"
              label="Seleziona il comune di interesse"
              autocomplete
              required
            ></v-select>
          </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="email_user"
                label="Email"
                id="email_user"
                v-model="email_user"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Salva e prosegui</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {

      dataUser: {},
      modal: false,
        comune_elenco: [
          'Abriola','Accettura ','Acerenza','Albano di Lucania','Aliano','Anzi','Armento','Atella','Avigliano','Balvano','Banzi','Baragiano','Barile',
          'Bella','Bernalda','Brienza','Brindisi Montagna','Calciano','Calvello','Calvera','Campomaggiore','Cancellara','Carbone','Castelgrande',
          'Castelluccio Inferiore','Castelluccio Superiore','Castelmezzano','Castelsaraceno ','Castronuovo di Sant\'Andrea','Cersosimo','Chiaromonte',
          'Cirigliano','Colobraro','Corleto Perticara','Craco','Episcopia','Fardella','Ferrandina','Filiano','Forenza','Francavilla in Sinni ','Gallicchio','Garaguso','Genzano di Lucania ','Ginestra','Gorgoglione ','Grassano','Grottole','Grumento Nova ','Guardia Perticara ','Irsina','Lagonegro',
          'Latronico','Laurenzana','Lauria','Lavello','Maratea','Marsico Nuovo ','Marsicovetere ','Maschito','Matera','Melfi','Miglionico','Missanello',
          'Moliterno','Montalbano Jonico ','Montemilone ','Montemurro ','Montescaglioso','Muro Lucano','Nemoli','Noepoli','Nova Siri','Oliveto Lucano ',
          'Oppido Lucano ','Palazzo San Gervasio ','Paterno ','Pescopagano','Picerno ','Pietragalla ','Pietrapertosa ','Pignola','Pisticci','Policoro ',
          'Pomarico ','Potenza','Rapolla','Rapone','Rionero in Vulture ','Ripacandida ','Rivello ','Roccanova ','Rotonda ','Rotondella','Ruoti','Ruvo del Monte ','Salandra','San Chirico Nuovo','San Chirico Raparo','San Costantino Albanese ','San Fele','San Giorgio Lucano','San Martino d\'Agri',
          'San Mauro Forte','San Paolo Albanese','San Severino Lucano ','Sant\'Angelo Le Fratte ','Sant\'Arcangelo','Sarconi','Sasso di Castalda ',
          'Satriano di Lucania ','Savoia di Lucania ','Scanzano Jonico','Senise','Spinoso','Stigliano','Teana','Terranova di Pollino','Tito','Tolve',
          'Tramutola ','Trecchina ','Tricarico ','Trivigno','Tursi','Vaglio Basilicata ','Valsinni','Venosa','Vietri di Potenza ','Viggianello',
          'Viggiano'
        ]
      }
    },
    computed: {
      formIsValid () {
        return this.dataUser.nome_user !== "" && this.dataUser.comune_user !== "" && this.dataUser.email_user !== " "
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      nome_user: {
        get: function () {
          if(this.userIsAuthenticated){
            if(this.$store.getters.user.dataPan.nome_user !== undefined)
              return this.$store.getters.user.dataPan.nome_user
            if(this.$store.getters.user.displayName != null)
              return this.$store.getters.user.displayName
          }
          return ""        
        },
        set: function(newValue){
          this.dataUser.nome_user= newValue
        }
      },
      comune_user: {
        get: function () {
          if(this.userIsAuthenticated){
            if(this.$store.getters.user.dataPan.comune_user !== undefined)
              return this.$store.getters.user.dataPan.comune_user
            else
              return ""
          }

        },
        set: function(newValue){
           this.dataUser.comune_user= newValue
        }
      },
      email_user: {
        get: function () {
          if(this.userIsAuthenticated){
            if(this.$store.getters.user.dataPan.email_user !== undefined)
              return this.$store.getters.user.dataPan.email_user
            if(this.$store.getters.user.email != null)
              return this.$store.getters.user.email
            else
              return ""
          }

        },
        set: function(newValue){
           this.dataUser.email_user= newValue
        }
      }
    },
    methods: {
      onUpadateDataUser () {
        if (!this.formIsValid) {
          return
        }
        this.dataUser.email_user = this.email_user

        this.$store.dispatch('registraDatiUtente', this.dataUser)
        this.$router.push('/positionUser')
      }
    }
  }
</script>
