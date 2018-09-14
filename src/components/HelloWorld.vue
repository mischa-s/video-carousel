<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <ul>
        <li v-for="item in items">
          {{ item.title }}
          <img :src=item.images[0].url>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
        .then(data => this.items = data.source.videos.entries)
        .then(data => console.log(this.items, 'items?'))
        .catch(error => console.error(error))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
