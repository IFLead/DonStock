<template>
  <div id="app">
    <div role="banner">
      <header class="container-fluid">
        <section class="h-100">
          <div class="row h-100">
            <div class="col-6 col-lg-3 offset-lg-7 text-center">
              <input v-b-modal.modal_add centered class="transp-btn add-shop" type="button"
                     value="Добавить магазин">
            </div>
            <div class="col-6 col-lg-2 text-center">
              <input class="green-btn sign-in" type="button"
                     value="Войти">
            </div>
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
        <div role="article">
          <cards :shops="shops" :categories="categories"></cards>
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
          <a class="icon" href="#">
            <img src="./assets/social-facebook.png" alt="Facebook">
          </a>
        </div>
        <div class="pins">
          <div>
            <b-btn v-b-modal.modal_category centered>Druga knopka</b-btn>
            <b-btn v-b-modal.modal_information centered>Generalna knopka</b-btn>
          </div>
        </div>

      </footer>
    </div>
    <div class="modals">
      <!-- Modal Component -->
      <b-modal id="modal_add" hide-header hide-footer centered>

        <p class="tagline">Чтобы добавить магазин, необходимо зарегистрироваться в 2 клика</p>
        <div class="row justify-content-between">
          <a href="http://localhost:8000/auth/login/vk-oauth2">
            <img src="./assets/Add_shop_vk.png" alt="VK">
          </a>
          <a href="#">
            <img src="./assets/Add_shop_fb.png" alt="Facebook">
          </a>
          <a href="#">
            <img src="./assets/Add_shop_google.png" alt="Google">
          </a>
        </div>
      </b-modal>
      <b-modal id="modal_category" hide-header hide-footer centered>
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
      <b-modal id="modal_information" hide-header hide-footer centered>
        <div class="main-left">
          <div class="main-photo">
            <div class="icon">
              <img src="./assets/photo-camera.png" alt="Главное фото">
            </div>
          </div>
          <label>Главное фото</label>
          <div class="general-information">
            <div class="gen-lable"><p class="tagline">Основная информация</p></div>
            <input type="text" placeholder="Название магазина">
          </div>
        </div>
        <div class="border">
          <img src="./assets/border.png" alt="Граница">
        </div>
        <div class="main-right">
          <div class="product">
            <div class="production-photos">
              <div class="row-photos">
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
              </div>
              <div class="row-photos">
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
              </div>
              <div class="row-photos">
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
                <div class="photo">
                  <div class="icon">
                    <img src="./assets/photo-camera.png" alt="Фото продукции">
                  </div>
                </div>
              </div>
            </div>
            <label>Продукция</label>
            <div class="shop-links">
              <p class="tagline">Ссылка на Ваш магазин</p>
              <input type="text" placeholder="Ссылка">
              <input type="text" placeholder="Ссылка">
              <input type="text" placeholder="Ссылка">
            </div>
            <input class="green-btn" type="button" value="Дальше">
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
    mounted () {
      this.$http.get('http://127.0.0.1:8000/shops/?format=json').then((response) => {
        this.shops = response.data
      })
    },
    data () {
      return {
        categories: [
          {id: 1, name: 'Одежда'},
          {id: 2, name: 'Электроника', selected: false},
          {id: 3, name: 'Подарки', selected: false},
          {id: 4, name: 'Косметика', selected: false},
          {id: 5, name: 'Обувь', selected: false},
          {id: 6, name: 'Аксессуары', selected: false},
          {id: 7, name: 'Спорт', selected: false}
        ],
        shops: []

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
    font-size: 30px
    border-radius: 50px
    outline: none
    @include media-breakpoint-down(sm)
      font-size: 20px

    &:hover
      filter: brightness(80%)
      cursor: pointer

  input[type="button"].green-btn
    background-color: $green
    color: white

  input[type="button"].transp-btn
    background-color: transparent
    color: black
    @include media-breakpoint-down(md)
      color: white

  // tree
  %full-page
    height: 100vh

  div[role="banner"]
    @extend %full-page
    background: url(./assets/DonShops.svg) no-repeat right
    padding-top: 40px
    @include media-breakpoint-between(md, lg)
      background: url(./assets/DonShops-768.svg)
      background-size: cover
      background-position: 15% 50%
      padding-top: 20px
    @include media-breakpoint-down(md)
      padding-top: 0
    @include media-breakpoint-down(sm)
      background: url("./assets/DonShops-Bottom.svg") no-repeat left bottom, url("./assets/DonShops-Top.svg") no-repeat right top
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
      width: 100%
      height: 100%
      border: 0

    .icon
      margin-right: 1.111111% // 22 / 1980
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


    .icon:last-child
      margin-right: 0px


  div.modals

    #modal_add

      .modal-dialog
        max-width: 630px

        .modal-content
          border-radius: 25px
          max-height: 285px

          p.tagline
            padding-top: 24px
            padding-bottom: 45px
            padding-right: 33px
            padding-left: 33px
            /*font-size: 1.56vw*/
            /*line-height: 2.605vw*/
            font-size: 30px
            line-height: 45px
            color: black
            text-align: center
            margin-bottom: 0px
            @include media-breakpoint-down(sm)
              font-size: 15px
              line-height: 25px
              padding-right: 2px
              padding-left: 2px


          div.row
            padding-bottom: 30px
            padding-right: 27.8439%
            padding-left: 27.8439%
            @include media-breakpoint-down(xs)
              padding-right: 15.8439%
              padding-left: 15.8439%

            img
              width: 64px
              height: 64px
              border: 0
              padding-right: 0px
              @include media-breakpoint-down(xs)
                width: 44px
                height: 44px

    #modal_category

      .modal-dialog
        max-width: 908px
        margin: 0 auto
        @include media-breakpoint-down(md)
          max-width: 95%

        .modal-body
          padding: 0px

        .modal-content
          border-radius: 25px
          width: 100%
          max-height: 348px

          p.tagline
            font-size: 1.875em //30px
            //line-height: 40px
            color: black
            text-align: center
            padding-top: 5.629139% // 51px / 906 px
            padding-bottom: 6.622517% // 60px / 906px
            margin-bottom: 0px
            @include media-breakpoint-down(sm)
              padding-left: 5%
              padding-right: 5%
              font-size: 1.6em
            @include media-breakpoint-down(xs)
              font-size: 1em

          .form-group
            padding-left: 26.600442% //241px / 906px
            padding-right: 26.600442% //241px / 906px
            margin: 0px
            padding-bottom: 7.3951435% // 67px / 906px
            @include media-breakpoint-down(xs)
              padding-left: 15%
              padding-right: 15%

            select
              max-width: 426px
              border-radius: 0px
              background: transparent url("./assets/combobox_category.png") no-repeat right
              appearance: none

            .form-control
              width: 100%
              height: 39.5px
              padding: 0px
              font-size: 1.5em
              color: #C5C5C5
              border-bottom: 1px solid black
              border-top: none
              border-left: none
              border-right: none
              @include media-breakpoint-down(xs)
                font-size: 0.9em

              option
                font-size: 1em //24px
                min-height: 1.5em //32px
                border: 1px solid #95989A
                color: black

              option:checked
                background-color: #1DB954

              option:hover
                background-color: #1DB954

          .back-button
            float: left
            //width: 50px
            // height: 50px
            padding-left: 9.052% // 82px / 908px = 9.030837%
            padding-bottom: 3.754% // 34px / 908px = 3.744493%
            @include media-breakpoint-down(md)
              padding-top: 2%

            img
              width: 50px
              height: 50px
              @include media-breakpoint-down(xs)
                width: 30px
                height: 30px

          .green-btn
            width: 30.023% // 260px / 908px = 28.634361%
            height: 60px
            border-radius: 35px
            background-color: $green
            color: white
            float: right
            margin-bottom: 3.312% // 30px / 908px = 0.03303965
            margin-right: 3.422% // 31px / 908px = 0.03414097
            font-size: 1.875em // 30px
            @include media-breakpoint-down(sm)
              font-size: 1.5em
              width: 35%
            @include media-breakpoint-down(xs)
              width: 50%
              height: 30px
              font-size: 1em





    #modal_information

      .modal-dialog
        margin: 0 auto
        max-width: 1200px

      .modal-body
        padding: 0px

      .modal-content
        border-radius: 25px
        width: 100%
        max-height: 950px

      .main-left
        float: left

        .main-photo
          width: 414px
          height: 328px
          border-radius: 25px
          border: 1px solid #E2E2E2
          margin-top: 76px
          margin-left: 91px

          div.icon
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

          .gen-lable
            margin-left: 51px

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

          input[type="text"]::-webkit-input-placeholder  //todo: change this
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
          width: 414.06px

          .production-photos
            width: 414.06px
            height: 328px

            .row-photos
              margin-bottom: 29px
              height: 90.33px

              .photo
                float: left
                width: 118.02px
                height: 90.33px
                border-radius: 25px
                border: 1px solid #E2E2E2
                margin-right: 30px

                .icon
                  padding-left: 47.44px
                  padding-top: 30.2px

                  img
                    width: 23.13px
                    height: 23.13px

              .photo:last-child
                margin-right: 0px

        label
          color: #C5C5C5
          font-size: 24px
          line-height: 32px
          padding-top: 20px
          padding-left: 147px
          margin-bottom: 0px

        .shop-links
          width: 426px
          height: 289px
          margin-top: 52px
          margin-bottom: 52px

          .tagline
            /*justify-content: center !important*/
            font-size: 30px
            line-height: 40px
            color: black
            padding-bottom: 35px
            margin-bottom: 0px
            text-align: center

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
            margin-bottom: 46px
            background: transparent url("./assets/link.png") no-repeat right
            background-position: 385px

          input[type="text"]::-webkit-input-placeholder
            color: #C5C5C5

          input[type="text"]:last-child
            margin-bottom: 0px

        .green-btn
          width: 260px
          height: 60px
          border-radius: 35px
          background-color: $green
          color: white
          font-size: 30px
          margin-left: 166px
          margin-bottom: 52px

  /*todo: 1) выделение каждого элемента select при наведении курсора */
    /*2) граница каждого элемента select*/
    /*3) отступ текста 30px*/

  //div[role="banner"] > main.offset
    //margin-top: 73px
</style>
