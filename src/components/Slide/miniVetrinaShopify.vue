<template>
  <v-container fluid >
    <v-layout
      column
      wrap
      class="my-3"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-1" style="font-weight:300">I nostri servizi</h2>
          <span class="subheading">
            Prenota una consulenza o richiedi altri servizi
          </span>
        </div>
      </v-flex>
    </v-layout>
	<div id='collection-component-60cf2f3014a'>
	</div>
</v-container>
</template>
<script>
export default {
  name: 'google-map',
  props: ['name'],
  // data: function () {
  //   return {
  //     mapName: this.name + '-map',
  //     markerCoordinates: [{
  //       latitude: 40.08111187,
  //       longitude: 16.2045113
  //     }],
  //     map: null,
  //     bounds: null,
  //     markers: []
  //   }
  // },
  computed: {
      luogo() {
        return this.luoghi[0]
      },
      luoghi () {
        return this.$store.getters.featuredDataLuoghi
      }
  },
  mounted: function () {
    let idCollection = this.luogo.shopCollectionId

    let scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit()
      } else {
        loadScript()
      }
    } else {
      loadScript()
    }

    function loadScript () {
      let script = document.createElement('script')
      script.async = true
      script.src = scriptURL
      document.getElementsByTagName('body')[0].appendChild(script)
      script.onload = ShopifyBuyInit
    }

    function ShopifyBuyInit () {
      let client = window.ShopifyBuy.buildClient({
        domain: 'negoziobasilicata.myshopify.com',
        apiKey: 'ca2254f8ac7c9bd23f35e4ffd2e39f2e',
        appId: '6'
      })

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: idCollection,
          node: document.getElementById('collection-component-60cf2f3014a'),
          moneyFormat: '%E2%82%AC%7B%7Bamount%7D%7D',
          options: {
            'product': {
              'buttonDestination': 'modal',
              'variantId': 'all',
              'contents': {
                'imgWithCarousel': false,
                'variantTitle': false,
                'options': false,
                'description': false,
                'buttonWithQuantity': false,
                'quantity': false
              },
              'text': {
                'button': 'LEGGI DI PIU'
              },
              'styles': {
                'product': {
                  '@media (min-width: 601px)': {
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px'
                  }
                },
                'button': {
                  'background-color': '#260881',
                  'font-family': 'Gill Sans, sans-serif',
                  ':hover': {
                    'background-color': '#410edb'
                  },
                  ':focus': {
                    'background-color': '#410edb'
                  },
                  'font-weight': 'normal'
                }
              }
            },
            'cart': {
              'contents': {
                'button': true
              },
              'text': {
                'title': 'CARRELLO',
                'total': 'TOTALE',
                'notice': 'Spedizioni e sconti sono aggiunti al checkout',
                'empty': 'Il tuo carrello è vuoto'
              },
              'styles': {
                'button': {
                  'background-color': '#260881',
                  'font-family': 'Gill Sans, sans-serif',
                  ':hover': {
                    'background-color': '#410edb'
                  },
                  ':focus': {
                    'background-color': '#410edb'
                  },
                  'font-weight': 'normal'
                },
                'footer': {
                  'background-color': '#ffffff'
                }
              }
            },
            'modalProduct': {
              'contents': {
                'img': false,
                'imgWithCarousel': true,
                'variantTitle': false,
                'buttonWithQuantity': true,
                'button': false,
                'quantity': false
              },
              'text': {
                'button': 'AGGIUNGI AL CARRELLO'
              },
              'styles': {
                'product': {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px'
                  }
                },
                'button': {
                  'background-color': '#260881',
                  'font-family': 'Gill Sans, sans-serif',
                  ':hover': {
                    'background-color': '#410edb'
                  },
                  ':focus': {
                    'background-color': '#410edb'
                  },
                  'font-weight': 'normal'
                }
              }
            },
            'toggle': {
              'styles': {
                'toggle': {
                  'font-family': 'Gill Sans, sans-serif',
                  'background-color': '#260881',
                  ':hover': {
                    'background-color': '#410edb'
                  },
                  ':focus': {
                    'background-color': '#410edb'
                  },
                  'font-weight': 'normal'
                }
              }
            },
            'productSet': {
              'styles': {
                'products': {
                  '@media (min-width: 601px)': {
                    'margin-left': '-20px'
                  }
                }
              }
            }
          }
        })
      })
    }
  }
}
</script>
