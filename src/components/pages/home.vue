<template>
  <section class="home">
    <h3>Vue components for metamn</h3>
  </section>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./../framework/typography-scale";

  .home {
    padding: $lem;
  }
</style>
