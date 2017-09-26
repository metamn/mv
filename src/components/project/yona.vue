<template lang="html">
  <section class="yona">
    <h3>Yona Friedman: The Dilution of Architecture</h3>

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
            preview: '/static/images/yona-friedman-the-dilution-of-architecture-6-lines-overlay-small-preview.jpg'
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
    position: relative;
  }

  h3 {
    position: absolute;
    top: 0%;
    left: 0;
    z-index: 1;

    font-size: 1500%;
    font-weight: 900;
    color: white;
    line-height: .5;

    cursor: pointer;

    mix-blend-mode: difference;
  }

  ul {
    list-style: none;

    display: flex;
    flex-wrap: nowrap;

    width: 4000px;
    background: crimson;

    position: relative;
  }

  ul li {
    mix-blend-mode: luminosity;
    // animation: thumbs 20s ease-in-out infinite;

    animation: infinite-shift-left 50s linear infinite;
    position: relative;
    z-index: 0;

    min-width: 500px;
  }

  @keyframes infinite-shift-left {
    0% {
      left: 0px;
    }
    25% {
      left: -4000px;
    }
    50% {
      left: 0px;
    }
    75% {
      left: 100vw;
    }
    100% {
      left: 0px;
    }
  }
</style>
