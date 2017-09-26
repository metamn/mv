<template lang="html">
  <aside>
    <h3 hidden>Project thumbnails</h3>

    <ul>
      <li v-for="image in images">
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

<style module scoped>
  @value lem from './../framework/scale.css';

  aside {
    width: calc(lem * 10);
  }

  aside ul {
    position: relative;
    top: calc(lem * 2);
    background: magenta;
    animation: thumbs 2s ease-in-out infinite;
  }

  aside ul li {
    /* hard-light, difference */
    mix-blend-mode: luminosity;
  }

  @keyframes thumbs {
    25% {
      background: lavender;
    }
    50% {
      background: magenta;
    }
    75% {
      background: gainsboro;
    }
    100% {
      background: lavender;
    }
  }
</style>
