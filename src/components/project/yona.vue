<template lang="html">
  <section class="yona">
    <h3 hidden>Yona Friedman: The Dilution of Architecture</h3>

    <ul>
      <li v-for="image in images">
        <mv-image-progressive :image='image'></mv-image-progressive>
      </li>
    </ul>
  </section>
</template>

<script>
  import imageProgressive from './../framework/image-progressive'

  export default {
    name: 'mv-yona',
    data: function () {
      return {
        images: [
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-1-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-1-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-1-lines-overlay.jpg 1136w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-1-lines-overlay-small-preview.jpg'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-2-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-2-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-2-lines-overlay.jpg 1136w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-2-lines-overlay-small-preview.jpg'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-3-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-3-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-3-lines-overlay.jpg 1136w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-3-lines-overlay-small-preview.jpg'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-4-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-4-lines-overlay-small.jpg 426w, /static/images/yona-friedman-the-dilution-of-architecture-4-lines-overlay.jpg 852w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-4-lines-overlay-small-preview.jpg'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-5-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-5-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-5-lines-overlay.jpg 1136w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-5-lines-overlay-small-preview.jpg'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-6-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-6-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-6-lines-overlay.jpg 1136w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-6s-lines-overlay-small-preview.jpg'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-7-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-7-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-7-lines-overlay.jpg 1136w',
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-7-lines-overlay-small-preview.jpg'
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
  section {
    overflow: hidden;
  }

  ul {
    list-style: none;

    display: flex;
    flex-wrap: nowrap;

    width: 6000%;
    background: crimson;
  }

  ul li {
    mix-blend-mode: luminosity;
    // animation: thumbs 20s ease-in-out infinite;
  }


  @keyframes thumbs {
    25% {
      mix-blend-mode: luminosity;
    }
    50% {
      mix-blend-mode: hard-light;
    }
    75% {
      mix-blend-mode: luminosity;
    }
    100% {
      mix-blend-mode: luminosity;
    }
  }
</style>
