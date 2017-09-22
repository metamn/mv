<template lang="html">
  <div :class="computedClass">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mv-intrinsic-ratio',
    props: {
      size: {
        type: String,
        default: '16:9'
      }
    },
    computed: {
      computedClass () {
        switch (this.size) {
          case '16:9':
            return this.$style.ir169
          case '3:2':
            return this.$style.ir32
          case '4:3':
            return this.$style.ir43
          case '1:1':
            return this.$style.ir11
          case '3:4':
            return this.$style.ir34
          case '2:3':
            return this.$style.ir23
          default:
            return this.$style.ir169
        }
      }
    }
  }
</script>

<style module>
  .ir {
    position: relative;
    height: 0;
    overflow: hidden;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .ir169 {
    composes: ir;
    padding-bottom: calc(100% / (16 / 9));
  }

  .ir32 {
    composes: ir;
    padding-bottom: calc(100% / (3 / 2));
  }

  .ir43 {
    composes: ir;
    padding-bottom: calc(100% / (4 / 3));
  }

  .ir11 {
    composes: ir;
    padding-bottom: calc(100% / (1 / 1));
  }

  .ir34 {
    composes: ir;
    padding-bottom: calc(100% / (3 / 4));
  }

  .ir23 {
    composes: ir;
    padding-bottom: calc(100% / (2 / 3));
  }
</style>
