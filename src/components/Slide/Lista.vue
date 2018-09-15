<template>
  <v-container fluid :style="datimodulo.style">
    
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-list subheader>
	          <v-subheader>{{datimodulo.titolo}}</v-subheader>
	          <v-list-tile
	            v-for="item in datimodulo.items"
	            :key="item.title"
	            avatar
	            @click=""
	          >
	            <v-list-tile-avatar>
	              <img :src="item.avatar">
	            </v-list-tile-avatar>

	            <v-list-tile-content>
	              <v-list-tile-title v-html="item.title"></v-list-tile-title>
	            </v-list-tile-content>

	            <v-list-tile-action>
	              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
	            </v-list-tile-action>
	          </v-list-tile>
	        </v-list>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['datimodulo']
  }
</script>