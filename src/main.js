import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局组件musicItem
import musicItem from '@/components/musicItem'
Vue.component('musicItem', musicItem)

// vant
import '@/utils/vant.js'

// router 
import {router} from '@/router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
