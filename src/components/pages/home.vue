<template>
  <section id="home" :class="[$style.defaultStyle]">
    <mv-title type="section">Vue components for metamn</mv-title>
  </section>
</template>

<script>
  import title from './../project/title'

  export default {
    name: 'home',
    components: {
      'mv-title': title
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
    padding: lem;
  }
</style>
