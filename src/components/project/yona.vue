<template lang="html">
  <section class="yona">
    <h3>Yona Friedman: The Dilution of Architecture</h3>

    <ul>
      <li v-for="image in images">
        <mv-image :image='image'></mv-image>
      </li>
    </ul>
  </section>
</template>

<script>
  import image from './../framework/image'

  export default {
    name: 'mv-yona',
    data: function () {
      return {
        images: [
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-1-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-1-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-1-lines-overlay.jpg 1136w',
            title: 'Yona Friedman The Dilution Of Architecture 1'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-2-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-2-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-2-lines-overlay.jpg 1136w',
            title: 'Yona Friedman The Dilution Of Architecture 2'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-3-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-3-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-3-lines-overlay.jpg 1136w',
            title: 'Yona Friedman The Dilution Of Architecture 3'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-4-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-4-lines-overlay-small.jpg 426w, /static/images/yona-friedman-the-dilution-of-architecture-4-lines-overlay.jpg 852w',
            title: 'Yona Friedman The Dilution Of Architecture 4'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-5-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-5-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-5-lines-overlay.jpg 1136w',
            title: 'Yona Friedman The Dilution Of Architecture 5'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-6-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-6-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-6-lines-overlay.jpg 1136w',
            title: 'Yona Friedman The Dilution Of Architecture 6'
          },
          {
            src: '/static/images/yona-friedman-the-dilution-of-architecture-7-lines-overlay-small.jpg',
            srcset: '/static/images/yona-friedman-the-dilution-of-architecture-7-lines-overlay-small.jpg 568w, /static/images/yona-friedman-the-dilution-of-architecture-7-lines-overlay.jpg 1136w',
            title: 'Yona Friedman The Dilution Of Architecture 7'
          }
        ]
      }
    },
    components: {
      'mv-image': image
    }
  }
</script>

<style module scoped>
  section {
    overflow: hidden;
    position: relative;
    background: crimson;
    padding: 5em 5em 0;
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

    position: relative;
  }

  ul li {
    mix-blend-mode: luminosity;

    animation: infinite-shift-left 12.5s linear infinite;
    position: relative;
    z-index: 0;

    min-width: 500px;
    max-width: 500px;
  }

  @keyframes infinite-shift-left {
    0% {
      left: 0px;
    }
    50% {
      left: -2000px;
    }
    100% {
      left: 0px;
    }
  }
</style>
