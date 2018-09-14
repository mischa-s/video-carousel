<template>
<div>
  <gallery :images="images" :index="index"  :options="{
    youTubeVideoIdProperty: 'youtube',
    youTubePlayerVars: undefined,
    youTubeClickToPlay: true
    }"
    @close="index = null"></gallery>
  <div class='vidoes'>
    <div class="image" tabindex="0" v-for="image, imageIndex in images" @click="index = imageIndex" @keyup.enter="index = imageIndex" :style="{
         margin: '1rem 0.5rem',
         width: '317px',
         height: '400px',
         display: 'flex',
         flex: '0 0 auto',
         flexDirection: 'column',
         cursor: 'pointer'
        }">
      <img :src="image.poster">
      <p> {{image.title}} </p>
    </div>
  </div>
</div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  props: ['items'],
  data: function() {
    return {
      images: this.items,
      index: null
    };
  },
  updated: function () {
    var video = document.getElementsByTagName('video')[0];
    console.log(video, 'videooooooo')
    console.log(video.ended);
    if (video) { video.addEventListener('ended',myHandler,false);
      function myHandler(e) {
        console.log(e, 'eeeeeeee')
          // What you want to do after the event
      }
    }
  },
  components: {
    'gallery': VueGallery
  },
}
</script>

<style>
.vidoes {
  display: flex;
  flex: 0 0 auto;
  overflow-x: scroll;
}
</style>
