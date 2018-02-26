<template>
  <div class="hello container-fluid">
    <div class="col-xs-2 d-block d-sm-none">
      <div class="menu"  v-on:click="for_mobmenu()">
        <img src="../assets/menu_icon.png" alt="Меню">
      </div>
    </div>
    <header>
      <div class="row">
        <div class="col-sm-2 col-xs-12 text-center">
          <div class="logo">
            <div class="don-logo">
              <img src="../assets/Don.png" alt="Логотип">
            </div>
            <div class="shops-logo">
              <img src="../assets/Shops.png" alt="Логотип">
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-5 offset-xl-5 offset-lg-4 offset-md-3 offset-sm-2 text-center">
          <input class="green-btn add-shop" type="button" value="Добавить магазин">
        </div>
        <div class="col-sm-2 d-none d-sm-block">
          <label class="label-name">Богдан</label>
        </div>
      </div>
      <hr>
    </header>
    <div class="row">
      <div class="col-3-xl col-5-md d-none d-sm-block" >
        <aside>
          <a href="/">
            <div class="profile">
              <div class="profile-icon">
                <img src="../assets/user.png" alt="Профиль">
              </div>
              <div class="profile-label">
                <label>Профиль</label>
              </div>
            </div>
          </a>
          <a href="/">
            <div class="my-shops">
              <div class="shops-icon">
                <img src="../assets/internet-store.png" alt="Мои магазины">
              </div>
              <div class="shops-label">
                <label>Мои магазины</label>
              </div>
            </div>
          </a>
          <a href="/">
            <div class="exit">
              <div class="exit-icon">
                <img src="../assets/exit.png" alt="Выход">
              </div>
              <div class="exit-label">
                <label>Выход</label>
              </div>
            </div>
          </a>
        </aside>
      </div>
      <div class="col-sm-5 col-xs-12 offset-md-5 offset-sm-6">
        <main>
          <p class="row justify-content-flex-start">Ваше имя: Богдан Чернышов</p>
          <p class="row justify-content-flex-start">Email: test@gmail.com</p>
        </main>
      </div>
    </div>
    <div class="mobmenu">
      <a href="/">
        <div class="profile">
          <div class="profile-icon">
            <img src="../assets/user.png" alt="Профиль">
          </div>
          <div class="profile-label">
            <label>Профиль</label>
          </div>
        </div>
      </a>
      <a href="/">
        <div class="my-shops">
          <div class="shops-icon">
            <img src="../assets/internet-store.png" alt="Мои магазины">
          </div>
          <div class="shops-label">
            <label>Мои магазины</label>
          </div>
        </div>
      </a>
      <a href="/">
        <div class="exit">
          <div class="exit-icon">
            <img src="../assets/exit.png" alt="Выход">
          </div>
          <div class="exit-label">
            <label>Выход</label>
          </div>
        </div>
      </a>
      <div class="mobmenu-close" v-on:click="for_mobmenu_close()">
        <img src="../assets/close_icon.png" alt="Закрыть">
      </div>
    </div>

  </div>
</template>

