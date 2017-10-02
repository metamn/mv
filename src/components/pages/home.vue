<template>
  <section id="home" :class="[$style.defaultStyle]">
    <mv-about></mv-about>
    <mv-yona></mv-yona>
    <mv-mirror></mv-mirror>
    <mv-venet></mv-venet>
    <mv-strapline></mv-strapline>
    <mv-thumbnails></mv-thumbnails>
  </section>
</template>

<script>
  import strapline from './../project/strapline'
  import thumbnails from './../project/thumbnails'
  import about from './../project/about'
  import yona from './../project/yona'
  import mirror from './../project/mirror'
  import venet from './../project/venet'

  export default {
    name: 'mv-home-page',
    components: {
      'mv-strapline': strapline,
      'mv-thumbnails': thumbnails,
      'mv-about': about,
      'mv-yona': yona,
      'mv-mirror': mirror,
      'mv-venet': venet
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
