<template>
  <v-dialog persistent v-model="editDialog">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Modifica Articolo</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Titolo"
                id="title"
                v-model="editedTitle"
                required></v-text-field>
              
              <vue-editor id="editor1" v-model="editedDescription"></vue-editor>

              <!--v-text-field
                name="description"
                label="Descrizione"
                id="description"
                multi-line
                v-model="editedDescription"
                required></v-text-field-->
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                flat
                class="blue--text darken-1"
                @click="editDialog = false">Chiudi</v-btn>
              <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Salva</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { VueEditor } from 'vue2-editor'

  export default {
    props: ['articolo'],
    components: {
      VueEditor
   },data () {
      return {
        editDialog: false,
        editedTitle: this.articolo.title,
        editedDescription: this.articolo.description
      }
    },
    methods: {
      onSaveChanges () {
        if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
          return
        }
        this.editDialog = false
        this.$store.dispatch('updateArticoloData', {
          id: this.articolo.id,
          title: this.editedTitle,
          description: this.editedDescription
        })
      }
    }
  }
</script>
