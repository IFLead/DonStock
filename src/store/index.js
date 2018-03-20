import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import categories from './modules/categories'
import shops from './modules/shops'
import newShop from './modules/newShop'
import online from './modules/online'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let store = new Vuex.Store({
  modules: {
    shops,
    categories,
    authentication,
    online,
    newShop
  },
  strict: debug,
  plugins: debug ? [] : []
})

window.addEventListener('online', store.dispatch('updateStatus'))
window.addEventListener('offline', store.dispatch('updateStatus'))

export default store
