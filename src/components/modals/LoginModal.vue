<template>
  <b-modal class="login-modal" :id="id" hide-header hide-footer centered>
    <p class="tagline">
      <slot></slot>
    </p>
    <div class="row justify-content-between">
      <a href="/api/auth/login/vk-oauth2">
        <img src="../../assets/Add_shop_vk.png" alt="VK">
      </a>
      <a href="/api/auth/login/facebook">
        <img src="../../assets/Add_shop_fb.png" alt="Facebook">
      </a>
      <a href="/api/auth/login/google-plus">
        <img src="../../assets/Add_shop_google.png" alt="Google">
      </a>
    </div>
  </b-modal>
</template>

<script>
  export default {
    name: 'add-modal',
    props: ['id']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '~bootstrap/scss/bootstrap'

  .login-modal
    .modal-dialog
      max-width: 630px

      .modal-content
        border-radius: 25px
        max-height: 285px

        p.tagline
          padding-top: 24px
          padding-bottom: 45px
          padding-right: 24px
          padding-left: 24px
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
            padding-right: 5%
            padding-left: 5%

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
            padding-right: 0
            @include media-breakpoint-down(xs)
              width: 44px
              height: 44px


</style>


