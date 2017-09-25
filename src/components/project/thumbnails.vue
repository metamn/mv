<template lang="html">
  <aside :class="[$style.thumbnails, 'thumbnails']">
    <h3 hidden>Project thumbnails</h3>

    <ul :class="$style.ul">
      <li :class="$style.li" v-for="image in images">
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
            src: '/static/images/yona-friedman-the-dilution-of-architecture-1-640.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-1-320.jpg 320w, /static/images/yona-friedman-the-dilution-of-architecture-1-640.jpg 640w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-1-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-01-640.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-01-320.jpg 320w, /static/images/do-not-trust-the-mirror-01-640.jpg 640w',
            preview: '/static/images/do-not-trust-the-mirror-01-preview.jpg'
          },
          {
            src: '/static/images/bernar-venet-metametria-1-640.jpg',
            srcset: '/static/images/bernar-venet-metametria-1-320.jpg 320w, /static/images/bernar-venet-metametria-1-640.jpg 640w',
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
    width: calc(lem * 10);
  }

  .ul {
    position: relative;
    top: calc(lem * 2);
    background: lavender;
    animation: thumbs 2s ease-in-out infinite;
  }

  img {
    /* hard-light, difference */
    mix-blend-mode: difference;
  }

  @keyframes thumbs {
    25% {
      background: lavender;
    }
    50% {
      background: red;
    }
    75% {
      background: gainsboro;
    }
    100% {
      background: lavender;
    }
  }
</style>
