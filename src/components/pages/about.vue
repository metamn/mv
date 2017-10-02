<template lang="html">
  <section>
    <h3 hidden>About</h3>
    <mv-about></mv-about>
  </section>
</template>

<script>
  import about from './../project/about'

  export default {
    name: 'about',
    components: {
      'mv-about': about
    }
  }
</script>

<style lang="scss">
  .logo {
    visibility: visible;
  }
</style>
