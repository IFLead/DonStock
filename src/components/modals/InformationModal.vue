<template>
  <b-modal id="information-modal" ref="information_modal" hide-header hide-footer centered>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="container-fluid">
        <div class="row ">
          <div class="main-left col-xs-12 col-sm-6">
            <div class="main-photo">
              <dropzone :include-styling="true" id="main-photo" :options="dropzoneOptions"
                        v-on:vdropzone-sending="sendingEvent">
              </dropzone>
            </div>
            <div class="general-information">
              <div class="gen-lable"><p class="tagline">Основная информация</p></div>
              <b-form-input required type="text" placeholder="Название магазина" v-model="name"></b-form-input>
            </div>
            <div class="description">
              <b-form-textarea required :no-resize="true" :max-rows="4" :rows="5" id="desc"
                               placeholder="Описание магазина" v-model="description"></b-form-textarea>
            </div>
          </div>
          <!--<div class="d-none d-sm-block">-->
          <!--<div class="border">-->
          <!--<img src="../../assets/border.png" alt="Граница">-->
          <!--</div>-->
          <!--</div>-->
          <div class="main-right col-xs-12 col-sm-6">
            <div class="production-photos">
              <!--<div v-for="n in 3" class="row-photos">-->
              <!--<div v-for="m in 3" class="photo">-->
              <!--<div class="icon">-->
              <!--<img src="../../assets/photo-camera.png" alt="Фото продукции">-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->
              <dropzone :include-styling="true" id="other-photos" :options="dropzoneOptions"
                        v-on:vdropzone-sending="sendingEvent">
              </dropzone>
            </div>
            <!--<div class="product-label">-->
            <!--<label>Продукция</label>-->
            <!--</div>-->
            <div class="shop-links">
              <p class="tagline">Ссылки на Ваш магазин</p>
              <b-form-input required type="url" placeholder="Ссылка" v-model="linkOne"></b-form-input>
              <b-form-input type="url" placeholder="Ссылка" v-model="linkTwo"></b-form-input>
              <b-form-input type="url" placeholder="Ссылка" v-model="linkThree"></b-form-input>
            </div>
            <b-button class="green-btn" type="submit">Дальше</b-button>
          </div>
        </div>
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
          thumbnailWidth: 200,
          addRemoveLinks: true,
          dictDefaultMessage: '',
          dictRemoveFile: 'Удалить',
          // Dropzone.prototype.defaultOptions.dictDefaultMessage = "Drop files here to upload";
          // Dropzone.prototype.defaultOptions.dictFallbackMessage = "Your browser does not support drag'n'drop file uploads.";
          // Dropzone.prototype.defaultOptions.dictFallbackText = "Please use the fallback form below to upload your files like in the olden days.";
          // Dropzone.prototype.defaultOptions.dictFileTooBig = "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.";
          // Dropzone.prototype.defaultOptions.dictInvalidFileType = "You can't upload files of this type.";
          // Dropzone.prototype.defaultOptions.dictResponseError = "Server responded with {{statusCode}} code.";
          // Dropzone.prototype.defaultOptions.dictCancelUpload = "Cancel upload";
          // Dropzone.prototype.defaultOptions.dictCancelUploadConfirmation = "Are you sure you want to cancel this upload?";
          // Dropzone.prototype.defaultOptions.dictRemoveFile = "Remove file";
          // Dropzone.prototype.defaultOptions.dictMaxFilesExceeded = "You can not upload any more files.";
          maxFiles: 1
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '~bootstrap/scss/bootstrap'
  @import '~vue2-dropzone/dist/vue2Dropzone.css'

  #main-photo, #other-photos
    font-family: 'Arial', sans-serif
    letter-spacing: 0.2px
    color: black
    height: 100%
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
      width: 100%
      height: 100%
      display: inline-block
      margin: 0

      .dz-image
        height: 100%
        width: 100%

        /*.dz-preview .dz-image > div*/
          /*width: inherit*/
          /*height: inherit*/
          /*border-radius: 50%*/
          /*background-size: contain*/

        img
          height: 100%
          margin: 0 auto

  /*.dz-preview .dz-details*/
    /*color: black*/
    /*transition: opacity .2s linear*/
    /*text-align: center*/

  /*.dz-success-mark, .dz-error-mark, .dz-remove*/
    /*display: none*/

  #information-modal
    padding: 0

    .modal-dialog
      max-width: 1200px
      @include media-breakpoint-down(md)
        width: 100%

      .modal-content
        border-radius: 25px
        width: 100%

        .modal-body
          padding: 0

          .main-left
            padding:
              top: 4%
              right: 6.75%
              bottom: 10.666667%
              left: 7.583333%
            @include media-breakpoint-down(xs)
              padding:
                top: 10%

            .main-photo
              width: 100%
              height: 360px
              margin-bottom: 20px
              @include media-breakpoint-down(md)
                height: 183px

              div.photo
                display: flex
                width: 100%
                height: 100%
                border-radius: 25px
                border: 1px solid #E2E2E2

                div.icon
                  margin: auto
                  width: 84px
                  height: 84px

                  img
                    width: 100%
                    height: 100%

              .label-photo
                margin: 20px auto 0
                width: 160px
                text-align: center
                @include media-breakpoint-down(xs)
                  width: 225%
                  margin-top: 0

                label
                  color: #C5C5C5
                  font-size: 24px
                  line-height: 32px
                  margin-bottom: 0

            .general-information
              width: 100%
              height: 138px
              display: flex
              align-items: flex-end
              flex-direction: column
              @include media-breakpoint-down(md)
                height: 100px

              .gen-lable
                text-align: center
                margin-top: auto
                width: 100%
                @include media-breakpoint-down(xs)
                  padding-bottom: 10px

                .tagline
                  font-size: 30px
                  line-height: 40px
                  color: black
                  padding-bottom: 8.515%
                  margin-bottom: 0
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

              input[type="text"]::-webkit-input-placeholder

            .description
              width: 100%
              margin-top: 11%
              height: 133px
              margin-bottom: 0

            .form-control
              height: 100%
              font-size: 24px
              line-height: 32px
              border: 1px solid black

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
          padding: 4% 7% 3.333333% 7.916667%

          .production-photos
            width: 100%
            height: 360px

            .row-photos
              margin-bottom: 7%
              height: 27.54%

              div.photo
                display: flex
                float: left
                width: 28.5%
                height: 100%
                border-radius: 25px
                border: 1px solid #E2E2E2
                margin-right: 7.24%

                .icon
                  margin: auto
                  width: 23.13px
                  height: 23.13px

                  img
                    width: 100%
                    height: 100%

              .photo:last-child
                margin-right: 0

          .product-label
            margin: 0 auto
            margin-top: 20px
            width: 40%
            text-align: center

            label
              color: #C5C5C5
              font-size: 24px
              line-height: 32px
              margin-bottom: 0

          .shop-links
            width: 100%
            margin-top: 9.21%

            .tagline
              /*justify-content: center !important*/
              font-size: 30px
              line-height: 40px
              color: black
              padding-bottom: 8.22%
              // 35px
              margin-bottom: 0
              text-align: center
              @include media-breakpoint-down(sm)
                font-size: 17px
                line-height: 25px

            p
              margin-bottom: 0

            input[type="url"]
              width: 100%
              border-top: none
              border-right: none
              border-left: none
              border-bottom: 1px solid black
              font-size: 24px
              line-height: 32px
              padding-bottom: 6px
              outline: none
              margin-bottom: 10%
              background: transparent url("../../assets/link.png") no-repeat right
              background-position: 98%
              @include media-breakpoint-down(xs)
                font-size: 14px
                background-size: 18px

            input[type="text"]::-webkit-input-placeholder
              color: #C5C5C5

            input[type="text"]:last-child
              margin-bottom: 0px

          .green-btn
            width: 61.032864%
            height: 60px
            border-radius: 35px
            background-color: $green
            color: white
            font-size: 30px
            margin-left: 37.945%

</style>


