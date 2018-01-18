<template>
  <div id="app">
    <div role="banner">
      <header class="container-fluid">
        <section class="d-none d-md-block h-100">
          <div class="row h-100">
            <div class="col-2 offset-8"><input v-b-modal.modal_add centered class="transp-btn" type="button" value="Добавить магазин"></div>
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
        <categories :categories="categories"></categories>
      </header>
      <main>
        <!--todo: need to remove div.pins-->
        <div class="pins">
          <div>
            <b-btn v-b-modal.modal_category centered>Druga knopka</b-btn>
            <b-btn v-b-modal.modal_information centered>Generalna knopka</b-btn>
          </div>
        </div>
        <div role="article">
          <cards></cards>
        </div>
      </main>
      <footer class="container-fluid main">
        <div class="contacts">
          <p class="row justify-content-center">Контактный телефон: +38095-079-33-33</p>
          <p class="row justify-content-center">Электронный адрес: virvira@gmail.com</p>

        </div>
        <div class="row justify-content-center">
          <a class="icon" href="#">
            <img src="./assets/social-vk.png" alt="VK">
          </a>
          <a class="icon" href="#">
            <img src="./assets/social-instagram.png" alt="Instagram">
          </a>
          <a href="#">
            <img src="./assets/social-facebook.png" alt="Facebook">
          </a>
        </div>

      </footer>
    </div>
    <div class="modals">
      <!-- Modal Component -->
      <b-modal id="modal_add" hide-header hide-footer centered>
        <p class="tagline">Чтобы добавить магазин, необходимо <br> зарегистрироваться в 2 клика</p>
         <div class="row justify-content-center">
           <a class="icon" href="#">
             <img src="./assets/Add_shop_vk.png" alt="VK">
           </a>
           <a class="icon" href="#">
             <img src="./assets/Add_shop_fb.png" alt="Facebook">
           </a>
           <a href="#">
             <img src="./assets/Add_shop_google.png" alt="Google">
           </a>
         </div>
       </b-modal>

      <b-modal id="modal_category" size="lg" hide-header hide-footer centered>
        <p class="tagline">Выберите категории Вашего интернет-магазина</p>
        <div class="form-group">
          <select class="form-control" id="change_category">
            <option selected disabled hidden><p>Выберите категории</p></option>
            <option><p>Подарки</p></option>
            <option><p>Спорт</p></option>
            <option><p>Обувь</p></option>
            <option><p>Косметика</p></option>
            <option><p>Электроника</p></option>
            <option><p>Аксессуары</p></option>
            <option><p>Одежда</p></option>
          </select>
        </div>
        <div class="back-button">
          <a href="#">
            <img src="./assets/back_button_modal.png" alt="Назад">
          </a>
        </div>
        <input class="green-btn" type="button" value="Опубликовать">
      </b-modal>

      <b-modal id="modal_information" size="lg" hide-header hide-footer centered>
        <div class="main-left">
          <div class="main-photo">
              <div class="icon">
                <img src="./assets/photo-camera.png"  alt="Главное фото">
              </div>
          </div>
          <label>Главное фото</label>
          <div class="general-information">
            <div class="proverka"><p class="tagline">Основная информация</p></div>
            <input type="text" placeholder="Название магазина">
          </div>
        </div>
        <div class="border">
          <img src="./assets/border.png"  alt="Граница">
        </div>
        <div class="main-right">
          <div class="product">
            <div class="production-photos">
              <div class="photo">
                <div class="icon">
                  <img src="./assets/photo-camera.png"  alt="Главное фото">
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
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
    name: 'app',
    data () {
      return {
        categories: [
          {name: 'Одежда', selected: false},
          {name: 'Электроника', selected: false},
          {name: 'Подарки', selected: false},
          {name: 'Косметика', selected: false},
          {name: 'Обувь', selected: false},
          {name: 'Аксессуары', selected: false},
          {name: 'Спорт', selected: false}
        ]
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

    img
      width: 64px
      height: 64px
      border: 0

    .icon
      margin-right: 22px

  div.modals

    #modal_add

      .modal-content
        border-radius: 25px
        width: 630px
        height: 285px


      .modal-body
        padding: 0px
        width: 630px
        height: 285px

      p.tagline
        justify-content: center !important
        padding-top: 45px
        padding-bottom: 45px
        padding-right: 48px
        padding-left: 48px
        /*font-size: 1.56vw*/
        /*line-height: 2.605vw*/
        font-size: 30px
        line-height: 45px
        color: black
        text-align: center
        margin-bottom: 0px


      div.row
        justify-content: center !important
        padding-bottom: 41px
        padding-right: 180px
        padding-left: 180px

      img
        width: 64px
        height: 64px
        border: 0
        padding-right: 0px

      .icon
        padding-right: 39px

    #modal_category

      .modal-lg
        max-width: 908px

      .modal-body
        padding: 0px

      .modal-content
        border-radius: 25px
        width: 908px
        height: 348px

      p.tagline
        /*justify-content: center !important*/
        /*font-size: 1.56vw*/
        /*line-height: 2.605vw*/
        font-size: 30px
        line-height: 40px
        color: black
        text-align: center
        padding-top: 51px
        /*padding-right: 122px*/
        /*padding-left: 122px*/
        padding-bottom: 60px
        margin-bottom: 0px

      .form-group
        padding-left: 241px
        padding-right: 241px
        margin: 0px
        padding-bottom: 67px

        select
          width: 426px
          border-radius: 0px
          background: transparent url("./assets/combobox_category.png") no-repeat right
          -webkit-appearance: none
          -moz-appearance: none
          appearance: none

        .form-control
          width: 426px
          height: 39.5px
          padding: 0px
          font-size: 24px
          color: #C5C5C5
          border-bottom: 1px solid black
          border-top: none
          border-left: none
          border-right: none

          option
            font-size: 24px
            min-height: 32px
            border: 1px solid #95989A
            color: black

          option:checked
            background-color: #1DB954

          option:hover
            background-color: #1DB954

      .back-button
        float: left
        width: 50px
        height: 50px
        padding-left: 82px
        padding-bottom: 34px

      .green-btn
        width: 260px
        height: 60px
        border-radius: 35px
        background-color: $green
        color: white
        float: right
        margin-bottom: 30px
        margin-right: 31px
        font-size: 30px

    #modal_information

      .modal-lg
        max-width: 1200px

      .modal-body
        padding: 0px

      .modal-content
        border-radius: 25px
        width: 1200px
        height: 950px

      .main-left
        float: left

        .main-photo
          width: 414px
          height: 328px
          border-radius: 25px
          border: 1px solid #E2E2E2
          margin-top: 76px
          margin-left: 91px

          .icon
            width: 84px
            height: 84px
            padding-left: 165px
            padding-top: 122px

        label
          color: #C5C5C5
          font-size: 24px
          line-height: 32px
          padding-top: 20px
          padding-left: 222px
          margin-bottom: 0px

        .general-information
          width: 426px
          height: 116.5px
          margin-top: 52px
          margin-left: 91px

          .proverka
            margin-left: 45px

            .tagline
            /*justify-content: center !important*/
            font-size: 30px
            line-height: 40px
            color: black
            padding-bottom: 35px
            margin-bottom: 0px

            p
              margin-bottom: 0px

          input[type="text"]
            width: 426px
            border-top: none
            border-right: none
            border-left: none
            border-bottom: 1px solid black
            font-size: 24px
            line-height: 32px
            padding-bottom: 10px
            outline: none

          input[type="text"]::-webkit-input-placeholder
            color: #C5C5C5

      .border
        float: left
        margin-left: 81px
        margin-right: 95px
        margin-top: 18px

      .main-right
        float: left

        .product
          margin-top: 76px
          width: 410px

          .production-photos
            width: 200px
            height: 328px
            border-radius: 25px
            border: 1px solid #E2E2E2
            margin-top: 76px
            margin-left: 91px


  /*todo: 1) выделение каждого элемента select при наведении курсора */
    /*2) граница каждого элемента select*/
    /*3) отступ текста 30px*/

  //div[role="banner"] > main.offset
    //margin-top: 73px
</style>
