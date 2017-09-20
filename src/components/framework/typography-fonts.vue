<template lang="html">
  <div id="#typography-fonts" hidden></div>
</template>

<script>
  var WebFont = require('webfontloader')

  WebFont.load({
    typekit: {
      id: 'wrb3hlx'
    }
  })

  export default {
    name: 'mv-typography-fonts'
  }
</script>

<style lang="scss">
  // Use system fonts by default
  // - https://css-tricks.com/snippets/css/system-font-stack/
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  // Use webfonts only when they are loaded
  // - https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/
  html {
    font-family: 'system';

    &.wf-active {
      font-family: 'nimbus-sans';
    }
  }
</style>
