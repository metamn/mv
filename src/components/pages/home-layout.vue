<template lang="html">
  <div id="home-layout">
    <v-waypoint @waypoint="waypointTop"></v-waypoint>
    <span class="homes" v-for="howManyTime in howManyTimes">
      <mv-home></mv-home>
    </span>
    <v-waypoint @waypoint="waypointBottom"></v-waypoint>
  </div>
</template>

<script>
  import home from './home'

  export default {
    name: 'mv-home-layout',
    components: {
      'mv-home': home
    },
    data: function () {
      return {
        /**
         * How many times the home component will be rendered
         * - when we reach the top or bottom tof the page his counter is incremented
         * - since a data is changed the entire component will be re-rendered
         * - this way we will have another home component added whenever we hit
         * the end or the beginning of the page
         */
        howManyTimes: ['once']
      }
    },
    methods: {
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          this.howManyTimes.push('again')
          // here we should slide down to the top of the second slide
          // the problem is the new slides are appended to the bottom and not to the top
          // maybe an infinite scroll plugin should be used which adds items at top
          // or manupilate the scrolltop of the window
        }
      },
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          this.howManyTimes.push('again')
        }
      }
    }
  }
</script>

<style lang="css">
</style>
