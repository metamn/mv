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
        previousScrollHeightMinusTop: 0
      }
    },
    methods: {
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
       * Save the current scroll position and scrollHeight of the container
       * - http://kirbysayshi.com/2013/08/19/maintaining-scroll-position-knockoutjs-list.html
       */
      saveCurrentPosition () {
        this.previousScrollHeightMinusTop = document.documentElement.scrollHeight - document.documentElement.scrollTop
        console.log(this.previousScrollHeightMinusTop)
      },
      /**
       * Restore the current scroll position
       * - it's the pair function of saveCurrentPosition()
       * - to make it cross browser: https://stackoverflow.com/questions/23313092/set-scrolltop-cross-browser
       */
      restoreCurrentPosition () {
        var position = document.documentElement.scrollHeight - this.previousScrollHeightMinusTop
        document.documentElement.scrollTop = position
        document.body.scrollTop = position
      },
      /**
       * The waypointTop event handler
       * @param  {[type]} direction [description]
       * @param  {[type]} going     [description]
       * @return {[type]}           [description]
       */
      waypointTop (direction, going) {
        if ((direction.y === 'up') && going === 'in') {
          this.saveCurrentPosition()
          this.createNewContainer(direction.y)
          this.addNewHome()
          this.restoreCurrentPosition()
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
