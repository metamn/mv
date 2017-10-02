<template lang="html">
  <section>
    <h3 hidden>Bernar Venet: MetaMetria</h3>
    <mv-venet></mv-venet>
  </section>
</template>

<script>
  import venet from './../project/venet'

  export default {
    name: 'mv-venet-page',
    components: {
      'mv-venet': venet
    }
  }
</script>

<style lang="scss">
  .logo {
    visibility: visible;
  }
</style>
