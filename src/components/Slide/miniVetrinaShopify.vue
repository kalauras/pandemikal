<template>
  <v-container fluid :style="datimodulo.style" >
    <v-layout
      column
      wrap
      class="my-3"
      align-center
    >
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="display-1" style="font-weight:300">{{datimodulo.titolo}}</h2>
          <span class="subheading">
            {{datimodulo.sottotitolo}}
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
  props: ['datimodulo'],
  
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
    let primaryColorTheme = this.$vuetify.theme.primary
    let secondColorTheme = this.$vuetify.theme.secondary
    let accent = this.$vuetify.theme.accent
    let testoBottone = this.datimodulo.testoBottone

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
                'button': testoBottone
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
                  'background-color': primaryColorTheme,
                  'font-family': 'Gill Sans, sans-serif',
                  ':hover': {
                    'background-color': secondColorTheme
                  },
                  ':focus': {
                    'background-color': secondColorTheme
                  },
                  'font-weight': 'normal'
                },
                "price": {
                  "font-size": "10pt",
                  "color": "#000000"
                },
                "title": {
                  "background-color": accent
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
                  'background-color': primaryColorTheme,
                  'font-family': 'Gill Sans, sans-serif',
                  ':hover': {
                    'background-color': secondColorTheme
                  },
                  ':focus': {
                    'background-color': secondColorTheme
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
                'button': 'AGGIUNGI'
              },
              'styles': {
                'product': {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px'
                  }
                },
                "price": {
                  "font-size": "1px",
                  "color": "#da1414"
                },
                'button': {
                  'background-color': primaryColorTheme,
                  'font-family': 'Gill Sans, sans-serif',
                  ':hover': {
                    'background-color': secondColorTheme
                  },
                  ':focus': {
                    'background-color': secondColorTheme
                  },
                  'font-weight': 'normal'
                }
              }
            },
            'toggle': {
              'styles': {
                'toggle': {
                  'font-family': 'Gill Sans, sans-serif',
                  'background-color': 'primaryColorTheme',
                  ':hover': {
                    'background-color': secondColorTheme
                  },
                  ':focus': {
                    'background-color': secondColorTheme
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
