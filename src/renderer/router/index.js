import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/pages/home').default
    },
    {
      path: '/init-project',
      name: 'init-project',
      component: require('@/pages/init-project').default
    },
    {
      path: '/hosts',
      name: 'hosts',
      component: require('@/pages/hosts').default
    },
    {
      path: '/nginx',
      name: 'nginx',
      component: require('@/pages/nginx').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
