webpackJsonp([1],{

/***/ "4XAJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5n+r":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Jntt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify = __webpack_require__("3EgV");
var vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  data: () => ({
    dialog: false,
    drawer: false,
    items: [{ icon: 'home', text: 'Home', link: "/" }, { icon: 'content_copy', text: 'Leggi gli articoli', link: "/articoli" }, {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'Operazioni',
      model: true,
      children: [{ icon: 'add', text: 'Aggiungi un articolo', link: "/articolo/new" }]
    }, {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'Altre Operazioni',
      model: false,
      children: [{ text: 'Importa' }, { text: 'Esporta' }, { text: 'Stampa' }]
    }, { icon: 'settings', text: 'Impostazioni' }, { icon: 'chat_bubble', text: 'Inviaci un messaggio', link: '' }, { icon: 'help', text: 'Aiuto' }, { icon: 'person', text: 'Registrati', link: '/signup' }, { icon: 'lock_open', text: 'Entra', link: '/signin' }]
  }),
  props: {
    source: String
  },
  computed: {
    menuItems() {
      let menuItems = [{ icon: 'person', title: 'Registrati', link: '/signup' }, { icon: 'lock_open', title: 'Entra', link: '/signin' }];
      if (this.userIsAuthenticated) {
        menuItems = [{ icon: 'supervisor_account', title: 'Guarda gli Articoli', link: '/articoli' }, { icon: 'room', title: 'Inserisci un Articolo', link: '/articolo/new' }];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-42bbf3b1","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"inspire"}},[_c('v-navigation-drawer',{attrs:{"clipped":"","app":"","absolute":"","temporary":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',{attrs:{"dense":""}},[_vm._l((_vm.items),function(item,i){return [(item.heading)?_c('v-layout',{key:i,attrs:{"row":"","align-center":""}},[_c('v-flex',{attrs:{"xs6":""}},[(item.heading)?_c('v-subheader',[_vm._v("\n              "+_vm._s(item.heading)+"\n            ")]):_vm._e()],1),_vm._v(" "),_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs6":""}},[_c('a',{staticClass:"body-2 black--text",attrs:{"href":"#!"}},[_vm._v("EDIT")])])],1):(item.children)?_c('v-list-group',{attrs:{"no-action":""},model:{value:(item.model),callback:function ($$v) {_vm.$set(item, "model", $$v)},expression:"item.model"}},[_c('v-list-tile',{attrs:{"slot":"item"},on:{"click":function($event){}},slot:"item"},[_c('v-list-tile-action',[_c('v-icon',[_vm._v(_vm._s(item.model ? item.icon : item['icon-alt']))])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                "+_vm._s(item.text)+"\n              ")])],1)],1),_vm._v(" "),_vm._l((item.children),function(child,i){return _c('v-list-tile',{key:i,on:{"click":function($event){_vm.$router.push(child.link)}}},[(child.icon)?_c('v-list-tile-action',[_c('v-icon',[_vm._v(_vm._s(child.icon))])],1):_vm._e(),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                "+_vm._s(child.text)+"\n              ")])],1)],1)})],2):_c('v-list-tile',{on:{"click":function($event){_vm.$router.push(item.link)}}},[_c('v-list-tile-action',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n              "+_vm._s(item.text)+"\n            ")])],1)],1)]})],2)],1),_vm._v(" "),_c('v-toolbar',{attrs:{"color":"primary","dark":"","app":"","clipped-left":"","fixed":""}},[_c('v-toolbar-title',{staticClass:"ml-0 pl-3",style:(_vm.$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px')},[_c('v-toolbar-side-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}}),_vm._v(" "),_c('router-link',{staticStyle:{"cursor":"pointer"},attrs:{"to":"/","tag":"span"}},[_vm._v("Pangaro Consulting "),_c('sup',{staticStyle:{"font-size":"small"}},[_vm._v("BETA")])])],1),_vm._v(" "),_c('div',{staticClass:"d-flex align-center",staticStyle:{"margin-left":"auto"}},[_vm._l((_vm.menuItems),function(item){return _c('v-btn',{key:item.title,attrs:{"flat":"","to":item.link}},[_c('v-icon',{attrs:{"left":"","dark":""}},[_vm._v(_vm._s(item.icon))]),_vm._v("\n        "+_vm._s(item.title)+"\n\n      ")],1)}),_vm._v(" "),(_vm.userIsAuthenticated)?_c('v-btn',{attrs:{"flat":""},on:{"click":_vm.onLogout}},[_c('v-icon',{attrs:{"left":"","dark":""}},[_vm._v("exit_to_app")]),_vm._v("\n        Esci\n\n      ")],1):_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"icon":""}},[_c('v-icon',[_vm._v("apps")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":""}},[_c('v-icon',[_vm._v("notifications")])],1),_vm._v(" "),(_vm.userIsAuthenticated)?_c('v-btn',{attrs:{"to":"/profile","icon":"","large":""}},[_c('v-avatar',{attrs:{"size":"32px","tile":""}},[_c('img',{attrs:{"src":"https://vuetifyjs.com/static/doc-images/logo.svg","alt":"Vuetify"}})])],1):_vm._e()],2)],1),_vm._v(" "),_c('v-content',[_c('router-view')],1),_vm._v(" "),_c('v-btn',{attrs:{"fab":"","bottom":"","right":"","color":"pink","dark":"","fixed":""},on:{"click":function($event){$event.stopPropagation();_vm.dialog = !_vm.dialog}}},[_c('v-icon',[_vm._v("add")])],1),_vm._v(" "),_c('v-dialog',{attrs:{"width":"800px"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"grey lighten-4 py-4 title"},[_vm._v("\n        Create contact\n      ")]),_vm._v(" "),_c('v-container',{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","align-center":"","justify-space-between":""}},[_c('v-layout',{attrs:{"align-center":""}},[_c('v-avatar',{staticClass:"mr-3",attrs:{"size":"40px"}},[_c('img',{attrs:{"src":"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png","alt":""}})]),_vm._v(" "),_c('v-text-field',{attrs:{"placeholder":"Name"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"prepend-icon":"business","placeholder":"Company"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"placeholder":"Job title"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"prepend-icon":"mail","placeholder":"Email"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"type":"tel","prepend-icon":"phone","placeholder":"(000) 000 - 0000","mask":"phone"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"prepend-icon":"notes","placeholder":"Notes"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"flat":"","color":"primary"}},[_vm._v("Altro")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"flat":"","color":"primary"},on:{"click":function($event){_vm.dialog = false}}},[_vm._v("Annulla")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":""},on:{"click":function($event){_vm.dialog = false}}},[_vm._v("Save")])],1)],1)],1),_vm._v(" "),_c('v-footer',{attrs:{"color":"indigo","app":""}},[_c('span',{staticClass:"white--text"},[_vm._v("Pangaro Consulting © 2017")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("uKDO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/firebase/index.js
var firebase = __webpack_require__("Sazm");
var firebase_default = /*#__PURE__*/__webpack_require__.n(firebase);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ad31a8a0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('section',[_c('introDati')],1),_vm._v(" "),_c('section',[_c('titoloSezione')],1),_vm._v(" "),_c('section',[_c('caroselloArticoli')],1),_vm._v(" "),_c('section',[_c('google-map',{attrs:{"name":"mappaPos"}})],1),_vm._v(" "),_c('section',[_c('minivetrina-shopify')],1),_vm._v(" "),_c('section',[_c('google-streetView',{attrs:{"name":"streetPos"}})],1),_vm._v(" "),_c('section',[_c('treColonneTesto')],1)])}
var Home_staticRenderFns = []
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var Home = (Home_esExports);
// CONCATENATED MODULE: ./src/components/Home.vue
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = null
/* scopeId */
var Home___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  __vue_script__,
  Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var components_Home = (Home_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Articolo/Articoli.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Articoli = ({
  computed: {
    articoli() {
      return this.$store.getters.loadedArticoli;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7cc654f4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Articolo/Articoli.vue
var Articoli_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',_vm._l((_vm.articoli),function(articolo){return _c('v-layout',{key:articolo.id,staticClass:"mb-2",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","sm10":"","md8":"","offset-sm1":"","offset-md2":""}},[_c('v-card',{staticClass:"info"},[_c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs5":"","sm4":"","md3":""}},[_c('v-card-media',{attrs:{"src":articolo.imageUrl,"height":"130px"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":"","sm8":"","md9":""}},[_c('v-card-title',{attrs:{"primary-title":""}},[_c('div',[_c('h5',{staticClass:"white--text mb-0"},[_vm._v(_vm._s(articolo.title))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm._f("date")(articolo.date)))])])]),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"flat":"","to":'/articoli/' + articolo.id}},[_c('v-icon',{attrs:{"left":"","light":""}},[_vm._v("arrow_forward")]),_vm._v("\n                  Guarda l'Articolo\n                ")],1)],1)],1)],1)],1)],1)],1)],1)}))}
var Articoli_staticRenderFns = []
var Articoli_esExports = { render: Articoli_render, staticRenderFns: Articoli_staticRenderFns }
/* harmony default export */ var Articolo_Articoli = (Articoli_esExports);
// CONCATENATED MODULE: ./src/components/Articolo/Articoli.vue
var Articoli_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Articoli___vue_template_functional__ = false
/* styles */
var Articoli___vue_styles__ = null
/* scopeId */
var Articoli___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Articoli___vue_module_identifier__ = null
var Articoli_Component = Articoli_normalizeComponent(
  Articoli,
  Articolo_Articoli,
  Articoli___vue_template_functional__,
  Articoli___vue_styles__,
  Articoli___vue_scopeId__,
  Articoli___vue_module_identifier__
)

/* harmony default export */ var components_Articolo_Articoli = (Articoli_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Articolo/CreateArticolo.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CreateArticolo = ({
  data() {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: '',
      time: '',
      gruppo_form: 'all',
      image: null,
      menu: false,
      menu2: false,
      modal: false
    };
  },
  computed: {
    formIsValid() {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== '';
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === 'string') {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    },
    dominio() {
      return this.$store.getters.dominio;
    },
    gruppo() {
      return this.$store.getters.gruppo;
    }
  },
  methods: {
    onCreateArticolo() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.image) {
        return;
      }
      const articoloData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        dominio: this.dominio,
        gruppo: this.gruppo_form,
        date: this.submittableDateTime
      };
      this.$store.dispatch('createArticolo', articoloData);
      this.$router.push('/articoli');
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!');
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-144c7533","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Articolo/CreateArticolo.vue
var CreateArticolo_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('h4',[_vm._v("Crea un nuovo Articolo")])])],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.onCreateArticolo($event)}}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-text-field',{attrs:{"name":"title","label":"Titolo","id":"title","required":""},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-text-field',{attrs:{"name":"location","label":"Luogo","id":"location","required":""},model:{value:(_vm.location),callback:function ($$v) {_vm.location=$$v},expression:"location"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-btn',{staticClass:"primary",attrs:{"raised":""},on:{"click":_vm.onPickFile}},[_vm._v("Carica un Immagine")]),_vm._v(" "),_c('input',{ref:"fileInput",staticStyle:{"display":"none"},attrs:{"type":"file","accept":"image/*"},on:{"change":_vm.onFilePicked}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('img',{attrs:{"src":_vm.imageUrl,"height":"150"}})])],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-text-field',{attrs:{"name":"description","label":"Descrizione","id":"description","multi-line":"","required":""},model:{value:(_vm.description),callback:function ($$v) {_vm.description=$$v},expression:"description"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('h4',[_vm._v("Scegli una data & un orario")])])],1),_vm._v(" "),_c('v-layout',{staticClass:"mb-2",attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-menu',{attrs:{"lazy":"","close-on-content-click":false,"transition":"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:(_vm.menu),callback:function ($$v) {_vm.menu=$$v},expression:"menu"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Data","prepend-icon":"event","readonly":""},slot:"activator",model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}}),_vm._v(" "),_c('v-date-picker',{attrs:{"autosave":"","no-title":"","scrollable":"","actions":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var save = ref.save;
var cancel = ref.cancel;
return [_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"flat":"","color":"primary"},on:{"click":cancel}},[_vm._v("Cancel")]),_vm._v(" "),_c('v-btn',{attrs:{"flat":"","color":"primary"},on:{"click":save}},[_vm._v("OK")])],1)]}}]),model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}})],1)],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-menu',{attrs:{"lazy":"","close-on-content-click":false,"transition":"scale-transition","offset-y":"","full-width":"","nudge-right":40,"max-width":"290px","min-width":"290px"},model:{value:(_vm.menu2),callback:function ($$v) {_vm.menu2=$$v},expression:"menu2"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Orario","prepend-icon":"access_time","readonly":""},slot:"activator",model:{value:(_vm.time),callback:function ($$v) {_vm.time=$$v},expression:"time"}}),_vm._v(" "),_c('v-time-picker',{attrs:{"autosave":"","format":"24hr"},model:{value:(_vm.time),callback:function ($$v) {_vm.time=$$v},expression:"time"}})],1)],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-checkbox',{attrs:{"label":("Pubblica anche sulle pagine del gruppo " + (_vm.gruppo.toString())),"true-value":this.gruppo,"false-value":"personale","light":""},model:{value:(_vm.gruppo_form),callback:function ($$v) {_vm.gruppo_form=$$v},expression:"gruppo_form"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-btn',{staticClass:"primary",attrs:{"disabled":!_vm.formIsValid,"type":"submit"}},[_vm._v("Crea Articolo")])],1)],1)],1)])],1)],1)}
var CreateArticolo_staticRenderFns = []
var CreateArticolo_esExports = { render: CreateArticolo_render, staticRenderFns: CreateArticolo_staticRenderFns }
/* harmony default export */ var Articolo_CreateArticolo = (CreateArticolo_esExports);
// CONCATENATED MODULE: ./src/components/Articolo/CreateArticolo.vue
var CreateArticolo_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var CreateArticolo___vue_template_functional__ = false
/* styles */
var CreateArticolo___vue_styles__ = null
/* scopeId */
var CreateArticolo___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var CreateArticolo___vue_module_identifier__ = null
var CreateArticolo_Component = CreateArticolo_normalizeComponent(
  CreateArticolo,
  Articolo_CreateArticolo,
  CreateArticolo___vue_template_functional__,
  CreateArticolo___vue_styles__,
  CreateArticolo___vue_scopeId__,
  CreateArticolo___vue_module_identifier__
)

/* harmony default export */ var components_Articolo_CreateArticolo = (CreateArticolo_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/User/Profile.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Profile = ({

  computed: {
    user() {
      return this.$store.getters.utenteDatiFB;
    },
    loading() {
      return this.$store.getters.loading;
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0d95b28d","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/User/Profile.vue
var Profile_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',[_vm._v("La pagina è in costruzione")]),_vm._v(" "),_c('v-list',{attrs:{"two-line":""}},[_vm._l((_vm.user.dataPan),function(child,i){return [_c('v-divider'),_vm._v(" "),_c('v-list-tile',{attrs:{"avatar":""},on:{"click":function($event){}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(i)}}),_vm._v(" "),_c('v-list-tile-sub-title',{domProps:{"innerHTML":_vm._s(child)}})],1)],1)]})],2)],1)}
var Profile_staticRenderFns = []
var Profile_esExports = { render: Profile_render, staticRenderFns: Profile_staticRenderFns }
/* harmony default export */ var User_Profile = (Profile_esExports);
// CONCATENATED MODULE: ./src/components/User/Profile.vue
var Profile_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Profile___vue_template_functional__ = false
/* styles */
var Profile___vue_styles__ = null
/* scopeId */
var Profile___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Profile___vue_module_identifier__ = null
var Profile_Component = Profile_normalizeComponent(
  Profile,
  User_Profile,
  Profile___vue_template_functional__,
  Profile___vue_styles__,
  Profile___vue_scopeId__,
  Profile___vue_module_identifier__
)

/* harmony default export */ var components_User_Profile = (Profile_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/User/Signup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Signup = ({
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword ? 'Le Password non sono uguali' : '';
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/dataUser');
      }
    }
  },
  methods: {
    onSignup() {
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password });
    },
    onDismissed() {
      this.$store.dispatch('clearError');
    },
    onFbSignup() {
      this.$store.dispatch('signUserUpFb');
    },
    onGoogleSignup() {
      this.$store.dispatch('signUserUpGoogle');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-14aa3020","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/User/Signup.vue
var Signup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[(_vm.error)?_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('app-alert',{attrs:{"text":_vm.error.message},on:{"dismissed":_vm.onDismissed}})],1)],1):_vm._e(),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-card',[_c('v-card-text',[_c('v-container',[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.onSignup($event)}}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"email","label":"eMail","id":"email","type":"email","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"password","label":"Password","id":"password","type":"password","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"confirmPassword","label":"Conferma Password","id":"confirmPassword","type":"password","rules":[_vm.comparePasswords]},model:{value:(_vm.confirmPassword),callback:function ($$v) {_vm.confirmPassword=$$v},expression:"confirmPassword"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"type":"submit","disabled":_vm.loading,"loading":_vm.loading}},[_vm._v("\n                    Registrati\n                     "),_c('span',{staticClass:"custom-loader",attrs:{"slot":"loader"},slot:"loader"},[_c('v-icon',{attrs:{"light":""}},[_vm._v("cached")])],1)]),_vm._v(" "),_c('v-btn',{on:{"click":_vm.onFbSignup}},[_vm._v("Facebook")]),_vm._v(" "),_c('v-btn',{on:{"click":_vm.onGoogleSignup}},[_vm._v("Google")])],1)],1)],1)])],1)],1)],1)],1)],1)}
var Signup_staticRenderFns = []
var Signup_esExports = { render: Signup_render, staticRenderFns: Signup_staticRenderFns }
/* harmony default export */ var User_Signup = (Signup_esExports);
// CONCATENATED MODULE: ./src/components/User/Signup.vue
var Signup_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Signup___vue_template_functional__ = false
/* styles */
var Signup___vue_styles__ = null
/* scopeId */
var Signup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Signup___vue_module_identifier__ = null
var Signup_Component = Signup_normalizeComponent(
  Signup,
  User_Signup,
  Signup___vue_template_functional__,
  Signup___vue_styles__,
  Signup___vue_scopeId__,
  Signup___vue_module_identifier__
)

/* harmony default export */ var components_User_Signup = (Signup_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/User/Signin.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Signin = ({
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password });
    },
    onDismissed() {
      this.$store.dispatch('clearError');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-64bbb382","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/User/Signin.vue
var Signin_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[(_vm.error)?_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('app-alert',{attrs:{"text":_vm.error.message},on:{"dismissed":_vm.onDismissed}})],1)],1):_vm._e(),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-card',[_c('v-card-text',[_c('v-container',[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.onSignin($event)}}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"email","label":"eMail","id":"email","type":"email","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"name":"password","label":"Password","id":"password","type":"password","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"type":"submit","disabled":_vm.loading,"loading":_vm.loading}},[_vm._v("\n                    Entra\n                     "),_c('span',{staticClass:"custom-loader",attrs:{"slot":"loader"},slot:"loader"},[_c('v-icon',{attrs:{"light":""}},[_vm._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)}
var Signin_staticRenderFns = []
var Signin_esExports = { render: Signin_render, staticRenderFns: Signin_staticRenderFns }
/* harmony default export */ var User_Signin = (Signin_esExports);
// CONCATENATED MODULE: ./src/components/User/Signin.vue
var Signin_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Signin___vue_template_functional__ = false
/* styles */
var Signin___vue_styles__ = null
/* scopeId */
var Signin___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Signin___vue_module_identifier__ = null
var Signin_Component = Signin_normalizeComponent(
  Signin,
  User_Signin,
  Signin___vue_template_functional__,
  Signin___vue_styles__,
  Signin___vue_scopeId__,
  Signin___vue_module_identifier__
)

/* harmony default export */ var components_User_Signin = (Signin_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Articolo/Articolo.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Articolo = ({
  props: ['id'],
  computed: {
    articolo() {
      return this.$store.getters.loadedArticolo(this.id);
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    },
    userIsCreator() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      return this.$store.getters.user.id === this.articolo.creatorId;
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c7082c04","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Articolo/Articolo.vue
var Articolo_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[(_vm.loading)?_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":""}},[_c('v-progress-circular',{staticClass:"primary--text",attrs:{"indeterminate":"","width":7,"size":70}})],1)],1):_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',[_c('v-card-title',[_c('h6',{staticClass:"title primary--text"},[_vm._v(_vm._s(_vm.articolo.title))]),_vm._v(" "),(_vm.userIsCreator)?[_c('v-spacer'),_vm._v(" "),_c('app-edit-articolo-details-dialog',{attrs:{"articolo":_vm.articolo}})]:_vm._e()],2),_vm._v(" "),_c('v-card-media',{attrs:{"src":_vm.articolo.imageUrl,"height":"400px"}}),_vm._v(" "),_c('v-card-text',[_c('div',{staticClass:"info--text"},[_vm._v(_vm._s(_vm._f("date")(_vm.articolo.date))+" - "+_vm._s(_vm.articolo.location))]),_vm._v(" "),_c('div',[(_vm.userIsCreator)?_c('app-edit-articolo-date-dialog',{attrs:{"articolo":_vm.articolo}}):_vm._e(),_vm._v(" "),(_vm.userIsCreator)?_c('app-edit-articolo-time-dialog',{attrs:{"articolo":_vm.articolo}}):_vm._e()],1),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.articolo.description))])]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.userIsAuthenticated && !_vm.userIsCreator)?_c('app-articolo-register-dialog',{attrs:{"articoloId":_vm.articolo.id}}):_vm._e()],1)],1)],1)],1)],1)}
var Articolo_staticRenderFns = []
var Articolo_esExports = { render: Articolo_render, staticRenderFns: Articolo_staticRenderFns }
/* harmony default export */ var Articolo_Articolo = (Articolo_esExports);
// CONCATENATED MODULE: ./src/components/Articolo/Articolo.vue
var Articolo_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Articolo___vue_template_functional__ = false
/* styles */
var Articolo___vue_styles__ = null
/* scopeId */
var Articolo___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Articolo___vue_module_identifier__ = null
var Articolo_Component = Articolo_normalizeComponent(
  Articolo,
  Articolo_Articolo,
  Articolo___vue_template_functional__,
  Articolo___vue_styles__,
  Articolo___vue_scopeId__,
  Articolo___vue_module_identifier__
)

/* harmony default export */ var components_Articolo_Articolo = (Articolo_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/User/DataUser.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DataUser = ({
  data() {
    return {

      dataUser: {},
      modal: false,
      comune_elenco: ['Abriola', 'Accettura ', 'Acerenza', 'Albano di Lucania', 'Aliano', 'Anzi', 'Armento', 'Atella', 'Avigliano', 'Balvano', 'Banzi', 'Baragiano', 'Barile', 'Bella', 'Bernalda', 'Brienza', 'Brindisi Montagna', 'Calciano', 'Calvello', 'Calvera', 'Campomaggiore', 'Cancellara', 'Carbone', 'Castelgrande', 'Castelluccio Inferiore', 'Castelluccio Superiore', 'Castelmezzano', 'Castelsaraceno ', 'Castronuovo di Sant\'Andrea', 'Cersosimo', 'Chiaromonte', 'Cirigliano', 'Colobraro', 'Corleto Perticara', 'Craco', 'Episcopia', 'Fardella', 'Ferrandina', 'Filiano', 'Forenza', 'Francavilla in Sinni ', 'Gallicchio', 'Garaguso', 'Genzano di Lucania ', 'Ginestra', 'Gorgoglione ', 'Grassano', 'Grottole', 'Grumento Nova ', 'Guardia Perticara ', 'Irsina', 'Lagonegro', 'Latronico', 'Laurenzana', 'Lauria', 'Lavello', 'Maratea', 'Marsico Nuovo ', 'Marsicovetere ', 'Maschito', 'Matera', 'Melfi', 'Miglionico', 'Missanello', 'Moliterno', 'Montalbano Jonico ', 'Montemilone ', 'Montemurro ', 'Montescaglioso', 'Muro Lucano', 'Nemoli', 'Noepoli', 'Nova Siri', 'Oliveto Lucano ', 'Oppido Lucano ', 'Palazzo San Gervasio ', 'Paterno ', 'Pescopagano', 'Picerno ', 'Pietragalla ', 'Pietrapertosa ', 'Pignola', 'Pisticci', 'Policoro ', 'Pomarico ', 'Potenza', 'Rapolla', 'Rapone', 'Rionero in Vulture ', 'Ripacandida ', 'Rivello ', 'Roccanova ', 'Rotonda ', 'Rotondella', 'Ruoti', 'Ruvo del Monte ', 'Salandra', 'San Chirico Nuovo', 'San Chirico Raparo', 'San Costantino Albanese ', 'San Fele', 'San Giorgio Lucano', 'San Martino d\'Agri', 'San Mauro Forte', 'San Paolo Albanese', 'San Severino Lucano ', 'Sant\'Angelo Le Fratte ', 'Sant\'Arcangelo', 'Sarconi', 'Sasso di Castalda ', 'Satriano di Lucania ', 'Savoia di Lucania ', 'Scanzano Jonico', 'Senise', 'Spinoso', 'Stigliano', 'Teana', 'Terranova di Pollino', 'Tito', 'Tolve', 'Tramutola ', 'Trecchina ', 'Tricarico ', 'Trivigno', 'Tursi', 'Vaglio Basilicata ', 'Valsinni', 'Venosa', 'Vietri di Potenza ', 'Viggianello', 'Viggiano']
    };
  },
  computed: {
    formIsValid() {
      return this.dataUser.nome_user !== "" && this.dataUser.comune_user !== "" && this.dataUser.email_user !== " ";
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    },
    nome_user: {
      get: function () {
        if (this.userIsAuthenticated) {
          if (this.$store.getters.user.dataPan.nome_user !== undefined) return this.$store.getters.user.dataPan.nome_user;
          if (this.$store.getters.user.displayName != null) return this.$store.getters.user.displayName;
        }
        return "";
      },
      set: function (newValue) {
        this.dataUser.nome_user = newValue;
      }
    },
    comune_user: {
      get: function () {
        if (this.userIsAuthenticated) {
          if (this.$store.getters.user.dataPan.comune_user !== undefined) return this.$store.getters.user.dataPan.comune_user;else return "";
        }
      },
      set: function (newValue) {
        this.dataUser.comune_user = newValue;
      }
    },
    email_user() {
      if (this.userIsAuthenticated) {

        return this.$store.getters.user.email;
      } else return "";
    }
  },
  methods: {
    onUpadateDataUser() {
      if (!this.formIsValid) {
        return;
      }
      this.dataUser.email_user = this.email_user;

      this.$store.dispatch('registraDatiUtente', this.dataUser);
      this.$router.push('/profile');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2379d568","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/User/DataUser.vue
var DataUser_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('h4',[_vm._v("Inserisci i tuoi dati")])])],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.onUpadateDataUser($event)}}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-text-field',{attrs:{"name":"nome_user","label":"Nome","id":"nome_user","required":""},model:{value:(_vm.nome_user),callback:function ($$v) {_vm.nome_user=$$v},expression:"nome_user"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-select',{attrs:{"items":_vm.comune_elenco,"name":"comune_user","label":"Seleziona il comune di interesse","autocomplete":"","required":""},model:{value:(_vm.comune_user),callback:function ($$v) {_vm.comune_user=$$v},expression:"comune_user"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-text-field',{attrs:{"name":"email_user","label":"Email","id":"email_user","readonly":"","required":""},model:{value:(_vm.email_user),callback:function ($$v) {_vm.email_user=$$v},expression:"email_user"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-btn',{staticClass:"primary",attrs:{"disabled":!_vm.formIsValid,"type":"submit"}},[_vm._v("Salva e prosegui")])],1)],1)],1)])],1)],1)}
var DataUser_staticRenderFns = []
var DataUser_esExports = { render: DataUser_render, staticRenderFns: DataUser_staticRenderFns }
/* harmony default export */ var User_DataUser = (DataUser_esExports);
// CONCATENATED MODULE: ./src/components/User/DataUser.vue
var DataUser_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var DataUser___vue_template_functional__ = false
/* styles */
var DataUser___vue_styles__ = null
/* scopeId */
var DataUser___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DataUser___vue_module_identifier__ = null
var DataUser_Component = DataUser_normalizeComponent(
  DataUser,
  User_DataUser,
  DataUser___vue_template_functional__,
  DataUser___vue_styles__,
  DataUser___vue_scopeId__,
  DataUser___vue_module_identifier__
)

