<template>
  <div class="categories h-100">
    <div class="header">
      <flickity v-if="categories && categories.length > 0" ref="flickity" :options="flickityOptions">
        <div v-for="category in categories" class="carousel-cell">
          <label>
            <input type="checkbox" v-model="category.selected"><span>{{category.name}}</span>
          </label>
        </div>
      </flickity>
    </div>
    <div class="container-fluid items d-none d-xl-block" v-if="categories.some(value => value.selected)">
      <div class="row no-gutters">
        <div class="pins col-11">
          <input type="button" v-for="category in categories" v-show="category.selected" :value="category.name+' ×'"
                 class="green-btn" v-on:click="category.selected = false">
        </div>
        <div class="col-1">
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
  import {mapGetters} from 'vuex'

  export default {
    name: 'categories',
    components: {
      Flickity
    },
    methods: {
      setInverse (category) {
        this.$set(category, 'selected', category.selected === undefined ? true : !category.selected)
      }
    },
    computed: {
      ...mapGetters({
        categories: 'allCategories'
      })
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
      max-height: 120px
      background-color: black
      @include media-breakpoint-down(md)
        height: 11.112vmax

      input
        border: 0
        outline: none

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

          label
            position: relative
            top: 50%
            transform: translateY(-50%)
            cursor: pointer

            input
              display: none
              &:checked + span
                color: #1DB954
                filter: brightness(100%)

            span
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
    div.items
      padding-left: calc(7.2vw - 7px)
      padding-right: calc(7.2vw - 7px)

      div.row
        margin-top: 8.333vh
        height: 4.63vh
        min-height: 40px
        div.pins
          height: 100%
          /*display: flex*/
          /*justify-content: space-between !important*/
          //padding-left: 9.375vw
          //padding-right: 9.375vw
          //display: flex
          //position: relative
          //flex-direction: row
          //this will allow flex-end to move item to the right
          //justify-content: center

          input
            font-size: 1.46vw
            height: 100%
            /* width: 13.54vw */
            /* max-height: 50px */
            margin-left: 8px
            margin-right: 8px
            padding-left: 15px
            padding-right: 15px
            min-width: max-content

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



