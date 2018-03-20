// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import Storage from 'vue-web-storage'
import store from './store'
import router from './router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Storage)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.mixin({
  beforeCreate () {
    const sync = this.$options.sync
    if (sync) {
      if (!this.$options.computed) {
        this.$options.computed = {}
      }
      const attrs = Object.keys(this.$attrs)
      sync.forEach((key) => {
        if (!attrs.includes(key)) {
          Vue.util.warn(`Missing required sync-prop: '${key}'`, this)
        }
        this.$options.computed[key] = {
          get () {
            return this.$attrs[key]
          },
          set (val) {
            this.$emit(`update:${key}`, val)
          }
        }
      })
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