<script>
  /* eslint-disable quotes */

  export default {
    name: 'account',
    methods: {
      for_mobmenu () {
        var k = document.getElementsByClassName('mobmenu')[0]
        k.style["margin-left"] = "0"
      },
      for_mobmenu_close () {
        var k = document.getElementsByClassName('mobmenu')[0]
        k.style["margin-left"] = "-100%"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  $green: #1DB954

  @import url('https://fonts.googleapis.com/css?family=Roboto:500&subset=cyrillic')
  @import "~flickity/dist/flickity.css"
  @import '~bootstrap/scss/bootstrap'

  body
    margin: 0
    font-family: 'Roboto', Helvetica, Arial, sans-serif
    font-weight: 500

  .hello
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  .container-fluid
    width: 86%
    padding: 0

    .menu
      margin-top: 4%
      width: 50px
      height: 50px

      img
        width: 100%

    .menu:focus


    header
      height: 151px
      @media screen and (max-width: 1400px)
        height: 135px

      .col-sm-2
        padding: 0px

      .menu
        width: 40px
        height: 40px

        img
          width: 100%

      .logo
        width: 167px
        height: 113px
        margin-left: 5.356% // 15px
        margin-top: 4.64% // 13px
        @include media-breakpoint-down(xs)
          margin: 0 auto

        .don-logo
          width: 102px
          height: 73px

          img
            width: 100%
            height: 100%

        .shops-logo
          width: 148px
          height: 73px
          margin-top: -30px
          margin-left: 15px


          img
            width: 100%
            height: 100%

      input[type="button"]
        margin-top: 46px
        width: 88.654% // 334px
        border: 0
        height: 100%
        max-height: 60px
        min-height: 40px
        font-size: 30px
        border-radius: 50px
        outline: none
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        @media screen and (max-width: 1600px)
          font-size: 22px
          height: 46%
        @include media-breakpoint-down(sm)
          font-size: 20px
          height: 45%
        @include media-breakpoint-down(xs)
          margin-top: 6%
          height: 80%



        &:hover
          filter: brightness(80%)
          cursor: pointer

      input[type="button"].green-btn
        background-color: $green
        color: white

      .label-name
        font-size: 30px
        line-height: 40px
        color: black
        margin-top: 56px // 20%
        margin-left: 16.42% // 46px
        @media screen and (max-width: 1400px)
          font-size: 25px

      hr
        border: none
        background-color: #C5C5C5
        color: #C5C5C5
        height: 1px
        width: 118%
        margin-top: 1.515% // 25px
        margin-right: -10%
        margin-left: -10%
        @include media-breakpoint-down(xs)
          margin-top: 40px


    aside
      //height: 126.2% // 107%
      //padding-top: 12.045% // 47px
      height: 100%
      width: 20.782%
      padding-top: 2.448%
      border-right: 1px solid #C5C5C5
      position: fixed
      @media screen and (max-width: 1400px)
        height: 95%
      @include media-breakpoint-down(md)
        width: 30%
      @include media-breakpoint-down(sm)
        width: 40%

      .profile
        display: flex
        flex-direction: row
        align-items: center
        //height: 11.982% // 100px
        height: 100px

        .profile-icon
          width: 50px
          height: 50px

          img
            //width: 100%
            height: 100%

        .profile-label
          //margin-right: 30.57% // 119px
          //margin-left: 2.57% // 10px
          //margin-top: 2.056% // 8px
          margin-right: 29% // 119px
          margin-left: 10px // 2.515%
          margin-top: 2.012% // 8px

          label
            font-size: 30px
            line-height: 40px
            color: #C5C5C5
            @media screen and (max-width: 1400px)
              font-size: 25px

      .profile:hover
        border-right: 5px solid #1DB954

        label
          color: black

      .profile:active
        border-right: 5px solid #1DB954

        label
          color: black

      .my-shops
        display: flex
        flex-direction: row
        align-items: center
        margin-top: 7.54% // 30px
        height: 100px

        .shops-icon
          width: 50px
          height: 50px

          img
            //width: 100%
            height: 100%

        .shops-label
          //margin-right: 29% // 119px
          //margin-left: 2.57% // 10px
          //margin-top: 2.056% // 8px
          margin-right: 20%
          margin-left: 10px // 2.515%
          margin-top: 2.012% // 8px

          label
            font-size: 30px
            line-height: 40px
            color: #C5C5C5
            @media screen and (max-width: 1400px)
              font-size: 25px
              line-height: 34px

      .my-shops:hover
        border-right: 5px solid #1DB954

        label
          color: black

      .my-shops:active
        border-right: 5px solid #1DB954

        label
          color: black

      .exit
        display: flex
        flex-direction: row
        margin-top: 123.37% // 491px
        height: 100px
        align-items: center
        @media screen and (max-width: 1400px)
           margin-top: 65%

        .exit-icon
          width: 50px
          height: 50px

          img
            width: 100%
            height: 100%

        .exit-label
          //margin-right: 30.57% // 119px
          //margin-left: 2.57% // 10px
          //margin-top: 2.056% // 8px
          margin-right: 29% // 119px
          margin-left: 10px // 2.515%
          margin-top: 2.012% // 8px

          label
            font-size: 30px
            line-height: 40px
            color: #C5C5C5
            @media screen and (max-width: 1400px)
              font-size: 25px

      .exit:hover
        border-right: 5px solid #1DB954

        label
          color: black

      .exit:active
        border-right: 5px solid #1DB954

        label
          color: black

    main
      margin-top: 10.59% // 71px
      @include media-breakpoint-down(xs)
        margin-top: 35%

      p
        font-size: 30px
        line-height: 40px
        color: black
        @media screen and (max-width: 1400px)
          font-size: 25px
        @include media-breakpoint-down(xs)
          justify-content: center !important
          font-size: 20px
          line-height: 30px

      p:last-child
        margin-top: 7.16% // 48px
        @include media-breakpoint-down(xs)
          margin-top: 5%

    .mobmenu
      padding-top: 45px
      top: 0
      left: 0
      position: absolute
      width: 100%
      height: 100%
      margin-left: -100%
      background-color: white
      z-index: 5
      -webkit-transition: margin, 1s ease-in-out
      transition: margin, 1s ease-in-out

      .profile
        display: flex
        flex-direction: row
        align-items: center
        //height: 11.982% // 100px
        height: 100px
        margin-left: 50px

        .profile-icon
          width: 50px
          height: 50px

          img
            //width: 100%
            height: 100%

        .profile-label
          //margin-right: 30.57% // 119px
          //margin-left: 2.57% // 10px
          //margin-top: 2.056% // 8px
          margin-right: 29% // 119px
          margin-left: 10px // 2.515%
          margin-top: 2.012% // 8px

          label
            font-size: 22px
            line-height: 40px
            color: #C5C5C5

      .profile:hover
        border-right: 5px solid #1DB954

        label
          color: black

      .profile:active
        border-right: 5px solid #1DB954

        label
          color: black

      .my-shops
        display: flex
        flex-direction: row
        align-items: center
        height: 100px
        margin-left: 50px

        .shops-icon
          width: 50px
          height: 50px

          img
            //width: 100%
            height: 100%

        .shops-label
          //margin-right: 29% // 119px
          //margin-left: 2.57% // 10px
          //margin-top: 2.056% // 8px
          margin-right: 20%
          margin-left: 10px // 2.515%
          margin-top: 2.012% // 8px

          label
            font-size: 22px
            line-height: 40px
            color: #C5C5C5

      .my-shops:hover
        border-right: 5px solid #1DB954

        label
          color: black

      .my-shops:active
        border-right: 5px solid #1DB954

        label
          color: black

      .exit
        display: flex
        flex-direction: row
        height: 100px
        align-items: center
        margin-left: 50px

        .exit-icon
          width: 50px
          height: 50px

          img
            width: 100%
            height: 100%

        .exit-label
          //margin-right: 30.57% // 119px
          //margin-left: 2.57% // 10px
          //margin-top: 2.056% // 8px
          margin-right: 29% // 119px
          margin-left: 10px // 2.515%
          margin-top: 2.012% // 8px

          label
            font-size: 22px
            line-height: 40px
            color: #C5C5C5

      .exit:hover
        border-right: 5px solid #1DB954

        label
          color: black

      .exit:active
        border-right: 5px solid #1DB954

        label
          color: black

      .mobmenu-close
        position: absolute
        right: 7.5%
        top: 15px
        > img
          width: 40px
          height: 40px

  //todo: Ігоре, я не пам'ятаююююю, як працювати з selected panel!!!!!!!!!

</style>


