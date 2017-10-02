<template lang="html">
  <section>
    <h3 hidden>Yona Friedman: The Dilution Of Architecture</h3>
    <mv-yona></mv-yona>
  </section>
</template>

<script>
  import yona from './../project/yona'

  export default {
    name: 'mv-yona-page',
    components: {
      'mv-yona': yona
    }
  }
</script>

<style lang="scss">
  .logo {
    visibility: visible;
  }
</style>
