<template>
  <b-modal id="information-modal" ref="information_modal" hide-header hide-footer centered>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="main-left">
        <div class="main-photo">
          <dropzone :include-styling="false" id="main-photo" :options="dropzoneOptions" v-on:vdropzone-sending="sendingEvent">
          </dropzone>
          <!--<div class="photo">-->
          <!--<div class="icon">-->
          <!--<img src="../../assets/photo-camera.png" alt="Главное фото">-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="label-photo">-->
          <!--<label>Главное фото</label>-->
          <!--</div>-->
        </div>
        <div class="general-information">
          <div class="gen-lable"><p class="tagline">Основная информация</p></div>
          <b-form-input required type="text" placeholder="Название магазина" v-model="name"></b-form-input>
        </div>
        <div class="description">
          <!--<div class="description-lable"><p class="tagline">Описание</p></div>-->
          <!--<input type="text" placeholder="Введите описание">-->
          <!--<textarea></textarea>-->
          <div class="form-group">
            <!--<label for="desc">Описание</label>-->
            <b-form-textarea required :no-resize="true" :max-rows="4" :rows="5" id="desc"
                             placeholder="Описание магазина" v-model="description"></b-form-textarea>
          </div>
        </div>
      </div>
      <div class="d-none d-sm-block">
        <div class="border">
          <img src="../../assets/border.png" alt="Граница">
        </div>
      </div>
      <div class="main-right">
        <div class="product">
          <div class="production-photos">
            <div v-for="n in 3" class="row-photos">
              <div v-for="m in 3" class="photo">
                <div class="icon">
                  <img src="../../assets/photo-camera.png" alt="Фото продукции">
                </div>
              </div>
            </div>
          </div>
          <div class="product-label">
            <label>Продукция</label>
          </div>
        </div>
        <div class="shop-links">
          <p class="tagline">Ссылки на Ваш магазин</p>
          <b-form-input required type="url" placeholder="Ссылка" v-model="linkOne"></b-form-input>
          <b-form-input type="url" placeholder="Ссылка" v-model="linkTwo"></b-form-input>
          <b-form-input type="url" placeholder="Ссылка" v-model="linkThree"></b-form-input>
        </div>
        <b-button class="green-btn" type="submit">Дальше</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
  import Dropzone from 'vue2-dropzone'

  export default {
    name: 'information-modal',
    components: {
      Dropzone
    },
    methods: {
      sendingEvent () { // file, xhr, formData
        console.log('Sended')
      },
      onSubmit (e) {
        e.preventDefault()
        alert(JSON.stringify(this.form))
        this.$emit('next', {
          name: this.name,
          description: this.description,
          linkOne: this.linkOne,
          linkTwo: this.linkTwo,
          linkThree: this.linkThree
        })
      },
      onReset (e) {
        e.preventDefault()
        /* Reset our form values */
        this.name = ''
        this.description = ''
        this.linkOne = ''
        this.linkTwo = ''
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      template () {
        return `<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                    <div class="dz-size"><span data-dz-size></span></div>
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>
        `
      }
    },
    data () {
      return {
        // form
        name: '',
        description: '',
        linkOne: '',
        linkTwo: '',
        linkThree: '',
        // other
        show: true,
        dropzoneOptions: {
          url: 'https://httpbin.org/post',
          // autoProcessQueue: false,
          previewTemplate: this.template(),
          maxFiles: 1
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '~bootstrap/scss/bootstrap'

  #main-photo
    //background-color: orange
    font-family: 'Arial', sans-serif
    letter-spacing: 0.2px
    color: black
    //transition: background-color .2s linear
    height: 86.315789%
    width: 100%
    background-image: url("../../assets/photo-camera.png")
    background-origin: content-box
    background-size: 84px 84px
    background-repeat: no-repeat
    background-position: center center
    border-radius: 25px
    border: 1px solid #E2E2E2

    &.dz-started
      background-image: none

    .dz-preview
      width: 160px
      display: inline-block

    .dz-preview .dz-image
      width: 80px
      height: 80px
      margin-left: 40px
      margin-bottom: 10px

    .dz-preview .dz-image > div
      width: inherit
      height: inherit
      border-radius: 50%
      background-size: contain

    .dz-preview .dz-image > img
      width: 100%

    .dz-preview .dz-details
      color: black
      transition: opacity .2s linear
      text-align: center

    .dz-success-mark, .dz-error-mark, .dz-remove
      display: none

  #information-modal

    .modal-dialog
      margin: 0 auto
      //max-width: 1200px
      max-width: 62.5%
      // 1200px / 1920px
      @include media-breakpoint-down(lg)
        max-width: 85%
      @include media-breakpoint-down(md)
        max-width: 95%
      @include media-breakpoint-down(sm)
        max-width: 98%
      @include media-breakpoint-down(xs)
        max-width: 70%
      @media screen and (max-width: 450px)
        max-width: 90%

      .modal-content
        border-radius: 25px
        width: 100%
        //max-height: 950px
        max-height: 87.962963%
        // 950px / 1080px

        .modal-body
          padding: 0

          .main-left
            float: left
            width: 34.5%
            // 414px
            // 152px / 1200px = 12%
            // 91px / 1200px = 7.583333%
            margin: 6.333333% 6.75% 12.666667% 7.583333%
            // 81px / 1200px = 6.75%
            @include media-breakpoint-down(xs)
              margin: 0

            .main-photo
              width: 100%
              height: 380px
              @media screen and (max-width: 1500px)
                margin-bottom: -90px
              @media screen and (max-width: 1300px)
                margin-bottom: -150px
              @include media-breakpoint-down(sm)
                margin-bottom: -180px
              @include media-breakpoint-down(xs)
                margin: 20px 32.41% 0
                height: 190px

                div.photo
                  display: flex
                  width: 100%
                  height: 86.315789%
                  // 328px / 380px
                  border-radius: 25px
                  border: 1px solid #E2E2E2
                  @media screen and (max-width: 1500px)
                    height: 70%
                  @media screen and (max-width: 1300px)
                    height: 55%
                  @include media-breakpoint-down(sm)
                    height: 47%
                  @include media-breakpoint-down(xs)
                    width: 225%
                    height: 90%

                    div.icon
                      margin: auto
                      width: 84px
                      height: 84px
                      //margin-left: 39.855072% // 165px / 414px
                      //margin-top: 37.195122% // 122px / 328px
                      //margin-bottom: 37.195122% // 122px / 328px
                      @media screen and (max-width: 1300px)
                        width: 50px
                        height: 50px

                      img
                        width: 100%
                        height: 100%

              .label-photo
                margin: 20px auto 0
                width: 160px
                text-align: center
                @media screen and (max-width: 1500px)
                  margin-top: 10px
                @media screen and (max-width: 1300px)
                  margin-top: 5px
                @include media-breakpoint-down(xs)
                  width: 225%
                  margin-top: 0

                label
                  color: #C5C5C5
                  font-size: 24px
                  line-height: 32px
                  //padding-top: 20px
                  //padding-left: 222px
                  margin-bottom: 0
                  @media screen and (max-width: 1500px)
                    font-size: 20px
                  @media screen and (max-width: 1300px)
                    font-size: 16px

            .general-information
              width: 100%
              height: 100%
              // 116.5px
              margin-top: 12.165%
              // 52px
              //margin-left: 91px
              @include media-breakpoint-down(xs)
                width: 225%
                margin-right: 32.41%
                margin-left: 32.41%
                margin-top: 30%

              .gen-lable
                text-align: center
                @include media-breakpoint-down(xs)
                  padding-bottom: 10px

                .tagline
                  /*justify-content: center !important*/
                  font-size: 30px
                  line-height: 40px
                  color: black
                  padding-bottom: 8.515%
                  // 35px
                  margin-bottom: 0
                  @media screen and (max-width: 1500px)
                    font-size: 23px
                  @media screen and (max-width: 1300px)
                    font-size: 20px
                  @include media-breakpoint-down(sm)
                    font-size: 17px
                    line-height: 25px
                  @include media-breakpoint-down(xs)
                    padding-bottom: 1%

                p
                  margin-bottom: 0

              input[type="text"]
                width: 100%
                border-top: none
                border-right: none
                border-left: none
                border-bottom: 1px solid black
                font-size: 24px
                line-height: 32px
                padding-bottom: 10px
                padding-left: 10px
                outline: none
                @media screen and (max-width: 1500px)
                  font-size: 20px
                  padding-bottom: 3px
                @media screen and (max-width: 1300px)
                  font-size: 16px
                  padding-bottom: 0
                @include media-breakpoint-down(xs)
                  font-size: 14px

              input[type="text"]::-webkit-input-placeholder
            //todo: change this
                            color: #C5C5C5

            .description
              width: 100%
              margin-top: 11%
              @include media-breakpoint-down(xs)
                width: 225%
                margin-right: 32.41%
                margin-left: 32.41%
                margin-top: 20%

            .form-group
              margin-bottom: 0
              height: 133px
              @media screen and (max-width: 1500px)
                height: 112px
              @media screen and (max-width: 1300px)
                height: 102px
              @include media-breakpoint-down(lg)
                height: 111px
              @include media-breakpoint-down(md)
                height: 102px
              @include media-breakpoint-down(sm)
                height: 95px

              .form-control
                height: 100%
                font-size: 24px
                line-height: 32px
                border: 1px solid black
                @media screen and (max-width: 1500px)
                  font-size: 20px
                  line-height: 28px
                @media screen and (max-width: 1300px)
                  font-size: 16px
                @include media-breakpoint-down(xs)
                  font-size: 14px

              .form-control:focus::-webkit-input-placeholder
                color: transparent
                transition: opacity 0.3s ease

              .form-control::-webkit-input-placeholder
                color: #C5C5C5

          .border
            float: left
            margin-top: 18px
            @media screen and (max-width: 1500px)
              height: 700px
            @media screen and (max-width: 1300px)
              height: 600px
            @include media-breakpoint-down(sm)
              height: 480px

            img
              height: 100%

          .main-right
            float: left
            width: 35.5%
            //width: 426px
            margin-left: 7.916667%
            // 95px / 1200px = 7.916667%
            margin-right: 7%
            // 84px / 1200px = 7%
            margin-top: 6.333333%
            // 76px / 1200px = 6.333333%
            margin-bottom: 3.333333%
            // 40px / 1200px = 3.333333%
            @include media-breakpoint-down(xs)
              float: none
              margin-left: 0
              margin-right: 0
              margin-top: 0
              margin-bottom: 0

            .product
              //margin-top: 76px
              width: 97.197183%
              // 414.06px / 426px
              height: 380px
              @media screen and (max-width: 1500px)
                margin-bottom: -90px
              @media screen and (max-width: 1300px)
                margin-bottom: -150px
              @include media-breakpoint-down(sm)
                margin-bottom: -180px
              @include media-breakpoint-down(xs)
                margin: 470px 32.41% 0
                height: 170px
                width: 220%

              .production-photos
                width: 100.3%
                // 414.06px
                height: 86.315789%
                // 328px / 380px
                @media screen and (max-width: 1500px)
                  height: 70%
                @media screen and (max-width: 1300px)
                  height: 55%
                @include media-breakpoint-down(sm)
                  height: 46%
                @include media-breakpoint-down(xs)
                  height: 100%

                .row-photos
                  margin-bottom: 7%
                  // 29px
                  height: 27.54%
                  // 29px

                  div.photo
                    display: flex
                    float: left
                    width: 28.5%
                    // 118.02px
                    height: 100%
                    // 90.33px
                    border-radius: 25px
                    border: 1px solid #E2E2E2
                    margin-right: 7.24%
                    // 30px
                    @media screen and (max-width: 1300px)
                      border-radius: 15px
                    @include media-breakpoint-down(sm)
                      border-radius: 10px

                    .icon
                      // margin-left: 40.874%
                      // margin-right: 40.874%
                      //margin-top: 26.016%
                      //margin-bottom: 26.016%
                      //margin: 0 auto
                      margin: auto
                      width: 23.13px
                      // 19.82%
                      height: 23.13px
                      // 19.82%

                      img
                        width: 100%
                        height: 100%

                  .photo:last-child
                    margin-right: 0px

              .product-label
                margin: 0 auto
                margin-top: 20px
                width: 40%
                text-align: center
                @media screen and (max-width: 1500px)
                  margin-top: 10px
                @media screen and (max-width: 1300px)
                  margin-top: 5px

                label
                  color: #C5C5C5
                  font-size: 24px
                  line-height: 32px
                  //padding-top: 20px
                  //padding-left: 222px
                  margin-bottom: 0px
                  @media screen and (max-width: 1500px)
                    font-size: 20px
                  @media screen and (max-width: 1300px)
                    font-size: 16px

            .shop-links
              width: 100%
              // 426px
              //height: 300px // 289px
              margin-top: 12.21%
              // 52px
              margin-bottom: 12.21%
              // 52px
              @include media-breakpoint-down(xs)
                width: 220%
                margin-top: 65px
                margin-bottom: 0
                margin-left: 32.41%
                margin-right: 32.41%

              .tagline
                /*justify-content: center !important*/
                font-size: 30px
                line-height: 40px
                color: black
                padding-bottom: 8.22%
                // 35px
                margin-bottom: 0px
                text-align: center
                @media screen and (max-width: 1500px)
                  font-size: 23px
                @media screen and (max-width: 1300px)
                  font-size: 20px
                @include media-breakpoint-down(sm)
                  font-size: 17px
                  line-height: 25px

              p
                margin-bottom: 0px

              input[type="url"]
                width: 100%
                // 426px
                border-top: none
                border-right: none
                border-left: none
                border-bottom: 1px solid black
                font-size: 24px
                line-height: 32px
                padding-bottom: 10px
                outline: none
                margin-bottom: 10.8%
                // 46px
                background: transparent url("../../assets/link.png") no-repeat right
                background-position: 98%
                // 385px
                @media screen and (max-width: 1500px)
                  font-size: 20px
                  padding-bottom: 3px
                @media screen and (max-width: 1300px)
                  font-size: 16px
                  padding-bottom: 0px
                  background-size: 20px
                @include media-breakpoint-down(xs)
                  font-size: 14px
                  background-size: 18px

              input[type="text"]::-webkit-input-placeholder
                color: #C5C5C5

              input[type="text"]:last-child
                margin-bottom: 0px

            .green-btn
              width: 61.032864%
              // 260px
              height: 60px
              border-radius: 35px
              background-color: $green
              color: white
              font-size: 30px
              margin-left: 37.945%
              // 166px
              //margin-bottom: 52px
              @media screen and (max-width: 1500px)
                font-size: 24px
                height: 50px
              @media screen and (max-width: 1300px)
                font-size: 20px
                height: 45px
              @include media-breakpoint-down(sm)
                font-size: 18px
              @include media-breakpoint-down(xs)
                margin-top: 20px
                margin-left: 160%
                margin-right: 32%
                margin-bottom: 20px
                font-size: 17px
                width: 100%
                height: 100%
</style>


