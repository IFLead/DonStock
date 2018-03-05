// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
// import Account from './components/Account'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
if (document.head.querySelector('meta[name=csrfmiddlewaretoken]')) {
  Vue.http.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name=csrfmiddlewaretoken]').content
}

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
          Vue.util.warn(`Missing required sync-prop: "${key}"`, this)
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
  template: '<App/>',
  components: { App }
})
