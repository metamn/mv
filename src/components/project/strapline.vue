<template lang="html">
  <h3 :class="[$style.strapline, 'strapline']">
    <mv-intrinsic-ratio size="1:1">
      <mv-text-spacer text="curating on new trajectories"></mv-text-spacer>
    </mv-intrinsic-ratio>
  </h3>
</template>

<script>
  import textSpacer from './../framework/text-spacer'
  import intrinsicRatio from './../framework/intrinsic-ratio'

  export default {
    name: 'mv-strapline',
    components: {
      'mv-text-spacer': textSpacer,
      'mv-intrinsic-ratio': intrinsicRatio
    }
  }
</script>

<style lang="scss">
  .strapline {
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
      $matrix-size: 5;
      // the container is a matrix, ie has 1:1 intrinsic ratio set
      // 6x6=36, so 28 chars fit in; 5x5=25 would be not enough
      // however we should go with 5 ... it's like been counting from 0..5 instead of 1..6

      $font-size: 5vmin;
      $padding: 5vmin;
      $cell-size: calc(#{$font-size} + #{$padding * 2}) ;
      $width: calc(#{$cell-size} * (#{$matrix-size}));

      width: $width;

      .char {
        font-size: $font-size;
        margin: $padding;
        background-color: black;
      }

      // Check if the component overflows the screen
      // - here the media query is not working with calc() ... so manually 380px is added
      @media screen and (max-width: 380px) {
        width: 100vw;

        .char {
          margin: 7vmin;
        }
      }

      .text-spacer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        will-change: auto;
        transition: transform 1s cubic-bezier(0.465, 0.183, 0.153, 0.946);

        &:hover {
          .char {
            background-color: transparent;
          }
        }
      }
    }
  }
</style>

<style module>
  .strapline {
    // composes: strapline from './../framework/text-style.css';
  }
</style>
