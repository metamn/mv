<template lang="html">
  <div class="image">
    <div class="progressive">
      <img :class="[computedClass, 'img']" v-progressive="src" :data-srcset="srcset" :src="preview" />
    </div>
  </div>
</template>

<script>
  /**
   * Progressive and responsive images
   * - https://alligator.io/vuejs/progressive-image-loader/
   * - https://github.com/ccforward/progressive-image
   *
   * It must be imported in main.js
   * Also the stylesheet has to be imported
   */
  export default {
    name: 'mv-image-progressive',
    props: {
      /**
       * Lazy load the image
       */
      lazy: {
        type: Boolean,
        default: true
      },
      /**
       * The source of the image
       */
      src: {
        type: String,
        default: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg'
      },
      /**
       * A blurred, stripped down version of the image
       */
      preview: {
        type: String,
        default: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'
      },
      /**
       * The responsive versions of the image
       * - https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
       */
      srcset: {
        type: String,
        default: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg 320w, http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg 640w'
      }
    },
    computed: {
      computedClass () {
        return this.lazy ? 'preview lazy' : 'preview'
      }
    }
  }
</script>

<style lang="css">
</style>
