<template>
  <div class="container-fluid items">
    <div class="row no-gutters cards">
      <!--col-xs-12 offset-sm-2 col-sm-8 offset-md-0 col-md-6 col-xl-3-->
      <div class="col" v-for="(shop, index) in shops" :key="shop.id" v-show="isFiltered(shop.categories)">
        <div v-bind:class="{gold:index<4}" class="card">
          <div class="top" v-show="overlay_index !== shop.id">
            <button @click="overlay_index = shop.id">
              <img src="../assets/info.png" alt="Назад">
            </button>
          </div>
          <div class="wrapper">
            <flickity ref="flickity" :options="flickityOptions">
              <img class="card-img-top img-fluid carousel-cell" v-for="photo in shop.photos"
                   v-bind:data-flickity-lazyload="photo.url"
                   alt="Card image cap">
            </flickity>
            <div class="card-img-overlay" v-show="overlay_index === shop.id">
              <div class="top-overlay">
                <button v-on:click="overlay_index = -1">
                  ×
                </button>
              </div>
              <p class="card-caption-text">Описание</p>
              <p class="card-text"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </p>
              <div class="card-rating-wrapper">
                <p class="card-caption-rating">Рейтинг <span class="card-rating"
                                                             v-bind:class="{red:shop.rating<0, green:shop.rating>0}">{{shop.rating}}</span>
                </p>
                <div class="voting" v-if="isOnline && isAuthenticated">
                  <button class="plus" @click="like(shop)">
                    <img height="25" width="25"
                         :src="require(shop.vote_status === 1? '../assets/like-active.png':'../assets/like-inactive.png')"
                         alt="plus">
                  </button>
                  <button class="minus" @click="dislike(shop)">
                    <img height="25" width="25"
                         :src="require(shop.vote_status === -1? '../assets/dislike-active.png':'../assets/dislike-inactive.png')"
                         alt="minus">
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4 class="card-title text-center">{{shop.name}}</h4>
          <div class="card-body">
            <a target="_blank" rel="noopener" :href="shop.link_one">
              <img :src="chooseImage(shop.link_one)" alt="">
            </a>
            <a target="_blank" rel="noopener" v-if="shop.link_two" :href="shop.link_two">
              <img :src="chooseImage(shop.link_two)" alt="">
            </a>
            <a target="_blank" rel="noopener" v-if="shop.link_three" :href="shop.link_three">
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
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'cards',
    components: {
      Flickity
    },
    computed: {
      ...mapGetters({
        shops: 'sortedShops',
        categories: 'allCategories'
      }),
      ...mapGetters([
        'selectedCategories',
        'isOnline',
        'isAuthenticated'
      ])
    },
    data () {
      return {
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: true,
          pageDots: false,
          setGallerySize: false,
          lazyLoad: 1,
          wrapAround: true
        },
        overlay_index: -1
      }
    },
    methods: {
      ...mapActions([
        'like',
        'dislike'
      ]),
      isFiltered (categories) {
        const selectedCategories = this.selectedCategories.map(value => value.id)
        return !selectedCategories.length || categories.some(value => selectedCategories.includes(value))
      },
      chooseImage (link) {
        const fbRegex = /^(http(s)?:\/\/)?(www\.)?(facebook|fb)\.com\/[A-z0-9_\-.]*\/?/
        const instaRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/
        const vkRegex = /(https?:\/\/)?(www\.)?(vk.com\/)(id\d|[a-zA-z][a-zA-Z0-9_.]{2,})/

        if (fbRegex.exec(link) !== null) {
          return require('../assets/links/facebook-link.png')
        } else if (instaRegex.exec(link) !== null) {
          return require('../assets/links/instagram-link.png')
        } else if (vkRegex.exec(link) !== null) {
          return require('../assets/links/vk-link.png')
        }
        return require('../assets/links/website-link.png')
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

  @import '~bootstrap/scss/bootstrap'
  @import '../style/variables'

  div.items
    padding-left: calc(6.845vw - 7px)
    padding-right: calc(6.845vw - 7px)

    div.cards
      .gold
        border: 2px solid #FFD700 !important
        box-shadow: 0 100px 280px -90px #ffd70066 !important

      .card
        border-radius: 27px
        margin: 8.24vh 7px 4.26vh
        border: 2px solid transparent
        overflow: hidden
        box-shadow: 0 27px 100px -64px rgba(0, 0, 0, 0.5)
        max-height: 90vh
        max-width: 380px
        min-width: 350px
        /*margin-left: auto*/
        /*margin-right: auto*/
        position: relative
        left: 50%
        transform: translateX(-50%)
        @include media-breakpoint-down(lg)
          max-height: 95vmax
        @include media-breakpoint-down(xs)
          min-width: 270px
          max-width: 320px
        .top
          position: absolute
          top: 0
          right: 0
          height: 60px
          width: 60px
          background-color: rgba(0, 0, 0, 0.7)
          border-radius: 0 25px 0 25px
          z-index: 1

          button
            @extend %btn-img-inside
            position: absolute
            right: 0
            z-index: 1
            padding-top: 14px
            padding-right: 14px

            img
              height: 30px
              width: 30px

        .wrapper
          position: relative
          overflow: hidden

          .card-img-overlay
            background-color: rgba(0, 0, 0, 0.7)
            color: white
            padding-left: 38px
            padding-right: 58px

            @include media-breakpoint-down(xs)
              padding-left: 25px
              padding-right: 25px

            .top-overlay
              position: absolute
              top: 0
              right: 0

              button
                @extend %btn-img-inside
                padding-right: 20px
                padding-top: 4px
                color: white
                font-size: 35px

            p.card-caption-text
              font-size: 20px
              color: #D4D3CA
              margin-bottom: 33px
              @include media-breakpoint-down(xs)
                margin-bottom: 18px

            p.card-text
              font-size: 20px
              line-height: 24px

              @include media-breakpoint-down(xs)
                font-size: 4.6875vw

            div.card-rating-wrapper
              position: absolute
              bottom: 20px
              display: flex
              justify-content: space-between
              width: 81%
              @include media-breakpoint-down(xs)
                bottom: 0px

              .card-caption-rating
                font-size: 20px
                color: #D4D3CA

                .card-rating
                  color: white
                  margin-left: 15px

              .voting

                .red
                  color: red

                .green
                  color: green

                .plus
                  margin-left: auto
                  margin-right: 10px
                  @extend %btn-img-inside

                .minus
                  margin-left: 0
                  @extend %btn-img-inside

          .flickity-enabled
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%

            .carousel-cell
              left: 0
              width: auto
              max-width: none
              height: 100%
              min-width: 100%

          &:after
            content: ''
            display: block
            padding-top: 130%

        .card-title
          margin-top: 7px
          font-size: 27px

        div.card-body
          /*height: 60%*/
          padding-left: 27.25%
          padding-right: 27.25%
          /*padding-bottom: 1.85vh*/
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
    div.new
      margin-top: 50px
      padding-bottom: 50px

      input
        height: 50px
        font-size: 1.5vmax
        padding:
          left: 38px
          right: 38px

</style>

