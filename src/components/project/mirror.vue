<template lang="html">
  <section>
    <h3>
      Do Not Trust The Mirror
    </h3>

    <ul>
      <li v-for="image in images">
        <mv-image :image='image'></mv-image>
      </li>
    </ul>

    <ul :class="$style.second">
      <li v-for="image in images">
        <mv-image :image='image'></mv-image>
      </li>
    </ul>
  </section>
</template>

<script>
  import image from './../framework/image'

  export default {
    name: 'mv-mirror',
    data: function () {
      return {
        images: [
          {
            src: '/static/images/do-not-trust-the-mirror-01-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-01-small.jpg 715w, /static/images/do-not-trust-the-mirror-01.jpg 715w',
            title: 'Do Not Trust The Mirror 1'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-02-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-02-small.jpg 715w, /static/images/do-not-trust-the-mirror-02.jpg 715w',
            title: 'Do Not Trust The Mirror 2'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-03-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-03-small.jpg 715w, /static/images/do-not-trust-the-mirror-03.jpg 715w',
            title: 'Do Not Trust The Mirror 3'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-04-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-04-small.jpg 715w, /static/images/do-not-trust-the-mirror-04.jpg 715w',
            title: 'Do Not Trust The Mirror 4'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-05-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-05-small.jpg 715w, /static/images/do-not-trust-the-mirror-05.jpg 715w',
            title: 'Do Not Trust The Mirror 5'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-06-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-06-small.jpg 715w, /static/images/do-not-trust-the-mirror-06.jpg 715w',
            title: 'Do Not Trust The Mirror 6'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-07-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-07-small.jpg 715w, /static/images/do-not-trust-the-mirror-07.jpg 715w',
            title: 'Do Not Trust The Mirror 7'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-08-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-08-small.jpg 715w, /static/images/do-not-trust-the-mirror-08.jpg 715w',
            title: 'Do Not Trust The Mirror 8'
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
    display: flex;
    flex-wrap: wrap;
    background: black;
    color: white;
    position: relative;
  }

  h3 {
    position: absolute;
    top: 50%;
    font-size: 300%;
  }

  ul {
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ul li {
    background: black;
    mix-blend-mode: hard-light;
    cursor: pointer;
  }

  ul li:hover {
    animation: flip 2s ease-in-out;
  }

  .second {
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleY(-1);
    background: transparent;
  }

  .second li {
    opacity: 0;
    mix-blend-mode: difference;
  }

  .second li:hover {
    opacity: 1;
    animation: flip 2s ease-in-out;
  }


  @keyframes flip {
    0% {
      transform: scaleY(1);
    }
    1% {
      transform: scaleY(-1);
    }
    99% {
      transform: scaleY(-1);
    }
    100% {
      transform: scaleY(1);
    }
  }

</style>
