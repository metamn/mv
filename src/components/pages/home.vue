<template>
  <section id="home" :class="[$style.defaultStyle]">
    <v-waypoint @waypoint="waypointTop"></v-waypoint>
    <mv-strapline></mv-strapline>
    <mv-thumbnails></mv-thumbnails>
    <mv-about></mv-about>
    <mv-yona></mv-yona>
    <mv-mirror></mv-mirror>
    <v-waypoint @waypoint="waypointBottom"></v-waypoint>
    <div id="home-after"></div>
  </section>
</template>

<script>
  import strapline from './../project/strapline'
  import thumbnails from './../project/thumbnails'
  import about from './../project/about'
  import yona from './../project/yona'
  import mirror from './../project/mirror'

  import Vue from 'vue'
  import Home from './home'

  export default {
    name: 'home',
    components: {
      'mv-strapline': strapline,
      'mv-thumbnails': thumbnails,
      'mv-about': about,
      'mv-yona': yona,
      'mv-mirror': mirror
    },
    methods: {
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          console.log('insert to top')

          const HelloCtor = Vue.extend({})
          new HelloCtor({
            render: h => h(Home)
          }).$mount('#newhome')
        }
      },
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          console.log('insert to bottom')

          const HelloCtor = Vue.extend({})
          new HelloCtor({
            render: h => h(Home)
          }).$mount('#newhome')
        }
      }
    }
  }
</script>

<style module>
  .defaultStyle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }
</style>
