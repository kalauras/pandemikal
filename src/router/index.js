import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articoli from '@/components/Articolo/Articoli'
import CreateArticolo from '@/components/Articolo/CreateArticolo'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Articolo from '@/components/Articolo/Articolo'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articoli',
      name: 'Articoli',
      component: Articoli
    },
    {
      path: '/articolo/new',
      name: 'CreateArticolo',
      component: CreateArticolo,
      beforeEnter: AuthGuard
    },
    {
      path: '/articoli/:id',
      name: 'Articolo',
      props: true,
      component: Articolo
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
