<template>
  <div>
    <!--<b-btn @click="start" centered>Создать магазин</b-btn>-->
    <category-modal ref="category_modal" v-on:back="back" v-on:finish="finish"
                    :categories="categories"></category-modal>
    <information-modal ref="information_modal" v-on:next="next"></information-modal>
  </div>
</template>

<script>
  import CategoryModal from './modals/CategoryModal'
  import InformationModal from './modals/InformationModal'

  class Shop {
    constructor (name, description, linkOne, linkTwo, linkThree) {
      this.name = name
      this.description = description
      this.linkOne = linkOne
      this.linkTwo = linkTwo
      this.linkThree = linkThree
      this.category = -1
    }
  }

  export default {
    components: {
      CategoryModal,
      InformationModal
    },
    name: 'shop',
    sync: ['newShop'],
    props: ['categories'],
    methods: {
      start () {
        this.$refs.information_modal.$refs.information_modal.show()
      },
      next (data) {
        const {
          name, description, linkOne, linkTwo, linkThree
        } = data
        this.newShop = new Shop(name, description, linkOne, linkTwo, linkThree)
        this.$refs.information_modal.$refs.information_modal.hide()
        this.$refs.category_modal.$refs.category_modal.show()
      },
      back () {
        this.$refs.category_modal.$refs.category_modal.hide()
        this.$refs.information_modal.$refs.information_modal.show()
      },
      finish (category) {
        this.newShop.category = category
      }
    }
  }
</script>


