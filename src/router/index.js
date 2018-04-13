import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Create from '@/components/Shared/Create'

import Articoli from '@/components/Articolo/Articoli'
import CreateArticolo from '@/components/Articolo/CreateArticolo'
import Articolo from '@/components/Articolo/Articolo'

import Places from '@/components/Place/Places'
import CreatePlace from '@/components/Place/CreatePlace'
import Place from '@/components/Place/Place'
import PositionPlace from '@/components/Place/PositionPlace'

import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import DataUser from '@/components/User/DataUser'
import PositionUser from '@/components/User/PositionUser'
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
      path: '/places',
      name: 'Places',
      component: Places
    },
    {
      path: '/new/:id',
      name: 'Create',
      props: true,
      component: Create,
      //beforeEnter: AuthGuard
    },
    {
      path: '/place/new/:id',
      name: 'CreatePlace',
      props: true,
      component: CreatePlace,
      beforeEnter: AuthGuard
    },
    {
      path: '/places/:id',
      name: 'Place',
      props: true,
      component: Place
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
    },
    {
      path: '/dataUser',
      name: 'DataUser',
      component: DataUser,
      beforeEnter: AuthGuard      
    },
    {
      path: '/positionUser',
      name: 'PositionUser',
      component: PositionUser,
      beforeEnter: AuthGuard      
    },
    {
      path: '/positionPlace',
      name: 'PositionPlace',
      component: PositionPlace,
      //beforeEnter: AuthGuard      
    }
  ],
  mode: 'history'
})
