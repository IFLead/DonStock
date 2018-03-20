import Vue from 'vue'
import router from '../../router'
import {VueAuthenticate} from 'vue-authenticate'
import axios from 'axios/index'
import VueAxios from 'vue-axios'

// initial state
const providers = {'google': 'google-oauth2', 'facebook': 'facebook', 'vk': 'vk-oauth2'}

Vue.use(VueAxios, axios.create({baseURL: 'http://localhost:8000'}))
const vueAuth = new VueAuthenticate(Vue.axios, {
  // baseUrl: 'http://localhost:4000',
  // bindRequestInterceptor: function () {
  //   this.$http.interceptors.request.use((config) => {
  //     // if (this.isAuthenticated()) {
  //     //   config.headers['Authorization'] = [
  //     //     this.options.tokenType, this.getToken()
  //     //   ].join(' ')
  //     // } else {
  //     //   delete config.headers['Authorization']
  //     // }
  //     return config
  //   })
  // },
  logoutUrl: 'api/logout/session/',
  providers: {
    google: {
      clientId: '144970166473-2s4duvd0q88q1apm43k7fkvlr7ips0i7.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8001/',
      url: 'http://localhost:8000/api/login/social/token_user/google/'
    },
    facebook: {
      clientId: '1887275517980140',
      redirectUri: 'http://test.c:8001/',
      url: 'http://test.c:8000/api/login/social/token_user/facebook/'
    },
    vk: {
      name: 'vk',
      clientId: '6331649',
      redirectUri: 'http://localhost:8001/',
      url: 'http://localhost:8000/api/login/social/token_user/vk/',
      authorizationEndpoint: 'http://oauth.vk.com/authorize',
      popupOptions: {width: 660, height: 370},
      // scope: ['email'],
      oauthType: '2.0'
    }
  }

})

const state = {
  authenticated: false,
  username: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined
}

// getters
const getters = {
  isAuthenticated: state => state.authenticated,
  username: state => state.username,
  firstName: state => state.firstName,
  lastName: state => state.lastName,
  email: state => state.email
}

// mutations
const mutations = {
  setAuthenticated (state, payload) {
    state.authenticated = payload
  },

  setUsername (state, payload) {
    if (payload === undefined) {
      Vue.$storage.remove('username')
    } else {
      Vue.$storage.set('username', payload)
    }
    state.username = payload
  },

  setFirstName (state, payload) {
    if (payload === undefined) {
      Vue.$storage.remove('firstName')
    } else {
      Vue.$storage.set('firstName', payload)
    }
    state.firstName = payload
  },

  setLastName (state, payload) {
    if (payload === undefined) {
      Vue.$storage.remove('lastName')
    } else {
      Vue.$storage.set('lastName', payload)
    }
    state.lastName = payload
  },

  setEmail (state, payload) {
    if (payload === undefined) {
      Vue.$storage.remove('email')
    } else {
      Vue.$storage.set('email', payload)
    }
    state.email = payload
  }
}

// actions
const actions = {
  checkAuthenticated (context) {
    context.commit('setAuthenticated', vueAuth.isAuthenticated())
  },
  loadCredentials (context) {
    context.commit('setUsername', Vue.$storage.get('username'))
    context.commit('setFirstName', Vue.$storage.get('firstName'))
    context.commit('setLastName', Vue.$storage.get('lastName'))
    context.commit('setEmail', Vue.$storage.get('email'))
  },
  auth (context, provider) {
    vueAuth.authenticate(provider, {provider: providers[provider]}).then(function (response) {
      context.commit('setUsername', response.data.username)
      context.commit('setFirstName', response.data.first_name)
      context.commit('setLastName', response.data.last_name)
      context.commit('setEmail', response.data.email)

      context.dispatch('checkAuthenticated')

      router.push('account')
    }).catch(function (error) {
      console.log(error)
      context.dispatch('checkAuthenticated')
    })
  },
  logout (context) {
    vueAuth.logout().then(() => {
      context.commit('setUsername', undefined)
      context.commit('setFirstName', undefined)
      context.commit('setLastName', undefined)
      context.commit('setEmail', undefined)
      context.dispatch('checkAuthenticated')
    }, () => {
      context.commit('setUsername', undefined)
      context.commit('setFirstName', undefined)
      context.commit('setLastName', undefined)
      context.commit('setEmail', undefined)
      context.dispatch('checkAuthenticated')
    })
    router.push('/')
  },
  checkRedirect: function (context, payload) {
    context.dispatch('checkToken')
    if (context.getters.isAuthenticated) {
      let path = true
      payload.redirect({path: path})
    } else {
      router.push('/')
    }
  },
  checkToken: function (context) {
    if (context.getters.isAuthenticated) {
      Vue.axios.post('api/check/', {'token': vueAuth.getToken()}).then((response) => { // this.$auth.getToken()
        if (!response.data.status) {
          vueAuth.logout()
        }
      }).catch(function (error) {
        console.log(error)
      })
      context.dispatch('checkAuthenticated')
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
