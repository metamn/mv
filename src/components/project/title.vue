<template lang="html">
  <h3 :class="computedClass"><slot></slot></h3>
</template>

<script>
  export default {
    name: 'mv-title',
    props: {
      /**
       * The type of the title like section, article, etc
       */
      type: {
        type: String
      }
    },
    computed: {
      computedClass () {
        switch (this.type) {
          case 'section':
            return this.$style.section
          default:
            return this.$style.default
        }
      }
    }
  }
</script>

<style module>
  .default {
    composes: bold from './../framework/fonts.css';
  }

  .section {
    composes: default;
    composes: large1 from './../framework/scale.css';
  }
</style>
