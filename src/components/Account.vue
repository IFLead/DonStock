<template>

  <div class="that-who-gathers">

    <header class="container-fluid header header-bordered">

      <div class="row justify-content-end align-items-center d-lg-flex d-none">

        <div class="col-md-3 btn-container">
          <button class="button button-add_store">Добавить магазин</button>
        </div>

        <div class="col-md-2 btn-container">
          <button class="button button-profile">Богдан</button>
        </div>

      </div>

      <div class="row align-items-center d-flex d-lg-none">

        <div @click="menuOpened = true" class="col-2 btn-container">
          <img  class="btn-menu" src="../../src/assets/menu-options.svg" width="50" height="50"/>
        </div>

      </div>

    </header>

    <div class="container-fluid container-fluid-wrapper d-lg-block d-none main-container">

      <div class="row no-gutters">

        <aside class="col-lg-3 left-panel">

          <div @click="panelIndex = 1" class="left-panel-profile">
            <img src="../../src/assets/user.png" width="50" height="50">
            <button class="button button_left-panel">Профиль</button>
          </div>

          <div @click="panelIndex = 2" class="left-panel-my-shops">
            <img src="../../src/assets/internet-store.png" width="50" height="50">
            <button class="button button_left-panel">Мои магазины</button>
          </div>

          <!--todo Сделано для теста, убрать @click-->
          <div @click="panelIndex = 3" class="left-panel-exit">
            <img src="../../src/assets/exit.png" width="50" height="50">
            <button class="button button_left-panel">Выход</button>
          </div>

        </aside>


        <div class="col-lg-9 panel-content">

          <div v-show="panelIndex === 1" class="profile-info">

            <div class="profile-info-wrapper">
              <span class="profile-info-feature">Ваше имя:</span><p class="profile-info-value">Богдан Чернышов</p>
            </div>

            <div class="profile-info-wrapper">
              <span class="profile-info-feature">Ваш email:</span><p class="profile-info-value">test@gmail.com</p>
            </div>

          </div>

          <div v-show="panelIndex === 2" class="profile-my-shops">

            <cards :shops="shops" :categories="categories"></cards>

          </div>

          <div v-show="panelIndex === 3" class="no-shops-warning">

            <div class="warning-wrapper">

              <img src="../../src/assets/shopping-cart.png" width="100" height="100">
              <span class="warning-message">Вы ещё не добавили свой магазин</span>

            </div>

          </div>

        </div>

      </div>

    </div>

    <div v-bind:class="{opened:menuOpened}" class="menu-area">

      <img @click="menuOpened = false" class="btn-menu-close" src="../../src/assets/close.svg" width="50" height="50">

      <div class="menu-area-buttons-wrapper">

        <div class="menu-area-main">

            <img src="../../src/assets/home.svg" width="50" height="50">
            <button class="button button_left-panel button_left-panel_mobile">Главная</button>

        </div>


        <div @click="panelIndex = 1" class="menu-area-profile">

          <img src="../../src/assets/user.png" width="50" height="50">
          <button class="button button_left-panel button_left-panel_mobile">Профиль</button>

        </div>


        <div @click="panelIndex = 2" class="menu-area-my-shops">

          <img src="../../src/assets/internet-store.png" width="50" height="50">
          <button class="button button_left-panel button_left-panel_mobile">Мои магазины</button>

        </div>

        <!--todo Сделано для теста, убрать @click-->
        <div @click="panelIndex = 3" class="menu-area-exit">

          <img src="../../src/assets/exit.png" width="50" height="50">
          <button class="button button_left-panel button_left-panel_mobile">Выход</button>

        </div>


      </div>

    </div>

    <div class="mobile-content container-fluid d-block d-lg-none">

      <div v-show="panelIndex === 1" class="mobile-profile" >

        <div class="profile-info-wrapper">
          <span class="mobile-profile-feature">Ваше имя:</span><p class="mobile-profile-value">Богдан Чернышов</p>
        </div>

        <div class="profile-info-wrapper">
          <span class="mobile-profile-feature">Ваш email:</span><p class="mobile-profile-value">test@gmail.com</p>
        </div>

      </div>

      <div v-show="panelIndex === 2" class="mobile-my-shops" >

        <cards :shops="shops" :categories="categories"></cards>

      </div>

      <div v-show="panelIndex === 3" class="mobile-warning-no-shops">

        <div class="warning-wrapper">

          <img src="../../src/assets/shopping-cart.png" width="50" height="50">
          <span class="warning-message">Вы ещё не добавили свой магазин</span>

        </div>

      </div>


    </div>

  </div>

  <!--<div id="account" class="w-100">-->
  <!--<main class="w-100">-->
  <!--<aside>-->
  <!--<a v-on:click="panelIndex = 0">-->
  <!--<div class="profile">-->
  <!--<div class="profile-icon">-->
  <!--<img src="../assets/user.png" alt="Профиль">-->
  <!--</div>-->
  <!--<div class="profile-label">-->
  <!--<label>Профиль</label>-->
  <!--</div>-->
  <!--</div>-->
  <!--</a>-->
  <!--<a v-on:click="panelIndex = 1">-->
  <!--<div class="my-shops">-->
  <!--<div class="shops-icon">-->
  <!--<img src="../assets/internet-store.png" alt="Мои магазины">-->
  <!--</div>-->
  <!--<div class="shops-label">-->
  <!--<label>Мои магазины</label>-->
  <!--</div>-->
  <!--</div>-->
  <!--</a>-->
  <!--<a class="bottom" href="/">-->
  <!--<div class="exit">-->
  <!--<div class="exit-icon">-->
  <!--<img src="../assets/exit.png" alt="Выход">-->
  <!--</div>-->
  <!--<div class="exit-label">-->
  <!--<label>Выход</label>-->
  <!--</div>-->
  <!--</div>-->
  <!--</a>-->
  <!--</aside>-->
  <!--</main>-->


  <!--&lt;!&ndash;<header class="row">&ndash;&gt;-->
  <!--&lt;!&ndash;&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="offset-6 col-3">&ndash;&gt;-->
  <!--&lt;!&ndash;&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="col-1">&ndash;&gt;-->
  <!--&lt;!&ndash;&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</header>&ndash;&gt;-->


  <!--&lt;!&ndash;<div class="col-xs-2 d-block d-sm-none">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="menu" v-on:click="menuOpen()">&ndash;&gt;-->
  <!--&lt;!&ndash;<img src="../assets/menu_icon.png" alt="Меню">&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="col-3-xl col-5-md d-none d-sm-block">&ndash;&gt;-->

  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="col-sm-5 col-xs-12 offset-md-5 offset-sm-6">&ndash;&gt;-->
  <!--&lt;!&ndash;<main>&ndash;&gt;-->
  <!--&lt;!&ndash;<div v-show="panelIndex === 0">&ndash;&gt;-->
  <!--&lt;!&ndash;<p class="row justify-content-flex-start">Ваше имя: Богдан Чернышов</p>&ndash;&gt;-->
  <!--&lt;!&ndash;<p class="row justify-content-flex-start">Email: test@gmail.com</p>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div v-show="panelIndex === 1">&ndash;&gt;-->
  <!--&lt;!&ndash;<p class="row justify-content-flex-start">Ваше имя: Варвара Саенко</p>&ndash;&gt;-->
  <!--&lt;!&ndash;<p class="row justify-content-flex-start">Email: test2@gmail.com</p>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</main>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="mobmenu">&ndash;&gt;-->
  <!--&lt;!&ndash;<a href="/">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="profile">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="profile-icon">&ndash;&gt;-->
  <!--&lt;!&ndash;<img src="../assets/user.png" alt="Профиль">&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="profile-label">&ndash;&gt;-->
  <!--&lt;!&ndash;<label>Профиль</label>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</a>&ndash;&gt;-->
  <!--&lt;!&ndash;<a href="/">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="my-shops">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="shops-icon">&ndash;&gt;-->
  <!--&lt;!&ndash;<img src="../assets/internet-store.png" alt="Мои магазины">&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="shops-label">&ndash;&gt;-->
  <!--&lt;!&ndash;<label>Мои магазины</label>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</a>&ndash;&gt;-->
  <!--&lt;!&ndash;<a href="/">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="exit">&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="exit-icon">&ndash;&gt;-->
  <!--&lt;!&ndash;<img src="../assets/exit.png" alt="Выход">&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="exit-label">&ndash;&gt;-->
  <!--&lt;!&ndash;<label>Выход</label>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</a>&ndash;&gt;-->
  <!--&lt;!&ndash;<div class="mobmenu-close" v-on:click="menuClose()">&ndash;&gt;-->
  <!--&lt;!&ndash;<img src="../assets/close_icon.png" alt="Закрыть">&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->

  <!--</div>-->