/* harmony default export */ var components_User_DataUser = (DataUser_Component.exports);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./src/store/articolo/index.js


/* harmony default export */ var store_articolo = ({
  state: {
    loadedArticoli: [{
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
      id: 'afajfjadfaadfa323',
      title: 'Articolo in New York',
      date: new Date(),
      location: 'New York',
      description: 'New York, New York!'
    }, {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
      id: 'aadsfhbkhlk1241',
      title: 'Articolo in Paris',
      date: new Date(),
      location: 'Paris',
      description: 'It\'s Paris!'
    }]
  },
  mutations: {
    setLoadedArticoli(state, payload) {
      state.loadedArticoli = payload;
    },
    createArticolo(state, payload) {
      state.loadedArticoli.push(payload);
    },
    updateArticolo(state, payload) {
      const articolo = state.loadedArticoli.find(articolo => {
        return articolo.id === payload.id;
      });
      if (payload.title) {
        articolo.title = payload.title;
      }
      if (payload.description) {
        articolo.description = payload.description;
      }
      if (payload.date) {
        articolo.date = payload.date;
      }
    }
  },
  actions: {
    loadArticoli({ commit, getters }) {
      commit('setLoading', true);
      const articoli = [];
      //carico gli articoli legati alla pagina
      firebase["database"]().ref(getters.pageID).orderByChild('dominio').equalTo(getters.dominio).once('value').then(data => {

        const obj = data.val();
        for (let key in obj) {
          articoli.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date,
            location: obj[key].location,
            creatorId: obj[key].creatorId
          });
        }
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });

      // carico gli articoli del gruppo evitando i doppioni 
      firebase["database"]().ref(getters.pageID).orderByChild('gruppo').equalTo(getters.gruppo).once('value').then(data => {
        const obj = data.val();
        for (let key in obj) {
          if (obj[key].dominio == getters.dominio) continue;
          articoli.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date,
            location: obj[key].location,
            creatorId: obj[key].creatorId
          });
        }
        commit('setLoadedArticoli', articoli);
        commit('setLoading', false);
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    },

    createArticolo({ commit, getters }, payload) {
      const articolo = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id,
        dominio: payload.dominio,
        gruppo: payload.gruppo
      };
      let imageUrl;
      let key;
      firebase["database"]().ref('articoli').push(articolo).then(data => {
        key = data.key;
        return key;
      }).then(key => {
        const filename = payload.image.name;
        const ext = filename.slice(filename.lastIndexOf('.'));
        return firebase["storage"]().ref('articoli/' + key + '.' + ext).put(payload.image);
      }).then(fileData => {
        imageUrl = fileData.metadata.downloadURLs[0];
        return firebase["database"]().ref('articoli').child(key).update({ imageUrl: imageUrl });
      }).then(() => {
        commit('createArticolo', {
          //...articolo, //...
          title: articolo.title,
          location: articolo.location,
          description: articolo.description,
          date: articolo.date,
          creatorId: articolo.creatorId,
          dominio: getters.dominio,
          gruppo: articolo.gruppo,
          imageUrl: imageUrl,
          id: key
        });
      }).catch(error => {
        console.log(error);
      });
      // Reach out to firebase and store it
    },
    updateArticoloData({ commit }, payload) {
      commit('setLoading', true);
      const updateObj = {};
      if (payload.title) {
        updateObj.title = payload.title;
      }
      if (payload.description) {
        updateObj.description = payload.description;
      }
      if (payload.date) {
        payload.date = payload.date.toISOString();
        updateObj.date = payload.date;
      }
      firebase["database"]().ref('articoli').child(payload.id).update(updateObj).then(() => {
        commit('setLoading', false);
        commit('updateArticolo', payload);
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    }
  },
  getters: {
    loadedArticoli(state) {
      return state.loadedArticoli.sort((articoloA, articoloB) => {
        return articoloA.date < articoloB.date;
      });
    },
    featuredArticoli(state, getters) {
      return getters.loadedArticoli.slice(0, 5);
    },
    loadedArticolo(state) {
      return articoloId => {
        return state.loadedArticoli.find(articolo => {
          return articolo.id === articoloId;
        });
      };
    }
  }
});
// CONCATENATED MODULE: ./src/store/luogo/index.js


