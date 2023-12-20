// File:index.js
import { createRouter, createWebHistory } from 'vue-router'
import LayoutComponent from '../views/LayoutComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path:'/',
      name: 'LayoutComponent',
      component:LayoutComponent,
       children:[
        {
          path:'build',
          component:()=>import('../components/build.vue')
        },
        {
          alias:'',
          path:'front',
          name:'front',
          component:()=>import('../components/frontpage.vue')
        },
        {
          path:'collect',
        component:()=>import('../components/collect.vue')
      }
       ]
    },
    {
      path:'/logi',
      name:'logi',
      component:()=>import('../components/logi.vue')
    },
    {
      path:'/sign',
      name:'sign',
      component:()=>import('../components/icons/sign.vue')
    },
    {
      path:'/test',
      name:'test',
      component:()=>import('../components/test.vue')
    }
  ]
})

export default router
