<template>
  <header id="smart-header" class="container-fluid header header-bordered">
    <div class="row justify-content-end align-items-center" :class="{'d-lg-flex':menuExist, 'd-none':menuExist}">

      <div class="col-6 offset-lg-1 col-lg-3 col-xl-3 btn-container">
        <input v-b-modal.add-login centered v-if="!isAuthenticated"
               class="button button-transparent" type="button"
               value="Добавить магазин">
        <input @click="start" v-if="isAuthenticated"
               class="button button-green" type="button"
               value="Добавить магазин">
      </div>

      <div class="col-6 offset-lg-5 col-lg-3 offset-xl-0 col-xl-2 btn-container">
        <input v-b-modal.signin-login v-if="!isAuthenticated" class="button green-btn sign-in" type="button"
               value="Войти">
        <router-link to="/account">
          <button v-if="isAuthenticated" class="button button-transparent">{{firstName}}</button>
        </router-link>
      </div>


    </div>

    <div v-if="menuExist" class="row align-items-center d-flex d-lg-none">

      <div @click="openMenu" class="col-2 btn-container">
        <img class="btn-menu" src="../assets/menu-options.svg" width="50" height="50"/>
      </div>

    </div>

    <div class="modals">
      <login-modal :id="'add-login'" :authenticated.sync="isAuthenticated">Чтобы добавить магазин, необходимо
        зарегистрироваться в 2 клика
      </login-modal>
      <login-modal :id="'signin-login'" :authenticated.sync="isAuthenticated">Чтобы войти или зарегистрироваться,
        необходимо выбрать соц. сеть
      </login-modal>
    </div>
    <shop :newShop.sync="newShop" ref="shop"></shop>

  </header>
</template>

<script>
  import {mapGetters} from 'vuex'
  import LoginModal from './modals/LoginModal'
  import Shop from './Shop'

  export default {
    components: {
      LoginModal,
      Shop
    },
    name: 'smart-header',
    props: ['menuExist'],
    computed: {
      ...mapGetters([
        'isAuthenticated',
        'firstName'
      ])
    },
    methods: {
      start () {
        this.$refs.shop.start()
      },
      openMenu () {
        this.$emit('openMenu')
      }
    },
    data () {
      return {
        newShop: null
      }
    }
  }
</script>

<style lang="sass">
  @import '../style/variables'

  #smart-header
    height: 150px
    width: 100%

    > div:first-child, > div:nth-child(2)
      height: 100%

    .btn-container
      display: flex
      align-items: center
      justify-content: center
      height: 50px

      cursor: pointer

      &:focus
        outline: none

    .button
      @extend .btn-container
      margin:
        left: 38px
        right: 38px
      height: 50px
      font-size: 1.5vmax
      border: none
      @include media-breakpoint-only(lg)
        margin:
          left: 0
          right: 0

      &-green
        background-color: $green
        border-radius: 35px
        color: white

      &-transparent
        background-color: transparent
        color: black
        max-width: 340px
        @include media-breakpoint-down(md)
          color: white

</style>
