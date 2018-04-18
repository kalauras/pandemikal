<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{titolo}}</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreatePlace" ref="form">

         <section v-for="(modulo, index) in componentiForm">
            <component :idPlace="id" :is="modulo.componente" :key="modulo.componente+index" :name="modulo.componente+index" :posizione="index" :datimodulo="modulo.datiModulo"></component>
          </section>
      
          <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-checkbox
      
                  v-model="checkbox"
                  required
                >
  
                  <span slot="label">Accetto <v-btn flat small color="primary" dark @click.native.stop="dialog = true">Termini e Condizioni</v-btn></span>

                </v-checkbox>
                <v-dialog  v-model="dialog" width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">INFORMATIVA E RICHIESTA DI CONSENSO AL TRATTAMENTO DI DATI PERSONALI</span>
                    </v-card-title>
                    <v-card-text>
          
                      <p style="text-align: center;"><strong>ai sensi dell’articolo 13 del DLgs. n° 196 del 30.06.2003<br><br></strong></p>
                      <p>Prima di fornirci i Suoi Dati personali attraverso i Form, La preghiamo di leggere la presente Informativa, segnalandoLe che per “Dati personali” si intendono ai sensi del DLgs 196/2003 (Codice privacy) e della presente sia quelli che Le richiediamo con il presente modulo che quelli spontaneamente da Lei forniti nel testo del messaggio del Form.</p>
                      <p><strong>Tipologia dei dati trattati</strong></p>
                      <p>Al fine di fornirle correttamente le informazioni da Lei richieste sono indispensabili tutti i dati richiesti nel Form, si tratta esclusivamente di dati comuni identificativi e di contatto (nominativo e mail).<br> Finalità dei trattamenti<br> I Dati vengono da noi raccolti e trattati con la esclusiva finalità di fornirle le informazioni richieste.</p>
                      <p><strong>Modalità di trattamento</strong></p>
                      <p>I Dati vengono da noi trattati a mezzo del nostro sistema informatico, con l’applicazione delle Misure di Sicurezza previste dal Codice Privacy, nonché con modalità cartacea e la documentazione relativa verrà correttamente mantenuta e protetta per tutto il tempo necessario al trattamento.<br> I dati forniti saranno trattati da nostri Collaboratori, in qualità di Responsabili od Incaricati, non verranno diffusi, potranno essere comunicati a terzi solo se strettamente indispensabile in relazione alle Sue richieste.</p>
                      <p><strong>Durata del trattamento</strong></p>
                      <p>I suoi dati verranno conservati nella nostra banca dati solo per il tempo strettamente necessario al trattamento, salvo Sua espressa indicazione contraria: qualora desideri che i dati vengano cancellati subito dopo averle fornito le informazioni richieste la invitiamo a comunicarcelo scrivendoci alla mail info@ebasilicata.com.</p>
                      <p><strong>Natura del conferimento dei dati</strong></p>
                      <p>Il conferimento dei Suoi dati è assolutamente facoltativo, parimenti è facoltativo il consenso da parte Sua al trattamento dei dati forniti. Ci corre obbligo informarla che il mancato conferimento dei dati di contatto non ci renderà possibile fornirle le informazioni richieste, parimenti il mancato consenso al trattamento potrebbe costringerci a cancellare i dati forniti.</p>
                      <p><strong>Titolare del trattamento</strong></p>
                      <p>Il Titolare del Trattamento è la scrivente Kalauras Technology Solutions di Pasquale Bartolomeo con sede in c.so Garibaldi 85030 Calvera (PZ), nella persona del legale rappresentante pro tempore e che il Responsabile del Trattamento è il Responsabile dei Servizi Informatici, elettivamente domiciliato, per le disposizioni di cui al DLgs n° 196/2003, presso la sede della scrivente, ove è anche disponibile l’elenco aggiornato degli Incaricati al trattamento, contattabile tramite e-mail: info@ebasilicata.com</p>
                      <p><strong>Diritti dell’Interessato</strong></p>
                      <p>La informiamo che, in qualità di Interessato, ha tutti i diritti previsti dall’art. 7 del DLgs n° 196/2003, tra i quali ottenere a cura del Titolare e senza ritardo la conferma o meno dell’esistenza di Dati personali che La riguardano, l’aggiornamento, la rettifica, l’integrazione, la cancellazione, la trasformazione in forma anonima o il blocco dei Dati forniti.</p>
                      <p>&nbsp;_________________________</p>
                      <p><strong>Consenso al Trattamento di Dati personali comuni e sensibili ai sensi del DLgs n° 196/2003</strong></p>
                      <p>Il sottoscritto/a, acquisite le informazioni sopra riportate in osservanza del disposto di cui all’art. 13 del DLgs n° 196/2003, manifesta il proprio libero e pieno consenso al trattamento dei dati personali forniti, mediante l’indicazione nella apposita casella in calce al Form.</p>

                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat="flat" @click="checkbox = false; dialog = false">Non Acconsento</v-btn>
                      <v-btn color="green darken-1" flat="flat" @click="checkbox = true; dialog = false">Acconsento</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-btn :disabled="!checkbox"
                  class="primary"
                  type="submit">Invia</v-btn>
                  <!--v-btn @click="clear">Reset</v-btn-->
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
      checkbox: false,
      validRequired: true,
      dialog: false
      
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
        if(this.campiModulo !== undefined)
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
        if(this.$store.getters.createPlaceData !== undefined){
          if(this.$store.getters.createPlaceData[this.id] !== undefined)
            return this.$store.getters.createPlaceData[this.id]
          else if(this.$store.getters.createPlaceData["payload"] !== undefined)
            return this.$store.getters.createPlaceData["payload"]
          else{
            this.$router.push('/new/'+this.id)
          }
        }
      }

    },
    methods: {
      
      onCreatePlace () {
          
        const placeData = {}

        for (let comp in this.componentiForm) { 
          placeData[comp] = this.componentiForm[comp].datiModulo.model
          if(this.componentiForm[comp].datiModulo.required && placeData[comp].trim() == "" ){
            this.validRequired = false
          }
        }
        if(this.$store.getters.user !== null && this.$store.getters.user !== undefined)
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
          },
          "titoloMappa": {
            "nome": "titoloSezione", 
            "posiz": 1 ,
            "sottotitolo": "",
            "titolo": "Mappa dei comuni Aderenti"
          },
          "mappa":{
            "nome": "map-followers",
            "posiz": 2,
            "zoom": 8,
            "centro": {
              "lat": 40.6637693,
              "lng": 16.6121927
            }

          }
        }

        if(this.validRequired){
          this.$store.dispatch('createAll', placeData)
          this.$swal("Ottimo Lavoro!", "Luogo inserito con successo! Ora segui le istruzioni per segnalare la posizione", "success")
          this.$router.push('/positionPlace')
        }
        else{
          this.validRequired = true
        }

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
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>