  <template>
    <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
        <div class="text-xs-center">
            <v-select
                v-bind:items="comune_elenco"
                v-model="datimodulo.model"
                :name="datimodulo.name"
                :label="datimodulo.label"
                :required="datimodulo.required"
              ></v-select>
        </div>
      </v-flex>
    </v-layout>
    
</template>

<script>

export default {
  
  props: ['datimodulo'],
  data () {
    return {
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
    datimodulo2 () {
      if(this.$store.getters.createPlaceData !== undefined)
        return this.$store.getters.createPlaceData
    }
  }
}
</script>