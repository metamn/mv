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

    <div class="a">
      another comp next
    </div>
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
    // Text spacer adaptive sizing
    //
    // - we do simple math to calculate how this particular case looks ok
    // - we don't try to make smthng working on all text and screen sizes with extensive thinking
    // - we just want to make this case work and document in a way that the calculus might be reusable later
    //
    // it is based on:
    // - character count
    // - container shape
    // - font size
    //
    // when the formula breaks somewhere we add a media query
    //
    //
    $character-count: 28;
    $matrix-size: 6;
    // the container is a matrix, ie has 1:1 intrinsic ratio set
    // 6x6=36, so 28 chars fit in; 5x5=25 would be not enough
    // however we should go with 5 ... it's like been counting from 0..5 instead of 1..6

    $font-size: 1.333em;
    $padding: 1.25em;
    $cell-size: calc(#{$font-size} + 2 * #{$padding}) ;
    $width: calc(#{$cell-size} * (#{$matrix-size} - 1));

    width: $width;

    .char {
      margin: $padding;
      background-color: black;
    }

    // Check if the component overflows the screen
    // - here the media query is not working with calc() ... so manually 380px is added
    @media screen and (max-width: 380px) {
      width: 100vw;

      .char {
        margin: 5.5vmin;
      }
    }

    .text-spacer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: baseline;

      will-change: auto;
      transition: background-color 1s cubic-bezier(0.465, 0.183, 0.153, 0.946);

      &:hover {
        .char {
          background-color: white;
        }
      }
    }
  }
</style>

<style module>
  @value lem from './../framework/scale.css';

  .defaultStyle {
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
