import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('./components/home/home.vue').default,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: require('./components/home/home.vue').default,
    },
  ],
})
