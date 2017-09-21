<template>
  <section id="home" :class="[$style.defaultStyle]">
    <mv-title type="section">
      Vue components for
      <mv-link url="http://metamn.io" title="metamn" klass="not-styled">
        <mv-text-style type="logo">metamn</mv-text-style>
      </mv-link>
    </mv-title>
  </section>
</template>

<script>
  import title from './../project/title'
  import link from './../framework/link'
  import textStyle from './../framework/text-style'

  export default {
    name: 'home',
    components: {
      'mv-title': title,
      'mv-link': link,
      'mv-text-style': textStyle
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
    padding: lem;
  }
</style>
