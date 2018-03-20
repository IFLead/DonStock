<template>
  <b-modal class="login-modal" :id="id" hide-header hide-footer centered>
    <p class="tagline">
      <slot></slot>
    </p>
    <div class="row justify-content-between">
      <button @click="auth('vk')"> <!-- href="/api/auth/login/vk-oauth2" -->
        <img src="../../assets/Add_shop_vk.png" alt="VK login">
      </button>
      <button @click="auth('facebook')"> <!--href="/api/auth/login/facebook"> -->
        <img src="../../assets/Add_shop_fb.png" alt="Facebook login">
      </button>
      <button @click="auth('google')"> <!--href="/api/auth/login/google-plus"-->
        <img src="../../assets/Add_shop_google.png" alt="Google login">
      </button>
    </div>
  </b-modal>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'add-modal',
    props: ['id', 'authenticated'],
    methods: {
      ...mapActions([
        'auth'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '~bootstrap/scss/bootstrap'
  @import '../../style/variables'

  .login-modal
    .modal-dialog
      max-width: 630px

      .modal-content
        border-radius: 25px
        max-height: 285px

        p.tagline
          padding:
            top: 24px
            bottom: 45px
            right: 24px
            left: 24px
          /*font-size: 1.56vw*/
          /*line-height: 2.605vw*/
          font-size: 30px
          line-height: 45px
          color: black
          text-align: center
          margin-bottom: 0
          @include media-breakpoint-down(sm)
            font-size: 20px
            line-height: 30px
            padding:
              right: 5%
              left: 5%

        div.row
          padding:
            bottom: 30px
            right: 27.8439%
            left: 27.8439%
          @include media-breakpoint-down(xs)
            padding:
              right: 15.8439%
              left: 15.8439%
          button
            @extend %btn-img-inside
            img
              width: 64px
              height: 64px
              border: 0
              padding-right: 0
              @include media-breakpoint-down(xs)
                width: 44px
                height: 44px


</style>


