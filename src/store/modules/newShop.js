import Vue from 'vue'

const state = {
  name: '',
  description: '',
  linkOne: '',
  linkTwo: '',
  linkThree: '',
  categories: []
}

// getters
const getters = {
  newShopName: state => state.name,
  newShopDescription: state => state.description,
  newShopLinkOne: state => state.linkOne,
  newShopLinkTwo: state => state.linkTwo,
  newShopLinkThree: state => state.linkThree,
  newShopCategories: state => state.categories
}

// mutations
const mutations = {
  setName (state, payload) {
    state.name = payload
  },
  setDescription (state, payload) {
    state.description = payload
  },
  setLinkOne (state, payload) {
    state.linkOne = payload
  },
  setLinkTwo (state, payload) {
    state.linkTwo = payload
  },
  setLinkThree (state, payload) {
    state.linkThree = payload
  },
  setCategories (state, payload) {
    state.categories = payload
  }
}

// actions
const actions = {
  createShop: function (context) {
    Vue.axios.post('api/add_shop/', {
      'name': context.getters.newShopName,
      'description': context.getters.newShopDescription,
      'link_one': context.getters.newShopLinkOne,
      'link_two': context.getters.newShopLinkTwo,
      'link_three': context.getters.newShopLinkThree,
      'categories': context.getters.newShopCategories,
      'token': context.getters.token
    }).then((response) => {
      console.log('Я отправил!')
    }).catch(function (error) {
      console.log(error)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
