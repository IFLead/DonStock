<template>
  <div id="app">
    <div role="banner">
      <header class="container-fluid">
        <section class="d-none d-md-block h-100">
          <div class="row h-100">
            <div class="col-2 offset-8"><input class="transp-btn" type="button" value="Добавить магазин"></div>
            <div class="col-2"><input class="green-btn sign-in" type="button" value="Войти"></div>
          </div>
        </section>
        <section class="d-md-none d-lg-none d-xl-none h-100">
          <div class="row h-100">
            <div class="col-6 text-center"><input class="transp-btn" type="button" value="Добавить магазин"></div>
            <div class="col-6 text-center"><input class="green-btn sign-in" type="button" value="Войти"></div>
          </div>
        </section>
      </header>
      <main class="container-fluid">
        <div class="row name">
          <div class="offset-1 col-md-auto col-10"><p>Don<br>Shops</p></div>
        </div>
        <div class="row tagline-1">
          <div class="offset-1 col-md-auto col-10"><p class="tagline">Место, где собраны проверенные <br> и надежные
            интернет-магазины.</p></div>
        </div>
        <div class="row tagline-2">
          <div class="offset-1 col-md-auto col-10"><p class="tagline">Только лучшее качество.</p></div>
        </div>
      </main>
    </div>
    <div role="main">
      <header class="categories">
        <categories></categories>
      </header>
      <main>
        <div class="pins">

        </div>
        <div role="article">
          <cards></cards>
        </div>
      </main>
      <footer class="container-fluid">
        <div class="contacts">
          <p class="row justify-content-center">Контактный телефон: +38095-079-33-33</p>
          <p class="row justify-content-center">Электронный адрес: test@gmail.com</p>
          <div class="row container-fluid justify-content-center">
            <a href="#">
              <img src="./assets/social-vk.png" alt="VK">
            </a>
            <a href="#">
              <img src="./assets/social-instagram.png" alt="Instagram">
            </a>
            <a href="#">
              <img src="./assets/social-facebook.png" alt="Facebook">
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import Categories from './components/Categories'
  import Cards from './components/Cards'

  export default {
    components: {
      Cards,
      Categories
    },
    name: 'app'
  }
</script>

<style lang="sass">
  $green: #1DB954

  @import url('https://fonts.googleapis.com/css?family=Roboto:500&subset=cyrillic')
  @import "~flickity/dist/flickity.css"
  @import '~bootstrap/scss/bootstrap'

  // global
  body
    margin: 0
    font-family: 'Roboto', Helvetica, Arial, sans-serif
    font-weight: 500

  #app
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  input[type="button"]
    border: 0
    height: 100%
    max-height: 60px
    min-height: 40px
    font-size: 1.6vw
    border-radius: 50px
    outline: none

    &:hover
      filter: brightness(80%)
      cursor: pointer

  input[type="button"].green-btn
    background-color: $green
    color: white

  input[type="button"].transp-btn
    background-color: transparent
    color: black
    @include media-breakpoint-down(sm)
      color: white

  // tree
  %full-page
    height: 100vh

  div[role="banner"]
    @extend %full-page
    background: url(./assets/DonShops.svg) no-repeat right
    padding-top: 40px
    @include media-breakpoint-between(md, lg)
      background: url(./assets/DonShops-768.svg) no-repeat right
      padding-top: 20px
    @include media-breakpoint-down(sm)
      background: url("./assets/DonShops-Bottom.svg") no-repeat left bottom, url("./assets/DonShops-Top.svg") no-repeat right top
      background-size: 45%, 55%
      padding-top: 0
    @include media-breakpoint-down(xs)
      background-size: 65%, 65%

    header
      height: 5.555555556%
      color: white
      @include media-breakpoint-down(sm)
        height: 65px
        background-color: rgba(0, 0, 0, 0.5)
        padding-top: 15px
        padding-bottom: 15px

        input[type="button"]
          max-height: 35px
          min-height: 0
          height: 100%
          font-size: 15px
          @include media-breakpoint-down(sm)
            max-width: 146px !important
            width: 146px !important

      input[type="button"].sign-in
        width: 63.03106%
        max-width: 181px

    main
      div.name
        margin-top: 7.037037vh
        @include media-breakpoint-down(sm)
          margin-top: 16.49vh

        p
          font-size: 12vh
          line-height: 116%
          color: black
          @include media-breakpoint-down(sm)
            font-size: 75px
            line-height: 77px
            width: min-content
            margin: 0 auto

      div.tagline-1
        margin-top: 10.20694vh
        @include media-breakpoint-down(sm)
          margin-top: 9.5952vh

      div.tagline-2
        margin-top: 3.148148vh
        @include media-breakpoint-down(sm)
          margin-top: 5.247376vh

      p.tagline
        font-size: 1.56vw
        line-height: 2.605vw
        color: black
        @include media-breakpoint-down(sm)
          font-size: 15px
          line-height: 25px
          width: max-content
          margin-left: auto
          margin-right: auto

  div[role="main"]

    header.categories
      height: 11.112vh
      background-color: black

  footer
    height: 38.889vh
    background-color: black
    padding-top: 11.6667vh

    .contacts

      p
        font-size: 2.4074074vh
        color: white

      div.row
        width: 258px
        img
          width: 64px
          height: 64px
          border: 0

  //div[role="banner"] > main.offset
    //margin-top: 73px
</style>
