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
      /**
       * Get the height of the home
       * - then we can scroll down to the second home when a new one is inserted above
       * - the problem is lazy loading: we don't know the real size of the home
       * until we didn't scroolled down to the bottom first
       */
      getHeight () {
        const body = document.body
        const html = document.documentElement
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
      },
      /**
       * Create a new container div where a new home will be added
       */
      createNewContainerDiv () {
        const newNode = document.createElement('div')
        newNode.classList.add('new-home-container')
        return newNode
      },
      /**
       * Insert the new container where is appropiate
       * @param  {[type]} direction [description]
       * @return {[type]}           [description]
       */
      createNewContainer (direction) {
        const elementID = (direction === 'up') ? '.vue-waypoint__waypoint:first-of-type' : '.vue-waypoint__waypoint:last-of-type'
        const waypoint = document.querySelector(elementID)
        const whereToInsert = (direction === 'up') ? waypoint.nextSibling : waypoint.previousSibling
        const whatToInsert = this.createNewContainerDiv()
        waypoint.parentNode.insertBefore(whatToInsert, whereToInsert)
      },
      /**
       * Re-render the home component and mount where the new container is
       */
      addNewHome () {
        const HomeCtor = Vue.extend({})
        new HomeCtor({
          render: function (createElement) {
            return createElement(home)
          }
        }).$mount('.new-home-container')
      },
      /**
       * The waypointTop event handler
       * @param  {[type]} direction [description]
       * @param  {[type]} going     [description]
       * @return {[type]}           [description]
       */
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          this.createNewContainer(direction.y)
          this.addNewHome()
          window.scrollTo(0, this.height)
        }
      },
      /**
       * The waypointBottom event handler
       * @param  {[type]} direction [description]
       * @param  {[type]} going     [description]
       * @return {[type]}           [description]
       */
      waypointBottom (direction, going) {
        if ((direction.y === 'down') && going === 'in') {
          this.createNewContainer(direction.y)
          this.addNewHome()
        }
      }
    }
  }
</script>

<style lang="css">
</style>
