import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import TheFirst from '@/components/TheFirst'
import TheFirst from '@/router/first'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/first',
    //   name: 'TheFirst',
    //   component: TheFirst
    // }
    ...TheFirst
  ]
})
