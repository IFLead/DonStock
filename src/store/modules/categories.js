import Vue from 'vue'
// initial state
// shape: [{ id, name}]
const state = {
  categories: []
}

// getters
const getters = {
  allCategories: state => state.categories,
  selectedCategories: state => state.categories.filter(value => value.selected === true)
}

// mutations
const mutations = {
  appendCategories (state, payload) {
    state.categories.push(...payload)
  }
}

// actions
const actions = {
  loadCategories (context) {
    Vue.axios.get('api/categories/?format=json').then((response) => {
      Vue.$storage.set('categories', response.data)
      context.commit('appendCategories', response.data)
    }, () => {
      // this.categories = JSON.parse('[{"id":1,"name":"Одежда"},{"id":2,"name":"Электроника"},{"id":3,"name":"Подарки"},{"id":4,"name":"Косметика"},{"id":5,"name":"Обувь"},{"id":6,"name":"Аксессуары"},{"id":7,"name":"Спорт"}]')
      context.commit('appendCategories', Vue.$storage.get('categories'))
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
