<template>
  <div id="app">
    <div role="banner">
      <smart-header :menu-exist="false"></smart-header>
      <main class="container-fluid">
        <div class="row logo justify-content-center justify-content-md-start">
          <!--<div class="col-md-auto col-12"><p>Donline</p></div>-->
          <div class="offset-lg-1 col-10 col-md-6 col-lg-5 col-xl-3"><img src="../assets/donline-logo.svg" alt="logo"></div>
        </div>
        <div class="row tagline-1">
          <div class="offset-1 col-10 col-lg-7 col-xl-4"><p class="tagline">Место, где собраны проверенные <br> и надежные
            интернет-магазины.</p></div>
        </div>
        <div class="row tagline-2">
          <div class="offset-1 col-10 col-lg-6 col-xl-3"><p class="tagline">Только лучшее качество.</p></div>
        </div>
      </main>
    </div>
    <div role="main">
      <header class="categories">
        <categories></categories>
      </header>
      <main>
        <div role="article">
          <cards></cards>
        </div>
      </main>

    </div>
    <footer class="container-fluid main">
      <div class="contacts">
        <p class="row justify-content-center">Контактный телефон: 071-334-32-77</p>
        <p class="row justify-content-center">Электронный адрес: virvira@gmail.com</p>

      </div>
      <div class="row justify-content-center">
        <a class="icon" href="#">
          <img src="../assets/social-vk.png" alt="VK">
        </a>
        <a class="icon" href="#">
          <img src="../assets/social-instagram.png" alt="Instagram">
        </a>
        <a class="icon" href="#">
          <img src="../assets/social-facebook.png" alt="Facebook">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
  import Categories from './Categories'
  import Cards from './Cards'
  import SmartHeader from './SmartHeader'

  export default {
    components: {
      Cards,
      Categories,
      SmartHeader
    },
    name: 'home',
    created () {
      if (this.$store.getters.allShops.length === 0) {
        this.$store.dispatch('loadShops')
      }
    }
  }
</script>

<style lang="sass">
  $green: #1DB954

  @import url('https://fonts.googleapis.com/css?family=Roboto:500&subset=cyrillic')
  @import "~flickity/dist/flickity.css"
  @import '~bootstrap/scss/bootstrap'

  // global

  input[type="button"]
    height: 100%
    @include media-breakpoint-down(sm)
      font-size: 20px

    &:hover
      filter: brightness(80%)
      cursor: pointer

  // tree
  div[role="banner"]
    height: 100vh
    /*background: url(../assets/DonShops.svg) no-repeat right*/
    /*padding-top: 40px*/
    background: url(../assets/1.svg)
      size: cover
    @include media-breakpoint-between(md, lg)
      background: url(../assets/DonShops-768.svg)
        size: cover
        position: 10% 50%
      padding-top: 20px
    @include media-breakpoint-only(lg)
      background-position: 25% 50%
    @include media-breakpoint-down(md)
      padding-top: 0

    @include media-breakpoint-down(sm)
      background: url("../assets/DonShops-Bottom.svg") no-repeat left bottom, url("../assets/DonShops-Top.svg") no-repeat right top
      background-size: 45%, 55%
    @include media-breakpoint-down(xs)
      background-size: 25%, 25%

    header
      height: 14vh !important
      color: white
      @include media-breakpoint-down(md)
        height: 90px !important
        background-color: rgba(0, 0, 0, 0.5)
        padding-top: 15px
        padding-bottom: 15px
      @include media-breakpoint-down(sm)
        height: 65px !important

        input[type="button"]
          max-height: 50px
          min-height: 0
          height: 100%
          font-size: 15px
          @include media-breakpoint-down(sm)
            max-width: 146px !important
            width: 100% !important

      input[type="button"]
        width: 100%
        font-size: 2.77vmin
        @include media-breakpoint-down(xs)
          font-size: 15px

      input[type="button"].add-shop
        width: auto

      input[type="button"].sign-in
        width: 63%
        min-width: 140px
        max-width: 181px

    main
      position: absolute
      top: 50%
      transform: translateY(-50%)
      div.logo
        @include media-breakpoint-down(md)
          margin:
            top: 100px

          img
            height: 100px
            width: 100px

        @include media-breakpoint-only(lg)
          img
            height: 100px
            margin-left: -5vh
        //margin-top: 7vh
        @include media-breakpoint-down(sm)
          //margin-top: 16.5vh
        img
          width: 100%
        /*p
          font-size: 12vh
          line-height: 116%
          color: black
          @include media-breakpoint-down(sm)
            font-size: 75px
            line-height: 77px
            width: min-content
            margin: 0 auto*/

      div.tagline-1
        margin-top: 10vh
        @include media-breakpoint-down(md)
          margin-top: 8vh
        @include media-breakpoint-down(sm)
          margin-top: 9vh

      div.tagline-2
        margin-top: 3.148148vh
        @include media-breakpoint-down(sm)
          margin-top: 5.247376vh

      p.tagline
        /*font-size: 2.78vh*/
        font-size: 1.5vmax
        //1.56vw
        line-height: 4.629633vh
        //2.605vw
        color: black
        @include media-breakpoint-down(lg)
          //font-size: 2.56vh
          font-size: 2.2vmax

        @include media-breakpoint-down(sm)
          font-size: 15px
          line-height: 25px
          width: max-content
          margin-left: auto
          margin-right: auto

  footer.main
    height: 38.889vh
    background-color: black
    padding-top: 11.6667vh

    .contacts
      margin-bottom: 40px

      p
        font-size: 2.4074074vh
        color: white
        margin-bottom: 10px
        @include media-breakpoint-down(md)
          font-size: 1.5vh

      div.row
        width: 258px
        justify-content: center !important

    .icon
      margin-right: 1.111111%
      width: 3.2%
      height: 100%
      @media screen and (max-width: 1200px)
        width: 4%
        height: 100%
      @media screen and (max-width: 992px)
        width: 8%
        height: 100%
        margin-right: 3%
      @media screen and (max-width: 576px)
        width: 10%
        height: 100%

      img
        width: 100%
        height: 100%
        border: 0

    .icon:last-child
      margin-right: 0

</style>

