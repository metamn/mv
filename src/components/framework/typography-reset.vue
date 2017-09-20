<template lang="html">
  <div id="typography-reset" hidden></div>
</template>

<script>
  import 'normalize.css'

  export default {
    name: 'mv-typography-reset'
  }
</script>

<style lang="scss">
  // Sitting on top of normalize.css
  h1, h2, h3, h4, h5, h6 {
    font-size: 1em;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  p, figure, blockquote, ul, ol, li {
    margin: 0;
    padding: 0;
  }

  // Remove the extra bottom spacing for <img> inside <a>
  a img {
    line-height: 0;
    display: block;
  }

  figure a {
    display: block;
  }

  button,
  input[type="submit"] {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  // Border box
  * {
    box-sizing: border-box;
  }
</style>
