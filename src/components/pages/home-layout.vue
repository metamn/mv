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
  var VueScrollTo = require('vue-scrollto')

  export default {
    name: 'mv-home-layout',
    components: {
      'mv-home': home
    },
    data: function () {
      return {
        /**
         * How many times the home component will be rendered
         * - when we reach the top or bottom this counter is incremented
         * - since the data is changed the entire component will be re-rendered
         */
        howManyTimes: ['once']
      }
    },
    methods: {
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          this.howManyTimes.push('again')
        }
      },
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          this.howManyTimes.push('again')
        }
      }
    },
    updated: function () {
      console.log('updated')
      VueScrollTo.scrollTo('.homes:nth-of-type(1) .end')
    }
  }
</script>

<style lang="css">
</style>
