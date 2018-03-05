<template>
  <div id="account" class="w-100">
    <header class="container-fluid">
      <section class="h-100">
        <div class="row h-100">
          <div class="offset-1 col-1 text-center">
            <!--<div class="logo">-->
            <!--<div class="don-logo">-->
            <!--<img src="../assets/Don.png" alt="Логотип">-->
            <!--</div>-->
            <!--<div class="shops-logo">-->
            <!--<img src="../assets/Shops.png" alt="Логотип">-->
            <!--</div>-->
            <!--</div>-->
          </div>
          <div class="col-6 col-lg-3 offset-lg-5 text-center">
            <input v-show="loggedIn" class="green-btn add-shop" type="button" value="Добавить магазин">
            <input v-show="!loggedIn" v-b-modal.add-login centered class="transp-btn add-shop" type="button"
                   value="Добавить магазин">
          </div>
          <div class="col-6 col-lg-2 text-center">
            <label v-show="loggedIn" class="label-name">Богдан</label>
            <input v-show="!loggedIn" v-b-modal.signin-login class="green-btn sign-in" type="button" value="Войти">
          </div>
        </div>
      </section>
      <hr>
    </header>
    <main class="w-100">
      <aside>
        <a v-on:click="panelIndex = 0">
          <div class="profile">
            <div class="profile-icon">
              <img src="../assets/user.png" alt="Профиль">
            </div>
            <div class="profile-label">
              <label>Профиль</label>
            </div>
          </div>
        </a>
        <a v-on:click="panelIndex = 1">
          <div class="my-shops">
            <div class="shops-icon">
              <img src="../assets/internet-store.png" alt="Мои магазины">
            </div>
            <div class="shops-label">
              <label>Мои магазины</label>
            </div>
          </div>
        </a>
        <a class="bottom" href="/">
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
    </main>


    <!--<header class="row">-->
    <!---->
    <!--<div class="offset-6 col-3">-->
    <!---->
    <!--</div>-->
    <!--<div class="col-1">-->
    <!---->
    <!--</div>-->
    <!--</header>-->


    <!--<div class="col-xs-2 d-block d-sm-none">-->
    <!--<div class="menu" v-on:click="menuOpen()">-->
    <!--<img src="../assets/menu_icon.png" alt="Меню">-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="row">-->
    <!--<div class="col-3-xl col-5-md d-none d-sm-block">-->

    <!--</div>-->
    <!--<div class="col-sm-5 col-xs-12 offset-md-5 offset-sm-6">-->
    <!--<main>-->
    <!--<div v-show="panelIndex === 0">-->
    <!--<p class="row justify-content-flex-start">Ваше имя: Богдан Чернышов</p>-->
    <!--<p class="row justify-content-flex-start">Email: test@gmail.com</p>-->
    <!--</div>-->
    <!--<div v-show="panelIndex === 1">-->
    <!--<p class="row justify-content-flex-start">Ваше имя: Варвара Саенко</p>-->
    <!--<p class="row justify-content-flex-start">Email: test2@gmail.com</p>-->
    <!--</div>-->
    <!--</main>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="mobmenu">-->
    <!--<a href="/">-->
    <!--<div class="profile">-->
    <!--<div class="profile-icon">-->
    <!--<img src="../assets/user.png" alt="Профиль">-->
    <!--</div>-->
    <!--<div class="profile-label">-->
    <!--<label>Профиль</label>-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--<a href="/">-->
    <!--<div class="my-shops">-->
    <!--<div class="shops-icon">-->
    <!--<img src="../assets/internet-store.png" alt="Мои магазины">-->
    <!--</div>-->
    <!--<div class="shops-label">-->
    <!--<label>Мои магазины</label>-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--<a href="/">-->
    <!--<div class="exit">-->
    <!--<div class="exit-icon">-->
    <!--<img src="../assets/exit.png" alt="Выход">-->
    <!--</div>-->
    <!--<div class="exit-label">-->
    <!--<label>Выход</label>-->
    <!--</div>-->
    <!--</div>-->
    <!--</a>-->
    <!--<div class="mobmenu-close" v-on:click="menuClose()">-->
    <!--<img src="../assets/close_icon.png" alt="Закрыть">-->
    <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>
  export default {
    name: 'account',
    methods: {
      menuOpen () {
        const k = document.getElementsByClassName('mobmenu')[0]
        k.style['margin-left'] = '0'
      },
      menuClose () {
        const k = document.getElementsByClassName('mobmenu')[0]
        k.style['margin-left'] = '-100%'
      }
    },
    data () {
      return {
        panelIndex: 0,
        loggedIn: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../style/variables'
  /*.menu*/
      /*margin-top: 4%*/
      /*width: 50px*/
      /*height: 50px*/

      /*img*/
        /*width: 100%*/

    /*.menu:focus*/


  @import url('https://fonts.googleapis.com/css?family=Roboto:500&subset=cyrillic')
  @import "~flickity/dist/flickity.css"
  @import '~bootstrap/scss/bootstrap'

  div#account
    padding: 0

    header
      height: 13.98vh
      min-height: 100px

      .logo
        position: relative
        width: 167px
        height: 113px
        top: 50%
        transform: translateY(-50%)

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

      .menu
        width: 40px
        height: 40px

        img
          width: 100%

      input[type="button"]
        width: 88.654%
        // 334px
        margin-top: 3.98vh
        margin-bottom: 4.44vh
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

      input[type="button"].add-shop
        width: 330px

      input[type="button"].sign-in
        width: 63.03106%
        min-width: 140px
        max-width: 181px

      input[type="button"].green-btn
        background-color: $green
        color: white

      .label-name
        font-size: 30px
        line-height: 40px
        color: black
        margin-top: 56px
        @media screen and (max-width: 1400px)
          font-size: 25px

      hr
        border: none
        background-color: #C5C5C5
        color: #C5C5C5
        height: 1px
        width: 100vw
        margin: 0
    main
      height: 80vh

      aside
        margin-top: 1px
        // min-width: 220px
        max-width: 538px
        background-color: white
        float: left
        height: 100%
        position: relative
        padding-left: 140px
        width: 100%


        a

          label
            color: #C5C5C5


          .profile
            display: flex
            flex-direction: row
            align-items: center
            //height: 11.982% // 100px
            height: 100px

            &:hover, &:active
              border-right: 5px solid #1DB954

              label
                color: black !important

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
              margin-right: 29%
              // 119px
              margin-left: 10px
              // 2.515%
              margin-top: 2.012%
              // 8px

              label
                font-size: 30px
                line-height: 40px
                color: #C5C5C5
                @media screen and (max-width: 1400px)
                  font-size: 25px

          .my-shops
            display: flex
            flex-direction: row
            align-items: center
            margin-top: 7.54%
            // 30px
            height: 100px

            &:hover, &:active
              border-right: 5px solid #1DB954

              label
                color: black !important


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
              margin-left: 10px
              // 2.515%
              margin-top: 2.012%
              // 8px

              label
                font-size: 30px
                line-height: 40px
                color: #C5C5C5
                @media screen and (max-width: 1400px)
                  font-size: 25px
                  line-height: 34px

          &.bottom
            position: absolute
            bottom: 0
            width: 100%
            .exit
              display: flex
              flex-direction: row
              // 491px
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
                margin-right: 29%
                // 119px
                margin-left: 10px
                // 2.515%
                margin-top: 2.012%
                // 8px

                label
                  font-size: 30px
                  line-height: 40px
                  color: #C5C5C5
                  @media screen and (max-width: 1400px)
                    font-size: 25px

              &:hover, &:active
                border-right: 5px solid #1DB954

                label
                  color: black !important



</style>


<!--aside-->
<!--//height: 126.2% // 107%-->
<!--//padding-top: 12.045% // 47px-->
<!--height: 100%-->
<!--width: 20.782%-->
<!--padding-top: 2.448%-->
<!--border-right: 1px solid #C5C5C5-->
<!--position: fixed-->
<!--@media screen and (max-width: 1400px)-->
<!--height: 95%-->
<!--@include media-breakpoint-down(md)-->
<!--width: 30%-->
<!--@include media-breakpoint-down(sm)-->
<!--width: 40%-->

<!--.profile-->
<!--display: flex-->
<!--flex-direction: row-->
<!--align-items: center-->
<!--//height: 11.982% // 100px-->
<!--height: 100px-->

<!--.profile-icon-->
<!--width: 50px-->
<!--height: 50px-->

<!--img-->
<!--//width: 100%-->
<!--height: 100%-->

<!--.profile-label-->
<!--//margin-right: 30.57% // 119px-->
<!--//margin-left: 2.57% // 10px-->
<!--//margin-top: 2.056% // 8px-->
<!--margin-right: 29%-->
<!--// 119px-->
<!--margin-left: 10px-->
<!--// 2.515%-->
<!--margin-top: 2.012%-->
<!--// 8px-->

<!--label-->
<!--font-size: 30px-->
<!--line-height: 40px-->
<!--color: #C5C5C5-->
<!--@media screen and (max-width: 1400px)-->
<!--font-size: 22px-->

<!--.profile:hover-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.profile:active-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.my-shops-->
<!--display: flex-->
<!--flex-direction: row-->
<!--align-items: center-->
<!--margin-top: 7.54%-->
<!--// 30px-->
<!--height: 100px-->

<!--.shops-icon-->
<!--width: 50px-->
<!--height: 50px-->

<!--img-->
<!--//width: 100%-->
<!--height: 100%-->

<!--.shops-label-->
<!--//margin-right: 29% // 119px-->
<!--//margin-left: 2.57% // 10px-->
<!--//margin-top: 2.056% // 8px-->
<!--margin-right: 20%-->
<!--margin-left: 10px-->
<!--// 2.515%-->
<!--margin-top: 2.012%-->
<!--// 8px-->

<!--label-->
<!--font-size: 30px-->
<!--line-height: 40px-->
<!--color: #C5C5C5-->
<!--@media screen and (max-width: 1400px)-->
<!--font-size: 22px-->
<!--line-height: 34px-->

<!--.my-shops:hover-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.my-shops:active-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.exit-->
<!--display: flex-->
<!--flex-direction: row-->
<!--margin-top: 100%-->
<!--// 491px-->
<!--height: 100px-->
<!--align-items: center-->
<!--@media screen and (max-width: 1400px)-->
<!--margin-top: 50%-->

<!--.exit-icon-->
<!--width: 50px-->
<!--height: 50px-->

<!--img-->
<!--width: 100%-->
<!--height: 100%-->

<!--.exit-label-->
<!--//margin-right: 30.57% // 119px-->
<!--//margin-left: 2.57% // 10px-->
<!--//margin-top: 2.056% // 8px-->
<!--margin-right: 29%-->
<!--// 119px-->
<!--margin-left: 10px-->
<!--// 2.515%-->
<!--margin-top: 2.012%-->
<!--// 8px-->

<!--label-->
<!--font-size: 30px-->
<!--line-height: 40px-->
<!--color: #C5C5C5-->
<!--@media screen and (max-width: 1400px)-->
<!--font-size: 22px-->

<!--.exit:hover-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.exit:active-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--main-->
<!--margin-top: 10.59%-->
<!--// 71px-->
<!--@include media-breakpoint-down(xs)-->
<!--margin-top: 35%-->

<!--p-->
<!--font-size: 30px-->
<!--line-height: 40px-->
<!--color: black-->
<!--@media screen and (max-width: 1400px)-->
<!--font-size: 25px-->
<!--@include media-breakpoint-down(xs)-->
<!--justify-content: center !important-->
<!--font-size: 20px-->
<!--line-height: 30px-->

<!--p:last-child-->
<!--margin-top: 7.16%-->
<!--// 48px-->
<!--@include media-breakpoint-down(xs)-->
<!--margin-top: 5%-->

<!--.mobmenu-->
<!--padding-top: 45px-->
<!--top: 0-->
<!--left: 0-->
<!--position: absolute-->
<!--width: 100%-->
<!--height: 100%-->
<!--margin-left: -100%-->
<!--background-color: white-->
<!--z-index: 5-->
<!--transition: margin, 0.5s ease-in-out-->

<!--.profile-->
<!--display: flex-->
<!--flex-direction: row-->
<!--align-items: center-->
<!--//height: 11.982% // 100px-->
<!--height: 100px-->
<!--margin-left: 50px-->

<!--.profile-icon-->
<!--width: 50px-->
<!--height: 50px-->

<!--img-->
<!--//width: 100%-->
<!--height: 100%-->

<!--.profile-label-->
<!--//margin-right: 30.57% // 119px-->
<!--//margin-left: 2.57% // 10px-->
<!--//margin-top: 2.056% // 8px-->
<!--margin-right: 29%-->
<!--// 119px-->
<!--margin-left: 10px-->
<!--// 2.515%-->
<!--margin-top: 2.012%-->
<!--// 8px-->

<!--label-->
<!--font-size: 22px-->
<!--line-height: 40px-->
<!--color: #C5C5C5-->

<!--.profile:hover-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.profile:active-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.my-shops-->
<!--display: flex-->
<!--flex-direction: row-->
<!--align-items: center-->
<!--height: 100px-->
<!--margin-left: 50px-->

<!--.shops-icon-->
<!--width: 50px-->
<!--height: 50px-->

<!--img-->
<!--//width: 100%-->
<!--height: 100%-->

<!--.shops-label-->
<!--//margin-right: 29% // 119px-->
<!--//margin-left: 2.57% // 10px-->
<!--//margin-top: 2.056% // 8px-->
<!--margin-right: 20%-->
<!--margin-left: 10px-->
<!--// 2.515%-->
<!--margin-top: 2.012%-->
<!--// 8px-->

<!--label-->
<!--font-size: 22px-->
<!--line-height: 40px-->
<!--color: #C5C5C5-->

<!--.my-shops:hover-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.my-shops:active-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.exit-->
<!--display: flex-->
<!--flex-direction: row-->
<!--height: 100px-->
<!--align-items: center-->
<!--margin-left: 50px-->

<!--.exit-icon-->
<!--width: 50px-->
<!--height: 50px-->

<!--img-->
<!--width: 100%-->
<!--height: 100%-->

<!--.exit-label-->
<!--//margin-right: 30.57% // 119px-->
<!--//margin-left: 2.57% // 10px-->
<!--//margin-top: 2.056% // 8px-->
<!--margin-right: 29%-->
<!--// 119px-->
<!--margin-left: 10px-->
<!--// 2.515%-->
<!--margin-top: 2.012%-->
<!--// 8px-->

<!--label-->
<!--font-size: 22px-->
<!--line-height: 40px-->
<!--color: #C5C5C5-->

<!--.exit:hover-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.exit:active-->
<!--border-right: 5px solid #1DB954-->

<!--label-->
<!--color: black-->

<!--.mobmenu-close-->
<!--position: absolute-->
<!--right: 7.5%-->
<!--top: 15px-->
<!--&gt; img-->
<!--width: 40px-->
<!--height: 40px-->