/* harmony default export */ var store_luogo = ({
  state: {
    loadedDataLuoghi: [{
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
      id: 'afajfjadfaadfa323',
      coordinate: '',
      indirizzo: 'caricamento indirizzo',
      openWeek: '',
      shopCollectionId: '',
      telefono: 'caricamento telefono',
      titolo: 'eBasilicata',
      email: 'caricamento email',
      cap: 'caricamento cap',
      comune: 'caricameto comune',
      provincia: 'caricamento provincia'
    }]
  },
  mutations: {
    setLoadedDataLuoghi(state, payload) {
      state.loadedDataLuoghi = payload;
    },
    createLuogo(state, payload) {
      state.loadedDataLuoghi.push(payload);
    },
    updateLuogo(state, payload) {
      const luogo = state.loadedDataLuoghi.find(luogo => {
        return luogo.id === payload.id;
      });
      if (payload.title) {
        luogo.title = payload.title;
      }
      if (payload.description) {
        luogo.description = payload.description;
      }
      if (payload.date) {
        luogo.date = payload.date;
      }
    }
  },
  actions: {
    loadDataLuoghi({ commit }) {
      commit('setLoading', true);
      firebase["database"]().ref('pangaro').once('value').then(data => {
        const luoghi = [];
        const obj = data.val();
        for (let key in obj) {
          luoghi.push({
            id: key,
            coordinate: obj[key].coordinate,
            indirizzo: obj[key].indirizzo,
            imageUrl: obj[key].imageUrl,
            openWeek: obj[key].openWeek,
            shopCollectionId: obj[key].shopCollectionId,
            titolo: obj[key].titolo,
            sottotitolo: obj[key].sottotitolo,
            telefono: obj[key].telefono,
            email: obj[key].email,
            cap: obj[key].cap,
            comune: obj[key].comune,
            provincia: obj[key].provincia
          });
        }
        commit('setLoadedDataLuoghi', luoghi);
        commit('setLoading', false);
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    },
    createLuogo({ commit, getters }, payload) {
      const luogo = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      };
      let imageUrl;
      let key;
      firebase["database"]().ref('luoghi').push(luogo).then(data => {
        key = data.key;
        return key;
      }).then(key => {
        const filename = payload.image.name;
        const ext = filename.slice(filename.lastIndexOf('.'));
        return firebase["storage"]().ref('luoghi/' + key + '.' + ext).put(payload.image);
      }).then(fileData => {
        imageUrl = fileData.metadata.downloadURLs[0];
        return firebase["database"]().ref('luoghi').child(key).update({ imageUrl: imageUrl });
      }).then(() => {
        commit('createLuogo', {
          //...luogo, //...
          title: luogo.title,
          location: luogo.location,
          description: luogo.description,
          date: luogo.date,
          creatorId: luogo.creatorId,
          imageUrl: imageUrl,
          id: key
        });
      }).catch(error => {
        console.log(error);
      });
      // Reach out to firebase and store it
    },
    updateLuogoData({ commit }, payload) {
      commit('setLoading', true);
      const updateObj = {};
      if (payload.title) {
        updateObj.title = payload.title;
      }
      if (payload.description) {
        updateObj.description = payload.description;
      }
      if (payload.date) {
        payload.date = payload.date.toISOString();
        updateObj.date = payload.date;
      }
      firebase["database"]().ref('luoghi').child(payload.id).update(updateObj).then(() => {
        commit('setLoading', false);
        commit('updateLuogo', payload);
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    }
  },
  getters: {
    loadedDataLuoghi(state) {
      return state.loadedDataLuoghi.sort((luogoA, luogoB) => {
        return luogoA.shopCollectionId > luogoB.shopCollectionId;
      });
    },
    featuredDataLuoghi(state, getters) {
      return getters.loadedDataLuoghi.slice(0, 5);
    },
    loadedLuogo(state) {
      return luogoId => {
        return state.loadedDataLuoghi.find(luogo => {
          return luogo.id === luogoId;
        });
      };
    }
  }
});
// CONCATENATED MODULE: ./src/store/user/index.js


/* harmony default export */ var store_user = ({
  state: {
    user: null
  },
  mutations: {
    registraDatiUtente(state, payload) {
      //const id = payload.id
      //if (state.user.dataPan.findIndex(articolo => articolo.id === id) >= 0) {
      //  return
      //}
      for (let key in payload) {
        console.log(key);
        state.user.dataPan[key] = payload[key];
      }
      //if()

      //state.user.dataPan.push(id)
      //state.user.fbKeys[id] = payload.fbKey
    },
    registerUserForArticolo(state, payload) {
      const id = payload.id;
      if (state.user.registeredArticoli.findIndex(articolo => articolo.id === id) >= 0) {
        return;
      }
      state.user.registeredArticoli.push(id);
      state.user.fbKeys[id] = payload.fbKey;
    },
    unregisterUserFromArticolo(state, payload) {
      const registeredArticoli = state.user.registeredArticoli;
      registeredArticoli.splice(registeredArticoli.findIndex(articolo => articolo.id === payload), 1);
      Reflect.deleteProperty(state.user.fbKeys, payload);
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registraDatiUtente({ commit, getters }, payload) {
      commit('setLoading', true);
      const user = getters.user;

      const datiUtente = payload;

      firebase["database"]().ref('/users/' + user.id).child('/data/').update(datiUtente).then(user => {
        commit('setLoading', false);
        commit('registraDatiUtente', datiUtente);
        //commit('registraDatiUtente', {id: payload, fbKey: data.key})
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    },
    registerUserForArticolo({ commit, getters }, payload) {
      commit('setLoading', true);
      const user = getters.user;
      firebase["database"]().ref('/users/' + user.id).child('/registrations/').push(payload).then(data => {
        commit('setLoading', false);
        commit('registerUserForArticolo', { id: payload, fbKey: data.key });
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    },
    unregisterUserFromArticolo({ commit, getters }, payload) {
      commit('setLoading', true);
      const user = getters.user;
      if (!user.fbKeys) {
        return;
      }
      const fbKey = user.fbKeys[payload];
      firebase["database"]().ref('/users/' + user.id + '/registrations/').child(fbKey).remove().then(() => {
        commit('setLoading', false);
        commit('unregisterUserFromArticolo', payload);
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase["auth"]().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        commit('setLoading', false);
        const newUser = {
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
          registeredArticoli: [],
          fbKeys: {},
          dataPan: {}
        };
        commit('setUser', newUser);
      }).catch(error => {
        commit('setLoading', false);
        commit('setError', error);
        console.log(error);
      });
    },
    signUserUpFb({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase["auth"]().signInWithPopup(new firebase["auth"].FacebookAuthProvider()).then(user => {
        commit('setLoading', false);
        const newUser = {
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
          registeredArticoli: [],
          fbKeys: {},
          dataPan: {}
        };
        commit('setUser', newUser);
      }).catch(error => {
        commit('setLoading', false);
        commit('setError', error);
        console.log(error);
      });
    },
    signUserUpGoogle({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase["auth"]().signInWithPopup(new firebase["auth"].GoogleAuthProvider()).then(user => {
        commit('setLoading', false);
        const newUser = {
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
          registeredArticoli: [],
          fbKeys: {},
          dataPan: {}
        };
        commit('setUser', newUser);
      }).catch(error => {
        commit('setLoading', false);
        commit('setError', error);
        console.log(error);
      });
    },
    signUserIn({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase["auth"]().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
        commit('setLoading', false);
        const newUser = {
          id: user.uid,
          displayName: "",
          email: user.email,
          registeredArticoli: [],
          fbKeys: {},
          dataPan: {}
        };
        commit('setUser', newUser);
      }).catch(error => {
        commit('setLoading', false);
        commit('setError', error);
        console.log(error);
      });
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', {
        id: payload.uid,
        displayName: payload.displayName,
        email: payload.email,
        registeredArticoli: [],
        fbKeys: {},
        dataPan: {}
      });
    },
    fetchUserData({ commit, getters }) {
      commit('setLoading', true);
      firebase["database"]().ref('/users/' + getters.user.id + '/registrations/').once('value').then(data => {
        const dataPairs = data.val();
        let registeredArticoli = [];
        let swappedPairs = {};
        for (let key in dataPairs) {
          registeredArticoli.push(dataPairs[key]);
          swappedPairs[dataPairs[key]] = key;
        }
        const updatedUser = {
          id: getters.user.id,
          displayName: getters.user.displayName,
          email: getters.user.email,
          registeredArticoli: registeredArticoli,
          fbKeys: swappedPairs,
          dataPan: getters.user.dataPan
        };
        commit('setLoading', false);
        commit('setUser', updatedUser);
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    },
    fetchUserDataPan({ commit, getters }) {
      commit('setLoading', true);
      firebase["database"]().ref('/users/' + getters.user.id + '/data/').once('value').then(data => {
        const dataPairs = data.val();
        const utenti = {};
        for (let key in dataPairs) {
          utenti[key] = dataPairs[key];
        }
        const updatedUser = {
          id: getters.user.id,
          displayName: getters.user.displayName,
          email: getters.user.email,
          registeredArticoli: getters.user.registeredArticoli,
          fbKeys: getters.user.fbKeys,
          dataPan: utenti
        };
        commit('setLoading', false);
        commit('setUser', updatedUser);
      }).catch(error => {
        console.log(error);
        commit('setLoading', false);
      });
    },
    logout({ commit }) {
      firebase["auth"]().signOut();
      commit('setUser', null);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    utenteDatiFB(state) {
      return state.user;
    }
  }
});
// CONCATENATED MODULE: ./src/store/shared/index.js
/* harmony default export */ var shared = ({
  state: {
    loading: false,
    error: null,
    pageID: 'articoli',
    dominio: 'pangaroconsulting.it',
    gruppo: 'commercialisti'
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setPageID(state, payload) {
      state.pageID = payload;
    }
  },
  actions: {
    clearError({ commit }) {
      commit('clearError');
    }
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
    pageID(state) {
      return state.pageID;
    },
    dominio(state) {
      return state.dominio;
    },
    gruppo(state) {
      return state.gruppo;
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js








vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);

const store = new vuex_esm["a" /* default */].Store({
  modules: {
    articolo: store_articolo,
    luogo: store_luogo,
    user: store_user,
    shared: shared
  }
});
// CONCATENATED MODULE: ./src/router/auth-guard.js


/* harmony default export */ var auth_guard = ((to, from, next) => {
  if (store.getters.user) {
    next();
  } else {
    next('/signin');
  }
});
// CONCATENATED MODULE: ./src/router/index.js












vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: components_Home
  }, {
    path: '/articoli',
    name: 'Articoli',
    component: components_Articolo_Articoli
  }, {
    path: '/articolo/new',
    name: 'CreateArticolo',
    component: components_Articolo_CreateArticolo,
    beforeEnter: auth_guard
  }, {
    path: '/articoli/:id',
    name: 'Articolo',
    props: true,
    component: components_Articolo_Articolo
  }, {
    path: '/profile',
    name: 'Profile',
    component: components_User_Profile,
    beforeEnter: auth_guard
  }, {
    path: '/signup',
    name: 'Signup',
    component: components_User_Signup
  }, {
    path: '/signin',
    name: 'Signin',
    component: components_User_Signin
  }, {
    path: '/dataUser',
    name: 'DataUser',
    component: components_User_DataUser,
    beforeEnter: auth_guard
  }],
  mode: 'history'
}));
// CONCATENATED MODULE: ./src/filters/date.js
/* harmony default export */ var date = (value => {
  const date = new Date(value);
  return date.toLocaleString(['en-US'], { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Shared/Alert.vue
//
//
//
//
//
//

/* harmony default export */ var Alert = ({
  props: ['text'],
  methods: {
    onClose() {
      this.$emit('dismissed');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19b2b70b","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Shared/Alert.vue
var Alert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-alert',{attrs:{"error":"","dismissible":"","value":true},on:{"input":_vm.onClose}},[_vm._v("\n  "+_vm._s(_vm.text)+"\n")])}
var Alert_staticRenderFns = []
var Alert_esExports = { render: Alert_render, staticRenderFns: Alert_staticRenderFns }
/* harmony default export */ var Shared_Alert = (Alert_esExports);
// CONCATENATED MODULE: ./src/components/Shared/Alert.vue
var Alert_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Alert___vue_template_functional__ = false
/* styles */
var Alert___vue_styles__ = null
/* scopeId */
var Alert___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Alert___vue_module_identifier__ = null
var Alert_Component = Alert_normalizeComponent(
  Alert,
  Shared_Alert,
  Alert___vue_template_functional__,
  Alert___vue_styles__,
  Alert___vue_scopeId__,
  Alert___vue_module_identifier__
)

/* harmony default export */ var components_Shared_Alert = (Alert_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Articolo/Edit/EditArticoloDetailsDialog.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EditArticoloDetailsDialog = ({
  props: ['articolo'],
  data() {
    return {
      editDialog: false,
      editedTitle: this.articolo.title,
      editedDescription: this.articolo.description
    };
  },
  methods: {
    onSaveChanges() {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return;
      }
      this.editDialog = false;
      this.$store.dispatch('updateArticoloData', {
        id: this.articolo.id,
        title: this.editedTitle,
        description: this.editedDescription
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-274aa4ec","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Articolo/Edit/EditArticoloDetailsDialog.vue
var EditArticoloDetailsDialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"width":"350px","persistent":""},model:{value:(_vm.editDialog),callback:function ($$v) {_vm.editDialog=$$v},expression:"editDialog"}},[_c('v-btn',{attrs:{"slot":"activator","fab":"","accent":""},slot:"activator"},[_c('v-icon',[_vm._v("edit")])],1),_vm._v(" "),_c('v-card',[_c('v-container',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card-title',[_vm._v("Modifica Articolo")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card-text',[_c('v-text-field',{attrs:{"name":"title","label":"Titolo","id":"title","required":""},model:{value:(_vm.editedTitle),callback:function ($$v) {_vm.editedTitle=$$v},expression:"editedTitle"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"description","label":"Descrizione","id":"description","multi-line":"","required":""},model:{value:(_vm.editedDescription),callback:function ($$v) {_vm.editedDescription=$$v},expression:"editedDescription"}})],1)],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card-actions',[_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":function($event){_vm.editDialog = false}}},[_vm._v("Chiudi")]),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.onSaveChanges}},[_vm._v("Salva")])],1)],1)],1)],1)],1)],1)}
var EditArticoloDetailsDialog_staticRenderFns = []
var EditArticoloDetailsDialog_esExports = { render: EditArticoloDetailsDialog_render, staticRenderFns: EditArticoloDetailsDialog_staticRenderFns }
/* harmony default export */ var Edit_EditArticoloDetailsDialog = (EditArticoloDetailsDialog_esExports);
// CONCATENATED MODULE: ./src/components/Articolo/Edit/EditArticoloDetailsDialog.vue
var EditArticoloDetailsDialog_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var EditArticoloDetailsDialog___vue_template_functional__ = false
/* styles */
var EditArticoloDetailsDialog___vue_styles__ = null
/* scopeId */
var EditArticoloDetailsDialog___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var EditArticoloDetailsDialog___vue_module_identifier__ = null
var EditArticoloDetailsDialog_Component = EditArticoloDetailsDialog_normalizeComponent(
  EditArticoloDetailsDialog,
  Edit_EditArticoloDetailsDialog,
  EditArticoloDetailsDialog___vue_template_functional__,
  EditArticoloDetailsDialog___vue_styles__,
  EditArticoloDetailsDialog___vue_scopeId__,
  EditArticoloDetailsDialog___vue_module_identifier__
)

/* harmony default export */ var Articolo_Edit_EditArticoloDetailsDialog = (EditArticoloDetailsDialog_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Articolo/Edit/EditArticoloDateDialog.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EditArticoloDateDialog = ({
  props: ['articolo'],
  data() {
    return {
      editDialog: false,
      editableDate: null
    };
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.articolo.date);
      const newDay = new Date(this.editableDate).getUTCDate();
      const newMonth = new Date(this.editableDate).getUTCMonth();
      const newYear = new Date(this.editableDate).getUTCFullYear();
      newDate.setUTCDate(newDay);
      newDate.setUTCMonth(newMonth);
      newDate.setUTCFullYear(newYear);
      this.$store.dispatch('updateArticoloData', {
        id: this.articolo.id,
        date: newDate
      });
    }
  },
  created() {
    this.editableDate = this.articolo.date;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b8dbfe80","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Articolo/Edit/EditArticoloDateDialog.vue
var EditArticoloDateDialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"width":"350px","persistent":""},model:{value:(_vm.editDialog),callback:function ($$v) {_vm.editDialog=$$v},expression:"editDialog"}},[_c('v-btn',{attrs:{"slot":"activator","accent":""},slot:"activator"},[_vm._v("\n    Modifica Data\n  ")]),_vm._v(" "),_c('v-card',[_c('v-container',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card-title',[_vm._v("Modifica Data Articolo")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-date-picker',{staticStyle:{"width":"100%"},attrs:{"actions":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var save = ref.save;
var cancel = ref.cancel;
return [_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.editDialog = false}}},[_vm._v("Chiudi")]),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.onSaveChanges($event)}}},[_vm._v("Salva")])]}}]),model:{value:(_vm.editableDate),callback:function ($$v) {_vm.editableDate=$$v},expression:"editableDate"}})],1)],1)],1)],1)],1)}
var EditArticoloDateDialog_staticRenderFns = []
var EditArticoloDateDialog_esExports = { render: EditArticoloDateDialog_render, staticRenderFns: EditArticoloDateDialog_staticRenderFns }
/* harmony default export */ var Edit_EditArticoloDateDialog = (EditArticoloDateDialog_esExports);
// CONCATENATED MODULE: ./src/components/Articolo/Edit/EditArticoloDateDialog.vue
var EditArticoloDateDialog_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var EditArticoloDateDialog___vue_template_functional__ = false
/* styles */
var EditArticoloDateDialog___vue_styles__ = null
/* scopeId */
var EditArticoloDateDialog___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var EditArticoloDateDialog___vue_module_identifier__ = null
var EditArticoloDateDialog_Component = EditArticoloDateDialog_normalizeComponent(
  EditArticoloDateDialog,
  Edit_EditArticoloDateDialog,
  EditArticoloDateDialog___vue_template_functional__,
  EditArticoloDateDialog___vue_styles__,
  EditArticoloDateDialog___vue_scopeId__,
  EditArticoloDateDialog___vue_module_identifier__
)

/* harmony default export */ var Articolo_Edit_EditArticoloDateDialog = (EditArticoloDateDialog_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Articolo/Edit/EditArticoloTimeDialog.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var EditArticoloTimeDialog = ({
  props: ['articolo'],
  data() {
    return {
      editDialog: false,
      editableTime: null
    };
  },
  methods: {
    onSaveChanges() {
      const newDate = new Date(this.articolo.date);
      const hours = this.editableTime.match(/^(\d+)/)[1];
      const minutes = this.editableTime.match(/:(\d+)/)[1];
      newDate.setHours(hours);
      newDate.setMinutes(minutes);
      this.$store.dispatch('updateArticoloData', {
        id: this.articolo.id,
        date: newDate
      });
    }
  },
  created() {
    this.editableTime = new Date(this.articolo.date).toTimeString();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b29f612c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Articolo/Edit/EditArticoloTimeDialog.vue
var EditArticoloTimeDialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"width":"350px","persistent":""},model:{value:(_vm.editDialog),callback:function ($$v) {_vm.editDialog=$$v},expression:"editDialog"}},[_c('v-btn',{attrs:{"slot":"activator","accent":""},slot:"activator"},[_vm._v("\n    Modifica Orario\n  ")]),_vm._v(" "),_c('v-card',[_c('v-container',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card-title',[_vm._v("Modifica l'orario dell'Articolo")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-time-picker',{staticStyle:{"width":"100%"},attrs:{"actions":"","format":"24hr"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var save = ref.save;
var cancel = ref.cancel;
return [_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.editDialog = false}}},[_vm._v("Chiudi")]),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.onSaveChanges($event)}}},[_vm._v("Salva")])]}}]),model:{value:(_vm.editableTime),callback:function ($$v) {_vm.editableTime=$$v},expression:"editableTime"}})],1)],1)],1)],1)],1)}
var EditArticoloTimeDialog_staticRenderFns = []
var EditArticoloTimeDialog_esExports = { render: EditArticoloTimeDialog_render, staticRenderFns: EditArticoloTimeDialog_staticRenderFns }
/* harmony default export */ var Edit_EditArticoloTimeDialog = (EditArticoloTimeDialog_esExports);
// CONCATENATED MODULE: ./src/components/Articolo/Edit/EditArticoloTimeDialog.vue
var EditArticoloTimeDialog_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var EditArticoloTimeDialog___vue_template_functional__ = false
/* styles */
var EditArticoloTimeDialog___vue_styles__ = null
/* scopeId */
var EditArticoloTimeDialog___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var EditArticoloTimeDialog___vue_module_identifier__ = null
var EditArticoloTimeDialog_Component = EditArticoloTimeDialog_normalizeComponent(
  EditArticoloTimeDialog,
  Edit_EditArticoloTimeDialog,
  EditArticoloTimeDialog___vue_template_functional__,
  EditArticoloTimeDialog___vue_styles__,
  EditArticoloTimeDialog___vue_scopeId__,
  EditArticoloTimeDialog___vue_module_identifier__
)

