import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home'
import Classroom from '../pages/classroom'
import Eating from '../pages/eating'
import Mine from '../pages/mine'
import Collect from '../pages/collect'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classroom',
      component: Classroom
    },
    {
      path: '/eating',
      component: Eating
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/collect',
      component: Collect
    }
  ]
})
