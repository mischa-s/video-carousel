<template>
  <tiny-slider v-bind:mouse-drag="true" v-bind:loop="true" items="4" gutter="20">
    <div class="image" tabindex="0" v-for="image, imageIndex in items">
      <img v-bind:src="image.poster">
      <p> {{image.title}} </p>
    </div>
  </tiny-slider>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider';

export default {
  components: {
    'tiny-slider': VueTinySlider
  },
  props: ['items'],
  data: function() {
    // console.log(this.items, 'these items')
    return {
      videos: this.items,
    };
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
