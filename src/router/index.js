import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Categories from '@/components/Categories'
// import Cards from '@/components/Cards'
import App from '@/App'
import Account from '@/components/Account'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
