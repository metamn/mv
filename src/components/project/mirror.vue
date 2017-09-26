<template lang="html">
  <section>
    <h3>
      Do Not Trust The Mirror
    </h3>

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
    name: 'mv-mirror',
    data: function () {
      return {
        images: [
          {
            src: '/static/images/do-not-trust-the-mirror-01-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-01-small.jpg 715w, /static/images/do-not-trust-the-mirror-01.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-01-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-02-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-02-small.jpg 715w, /static/images/do-not-trust-the-mirror-02.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-02-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-03-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-03-small.jpg 715w, /static/images/do-not-trust-the-mirror-03.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-03-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-04-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-04-small.jpg 715w, /static/images/do-not-trust-the-mirror-04.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-04-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-05-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-05-small.jpg 715w, /static/images/do-not-trust-the-mirror-05.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-05-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-06-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-06-small.jpg 715w, /static/images/do-not-trust-the-mirror-06.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-06-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-07-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-07-small.jpg 715w, /static/images/do-not-trust-the-mirror-07.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-07-preview.jpg'
          },
          {
            src: '/static/images/do-not-trust-the-mirror-08-small.jpg',
            srcset: '/static/images/do-not-trust-the-mirror-08-small.jpg 715w, /static/images/do-not-trust-the-mirror-08.jpg 715w',
            preview: '/static/images/do-not-trust-the-mirror-08-preview.jpg'
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
  }

</style>
