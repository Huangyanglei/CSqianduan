import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Suggest from "../components/Suggest";
import User from "../components/User";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/sugg',
      component: Suggest
    },
    {
      path: '/user',
      component: User
    }
  ]
})
