<template lang="html">
  <div id="home-layout">
    <v-waypoint @waypoint="waypointTop"></v-waypoint>
    <mv-home></mv-home>
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
          var body = document.body
          var html = document.documentElement
          var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
          console.log('top')
          const waypointTop = document.querySelector('.vue-waypoint__waypoint:first-of-type')
          const newNode = document.createElement('div')
          newNode.classList.add('new-home-container')
          console.log(newNode)
          waypointTop.parentNode.insertBefore(newNode, waypointTop.nextSibling)
          const HomeCtor = Vue.extend({})
          new HomeCtor({
            render: function (createElement) {
              return createElement(home)
            }
          }).$mount('.new-home-container')
          window.scrollTo(0, height - 300)
        }
      },
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          console.log('bottom')
        }
      }
    }
  }
</script>

<style lang="css">
</style>
