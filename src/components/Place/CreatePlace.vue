<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Aggiungi un Luogo</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreatePlace">
          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Nome del luogo"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Indirizzo del luogo (via, piazza, etc.)"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-select
                v-bind:items="comune_elenco"
                v-model="comune_user"
                name="comune_user"
                label="Comune del luogo"
                autocomplete
                required
              ></v-select>
            </v-flex>
          </v-layout>
          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>

              <v-card  flat>
                <v-card-text>
                  <v-subheader>Descrizione</v-subheader>
                  <v-container fluid>
                    <v-layout row>
                      <v-flex xs12>
                        <vue-editor id="editor1" v-model="description"></vue-editor>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
              
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn raised class="primary" @click="onPickFile">Carica Immagine Luogo</v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150">
            </v-flex>
          </v-layout>
          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Crea Luogo</v-btn>
            </v-flex>
          </v-layout>
          
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { VueEditor } from 'vue2-editor'

  export default {
    components: {
      VueEditor
   },
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        comune_user: '',
        image: null,
        menu: false,
        menu2: false,
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
        return this.title !== '' &&
          this.location !== '' &&
          this.comune_user !== ''
      },
      dominio () {
        return this.$store.getters.dominio
      },
      gruppo () {
        return this.$store.getters.gruppo
      }
    },
    methods: {
      
      onCreatePlace () {
        if (!this.formIsValid) {
          return
        }
        
        const placeData = {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          dominio: this.dominio,
          gruppo: this.gruppo,
          comune_user: this.comune_user,
        }
        this.$store.dispatch('createPlace', placeData)
        this.$swal("Ottimo Lavoro!", "Luogo inserito con successo! Ora inserisci la posizione", "success")
        this.$router.push('/positionPlace')
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
  }
</script>
