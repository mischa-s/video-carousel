<template>
<div id="app">
  <nav id="navbar">
    <button id="button">
        Home
      </button>
    <button id="button">
        History
      </button>
  </nav>
  <slider v-bind:items="items" />
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
    };
  },
  methods: {
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

button {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 50px;
  background-color: transparent;
  border: 1px solid black;
  color: white;
  font-size: 25px;
  margin: 1.5rem;
}

button:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
