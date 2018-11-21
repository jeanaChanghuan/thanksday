import Vue from 'vue'
import Router from 'vue-router'
import HelloSwiper from '@/components/HelloSwiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloSwiper',
      component: HelloSwiper
    }
  ]
})
