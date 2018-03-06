<template>
  <div id="app">
    <div role="banner">
      <header class="container-fluid">
        <section class="h-100">
          <div class="row h-100">
            <div class="col-6 col-lg-3 offset-lg-7 text-center">
              <input v-b-modal.add-login centered class="transp-btn add-shop" type="button"
                     value="Добавить магазин">
            </div>
            <div class="col-6 col-lg-2 text-center">
              <input v-b-modal.signin-login class="green-btn sign-in" type="button"
                     value="Войти">
            </div>
          </div>
        </section>
      </header>
      <main class="container-fluid">
        <div class="row name">
          <div class="col-md-auto col-12"><p>Donline</p></div>
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
        <categories :categories="categories"></categories>
      </header>
      <main>
        <div role="article">
          <cards :shops="shops" :categories="categories"></cards>
        </div>
      </main>

    </div>
    <footer class="container-fluid main">
      <div class="contacts">
        <p class="row justify-content-center">Контактный телефон: +38095-079-33-33</p>
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
      <div class="pins">
        <div>
          <shop :newShop.sync="newShop" :categories="categories"></shop>
        </div>
      </div>
    </footer>
    <div class="modals">
      <login-modal :id="'add-login'">Чтобы добавить магазин, необходимо зарегистрироваться в 2 клика</login-modal>
      <login-modal :id="'signin-login'">Чтобы войти или зарегистрироваться, необходимо выбрать соц. сеть</login-modal>
    </div>
  </div>
</template>

<script>
  import Categories from './Categories'
  import Cards from './Cards'
  import LoginModal from './modals/LoginModal'
  import Shop from './Shop'

  export default {
    components: {
      Cards,
      Categories,
      LoginModal,
      Shop
    },
    name: 'main',
    mounted () {
      this.$http.get('/api/shops/?format=json').then((response) => {
        this.shops = response.data
      }, () => {
        this.shops = JSON.parse('[{"id":2,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image7.jpg"}],"likes":0,"dislikes":0,"name":"Pizza Store","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/STPeachy/","rating":10,"user":1,"categories":[3],"vote_status":0},{"id":3,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image10.jpg"}],"likes":0,"dislikes":0,"name":"Adidas","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/nanisday/","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[5,7],"vote_status":0},{"id":4,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image12.jpg"}],"likes":0,"dislikes":0,"name":"RR Cars","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"https://www.facebook.com/mmsuchar","rating":0,"user":1,"categories":[2,3],"vote_status":0},{"id":5,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image14.jpg"}],"likes":0,"dislikes":0,"name":"Thrasher Store","link_one":"https://vk.com/dadoem","link_two":"","link_three":"","rating":0,"user":1,"categories":[1],"vote_status":0},{"id":6,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image8.jpg"}],"likes":0,"dislikes":0,"name":"Watch Store","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[2,3,6],"vote_status":0},{"id":7,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image11.jpg"}],"likes":0,"dislikes":0,"name":"Nike","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/mmsuchar","rating":0,"user":1,"categories":[1,3,5,6,7],"vote_status":0},{"id":8,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image13.jpg"},{"url":"/media/shops-images/2018/01/13/Gucci-shop.jpg"}],"likes":0,"dislikes":0,"name":"Gucci","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[1,6],"vote_status":0},{"id":9,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image15.jpg"}],"likes":0,"dislikes":0,"name":"Red&Red","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"","rating":0,"user":1,"categories":[1],"vote_status":0}]')
      })
    },
    data () {
      return {
        categories: [
          {id: 1, name: 'Одежда'},
          {id: 2, name: 'Электроника'},
          {id: 3, name: 'Подарки'},
          {id: 4, name: 'Косметика'},
          {id: 5, name: 'Обувь'},
          {id: 6, name: 'Аксессуары'},
          {id: 7, name: 'Спорт'}
        ],
        shops: [],
        newShop: null
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
  body
    margin: 0
    font-family: 'Roboto', Helvetica, Arial, sans-serif
    font-weight: 500

  #app
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  input[type="button"]
    height: 100%
    @include media-breakpoint-down(sm)
      font-size: 20px

    &:hover
      filter: brightness(80%)
      cursor: pointer


  // tree
  %full-page
    height: 100vh

  div[role="banner"]
    @extend %full-page
    background: url(../assets/DonShops.svg) no-repeat right
    padding-top: 40px
    @include media-breakpoint-between(md, lg)
      background: url(../assets/DonShops-768.svg)
      background-size: cover
      background-position: 15% 50%
      padding-top: 20px
    @include media-breakpoint-down(md)
      padding-top: 0
    @include media-breakpoint-down(sm)
      background: url("../assets/DonShops-Bottom.svg") no-repeat left bottom, url("../assets/DonShops-Top.svg") no-repeat right top
      background-size: 45%, 55%
    @include media-breakpoint-down(xs)
      background-size: 65%, 65%

    header
      height: 5.55555556%
      color: white
      @include media-breakpoint-down(md)
        height: 90px
        background-color: rgba(0, 0, 0, 0.5)
        padding-top: 15px
        padding-bottom: 15px
      @include media-breakpoint-down(sm)
        height: 65px

        input[type="button"]
          max-height: 35px
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
        width: 63.03106%
        min-width: 140px
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
        font-size: 2.78vh
        //1.56vw
        line-height: 4.629633vh
        //2.605vw
        color: black
        @include media-breakpoint-down(lg)
          font-size: 2.56vh

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

  /*todo: 1) выделение каждого элемента select при наведении курсора */
    /*2) граница каждого элемента select*/
    /*3) отступ текста 30px*/
</style>
