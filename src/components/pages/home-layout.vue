<template lang="html">
  <div class="home-layout">
    <v-waypoint @waypoint="waypointTop"></v-waypoint>
    <div id="home-placeholder-top"></div>
    <mv-home></mv-home>
    <div id="home-placeholder-bottom"></div>
    <v-waypoint @waypoint="waypointBottom"></v-waypoint>
  </div>
</template>

<script>
  import Vue from 'vue'
  import home from './home'

  export default {
    name: 'mv-home-layout',
    components: {
      'mv-home': home
    },
    methods: {
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          console.log('insert to top')

          const NewHome = Vue.extend({})
          new NewHome({
            render (createElement) {
              return createElement(home)
            }
          }).$mount('#home-placeholder-top')
        }
      },
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          console.log('insert to bottom')

          const NewHome = Vue.extend({})
          new NewHome({
            render (createElement) {
              return createElement(home)
            }
          }).$mount('#home-placeholder-bottom')
        }
      }
    }
  }
</script>

<style lang="css">
</style>
