import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Categories from '@/components/Categories'
// import Cards from '@/components/Cards'
import Main from '@/components/Main'
import Account from '@/components/Account'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
