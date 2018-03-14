<template>
  <v-container fluid >
    <v-layout
      column
      wrap
      class="my-3"
      align-center
    >
      <v-flex xs12  class="my-3">
       
          <gallery 
            :options="youTubeOptions"
            :images="datimodulo.images" 
            :index="index" 
            @close="index = null"
            >  
          </gallery>
          <div
            class="image"
            v-for="image, imageIndex in datimodulo.images"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image.poster + ')', width: datimodulo.width , height: datimodulo.height }"
          >
          </div>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>    
  
<script>
  // Modifica per far funzionare i video
  import 'blueimp-gallery/js/blueimp-gallery-youtube.js';
  import 'blueimp-gallery/js/blueimp-gallery-video.js';
  // Fine modifica 
  export default {
    props: ['posizione'],
    data: function () {
      return {
        youTubeOptions : {
            // The list object property (or data attribute) with the YouTube video id:
            youTubeVideoIdProperty: 'youtube',
            // Optional object with parameters passed to the YouTube video player:
            // https://developers.google.com/youtube/player_parameters
            youTubePlayerVars: undefined,
            // Require a click on the native YouTube player for the initial playback:
            youTubeClickToPlay: true
        },

        images: [
          {
            title: 'A YouYube video',
            href: 'https://www.youtube.com/watch?v=hNdlUHBJDKs',
            type: 'text/html',
            youtube: 'hNdlUHBJDKs',
            poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
          },
          {
            title: 'A YouYube video',
            href: 'https://www.youtube.com/watch?v=VtyQ3T6svV4',
            type: 'text/html',
            youtube: 'VtyQ3T6svV4',
            poster: 'https://i.ytimg.com/vi/VtyQ3T6svV4/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDFD9v5RJPKuldcuOw9QMHH2VbAfA'
          },
          {
            title: 'Image',
            href: 'https://dummyimage.com/1600/ffffff/000000',
            type: 'image/jpeg',
            poster: 'https://dummyimage.com/350/ffffff/000000'
          }
        ],
      
        index: null
      }
    },
    computed: {
      datimodulo () {
        return this.$store.getters.luogo[0].moduliPagina[this.posizione]
      }
    }
  }
</script> 

<style type="text/css">
    .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  </style>