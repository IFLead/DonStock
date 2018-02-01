<template>
  <div class="categories h-100">
    <div class="header">
      <flickity ref="flickity" :options="flickityOptions">
        <input class="carousel-cell" type="button"
               v-on:click="setInverse(category)"
               v-for="category in categories"
               v-bind:value="category.name">

      </flickity>
    </div>
    <div class="container-fluid" v-show="categories.some(value => value.selected)">
      <div class="row">
        <div class="pins col-10">
          <input type="button" v-for="category in categories" v-if="category.selected" :value="category.name+' ×'"
                 class="green-btn" v-on:click="category.selected = false">

        </div>
        <div class="col-1" >
          <button class="green-btn clear-all" v-if="categories.some(value => value.selected)"
                  v-on:click="categories.forEach( category => category.selected = false )">
            <img src="../assets/remove-all.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Flickity from 'vue-flickity'

  export default {
    name: 'categories',
    components: {
      Flickity
    },
    props: ['categories'],
    mounted () {

    },
    methods: {
      setInverse (category) {
        this.$set(category, 'selected', category.selected === undefined ? true : !category.selected)
      }
    },
    data () {
      return {
        flickityOptions: {
          initialIndex: 0,
          freeScroll: true,
          contain: true,
          cellAlign: 'center',
          wrapAround: false,
          prevNextButtons: false,
          pageDots: false,
          setGallerySize: false
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

  @import '~bootstrap/scss/bootstrap'
  @import '../style/variables'

  div.categories
    /*display: flex*/
    /*align-items: center*/
    /*justify-content: space-evenly*/
    div.header
      height: 11.112vh
      background-color: black

      input[type="button"]
        border: 0
        outline: none
        color: white
        text-align: center
        background-color: transparent
        //font-size: 1.25vw
        font-size: 24px
        @include media-breakpoint-down(xs)
          font-size: 14px

        &:hover
          color: #1DB954
          filter: brightness(100%)

      .flickity-enabled
        height: 100%

        .flickity-viewport
          position: absolute
          width: 100%

          .flickity-slider
            display: flex
            align-items: center
            /*transform: none !important*/
            justify-content: center !important

            .carousel-cell
              height: 100%
              margin-right: 10px
              margin-left: 10px

    div.row
      margin-top: 8.333vh
      height: 4.63vh
      min-height: 40px
      div.pins
        height: 100%
        padding-left: 9.375vw
        //padding-right: 9.375vw
        display: flex
        position: relative
        flex-direction: row
        //this will allow flex-end to move item to the right
        justify-content: center

        input
          width: auto //13.5416667vw
          //font-size: 1.094vw
          padding: 5px

          max-height: 50px
          margin-left: 8px
          margin-right: 8px

      button.clear-all
        @extend %btn-img-inside
        float: right !important
        height: 100%
        min-height: 40px
        min-width: 40px
        width: 4.63vh
        //top: 0
        //right: 9.375vw
        &:hover
          color: #1DB954
          filter: brightness(80%)

        img
          height: 100%
          width: 100%


</style>



