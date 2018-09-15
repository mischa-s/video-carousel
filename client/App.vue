<template>
<div id="app">
  <nav id="navbar">
    <button class="navButton" v-on:click="navigateToHome()">
        Home
      </button>
    <!-- <button class="navButton">
        History
      </button> -->
  </nav>
  <slider
    v-bind:items= "items"
    v-bind:navigateToHome="navigateToHome"
    v-bind:navigateToVideo='navigateToVideo'
    v-bind:videoPoster='videoPoster'
    v-bind:videoUrl='videoUrl'
    />
</div>
</template>

<script>
import slider from "./components/slider.vue";
import VideoData from "./helper-functions/select-video-name-and-urls";

const data = require('./assets/data')

export default {
  name: "app",
  components: {
    slider,
  },
  mounted() {
    this.fetchItems();
  },
  data() {
    return {
      items: [],
      videoUrl: false,
      videoPoster: false,
    };
  },

  methods: {
    navigateToHome: function() {
      this.videoUrl = false
    },
    navigateToVideo: function(url, poster) {
      this.videoUrl = url
      this.videoPoster = poster
    },
    fetchItems() {
        const videos = data.source.videos.entries
        this.items = videos.map(VideoData)

      // Was working then started getting blocked :(
      // fetch(
      //     "https://jbanew.staging.joybusinessacademy.com/api/v2/assignment/videos"
      //   )
      //   .then(stream => stream.json())
      //   .then(data => data.source.videos.entries)
      //   .then(videos => (this.items = videos.map(VideoData)))
      //   .catch(error => console.error(error));
    },
  }
};
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar {
  background-color: #808080;
  height: 100px;
  display: flex;
  justify-content: space-between;
  color: "white";
}

.navButton {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 50px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 25px;
  margin: 1.5rem;
}

button:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
