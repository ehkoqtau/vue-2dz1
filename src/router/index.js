import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Eod from '@/components/Eod'
import PencarianBarang from '@/components/PencarianBarang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cek_eod',
      name: 'Eod',
      component: Eod
    },
    {
      path: '/pencarian_barang',
      name: 'PencarianBarang',
      component: PencarianBarang
    }]
})
