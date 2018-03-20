import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Categories from '@/components/Categories'
// import Cards from '@/components/Cards'
import Home from '@/components/Home'
import Account from '@/components/Account'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueAxios from 'vue-axios'
// import axios from 'axios'
// import store from '../store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
      // beforeEnter: (to, from, next) => {
      //   store.dispatch('checkRedirect', {redirect: next})
      //   // authMixin.methods.checkToken('google', next)
      // }
    }
  ]
})
