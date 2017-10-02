<template lang="html">
  <h3 :class="[$style.logo, 'logo']">
    <mv-link url="/" title="metamn" klass="not-styled">
      <mv-text-flip text="violuk"></mv-text-flip>
    </mv-link>
  </h3>
</template>

<script>
  import link from './../framework/link'
  import textFlip from './../framework/text-flip'

  export default {
    name: 'mv-logo',
    components: {
      'mv-link': link,
      'mv-text-flip': textFlip
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .logo {
    composes: logo from './../framework/text-style.css';
    padding: lem;
    display: none;
  }
</style>
