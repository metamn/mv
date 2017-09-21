<template>
  <section id="home" :class="[$style.defaultStyle]">
    <mv-title type="section">
      Vue components for
      <mv-link url="http://metamn.io" title="metamn" klass="not-styled">
        <mv-text-style type="logo">
          <mv-text-flip text="metamn"></mv-text-flip>
        </mv-text-style>
      </mv-link>
    </mv-title>
  </section>
</template>

<script>
  import title from './../project/title'
  import link from './../framework/link'
  import textStyle from './../framework/text-style'
  import textFlip from './../framework/text-flip'

  export default {
    name: 'home',
    components: {
      'mv-title': title,
      'mv-link': link,
      'mv-text-style': textStyle,
      'mv-text-flip': textFlip
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
    padding: lem;
  }
</style>