</template>

<script>
  import Cards from './Cards'

  export default {
    components: {
      Cards
    },
    name: 'account',
    mounted () {
      this.$http.get('/api/shops/?format=json').then((response) => {
        this.shops = response.data
      }, () => {
        this.shops = JSON.parse('[{"id":2,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image7.jpg"}],"likes":0,"dislikes":0,"name":"Pizza Store","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/STPeachy/","rating":10,"user":1,"categories":[3],"vote_status":0},{"id":3,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image10.jpg"}],"likes":0,"dislikes":0,"name":"Adidas","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/nanisday/","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[5,7],"vote_status":0},{"id":4,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image12.jpg"}],"likes":0,"dislikes":0,"name":"RR Cars","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"https://www.facebook.com/mmsuchar","rating":0,"user":1,"categories":[2,3],"vote_status":0},{"id":5,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image14.jpg"}],"likes":0,"dislikes":0,"name":"Thrasher Store","link_one":"https://vk.com/dadoem","link_two":"","link_three":"","rating":0,"user":1,"categories":[1],"vote_status":0},{"id":6,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image8.jpg"}],"likes":0,"dislikes":0,"name":"Watch Store","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[2,3,6],"vote_status":0},{"id":7,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image11.jpg"}],"likes":0,"dislikes":0,"name":"Nike","link_one":"https://vk.com/dadoem","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/mmsuchar","rating":0,"user":1,"categories":[1,3,5,6,7],"vote_status":0},{"id":8,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image13.jpg"},{"url":"/media/shops-images/2018/01/13/Gucci-shop.jpg"}],"likes":0,"dislikes":0,"name":"Gucci","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/lisapeachy","link_three":"https://www.facebook.com/STPeachy/","rating":0,"user":1,"categories":[1,6],"vote_status":0},{"id":9,"photos":[{"url":"/media/shops-images/2018/01/13/Categories_-_click-image15.jpg"}],"likes":0,"dislikes":0,"name":"Red&Red","link_one":"https://vk.com/ayy_memes","link_two":"https://www.instagram.com/zanudas/","link_three":"","rating":0,"user":1,"categories":[1],"vote_status":0}]')
      })
    },
    data () {
      return {
        panelIndex: 1,
        loggedIn: false,
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
        menuOpened: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../style/variables'
  @import url('https://fonts.googleapis.com/css?family=Roboto:500&subset=cyrillic')
  @import '~bootstrap/scss/bootstrap'

  html, body, #app, .that-who-gathers
    height: 100%

  .header
    height: 150px
    width: 100%

    > div:first-child, > div:nth-child(2)
      height: 100%

    &-bordered
      border-bottom: 1px solid grey

  .btn-container
    display: flex
    align-items: center
    justify-content: center

    cursor: pointer

    &:focus
      outline: none

  .button
    @extend .btn-container

    height: 60px
    font-size: 1.5vmax
    border: none

    padding:
      left: 38px
      right: 38px

    &-add_store
      background-color: $green
      border-radius: 35px
      color: white

    &-profile, &_left-panel
      background-color: #fff
      color: black

    &_left-panel
      padding: 0
      margin:
        left: 20px

      &_mobile
        font-size: 3.5vh

  .container-fluid-wrapper

    > div:first-child
      height: 100%

  .left-panel
    height: 100%

    border-right: 1px solid grey

    &-profile, &-my-shops, &-exit

      margin:
        top: 70px
      display: flex
      align-items: center

      opacity: .5
      transition: all linear .2s

      padding:
        left: 10px

      &:hover, &:focus
        opacity: 1



    &-profile, &-my-shops
      &:hover, &:focus
        border-right: 3px solid $green



    &-exit

      position: absolute
      bottom: 30px





  .panel-content
    height: 100%

  .profile-info

    padding:
      left: 155px
      top: 70px

    &-wrapper
      display: flex

    &-feature, &-value
      color: black
      font-size: 1.5vmax

    &-value
      margin:
        left: 15px

  .profile-my-shops
    max-height: 100%

    padding:
      top: 90px

    overflow: auto

  .no-shops-warning, .warning-wrapper
    display: flex
    align-items: center
    justify-content: center

  .no-shops-warning
    padding:
      left: 30px
      right: 30px

    height: 100%
    opacity: .7
    font-size: 40px

  .warning-message
    margin:
      left: 30px



  .btn-menu
    margin:
      left: 50px

    &-close
      position: absolute
      top: 50px
      right: 50px


  .menu-area
    width: 100%
    height: 100%
    z-index: 2

    background-color: white

    position: absolute
    top: 0
    left: 0

    transition: margin-left ease-in .4s

    margin:
      left: -100%

    &-buttons-wrapper
      display: block

      padding:
        top: 120px

      > div

        opacity: .5
        transition: opacity linear .2s

        margin:
          top: 30px

        &:hover, &:focus
          opacity: 1



    &-main, &-profile, &-my-shops, &-exit
      display: flex
      align-items: center
      justify-content: center



  .opened
    margin:
      left: 0


  .mobile

    &-profile
      padding:
        top: 50px
        left: 50px


      &-feature, &-value
        color: black
        font-size: 3.5vmax

      &-value
        margin:
          left: 15px

    &-warning-no-shops
      display: flex
      justify-content: center
      align-items: center


      > div
        margin:
          top: 20vmax

        font-size: 3vmax

  .main-container
    height: calc(100% - 150px)


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

