<template>
  <div id="app" :class="[$style.defaultStyle]">
    <router-view></router-view>
  </div>
</template>

<script>
  // A global css reset applied to <html>, <body> etc elements
  import 'normalize.css'

  // Loading webfonts
  import fonts from './framework/typography-fonts'

  export default {
    name: 'app',
    components: {
      'mv-fonts': fonts
    }
  }
</script>

<style module>
  .defaultStyle {
    composes: default from './framework/typography-fonts.css';
    composes: default from './framework/typography-scale.css';
  }
</style>

<style lang="scss">
  // Another global css reset applied to <html>, <body> etc elements
  @import "./framework/typography-reset";
</style>
