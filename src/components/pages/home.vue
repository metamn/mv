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

    <mv-image-progressive :class="[$style.imageProgressive]"></mv-image-progressive>
  </section>
</template>

<script>
  import title from './../project/title'
  import link from './../framework/link'
  import textStyle from './../framework/text-style'
  import textFlip from './../framework/text-flip'
  import imageProgressive from './../framework/image-progressive'

  export default {
    name: 'home',
    components: {
      'mv-title': title,
      'mv-link': link,
      'mv-text-style': textStyle,
      'mv-text-flip': textFlip,
      'mv-image-progressive': imageProgressive
    }
  }
</script>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
    padding: lem;

    display: flex;
    justify-content: space-around;
    align-items: baseline;
  }

  .imageProgressive {
    width: 33vmax;
    padding: lem;
  }
</style>
