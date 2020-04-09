import Vue from 'vue'
import Router from 'vue-router'
import Write from '../components/Write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: {
        template: `<h1>登录页面</h1>
        `
      }
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: {
        template: `
          <h1>sign_up page</h1>
        `
      }
    },
    {
      path: '/write',
      name: 'write',
      component: Write
    }
  ]
})
