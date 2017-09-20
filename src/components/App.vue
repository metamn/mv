<template>
  <div id="app" :class="[$style.defaultFont, $style.defaultScale]">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'normalize.css'
  
  export default {
    name: 'app'
  }
</script>

<style module>
  .defaultFont {
    composes: default from './framework/typography-fonts.css';
  }

  .defaultScale {
    font-size: 150%;
    line-height: 1.25;
  }
</style>
