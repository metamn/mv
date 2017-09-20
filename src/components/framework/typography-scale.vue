<template lang="html">
  <div id="typography-scale"></div>
</template>

<script>
  export default {
    name: 'mv-typography-scale'
  }
</script>

<style lang="scss">
  // Default settings
  // - make changes here
  $font-size: 100%;
  $line-height: 1.25;
  $lem: #{$line-height}em;

  @mixin scale($variant) {
    @if ($variant == default) {
      font-size: $font-size;
      line-height: $line-height;
    }
  }
</style>
