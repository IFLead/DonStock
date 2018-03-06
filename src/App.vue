<template>
  <div id="app">
  <!--<header class="container-fluid">-->
      <!--<div class="row h-100">-->
        <!--<div class="offset-1 col-1 text-center">-->
          <!--&lt;!&ndash;<div class="logo">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="don-logo">&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../assets/Don.png" alt="Логотип">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="shops-logo">&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../assets/Shops.png" alt="Логотип">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="col-6 col-lg-3 offset-lg-5 text-center">-->
          <!--<input v-show="loggedIn" class="green-btn add-shop" type="button" value="Добавить магазин">-->
          <!--<input v-show="!loggedIn" v-b-modal.add-login centered class="transp-btn add-shop" type="button"-->
                 <!--value="Добавить магазин">-->
        <!--</div>-->
        <!--<div class="col-6 col-lg-2 text-center">-->
          <!--<label v-show="loggedIn" class="label-name">Богдан</label>-->
          <!--<input v-show="!loggedIn" v-b-modal.signin-login class="green-btn sign-in" type="button" value="Войти">-->
        <!--</div>-->
      <!--</div>-->
    <!---->
  <!--</header>-->
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="sass">

  @import url('https://fonts.googleapis.com/css?family=Roboto:500&subset=cyrillic')
  @import '~bootstrap/scss/bootstrap'

  header
    height: 13.98vh
    min-height: 100px
    border-bottom: 2px solid grey

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

</style>
