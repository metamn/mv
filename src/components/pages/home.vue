<template>
  <section id="home" :class="[$style.defaultStyle]">
    <mv-strapline></mv-strapline>
    <mv-thumbnails></mv-thumbnails>
    <mv-about></mv-about>
    <mv-yona></mv-yona>
    <mv-mirror></mv-mirror>
  </section>
</template>

<script>
  import strapline from './../project/strapline'
  import thumbnails from './../project/thumbnails'
  import about from './../project/about'
  import yona from './../project/yona'
  import mirror from './../project/mirror'

  export default {
    name: 'home',
    components: {
      'mv-strapline': strapline,
      'mv-thumbnails': thumbnails,
      'mv-about': about,
      'mv-yona': yona,
      'mv-mirror': mirror
    }
  }
</script>

<style module>
  .defaultStyle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }
</style>
