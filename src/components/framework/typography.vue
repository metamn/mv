<template lang="html">
  <div id="typography" hidden>
    <mv-typography-reset></mv-typography-reset>
    <mv-typography-scale></mv-typography-scale>
    <mv-typography-fonts></mv-typography-fonts>
  </div>
</template>

<script>
  import typographyReset from './typography-reset'
  import typographyFonts from './typography-fonts'
  import typographyScale from './typography-scale'

  export default {
    name: 'mv-typography',

    components: {
      'mv-typography-reset': typographyReset,
      'mv-typography-fonts': typographyFonts,
      'mv-typography-scale': typographyScale
    }
  }
</script>


<style lang="scss">
  @import "./typography-fonts";
  @import "./typography-scale";

  // Use system fonts by default
  // - https://css-tricks.com/snippets/css/system-font-stack/
  // Use webfonts only when they are loaded
  // - https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/
  html {
    @include font(system);
    @include scale(default);

    &.wf-active {
      @include font(nimbus-sans-regular);
    }
  }
</style>