/* harmony default export */ var Articolo_Edit_EditArticoloTimeDialog = (EditArticoloTimeDialog_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Articolo/Registration/RegisterDialog.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var RegisterDialog = ({
  props: ['articoloId'],
  data() {
    return {
      registerDialog: false
    };
  },
  computed: {
    userIsRegistered() {
      return this.$store.getters.user.registeredArticoli.findIndex(articoloId => {
        return articoloId === this.articoloId;
      }) >= 0;
    }
  },
  methods: {
    onAgree() {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromArticolo', this.articoloId);
      } else {
        this.$store.dispatch('registerUserForArticolo', this.articoloId);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f6a657f0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Articolo/Registration/RegisterDialog.vue
var RegisterDialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"persistent":""},model:{value:(_vm.registerDialog),callback:function ($$v) {_vm.registerDialog=$$v},expression:"registerDialog"}},[_c('v-btn',{attrs:{"slot":"activator","color":"primary","accent":""},slot:"activator"},[_vm._v("\n    "+_vm._s(_vm.userIsRegistered ? 'Unregister' : 'Register')+"\n  ")]),_vm._v(" "),_c('v-card',[_c('v-container',[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[(_vm.userIsRegistered)?_c('v-card-title',[_vm._v("Non vuoi più seguire l' Articolo?")]):_c('v-card-title',[_vm._v("Vuoi seguire l'Articolo?")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card-text',[_vm._v("Puoi cambiare quasta scelta anche successivamente.")])],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-card-actions',[_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},on:{"click":function($event){_vm.registerDialog = false}}},[_vm._v("Cancella")]),_vm._v(" "),_c('v-btn',{staticClass:"green--text darken-1",attrs:{"flat":""},on:{"click":_vm.onAgree}},[_vm._v("Conferma")])],1)],1)],1)],1)],1)],1)}
var RegisterDialog_staticRenderFns = []
var RegisterDialog_esExports = { render: RegisterDialog_render, staticRenderFns: RegisterDialog_staticRenderFns }
/* harmony default export */ var Registration_RegisterDialog = (RegisterDialog_esExports);
// CONCATENATED MODULE: ./src/components/Articolo/Registration/RegisterDialog.vue
var RegisterDialog_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var RegisterDialog___vue_template_functional__ = false
/* styles */
var RegisterDialog___vue_styles__ = null
/* scopeId */
var RegisterDialog___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var RegisterDialog___vue_module_identifier__ = null
var RegisterDialog_Component = RegisterDialog_normalizeComponent(
  RegisterDialog,
  Registration_RegisterDialog,
  RegisterDialog___vue_template_functional__,
  RegisterDialog___vue_styles__,
  RegisterDialog___vue_scopeId__,
  RegisterDialog___vue_module_identifier__
)

