<template>
  <div>
    <b-btn @click="start" centered>Создать магазин</b-btn>
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
    },
    mounted () {

    }

  }

  // 'id': 2,
  //   'photos': [{'url': 'http://localhost:8000/media/shops-images/2018/01/13/Categories_-_click-image7.jpg'}],
  //   'name': 'Pizza Store',
  //   'link_one': 'https://vk.com/dadoem',
  //   'link_two': 'https://www.instagram.com/lisapeachy',
  //   'link_three': 'https://www.facebook.com/STPeachy/',
  //   'likes': 0,
  //   'dislikes': 0,
  //   'rating': '0.00',
  //   'user': 1,
  //   'categories': [3]
</script>


