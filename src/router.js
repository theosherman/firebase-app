import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Secure from '@/views/Secure'
import Login from '@/views/Login'
import Account from '@/views/Account'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/secure', component: Secure },
    { path: '/login', component: Login },
    { path: '/account', component: Account },
  ]
})
