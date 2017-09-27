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
    data: function () {
      return {
        height: 0
      }
    },
    mounted: function () {
      const body = document.body
      const html = document.documentElement
      this.height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
      console.log('h: ' + this.height)
    },
    methods: {
      getHeight () {
        const body = document.body
        const html = document.documentElement
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
      },
      createNewContainerDiv () {
        const newNode = document.createElement('div')
        newNode.classList.add('new-home-container')
        return newNode
      },
      createNewContainer (direction) {
        const elementID = (direction === 'up') ? '.vue-waypoint__waypoint:first-of-type' : '.vue-waypoint__waypoint:last-of-type'
        const waypoint = document.querySelector(elementID)
        const whereToInsert = (direction === 'up') ? waypoint.nextSibling : waypoint.previousSibling
        const whatToInsert = this.createNewContainerDiv()
        waypoint.parentNode.insertBefore(whatToInsert, whereToInsert)
      },
      addNewHome () {
        const HomeCtor = Vue.extend({})
        new HomeCtor({
          render: function (createElement) {
            return createElement(home)
          }
        }).$mount('.new-home-container')
      },
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          console.log('top')
          this.createNewContainer(direction.y)
          this.addNewHome()
          window.scrollTo(0, 6126)
        }
      },
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          // console.log('bottom')
          this.createNewContainer(direction.y)
          this.addNewHome()
        }
      }
    }
  }
</script>

<style lang="css">
</style>
