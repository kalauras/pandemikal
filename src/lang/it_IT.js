import * as firebase from 'firebase'


      let translationsIt = {
        "My nice title": "Il mio bel titolo",
        "content": "contenutoooooo",
        "comune_user": "Comune",
        "coordinate_user": "Coordinate",
        "email_user": "Email",
        "nome_user": "Nome",
        "indicazioni_stradali": "Indicazioni Stradali",
        "chiudi": "Chiudi",
        "esci": "Esci",
        "leggi_articoli": "Leggi gli Articoli",
        "inserisci_articolo": "Inserisci un Articolo",
        "txt_ultimi_articoli": "Questi sono i nostri ultimi articoli",
        "titolo_ebasilicata": "Costantemente aggiornati in un mondo che cambia",
        "sottotitolo_ebasilicata": "Le ultime novità su eBasilicata"
      }

console.log('goooo')

    
firebase.database().ref('ebasilicata/moduli').once('value')
        .then((data) => {
          const obj = data.val()
          for (let key in obj) {
            
            console.log(key)
              // luoghi.push({
              //   id: key,
              //   coordinate: obj[key].coordinate,
              //   indirizzo: obj[key].indirizzo,
              //   imgIntro: obj[key].imgIntro,
              //   openWeek: obj[key].openWeek,
              //   shopCollectionId: obj[key].shopCollectionId,
              //   titolo: obj[key].titolo,
              //   sottotitolo: obj[key].sottotitolo,
              //   telefono: obj[key].telefono,
              //   email: obj[key].email,
              //   cap: obj[key].cap,
              //   comune: obj[key].comune,
              //   provincia: obj[key].provincia,
              //   moduliPagina: this.getters.luogo[0].moduliPagina
              // })
            }
                  
          })
            .catch(
              (error) => {
                console.log(error)
              }
            )

      export default translationsIt



      