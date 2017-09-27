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
    align-items: baseline;
  }

  ul li {
    background: black;
    mix-blend-mode: hard-light;
  }


  @keyframes flip {
    0% {
      transform: scaleX(1);
    }
    1% {
      transform: scaleX(-1);
    }
    99% {
      transform: scaleX(-1);
    }
    100% {
      transform: scaleX(1);
    }
  }

</style>
