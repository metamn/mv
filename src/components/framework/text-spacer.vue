<template lang="html">
  <div :class="computedClass">
    <span :class="computedCharClass" v-for="char in chars">{{ char }}</span>
  </div>
</template>

<script>
  export default {
    name: 'mv-text-spacer',
    props: {
      /**
       * The text wich will be the split to be a spacer
       */
      text: {
        type: String,
        default: ''
      },
      /**
       * How the spacer will look like
       */
      type: {
        type: String,
        default: ''
      },
      /**
       * The width of the spacer
       */
      width: {
        type: String,
        default: '15'
      },
      /**
       * The height of the spacer
       */
      height: {
        type: String,
        default: '15'
      }
    },
    data () {
      return {
        chars: this.text.split('')
      }
    },
    computed: {
      computedClass () {
        switch (this.type) {
          case 'random':
            return this.$style.random
          default:
            return this.$style.default
        }
      },
      computedCharClass () {
        return this.$style.char
      }
    }
  }
</script>

<style module>
  @value lem from './scale.css';

  .char {
    padding: 2vmax;
  }

  .default {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 33vmax;
    height: 33vmax;
  }

  .random {
    composes: default;
    align-items: center;
  }
</style>
