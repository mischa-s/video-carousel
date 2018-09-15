<template>
  <div id="carousel">
    <Carousel
      v-bind='{
        perPage: 4,
        navigationEnabled: true,
        scrollPerPage: true
      }'
      >
      <Slide
          v-for="(video, i) in items"
          :key="i"
          tabindex="0"
        >
        <img
          id="video-poster"
          v-bind="{src:video.poster}"
        />
        <p id="video-title">{{ video.title }}</p>
      </Slide>
    </Carousel>
  </div>
</template>

// ---SCRIPT---
<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    components: {
      Carousel,
      Slide,
    },
    props: ['items', 'addWatchedVideo'],
  }
</script>

<style>
.vidoes {
  display: flex;
  flex: 0 0 auto;
  overflow-x: scroll;
}
.image {
  display: flex;
  flex-direction: column;
}
</style>
