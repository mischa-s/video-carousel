<template>
  <div id="app">
    <HelloWorld msg="JBA FE Developer Test"/>
    <Carousel v-bind:items="items"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Carousel from "./components/Carousel.vue"
import VideoData from "./helper-functions/select-video-name-and-urls"

export default {
  name: "app",
  components: {
    HelloWorld,
    Carousel
  },
  mounted() {
    this.fetchItems()
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
    fetchItems() {
      fetch('https://jbanew.staging.joybusinessacademy.com/api/v2/assignment/videos')
        .then(stream => stream.json())
        .then(data => data.source.videos.entries)
        .then(videos => this.items = videos.map(VideoData))
        .catch(error => console.error(error))
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
