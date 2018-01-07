<template>
  <div class="categories h-100">
    <flickity ref="flickity" :options="flickityOptions">
      <input class="carousel-cell" type="button" v-for="category in categories" v-bind:value="category">

    </flickity>

  </div>
</template>

<script>
  import Flickity from 'vue-flickity'

  export default {
    name: 'categories',
    components: {
      Flickity
    },
    mounted () {

    },
    data () {
      return {
        categories: ['Одежда', 'Электроника', 'Подарки', 'Косметика', 'Обувь', 'Аксессуары', 'Спорт'],
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


  div.categories
    /*display: flex*/
    /*align-items: center*/
    /*justify-content: space-evenly*/

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

    input[type="button"]
      border: 0
      outline: none
      color: white
      text-align: center
      background-color: transparent
      font-size: 2.2222vh

      &:hover
        color: #1DB954
        filter: brightness(100%)

</style>


