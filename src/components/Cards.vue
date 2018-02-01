<template>
  <div class="cards w-100">
    <div class="items card-deck justify-content-center">
      <div v-for="shop in shops" v-show="isFiltered(shop.categories)"
           class="item-card card gold">
        <div class="top">
          <div class="voting">
            <button class="minus">
              <img height="44" width="44" src="../assets/minus-vote.svg" alt="plus">
            </button>
            <p class="text-center">Голосовать</p>
            <button class="plus">
              <img height="44" width="44" src="../assets/plus-vote.svg" alt="plus">
            </button>
          </div>
          <div class="rating">
            <p>+13</p>
          </div>
        </div>
        <div class="img">
          <flickity ref="flickity" :options="flickityOptions">
            <img class="carousel-cell" v-for="photo in shop.photos" v-bind:data-flickity-lazyload="photo.url"
                 alt="Main Image">
            <!--<img class="blurred" v-bind:src="card.path" alt="Blurred image">-->
          </flickity>
        </div>
        <div class="body">
          <div class="title">
            <p class="title">{{shop.name}}</p>
          </div>
          <div class="links">
            <a target="_blank" :href="shop.link_one">
              <img :src="chooseImage(shop.link_one)" alt="">
            </a>
            <a target="_blank" v-if="shop.link_two" :href="shop.link_two">
              <img :src="chooseImage(shop.link_two)" alt="">
            </a>
            <a target="_blank" v-if="shop.link_three" :href="shop.link_three">
              <img :src="chooseImage(shop.link_three)" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center new">
      <input type="button" value="Показать еще" class="green-btn" v-on:click="loadShops()">
    </div>
  </div>
</template>

<script>
  import Flickity from 'vue-flickity'

  export default {
    name: 'cards',
    components: {
      Flickity
    },
    props: ['shops', 'categories'],
    mounted () {

    },
    data () {
      return {
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: false,
          setGallerySize: false,
          lazyLoad: true
        }
      }
    },
    methods: {
      loadShops () {
        this.$http.get('http://127.0.0.1:8000/shops/?format=json').then(response => {
          this.shops = this.shops.concat(response.data)
        }, response => {
          this.shops = null
        })
      },
      isFiltered (categories) {
        let selectedCategories = this.selectedCategories.map(value => value.id)
        return !selectedCategories.length || categories.some(value => selectedCategories.includes(value))
      },
      chooseImage (link) {
        const fbRegex = /^(http(s)?:\/\/)?(www\.)?(facebook|fb)\.com\/[A-z0-9_\-.]*\/?/
        const instaRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/
        const vkRegex = /(https?:\/\/)?(www\.)?(vk.com\/)(id\d|[a-zA-z][a-zA-Z0-9_.]{2,})/

        if (fbRegex.exec(link) !== null) {
          return '../../static/img/links/facebook-link.png'
        } else if (instaRegex.exec(link) !== null) {
          return '../../static/img/links/instagram-link.png'
        } else if (vkRegex.exec(link) !== null) {
          return '../../static/img/links/vk-link.png'
        } else {
          return '../../static/img/links/website-link.png'
        }
      }
    },
    computed: {
      selectedCategories () {
        return this.categories.filter(value => value.selected === true)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  /*.cards:hover > .voting*/
    /*margin-top: 0*/
    /*-webkit-transition: margin 1s*/
    /*-moz-transition: margin 1s*/
    /*transition: margin 1s*/

  @import '~bootstrap/scss/bootstrap'
  @import '../style/variables'

  div.cards
    //padding: 40px

    div.items
      width: 100%
      margin-bottom: 8.333vh
      // 90px
      padding-left: calc(7.2vw - 7px)
      padding-right: calc(7.2vw - 7px)
      margin-right: 0
      margin-left: 0
      @include media-breakpoint-only(xs)
        padding-left: calc(7.2vw - 7px)
        padding-right: calc(7.2vw - 7px)

      %card
        /*width: 20.8333vw*/
        width: 100%
        max-width: 396px
        min-width: 315px
        height: 650px
        max-height: 80vh
        // 650px
        min-height: 402.14643px
        margin-top: 8.24vh
        margin-bottom: 4.26vh
        margin-right: 7px
        margin-left: 7px
        border-radius: 27px
        position: relative
        overflow: hidden
        box-shadow: 0 27px 100px -64px rgba(0, 0, 0, 0.5)

        @include media-breakpoint-only(xs)
          max-height: 90vh
          height: 643px
          min-width: 260px

        div.img
          height: 80%
          //515
          width: 100%

          .flickity-enabled
            height: 100%

            .carousel-cell
              height: 100%
              width: 100%
              object-fit: cover

        /*img*/
          /*border-radius: 25px 25px 0 0*/
          /*width: 100%*/
          /*height: 100%*/
          /*object-fit: cover*/

        /*img.blurred*/
          /*position: absolute*/
          /*top: 0*/
          /*clip: rect(0, auto, 75px, 0)*/
          /*filter: blur(15px) opacity(0.3)*/
          /*transform: translateZ(0)*/

        div.top
          position: absolute
          top: 0
          width: 100%
          z-index: 1

          div.rating
            display: none
            width: 92px
            height: 75px
            top: 0
            right: 0
            position: absolute
            border-radius: 0 25px 0 25px
            background: rgba(100%, 0%, 0%, 0.7)
            z-index: 1

            p
              font-size: 23px
              text-align: center
              z-index: 2

          div.voting
            width: 100%
            //border-radius: 25px 25px 0 0
            background: rgba(255, 255, 255, 0.8)
            height: 75px
            padding: 15px 60px
            display: flex
            text-align: center
            z-index: 1
            margin-top: -75px

            %btn-vote
              @extend %btn-img-inside
              border: 0
              outline: none
              background-color: transparent
              z-index: 2

              img
                opacity: 0.5

            p
              width: 100%
              padding-top: 5px
              font-size: 23px
              vertical-align: middle
              z-index: 2

            .plus
              margin-left: auto
              @extend %btn-vote

            .minus
              margin-left: 0
              @extend %btn-vote

        div.body
          height: 20%
          div.title
            height: 40%
            padding-top: 1.388vh
            p.title
              text-align: center
              font-size: 27px

          div.links
            height: 60%
            padding-left: 25.25%
            padding-right: 25.25%
            padding-bottom: 1.85vh
            display: flex
            justify-content: space-evenly
            a
              width: min-content
              height: min-content
              align-self: flex-end

              img
                opacity: 0.25
                max-width: 45px
                max-height: 45px
                min-width: 35px
                min-height: 35px
                height: 2.84vw
                width: 2.84vw
                border: 0
                filter: grayscale(100%)

                &:hover
                  filter: grayscale(0%)
                  opacity: 1

      div.item-card
        @extend %card
        border: 2px solid transparent

      div.item-card.gold
        border: 2px solid #FFD700
        box-shadow: 0 100px 280px -90px #ffd70066

    div.new
      width: 100%
      height: 14.35185vh

      input[type="button"]
        width: 260px
        //width: 130px
        //width: 13.541667vw
        height: 60px //5.5555vh
        @include media-breakpoint-down(sm)
          width: 200px


</style>


