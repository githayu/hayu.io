import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store'
import Initialize from './initialize'

Vue.config.productionTip = false

Initialize.tagManager()
Initialize.typekit()

new Vue({
  router,
  store,
  render: (h) => h(require('./App.vue').default),
}).$mount('#app')
