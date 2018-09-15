<template>
  <div id="carousel">
      <VideoPlayer
      v-if='videoUrl'
      v-bind:videoUrl="videoUrl"
      v-bind:videoPoster="videoPoster"
      v-bind:navigateToHome="navigateToHome"
      >
    </VideoPlayer>
    <Carousel
    v-else
      v-bind='{
        perPage: 5,
        navigationEnabled: true,
      }'
      >
      <Slide
          v-for="(video, i) in items"
          :key="i"
          tabindex="0"
          v-on:click="navigateToVideo(video.href)"
        >
        <img
          id="video-poster"
          v-bind="{src:video.poster}"
          v-on:click="navigateToVideo(video.href)"
        />
        <p id="video-title">{{ video.title }}</p>
      </Slide>
    </Carousel>
  </div>
</template>

// ---SCRIPT---
<script>
  import { Carousel, Slide } from 'vue-carousel'
  import VideoPlayer from './video-player.vue'

  export default {
    components: {
      Carousel,
      Slide,
      VideoPlayer
    },
    props: ['items', 'navigateToHome', 'navigateToVideo', 'videoPoster', 'videoUrl'],
    methods: {
    }
  }
</script>

<style>
#carousel {
  margin-top: 2rem
}
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
