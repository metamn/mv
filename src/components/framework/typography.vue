<template lang="html">
  <div id="typography" hidden>
    <mv-typography-reset></mv-typography-reset>
    <mv-fonts></mv-fonts>
  </div>
</template>

<script>
  import typographyReset from './typography-reset'
  import fonts from './fonts.vue'

  export default {
    name: 'mv-typography',

    components: {
      'mv-typography-reset': typographyReset,
      'mv-fonts': fonts
    }
  }
</script>


<style scoped>
  display: none;
</style>
