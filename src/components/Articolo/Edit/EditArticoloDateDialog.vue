<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn accent slot="activator">
      Modifica Data
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Modifica Data Articolo</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-date-picker v-model="editableDate" style="width: 100%" actions>
              <template scope="{save, cancel}">
                <v-btn
                  class="blue--text darken-1"
                  flat
                  @click.native="editDialog = false">Chiudi</v-btn>
                <v-btn
                  class="blue--text darken-1"
                  flat
                  @click.native="onSaveChanges">Salva</v-btn>
              </template>
            </v-date-picker>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['articolo'],
    data () {
      return {
        editDialog: false,
        editableDate: null
      }
    },
    methods: {
      onSaveChanges () {
        const newDate = new Date(this.articolo.date)
        const newDay = new Date(this.editableDate).getUTCDate()
        const newMonth = new Date(this.editableDate).getUTCMonth()
        const newYear = new Date(this.editableDate).getUTCFullYear()
        newDate.setUTCDate(newDay)
        newDate.setUTCMonth(newMonth)
        newDate.setUTCFullYear(newYear)
        this.$store.dispatch('updateArticoloData', {
          id: this.articolo.id,
          date: newDate
        })
      }
    },
    created () {
      this.editableDate = this.articolo.date
    }
  }
</script>
