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
  @import "./typography-fonts"
</style>
