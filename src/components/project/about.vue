<template lang="html">
  <aside :class="$style.about">
    <h3 hidden>About</h3>

    <div :class="$style.text">
      Viola Lukács is a Geneva-based curator, researcher and art professional. She has curated exhibitions at distinguished venues throughout Europe, including the Plutschow Gallery in Zürich, Pavillion Sicli in Geneva, and took part in the Ideal State Project at the dOCUMENTA(13) in Germany; she also recently curated MetaMetria, an acclaimed solo exhibition featuring the work of world-renowned sculpture artist Bernar Venet. Recently, she has been focusing on the question; what are the visual and dialectical tools of representation omitting seduction and fascination in our contemporary culture? Her interest quickened in performance and living arts, as well as in videos of the digital era.
    </div>
  </aside>
</template>

<script>
  export default {
    name: 'mv-about'
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .about {
    background: linear-gradient(to right bottom, white, black);
    color: lightgray;
    will-change: color;
    transition: color 1s ease-in-out;
  }

  .about:hover {
    animation: pulse 10s ease-in-out infinite;
  }

  .text {
    padding: lem;
    /* This is fully responsive and readable on all screens */
    font-size: 6vmin;
  }

  @keyframes pulse {
    25% {
      color: gray;
      opacity: .66;
    }
    50% {
      color: red;
      opacity: .33;
    }
    75% {
      color: yellow;
      opacity: .10;
    }
    100% {
      color: lightgray;
      opacity: 1;
    }
  }
</style>
