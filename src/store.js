import Vue from 'vue'
import Vuex from 'vuex'
import UAParser from 'ua-parser-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isParticles: false,
    scrollTop: 0,
    projectDetail: null,
    userAgent: new UAParser().getResult(),
  },
  mutations: {
    showParticles: (state) => {
      if (!state.isParticles && state.userAgent.device.type !== 'mobile') {
        window.particlesJS('intro', require('./config/particlesjs-config.json'))
        state.isParticles = true
      }
    },

    updateScrollTop: (state, y) => {
      state.scrollTop = y
    },

    updateProjectDetail: (state, detail) => {
      state.projectDetail = detail
    },
  },
  actions: {},
})
