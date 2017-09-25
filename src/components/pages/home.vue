<template>
  <section id="home" :class="[$style.defaultStyle]">
    <mv-strapline></mv-strapline>
    <mv-image-progressive :class="[$style.imageProgressive]"></mv-image-progressive>
  </section>
</template>

<script>
  import strapline from './../project/strapline'
  import imageProgressive from './../framework/image-progressive'

  export default {
    name: 'home',
    components: {
      'mv-strapline': strapline,
      'mv-image-progressive': imageProgressive
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }

  .imageProgressive {
    width: calc(lem * 15);
    padding: lem;
  }
</style>
