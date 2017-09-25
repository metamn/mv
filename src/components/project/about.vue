<template lang="html">
  <aside class="about">
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

  .text {
    composes: large4 from './../framework/scale.css';
    background: linear-gradient(to right, white, black);
    // padding: lem;
  }

  .text:hover {
    animation: pulse 10s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      background: linear-gradient(to right white, black);
      color: white;
      letter-spacing: 2.5px;
    }
    25% {
      background: linear-gradient(to right, red , yellow);
      color: red;
      letter-spacing: -12.5px;
    }
    50% {
      background: linear-gradient(to bottom, black, white);
      color: black;
      letter-spacing: 1px;
    }
    75% {
      background: linear-gradient(to left, white, black);
      color: white;
      letter-spacing: 7px;
    }
    100% {
      background: linear-gradient(to top, white, black);
      letter-spacing: 0px;
    }
  }
</style>
