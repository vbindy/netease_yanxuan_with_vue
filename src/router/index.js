/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../components/routePage/FirstPage.vue'
import Classify from '../components/routePage/Classify.vue'
import Discernment from '../components/routePage/Discernment.vue'
import ShoppingCar from '../components/routePage/ShoppingCar.vue'
import Profile from '../components/routePage/Profile.vue'
import NotFound from '../components/page/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/firstpage'
    },
    {
      path: '/firstpage',
      component: FirstPage,
    },

    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/discernment',
      component: Discernment,
    },
    {
      path: '/shoppingcar',
      component: ShoppingCar,
    },
    {
      path: '/profile',
      component: Profile,
    },
 {
      path: '/*',
      component: NotFound,
    }





  ]
})

