<template>
  <div id="app">
    <mv-typography></mv-typography>
    <router-view></router-view>
  </div>
</template>

<script>
  import Typography from './components/Typography'

  export default {
    name: 'app',
    components: {
      'mv-typography': Typography
    }
  }
</script>

<style lang="scss">
</style>
