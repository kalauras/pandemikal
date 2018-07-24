<template>
  <v-layout column>
    <v-flex xs12 sm10 offset-sm1>

      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in datimodulo.cards"
              :key="card.title"
              v-bind="{[`xs${card.flex}`]:true}">
              <v-card :to="card.link">
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <div>
                    <span  v-text="card.desc"></span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>    
  
<script>
 
  export default {
    props: ['datimodulo'],
    data: () => ({
      cards: [
        { title: 'Fotovoltaico', 
          src: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2FdgStudio%2Freferenze%2Fimage1.jpg?alt=media&token=1855c95f-5e3c-4e3b-8c2c-7855c70b5189',
          desc: "Impianti Fotovoltaici a servizio di edifici residenziali e produttivi",
          link: "/places/-LDHUb6A2QkKWa1FiR_N",
          flex: 12 },
        { title: 'Mini Eolico', 
          src: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2FdgStudio%2Freferenze%2Fimage2.jpg?alt=media&token=23f7b4a8-e8b7-49e8-ab15-043eebc566e3',
          desc: "Impianti Mini Eolici per aziende agricole con potenza di 60 kW",  
          link: "/places/-LDH_kkBm0FI04f_Xrp-",
          flex: 6 },
        { title: 'Riqualificazione energetica', 
          src: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2FdgStudio%2Freferenze%2Fimage4.jpg?alt=media&token=20f511ec-c64e-458b-9b87-2e6b4fb0119e', 
          desc: "Intervento di riqualificazione energetica di edificio esistente residenziale nel comune di Gioia dei Marsi (L’Aquila)",
          link: "/places/-LDHdMloiyqTtpfMxmFC",
          flex: 6 },
        { title: 'Riqualificazione energetica', 
          src: 'https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2FdgStudio%2Freferenze%2Fimage3.jpg?alt=media&token=8cd18e13-9791-49fa-b049-7c1b03d6930c', 
          desc: "Intervento di riqualificazione energetica di edificio residenziale in legno realizzato dalla Wolf System nel comune di Caprarola (Viterbo)", 
          link: "/places/-LDHbaC_EcS0ZAyABCoU",
          flex: 12 }
      ]
    })
  }

</script>