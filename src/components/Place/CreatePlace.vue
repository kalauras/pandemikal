<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{titolo}}</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreatePlace">

         <section v-for="(modulo, index) in componentiForm">
            <component :idPlace="id" :is="modulo.componente" :key="modulo.componente+index" :name="modulo.componente+index" :posizione="index" :datimodulo="modulo.datiModulo"></component>
          </section>

          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                type="submit">Invia</v-btn>
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
    props: ['id'],
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
      },
      titolo () {
        if(this.campiModulo.titolo !== undefined)
          return this.campiModulo.titolo
        else
          return "Aggiungi un Luogo"
      },

      componentiForm (){
        if(this.campiModulo !== undefined){
          for (let key in this.campiModulo) { 
            if(key == 'campiModulo'){
              let componentiMod = this.campiModulo[key]

              let keysSorted = Object.keys(componentiMod).sort(function(a,b){return componentiMod[a].posiz-componentiMod[b].posiz})

              var objSorted = {};
              for(var i = 0; i < keysSorted.length; i++){
                objSorted[keysSorted[i]] = componentiMod[keysSorted[i]];
              }
  
              return objSorted
            }
          }
        }
      },

      campiModulo () {
        if(this.$store.getters.createPlaceData !== undefined)
          return this.$store.getters.createPlaceData
      }

    },
    methods: {
      
      onCreatePlace () {
        
        const placeData = {}

        for (let comp in this.componentiForm) { 
          placeData[comp] = this.componentiForm[comp].datiModulo.model
        }

        placeData['creatorId'] = this.$store.getters.user.id
        placeData['dominio'] = this.$store.getters.dominio
        placeData['gruppo'] = this.$store.getters.gruppo
        placeData['categoria'] = this.id

        placeData['title'] = placeData['comune']

        if(placeData['imageUrl'] == null || placeData['imageUrl'] == undefined)
          placeData['imageUrl'] = this.campiModulo['bannerUrl']

        placeData['moduli'] = {
          "introDati": {
            "nome": "introDatiPlace", 
            "posiz": 0 
          }
        }

        console.log(placeData)

        this.$store.dispatch('createAll', placeData)
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
