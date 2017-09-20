<template lang="html">
  <div id="typography-reset" hidden></div>
</template>

<script>
  export default {
    name: 'mv-typography-reset'
  }
</script>

<style lang="scss">
  // External CSS reset
  @import './../../assets/css/reset.css';

  // Border box
  * {
    box-sizing: border-box;
  }
</style>
