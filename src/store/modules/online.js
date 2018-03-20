const state = {
  online: true
}

// getters
const getters = {
  isOnline: state => state.online
}

// mutations
const mutations = {
  setStatus (state, payload) {
    state.online = payload
  }
}

// actions
const actions = {
  updateStatus: function (context) {
    if (typeof window.navigator.onLine === 'undefined') {
      // If the browser doesn't support connection status reports
      // assume that we are online because most apps' only react
      // when they now that the connection has been interrupted
      context.commit('setStatus', true)
    } else {
      context.commit('setStatus', window.navigator.onLine)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
