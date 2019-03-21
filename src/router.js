import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
Vue.use(Router)

export function createRouter(){
  return new Router({
    mode: 'history', 
    routes: [
      {
        path:'/',
        redirect:'home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ]
  })
}

