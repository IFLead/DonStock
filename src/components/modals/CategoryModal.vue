<template>
  <b-modal ref="category_modal" id="category-modal" hide-header hide-footer centered>
    <p class="tagline">Выберите категории Вашего интернет-магазина</p>
    <div class="form-group">
      <select class="form-control" id="change_category" v-model="selected">
        <option selected disabled hidden>Выберите категории</option>
        <option v-for="category in categories" v-bind:value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
    <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">Close</button>-->
    <div class="back-button">
      <a @click="back">
        <img src="../../assets/back_button_modal.png" alt="Назад">
      </a>
    </div>
    <input class="green-btn" type="button" value="Опубликовать" @click="finish">
  </b-modal>
</template>

<script>
  export default {
    name: 'category-modal',
    props: ['categories'],
    data () {
      return {
        selected: -1
      }
    },
    methods: {
      back () {
        this.$emit('back')
      },
      finish () {
        if (this.category !== -1) {
          this.$emit('finish', this.category)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '~bootstrap/scss/bootstrap'

  #category-modal

    .modal-dialog
      max-width: 908px
      margin: 0 auto
      @include media-breakpoint-down(md)
        max-width: 95%

      .modal-content
        border-radius: 25px
        width: 100%
        max-height: 348px

        .modal-body
          padding: 0

          p.tagline
            font-size: 1.875em
            //30px
            //line-height: 40px
            color: black
            text-align: center
            padding-top: 5.629139%
            // 51px / 906 px
            padding-bottom: 6.622517%
            // 60px / 906px
            margin-bottom: 0
            @include media-breakpoint-down(sm)
              padding-left: 5%
              padding-right: 5%
              font-size: 1.6em
            @include media-breakpoint-down(xs)
              font-size: 1em

          .form-group
            padding-left: 26.600442%
            //241px / 906px
            padding-right: 26.600442%
            //241px / 906px
            margin: 0
            padding-bottom: 7.3951435%
            // 67px / 906px
            @include media-breakpoint-down(xs)
              padding-left: 15%
              padding-right: 15%

            select
              max-width: 426px
              border-radius: 0
              background: transparent url("../../assets/combobox_category.png") no-repeat right
              appearance: none

            .form-control
              width: 100%
              height: 39.5px
              padding: 0
              font-size: 1.5em
              color: #C5C5C5
              border-bottom: 1px solid black
              border-top: none
              border-left: none
              border-right: none
              @include media-breakpoint-down(xs)
                font-size: 0.9em

              option
                font-size: 1em
                //24px
                min-height: 1.5em
                //32px
                border: 1px solid #95989A
                color: black

              option:checked
                background-color: #1DB954

              option:hover
                background-color: #1DB954

          .back-button
            float: left
            //width: 50px
            // height: 50px
            padding-left: 9.052%
            // 82px / 908px = 9.030837%
            padding-bottom: 3.754%
            // 34px / 908px = 3.744493%
            @include media-breakpoint-down(md)
              padding-top: 2%

            img
              width: 50px
              height: 50px
              @include media-breakpoint-down(xs)
                width: 30px
                height: 30px

          .green-btn
            width: 30.023%
            // 260px / 908px = 28.634361%
            height: 60px
            border-radius: 35px
            background-color: $green
            color: white
            float: right
            margin-bottom: 3.312%
            // 30px / 908px = 0.03303965
            margin-right: 3.422%
            // 31px / 908px = 0.03414097
            font-size: 1.875em
            // 30px
            @include media-breakpoint-down(sm)
              font-size: 1.5em
              width: 35%
            @include media-breakpoint-down(xs)
              width: 50%
              height: 30px
              font-size: 1em

</style>


