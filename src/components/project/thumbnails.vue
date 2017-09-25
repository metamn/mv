<template lang="html">
  <aside :class="[$style.thumbnails, 'thumbnails']">
    <h3 hidden>Project thumbnails</h3>

    <ul class="ul">
      <li class="li" v-for="image in images">
        <mv-image-progressive :image='image'></mv-image-progressive>
      </li>
    </ul>
  </aside>
</template>

<script>
  import imageProgressive from './../framework/image-progressive'

  export default {
    name: 'mv-thumbnails',
    data: function () {
      return {
        images: [
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-1.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-1-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-1.jpg 1136w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-1-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-01.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-01-small.jpg 358w, /static/images/do-not-trust-the-mirror-01.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-01-preview.jpg'
          },
          {
            src: '/static/images/bernar-venet-metametria-1.jpg',
            srcset: '/static/images/bernar-venet-metametria-1-small.jpg 960w, /static/images/bernar-venet-metametria-1.jpg 1920w',
            preview: '/static/images/bernar-venet-metametria-1-preview.jpg'
          }
        ]
      }
    },
    components: {
      'mv-image-progressive': imageProgressive
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .thumbnails {
    width: calc(lem * 15);
    padding: lem;
  }
</style>
