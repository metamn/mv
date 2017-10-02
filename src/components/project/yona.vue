<template lang="html">
  <section>
    <router-link :class="$style.link" v-on:click.native="doSomethingCool" to="/yona-frideman-the-dilution-of-architecture">
      <h3>Yona Friedman: The Dilution of Architecture</h3>
    </router-link>
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: crimson;
  }

  h3 {
    font-size: 40vmin;
    font-weight: bold;
    color: white;
    line-height: .7;
  }

  ul {
    list-style: none;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-wrap: wrap;

    width: 2000vmax;
  }

  ul li {
    mix-blend-mode: difference;

    animation: infinite-shift-left 80s linear infinite;
    position: relative;
    z-index: 0;

    width: 200vmax;
  }


  @keyframes infinite-shift-left {
    0% {
      left: 0px;
    }
    50% {
      left: -1000vmax;
    }
    100% {
      left: 0px;
    }
  }
</style>
