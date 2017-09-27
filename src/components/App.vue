<template>
  <div id="app" :class="[$style.defaultStyle]">
    <mv-logo></mv-logo>
    <router-view></router-view>
    <div id="newhome"></div>
  </div>
</template>

<script>
  // A global css reset applied to <html>, <body> etc elements
  import 'normalize.css'

  // Loading webfonts
  import fonts from './framework/fonts'

  // Logo is needed here to have a proper HTML5 outline
  import logo from './project/logo'

  export default {
    name: 'app',
    components: {
      'mv-fonts': fonts,
      'mv-logo': logo
    }
  }
</script>

<style module>
  .defaultStyle {
    composes: default from './framework/text-style.css';
  }
</style>

<style lang="scss">
  // Another global css reset applied to <html>, <body> etc elements
  @import "./framework/reset";
</style>
