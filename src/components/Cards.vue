<template>
  <div class="cards w-100">
    <div class="items card-deck justify-content-center">
      <div v-for="card in cards" class="item-card card gold">
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
            <img class="carousel-cell" v-for="img in card.imgs" v-bind:data-flickity-lazyload="img" alt="Main Image">
            <!--<img class="blurred" v-bind:src="card.path" alt="Blurred image">-->
          </flickity>
        </div>
        <div class="body">
          <p class="title">{{card.name}}</p>
          <div class="links">
            <a href="#">
              <img src="../assets/website-link.png" alt="HTML tutorial">
            </a>
            <a href="#">
              <img src="../assets/vk-link.png" alt="HTML tutorial">
            </a>
            <a href="#">
              <img src="../assets/instagram-link.png" alt="HTML tutorial">
            </a>
          </div>
        </div>
      </div>
      <div v-for="card in cards" class="item-card card">
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
            <img class="carousel-cell" v-for="img in card.imgs" v-bind:src="img" alt="Main Image">
            <!--<img class="blurred" v-bind:src="card.path" alt="Blurred image">-->
          </flickity>
        </div>
        <div class="body">
          <p class="title">{{card.name}}</p>
          <div class="links">
            <a href="#">
              <img src="../assets/website-link.png" alt="HTML tutorial">
            </a>
            <a href="#">
              <img src="../assets/vk-link.png" alt="HTML tutorial">
            </a>
            <a href="#">
              <img src="../assets/instagram-link.png" alt="HTML tutorial">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center new ">
      <input type="button" value="Показать еще" class=" green-btn">
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
    mounted () {

    },
    data () {
      return {
        cards: [
          {
            imgs: ['../../static/img/test/Gucci.jpg', '../../static/img/test/Adidas.jpg', '../../static/img/test/Nike.jpg', '../../static/img/test/Pizza Store.jpg', '../../static/img/test/Red&Red.jpg'],
            name: 'Gucci'
          },
          {imgs: ['../../static/img/test/Adidas.jpg'], name: 'Adidas'},
          {imgs: ['../../static/img/test/Nike.jpg'], name: 'Nike'},
          {imgs: ['../../static/img/test/Pizza Store.jpg'], name: 'Pizza Store'},
          {imgs: ['../../static/img/test/Red&Red.jpg'], name: 'Red&Red'},
          {imgs: ['../../static/img/test/RR cars.jpg'], name: 'RR cars'},
          {imgs: ['../../static/img/test/Trasher Store.jpg'], name: 'Trasher Store'},
          {imgs: ['../../static/img/test/Watch Store.jpg'], name: 'Watch Store'}
        ],
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: true,
          pageDots: false,
          wrapAround: false,
          setGallerySize: false,
          lazyLoad: true

          // any options from Flickity can be used
        }
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

  div.cards
    //padding: 40px

    div.items
      width: 100%
      margin-bottom: 90px
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
        min-width: 340px
        height: 650px
        max-height: 650px
        min-height: 402.14643px
        margin-top: 89px
        margin-bottom: 46px
        margin-right: 7px
        margin-left: 7px
        border-radius: 27px
        position: relative
        overflow: hidden
        box-shadow: 0 27px 100px -64px rgba(0, 0, 0, 0.5)

        @include media-breakpoint-only(xs)
          height: 402.14643px
          min-width: 260px

        div.img
          height: calc(79.230769% + 4px)
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

            %btn
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
              @extend %btn

            .minus
              margin-left: 0
              @extend %btn

        div.body
          p.title
            text-align: center
            font-size: 27px
            margin-top: 15px
          div.links
            padding-left: 110px
            padding-right: 110px
            display: flex
            justify-content: space-evenly
            a
              img
                opacity: 0.25
                width: 45px
                height: 45px
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
        max-width: 260px
        width: 13.541667vw
        height: 5.5555vh


</style>


