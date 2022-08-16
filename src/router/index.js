import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// router components
import layout from '@/views/layout'
import player from '@/views/play'
import home from '@/views/home'
import search from '@/views/search'

const routes = [
  {path: '', redirect: '/layout/home'},
  {
    name: 'layout',
    path: '/layout',
    component: layout,
    children: [
      { name: 'home', path: 'home', component: home, meta: {title: '首頁'} },
      { name: 'search', path: 'search', component: search, meta: {title: '搜索'} },
    ]
  },

  { name: 'player', path: '/player', component: player }
]

export const router = new VueRouter({
  routes 
})

