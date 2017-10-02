<template lang="html">
  <section>
    <h3 hidden>Do Not Trust The Mirror</h3>
    <mv-mirror></mv-mirror>
  </section>
</template>

<script>
  import mirror from './../project/mirror'

  export default {
    name: 'mv-mirror-page',
    components: {
      'mv-mirror': mirror
    }
  }
</script>

<style lang="scss">
  .logo {
    visibility: visible;
  }
</style>
