<template>
  <div id="app">
    <router-view></router-view>
    <mv-typography></mv-typography>
  </div>
</template>

<script>
  import typography from './framework/typography/typography'

  /**
   * Setting up the application
   */
  export default {
    name: 'app',
    components: {
      'mv-typography': typography
    }
  }
</script>
