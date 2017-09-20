<template lang="html">
  <div id="typography" hidden>
    <mv-typography-reset></mv-typography-reset>
    <mv-typography-scale></mv-typography-scale>
    <mv-typography-fonts></mv-typography-fonts>
  </div>
</template>

<script>
  import typographyReset from './typography-reset'
  import typographyFonts from './typography-fonts.vue'
  import typographyScale from './typography-scale.vue'

  export default {
    name: 'mv-typography',

    components: {
      'mv-typography-reset': typographyReset,
      'mv-typography-fonts': typographyFonts,
      'mv-typography-scale': typographyScale
    }
  }
</script>


<style scoped>
  display: none;
</style>