/* harmony default export */ var Articolo_Registration_RegisterDialog = (RegisterDialog_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Slide/MappaPosizione.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* global google */
/* harmony default export */ var MappaPosizione = ({
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 40.08111187,
        longitude: 16.2045113
      }],
      map: null,
      bounds: null,
      markers: []
    };
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates[0];
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
      zoom: 14,
      styles: [{
        featureType: 'poi',
        stylers: [{ visibility: 'off' }] // Turn off POI.
      }, {
        featureType: 'transit.station',
        stylers: [{ visibility: 'off' }] // Turn off bus, train stations etc.
      }]
    };
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map
      });
      this.markers.push(marker);
      //this.map.fitBounds(this.bounds.extend(position))
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-731914fb","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slide/MappaPosizione.vue
var MappaPosizione_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"grey lighten-4",attrs:{"fluid":""}},[_c('v-layout',{staticClass:"my-3",attrs:{"column":"","wrap":"","align-center":""}},[_c('v-flex',{staticClass:"my-3",attrs:{"xs12":"","sm4":""}},[_c('div',{staticClass:"text-xs-center"},[_c('h2',{staticClass:"display-1",staticStyle:{"font-weight":"300"}},[_vm._v("Guarda dove siamo")]),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n            Scorri la mappa e scopri come raggiungerci\n          ")])])])],1),_vm._v(" "),_c('div',{staticClass:"google-map",attrs:{"id":_vm.mapName}})],1)}
var MappaPosizione_staticRenderFns = []
var MappaPosizione_esExports = { render: MappaPosizione_render, staticRenderFns: MappaPosizione_staticRenderFns }
/* harmony default export */ var Slide_MappaPosizione = (MappaPosizione_esExports);
// CONCATENATED MODULE: ./src/components/Slide/MappaPosizione.vue
function MappaPosizione_injectStyle (ssrContext) {
  __webpack_require__("5n+r")
}
var MappaPosizione_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var MappaPosizione___vue_template_functional__ = false
/* styles */
var MappaPosizione___vue_styles__ = MappaPosizione_injectStyle
/* scopeId */
var MappaPosizione___vue_scopeId__ = "data-v-731914fb"
/* moduleIdentifier (server only) */
var MappaPosizione___vue_module_identifier__ = null
var MappaPosizione_Component = MappaPosizione_normalizeComponent(
  MappaPosizione,
  Slide_MappaPosizione,
  MappaPosizione___vue_template_functional__,
  MappaPosizione___vue_styles__,
  MappaPosizione___vue_scopeId__,
  MappaPosizione___vue_module_identifier__
)

/* harmony default export */ var components_Slide_MappaPosizione = (MappaPosizione_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Slide/StreetViewPosizione.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* global google */
/* harmony default export */ var StreetViewPosizione = ({
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 40.08111187,
        longitude: 16.2045113
      }],
      map: null,
      bounds: null,
      markers: []
    };
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates[0];
    const options = {
      position: { lat: mapCentre.latitude, lng: mapCentre.longitude },
      pov: { heading: 0, pitch: 0 },
      zoom: 0
    };
    this.map = new google.maps.StreetViewPanorama(element, options);
    this.markerCoordinates.forEach(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map
      });
      this.markers.push(marker);
      // this.map.fitBounds(this.bounds.extend(position))
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3238beb5","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slide/StreetViewPosizione.vue
var StreetViewPosizione_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"grey lighten-4",attrs:{"fluid":""}},[_c('v-layout',{staticClass:"my-3",attrs:{"column":"","wrap":"","align-center":""}},[_c('v-flex',{staticClass:"my-3",attrs:{"xs12":"","sm4":""}},[_c('div',{staticClass:"text-xs-center"},[_c('h2',{staticClass:"display-1",staticStyle:{"font-weight":"300"}},[_vm._v("Guarda dove siamo")]),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n            La visita a 360 gradi della nostra sede\n          ")])])])],1),_vm._v(" "),_c('div',{staticClass:"google-map",attrs:{"id":_vm.mapName}})],1)}
var StreetViewPosizione_staticRenderFns = []
var StreetViewPosizione_esExports = { render: StreetViewPosizione_render, staticRenderFns: StreetViewPosizione_staticRenderFns }
/* harmony default export */ var Slide_StreetViewPosizione = (StreetViewPosizione_esExports);
// CONCATENATED MODULE: ./src/components/Slide/StreetViewPosizione.vue
function StreetViewPosizione_injectStyle (ssrContext) {
  __webpack_require__("Jntt")
}
var StreetViewPosizione_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var StreetViewPosizione___vue_template_functional__ = false
/* styles */
var StreetViewPosizione___vue_styles__ = StreetViewPosizione_injectStyle
/* scopeId */
var StreetViewPosizione___vue_scopeId__ = "data-v-3238beb5"
/* moduleIdentifier (server only) */
var StreetViewPosizione___vue_module_identifier__ = null
var StreetViewPosizione_Component = StreetViewPosizione_normalizeComponent(
  StreetViewPosizione,
  Slide_StreetViewPosizione,
  StreetViewPosizione___vue_template_functional__,
  StreetViewPosizione___vue_styles__,
  StreetViewPosizione___vue_scopeId__,
  StreetViewPosizione___vue_module_identifier__
)

/* harmony default export */ var components_Slide_StreetViewPosizione = (StreetViewPosizione_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Slide/miniVetrinaShopify.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var miniVetrinaShopify = ({
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      markerCoordinates: [{
        latitude: 40.08111187,
        longitude: 16.2045113
      }],
      map: null,
      bounds: null,
      markers: []
    };
  },
  mounted: function () {
    let scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      let script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      document.getElementsByTagName('body')[0].appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      let client = window.ShopifyBuy.buildClient({
        domain: 'negoziobasilicata.myshopify.com',
        apiKey: 'ca2254f8ac7c9bd23f35e4ffd2e39f2e',
        appId: '6'
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: '431424707',
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
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5b5e5e49","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slide/miniVetrinaShopify.vue
var miniVetrinaShopify_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{staticClass:"my-3",attrs:{"column":"","wrap":"","align-center":""}},[_c('v-flex',{staticClass:"my-3",attrs:{"xs12":"","sm4":""}},[_c('div',{staticClass:"text-xs-center"},[_c('h2',{staticClass:"display-1",staticStyle:{"font-weight":"300"}},[_vm._v("I nostri servizi")]),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n            Prenota una consulenza o richiedi altri servizi\n          ")])])])],1),_vm._v(" "),_c('div',{attrs:{"id":"collection-component-60cf2f3014a"}})],1)}
var miniVetrinaShopify_staticRenderFns = []
var miniVetrinaShopify_esExports = { render: miniVetrinaShopify_render, staticRenderFns: miniVetrinaShopify_staticRenderFns }
/* harmony default export */ var Slide_miniVetrinaShopify = (miniVetrinaShopify_esExports);
// CONCATENATED MODULE: ./src/components/Slide/miniVetrinaShopify.vue
var miniVetrinaShopify_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var miniVetrinaShopify___vue_template_functional__ = false
/* styles */
var miniVetrinaShopify___vue_styles__ = null
/* scopeId */
var miniVetrinaShopify___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var miniVetrinaShopify___vue_module_identifier__ = null
var miniVetrinaShopify_Component = miniVetrinaShopify_normalizeComponent(
  miniVetrinaShopify,
  Slide_miniVetrinaShopify,
  miniVetrinaShopify___vue_template_functional__,
  miniVetrinaShopify___vue_styles__,
  miniVetrinaShopify___vue_scopeId__,
  miniVetrinaShopify___vue_module_identifier__
)

/* harmony default export */ var components_Slide_miniVetrinaShopify = (miniVetrinaShopify_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Slide/introDati.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var introDati = ({
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  computed: {
    luoghi() {
      return this.$store.getters.featuredDataLuoghi;
    },
    user() {
      return this.$store.getters.utenteDatiFB;
    },
    loading() {
      return this.$store.getters.loading;
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  },
  methods: {
    onLoadLuogo(id) {
      this.$router.push('/luoghi/' + id);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-144c760c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slide/introDati.vue
var introDati_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-parallax',{attrs:{"src":"https://firebasestorage.googleapis.com/v0/b/ebasilicata/o/it%2Fbasilicata%2Fattivita%2Fpangaro-consulting%2Fintro%2Fpangaro-consulting.jpg?alt=media&token=5a617377-b937-43d0-8af2-de4266364ca4","height":"600"}},[_c('v-layout',{staticClass:"white--text",attrs:{"column":"","align-center":"","justify-center":""}},_vm._l((_vm.luoghi),function(luogo){return _c('v-card',{staticClass:"white--text blue-grey darken-2",staticStyle:{"background":"rgba(0,  0,  0,  0.75) !important"}},[_c('v-card-title',{attrs:{"primary-title":""}},[_c('h1',{staticClass:"white--text mb-2 display-3 text-xs-center",staticStyle:{"font-weight":"300"}},[_vm._v(_vm._s(luogo.titolo))])]),_vm._v(" "),_c('div',{staticClass:"subheading mb-3 text-xs-center"},[_vm._v(_vm._s(luogo.sottotitolo))]),_vm._v(" "),_c('v-card-actions',[(_vm.userIsAuthenticated && _vm.user.dataPan !== null && _vm.user.dataPan !== undefined && _vm.user.dataPan.coordinate !== undefined)?_c('v-container',{staticClass:"text-xs-center",attrs:{"fluid":"fluid"}},[_c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"fullscreen":"","transition":"dialog-bottom-transition","overlay":false},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-btn',{attrs:{"slot":"activator","color":"primary","dark":""},slot:"activator"},[_vm._v("Indicazioni Stradali")]),_vm._v(" "),_c('v-card',[_c('v-toolbar',{attrs:{"dark":"","color":"primary"}},[_c('v-btn',{attrs:{"icon":"","dark":""},nativeOn:{"click":function($event){_vm.dialog = false}}},[_c('v-icon',[_vm._v("close")])],1),_vm._v(" "),_c('v-toolbar-title',[_vm._v("Indicazioni Stradali")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-toolbar-items',[_c('v-btn',{attrs:{"dark":"","flat":""},nativeOn:{"click":function($event){_vm.dialog = false}}},[_vm._v("Chiudi")])],1)],1),_vm._v(" "),_c('iframe',{staticStyle:{"border":"0"},attrs:{"src":'https://www.google.com/maps/embed/v1/directions?key=AIzaSyATTyxRJn5Howi-QHna-9iaaXxrErEyLGM&origin='+ _vm.user.dataPan.coordinate +'&destination='+luogo.coordinate+'&avoid=tolls|highways',"width":"100%","height":"800","frameborder":"0","allowfullscreen":""}})],1)],1)],1)],1):_vm._e()],1),_vm._v(" "),_c('v-list',{attrs:{"two-line":""}},[_c('v-list-tile',{attrs:{"href":'tel:'+luogo.telefono}},[_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"indigo"}},[_vm._v("phone")])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v(_vm._s(luogo.telefono))]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("Mobile")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',[_vm._v("chat")])],1)],1),_vm._v(" "),_c('v-divider',{attrs:{"inset":""}}),_vm._v(" "),_c('v-list-tile',{attrs:{"href":'mailto:'+luogo.email}},[_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"indigo"}},[_vm._v("mail")])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v(_vm._s(luogo.email))]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("Lavoro")])],1)],1),_vm._v(" "),_c('v-divider',{attrs:{"inset":""}}),_vm._v(" "),_c('v-list-tile',{attrs:{"href":"https://www.google.com/maps/@40.0810537504629,16.204291546961144,13z?hl=it-IT&gl=US"}},[_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"indigo"}},[_vm._v("location_on")])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v(_vm._s(luogo.indirizzo))]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v(_vm._s(luogo.cap)+" "+_vm._s(luogo.comune)+" ("+_vm._s(luogo.provincia)+")")])],1)],1)],1)],1)}))],1)}
var introDati_staticRenderFns = []
var introDati_esExports = { render: introDati_render, staticRenderFns: introDati_staticRenderFns }
/* harmony default export */ var Slide_introDati = (introDati_esExports);
// CONCATENATED MODULE: ./src/components/Slide/introDati.vue
var introDati_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var introDati___vue_template_functional__ = false
/* styles */
var introDati___vue_styles__ = null
/* scopeId */
var introDati___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var introDati___vue_module_identifier__ = null
var introDati_Component = introDati_normalizeComponent(
  introDati,
  Slide_introDati,
  introDati___vue_template_functional__,
  introDati___vue_styles__,
  introDati___vue_scopeId__,
  introDati___vue_module_identifier__
)

/* harmony default export */ var components_Slide_introDati = (introDati_Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3e9b65ef","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slide/TitoloSezione.vue
var TitoloSezione_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{staticClass:"my-3",attrs:{"column":"","wrap":"","align-center":""}},[_c('v-flex',{staticClass:"my-3",attrs:{"xs12":"","sm4":""}},[_c('div',{staticClass:"text-xs-center"},[_c('h2',{staticClass:"display-1",staticStyle:{"font-weight":"300"}},[_vm._v("Costantemente aggiornati in un mondo che cambia")]),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n        Le ultime novità in campo fiscale e commerciale\n      ")])])])],1)}
var TitoloSezione_staticRenderFns = []
var TitoloSezione_esExports = { render: TitoloSezione_render, staticRenderFns: TitoloSezione_staticRenderFns }
/* harmony default export */ var TitoloSezione = (TitoloSezione_esExports);
// CONCATENATED MODULE: ./src/components/Slide/TitoloSezione.vue
var TitoloSezione_normalizeComponent = __webpack_require__("VU/8")
/* script */
var TitoloSezione___vue_script__ = null
/* template */

/* template functional */
var TitoloSezione___vue_template_functional__ = false
/* styles */
var TitoloSezione___vue_styles__ = null
/* scopeId */
var TitoloSezione___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TitoloSezione___vue_module_identifier__ = null
var TitoloSezione_Component = TitoloSezione_normalizeComponent(
  TitoloSezione___vue_script__,
  TitoloSezione,
  TitoloSezione___vue_template_functional__,
  TitoloSezione___vue_styles__,
  TitoloSezione___vue_scopeId__,
  TitoloSezione___vue_module_identifier__
)

/* harmony default export */ var Slide_TitoloSezione = (TitoloSezione_Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-079ddddd","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slide/TreColonneTesto.vue
var TreColonneTesto_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{staticClass:"my-3",attrs:{"column":"","wrap":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-container',{attrs:{"grid-list-xl":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":"","md4":""}},[_c('v-card',{staticClass:"elevation-0 transparent"},[_c('v-card-text',{staticClass:"text-xs-center"},[_c('v-icon',{staticClass:"indigo--text text--lighten-2",attrs:{"x-large":""}},[_vm._v("color_lens")])],1),_vm._v(" "),_c('v-card-title',{staticClass:"layout justify-center",attrs:{"primary-title":""}},[_c('div',{staticClass:"headline text-xs-center"},[_vm._v("Start Up")])]),_vm._v(" "),_c('v-card-text',[_vm._v("\n                    Raccogliere e analizzare le richieste del cliente in merito all’idea di start-up o di riorganizzazione aziendale\n                    Valutare le prospettive di sviluppo dell’impresa nascente\n                    Individuare le condizioni fiscali-tributarie, organizzative e legali più idonee al cliente\n                    Effettuare il trattamento delle operazioni previdenziali\n                    Espletare gli adempimenti amministrativi\n                  ")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":""}},[_c('v-card',{staticClass:"elevation-0 transparent"},[_c('v-card-text',{staticClass:"text-xs-center"},[_c('v-icon',{staticClass:"indigo--text text--lighten-2",attrs:{"x-large":""}},[_vm._v("flash_on")])],1),_vm._v(" "),_c('v-card-title',{staticClass:"layout justify-center",attrs:{"primary-title":""}},[_c('div',{staticClass:"headline"},[_vm._v("Contabilità")])]),_vm._v(" "),_c('v-card-text',[_vm._v("\n                    Eseguire le registrazioni contabili\n                    Gestire le operazioni fiscali e previdenziali\n                    Redigere la Dichiarazione dei redditi\n                    Redigere il Bilancio d’esercizio\n                    Elaborare i resoconti sulla situazione fiscale aziendale\n                    Gestire le relazioni con l’Agenzia delle entrate nel caso di piccole divergenze di dati \n                  ")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":""}},[_c('v-card',{staticClass:"elevation-0 transparent"},[_c('v-card-text',{staticClass:"text-xs-center"},[_c('v-icon',{staticClass:"indigo--text text--lighten-2",attrs:{"x-large":""}},[_vm._v("build")])],1),_vm._v(" "),_c('v-card-title',{staticClass:"layout justify-center",attrs:{"primary-title":""}},[_c('div',{staticClass:"headline text-xs-center"},[_vm._v("Consulenze")])]),_vm._v(" "),_c('v-card-text',[_vm._v("\n                    Analizzare la situazione economico finanziaria del cliente\n                    Raccogliere le informazioni fiscali e del settore di appartenenza che possono essere applicate all’azienda cliente\n                    Individuare la soluzione fiscale tributaria più idonea al cliente\n                    Comunicare al cliente le soluzioni più adatte al suo caso specifico\n                  ")])],1)],1)],1)],1)],1)],1)}
var TreColonneTesto_staticRenderFns = []
var TreColonneTesto_esExports = { render: TreColonneTesto_render, staticRenderFns: TreColonneTesto_staticRenderFns }
/* harmony default export */ var TreColonneTesto = (TreColonneTesto_esExports);
// CONCATENATED MODULE: ./src/components/Slide/TreColonneTesto.vue
var TreColonneTesto_normalizeComponent = __webpack_require__("VU/8")
/* script */
var TreColonneTesto___vue_script__ = null
/* template */

/* template functional */
var TreColonneTesto___vue_template_functional__ = false
/* styles */
var TreColonneTesto___vue_styles__ = null
/* scopeId */
var TreColonneTesto___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TreColonneTesto___vue_module_identifier__ = null
var TreColonneTesto_Component = TreColonneTesto_normalizeComponent(
  TreColonneTesto___vue_script__,
  TreColonneTesto,
  TreColonneTesto___vue_template_functional__,
  TreColonneTesto___vue_styles__,
  TreColonneTesto___vue_scopeId__,
  TreColonneTesto___vue_module_identifier__
)

/* harmony default export */ var Slide_TreColonneTesto = (TreColonneTesto_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Slide/CaroselloArticoli.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CaroselloArticoli = ({
  computed: {
    articoli() {
      return this.$store.getters.featuredArticoli;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onLoadArticolo(id) {
      this.$router.push('/articoli/' + id);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c3249bf2","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slide/CaroselloArticoli.vue
var CaroselloArticoli_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":""}},[(_vm.loading)?_c('v-progress-circular',{staticClass:"primary--text",attrs:{"indeterminate":"","width":7,"size":70}}):_vm._e()],1)],1),_vm._v(" "),(!_vm.loading)?_c('v-layout',{staticClass:"mt-2",attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-carousel',{staticStyle:{"cursor":"pointer"}},_vm._l((_vm.articoli),function(articolo){return _c('v-carousel-item',{key:articolo.id,attrs:{"src":articolo.imageUrl},on:{"click":function($event){_vm.onLoadArticolo(articolo.id)}}},[_c('div',{staticClass:"title"},[_vm._v("\n            "+_vm._s(articolo.title)+"\n          ")])])}))],1)],1):_vm._e(),_vm._v(" "),_c('v-layout',{staticClass:"mt-2",attrs:{"row":"","wrap":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":""}},[_c('p',[_vm._v("Questi sono i nostri ultimi articoli!")])])],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{staticClass:"text-xs-center text-sm-right",attrs:{"xs12":"","sm6":""}},[_c('v-btn',{attrs:{"large":"","router":"","to":"/articoli","color":"primary"}},[_vm._v("Leggi gli Articoli")])],1),_vm._v(" "),_c('v-flex',{staticClass:"text-xs-center text-sm-left",attrs:{"xs12":"","sm6":""}},[_c('v-btn',{staticClass:"primary",attrs:{"large":"","router":"","to":"/articolo/new"}},[_vm._v("Inserisci un Articolo")])],1)],1)],1)}
var CaroselloArticoli_staticRenderFns = []
var CaroselloArticoli_esExports = { render: CaroselloArticoli_render, staticRenderFns: CaroselloArticoli_staticRenderFns }
/* harmony default export */ var Slide_CaroselloArticoli = (CaroselloArticoli_esExports);
// CONCATENATED MODULE: ./src/components/Slide/CaroselloArticoli.vue
function CaroselloArticoli_injectStyle (ssrContext) {
  __webpack_require__("4XAJ")
}
var CaroselloArticoli_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var CaroselloArticoli___vue_template_functional__ = false
/* styles */
var CaroselloArticoli___vue_styles__ = CaroselloArticoli_injectStyle
/* scopeId */
var CaroselloArticoli___vue_scopeId__ = "data-v-c3249bf2"
/* moduleIdentifier (server only) */
var CaroselloArticoli___vue_module_identifier__ = null
var CaroselloArticoli_Component = CaroselloArticoli_normalizeComponent(
  CaroselloArticoli,
  Slide_CaroselloArticoli,
  CaroselloArticoli___vue_template_functional__,
  CaroselloArticoli___vue_styles__,
  CaroselloArticoli___vue_scopeId__,
  CaroselloArticoli___vue_module_identifier__
)

/* harmony default export */ var components_Slide_CaroselloArticoli = (CaroselloArticoli_Component.exports);

// CONCATENATED MODULE: ./src/main.js





















vue_esm["a" /* default */].use(vuetify_default.a, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});
vue_esm["a" /* default */].config.productionTip = false;

vue_esm["a" /* default */].filter('date', date);
vue_esm["a" /* default */].component('app-alert', components_Shared_Alert);
vue_esm["a" /* default */].component('app-edit-articolo-details-dialog', Articolo_Edit_EditArticoloDetailsDialog);
vue_esm["a" /* default */].component('app-edit-articolo-date-dialog', Articolo_Edit_EditArticoloDateDialog);
vue_esm["a" /* default */].component('app-edit-articolo-time-dialog', Articolo_Edit_EditArticoloTimeDialog);
vue_esm["a" /* default */].component('app-articolo-register-dialog', Articolo_Registration_RegisterDialog);
vue_esm["a" /* default */].component('google-map', components_Slide_MappaPosizione);
vue_esm["a" /* default */].component('google-streetView', components_Slide_StreetViewPosizione);
vue_esm["a" /* default */].component('minivetrina-shopify', components_Slide_miniVetrinaShopify);
vue_esm["a" /* default */].component('introDati', components_Slide_introDati);
vue_esm["a" /* default */].component('titoloSezione', Slide_TitoloSezione);
vue_esm["a" /* default */].component('treColonneTesto', Slide_TreColonneTesto);
vue_esm["a" /* default */].component('caroselloArticoli', components_Slide_CaroselloArticoli);

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  store: store,
  render: h => h(src_App),
  created() {
    firebase["initializeApp"]({
      apiKey: 'AIzaSyAletm2xRzxU9CPyTOYNaOLLom9dSdVBu0',
      authDomain: 'ebasilicata-1238.firebaseapp.com',
      databaseURL: 'https://ebasilicata.firebaseio.com/',
      projectId: ' ebasilicata-1238',
      storageBucket: 'gs://ebasilicata'
    });
    firebase["auth"]().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user);
        this.$store.dispatch('fetchUserData');
        this.$store.dispatch('fetchUserDataPan');
      }
    });
    this.$store.dispatch('loadArticoli');
    //this.$store.dispatch('loadArticoliPubblici')
    this.$store.dispatch('loadDataLuoghi');
  }
});

/***/ }),

/***/ "uKDO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);