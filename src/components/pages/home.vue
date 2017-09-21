<template>
  <section id="home" :class="[$style.defaultStyle]">
    <h3>Vue components for metamn</h3>
  </section>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
    padding: lem;
  }
</style>
