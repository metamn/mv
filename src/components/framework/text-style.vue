<template lang="html">
  <span :class="computedClass"><slot></slot></span>
</template>

<script>
  export default {
    name: 'mv-text-style',
    props: {
      /**
       * The type of the text
       */
      type: {
        type: String
      }
    },
    computed: {
      computedClass () {
        switch (this.type) {
          case 'logo':
            return [this.$style.logo, 'logo']
          default:
            return this.$style.default
        }
      }
    }
  }
</script>

<style module>
  @value lem from './scale.css';

  .logo {
    composes: logo from './fonts.css';
    display: inline-flex;
    padding: lem;
  }
</style>
