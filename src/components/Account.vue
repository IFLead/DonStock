<template>

  <div id="account">
    <smart-header :menu-exist="true" v-on:openMenu="menuOpened = true"></smart-header>

    <div class="container-fluid container-fluid-wrapper d-lg-block d-none main-container">

      <div class="row no-gutters">

        <aside class="col-lg-3 left-panel">

          <div @click="swithPanel(1)" class="left-panel-profile">
            <img src="../../src/assets/user.png" width="50" height="50">
            <button class="button button_left-panel">Профиль</button>
          </div>

          <div @click="swithPanel(2)" class="left-panel-my-shops">
            <img src="../../src/assets/internet-store.png" width="50" height="50">
            <button class="button button_left-panel">Мои магазины</button>
          </div>

          <div @click="logout" class="left-panel-exit">
            <img src="../../src/assets/exit.png" width="50" height="50">
            <button class="button button_left-panel">Выход</button>
          </div>

        </aside>


        <div class="col-lg-9 panel-content">

          <div v-show="panelIndex === 1" class="profile-info">

            <div class="profile-info-wrapper">
              <span class="profile-info-feature">Ваше имя:</span>
              <p class="profile-info-value">{{firstName}} {{lastName}}</p>
            </div>

            <div class="profile-info-wrapper">
              <span class="profile-info-feature">Ваш email:</span>
              <p class="profile-info-value">{{email}}</p>
            </div>

          </div>

          <div v-show="panelIndex === 2" class="profile-my-shops">

            <cards></cards>

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
          <router-link to="/">
            <img src="../../src/assets/home.svg" width="50" height="50">
            <button class="button button_left-panel button_left-panel_mobile">Главная</button>
          </router-link>
        </div>


        <div @click="switchPanel(1)" class="menu-area-profile">

          <img src="../../src/assets/user.png" width="50" height="50">
          <button class="button button_left-panel button_left-panel_mobile">Профиль</button>

        </div>


        <div @click="switchPanel(2)" class="menu-area-my-shops">

          <img src="../../src/assets/internet-store.png" width="50" height="50">
          <button class="button button_left-panel button_left-panel_mobile">Мои магазины</button>

        </div>

        <div @click="logout" class="menu-area-exit">

          <img src="../../src/assets/exit.png" width="50" height="50">
          <button class="button button_left-panel button_left-panel_mobile">Выход</button>

        </div>


      </div>

    </div>

    <div class="mobile-content container-fluid d-block d-lg-none">

      <div v-show="panelIndex === 1" class="mobile-profile">

        <div class="profile-info-wrapper">
          <span class="mobile-profile-feature">Ваше имя:</span>
          <p class="mobile-profile-value">{{firstName}} {{lastName}}</p>
        </div>

        <div class="profile-info-wrapper">
          <span class="mobile-profile-feature">Ваш email:</span>
          <p class="mobile-profile-value">{{email}}</p>
        </div>

      </div>

      <div v-show="panelIndex === 2" class="mobile-my-shops">

        <cards></cards>

      </div>

      <div v-show="panelIndex === 3" class="mobile-warning-no-shops">

        <div class="warning-wrapper">

          <img src="../../src/assets/shopping-cart.png" width="50" height="50">
          <span class="warning-message">Вы ещё не добавили свой магазин</span>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import Cards from './Cards'
  import SmartHeader from './SmartHeader'

  export default {
    components: {
      SmartHeader,
      Cards
    },
    name: 'account',
    computed: {
      ...mapGetters([
        'firstName',
        'lastName',
        'email'
      ])
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
      },
      switchPanel (index) {
        this.panelIndex = index
        this.menuOpened = false
      }
    },
    data () {
      return {
        panelIndex: 1,
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

  #account
    height: 100%

    .header-bordered
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

    &_left-panel
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


</style scoped>

