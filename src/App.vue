<template>
  <div id="app">
    <mv-typography></mv-typography>
    <router-view></router-view>
  </div>
</template>

<script>
  import typography from './components/typography'

  export default {
    name: 'app',
    components: {
      'mv-typography': typography
    }
  }
</script>

<style lang="scss">
</style>
