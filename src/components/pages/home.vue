<template>
  <section id="home" :class="[$style.defaultStyle]">
    <mv-title type="section">
      <mv-intrinsic-ratio size="1:1">
        <mv-text-spacer text="Curating on new trajectories"></mv-text-spacer>
      </mv-intrinsic-ratio>
      <mv-link url="http://metamn.io" title="metamn" klass="not-styled">
        <mv-text-style type="logo">
          <mv-text-flip text="violuk"></mv-text-flip>
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
  import textSpacer from './../framework/text-spacer'
  import intrinsicRatio from './../framework/intrinsic-ratio'

  export default {
    name: 'home',
    components: {
      'mv-title': title,
      'mv-link': link,
      'mv-text-style': textStyle,
      'mv-text-flip': textFlip,
      'mv-image-progressive': imageProgressive,
      'mv-text-spacer': textSpacer,
      'mv-intrinsic-ratio': intrinsicRatio
    }
  }
</script>

<style lang="scss">
  .intrinsic-ratio {
    $character-count: 28;
    $matrix-size: 5; // 6x6=36, so 28 chars fit in; 5x5=25 would be not enough

    $font-size: 1.333em;
    $padding: 1.25em;
    $cell-size: calc(#{$font-size} + 2 * #{$padding: });

    width: calc(#{$cell-size} * #{$matrix-size});
    max-width: 100vw;

    .text-spacer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: baseline;

      .char {
        padding: $padding;
      }
    }
  }
</style>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
    padding: lem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }

  .imageProgressive {
    width: calc(lem * 15);
    padding: lem;
  }
</style>
