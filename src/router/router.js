import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login/Index.vue'
import Dashboard from '@/components/Dashboard/Index.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/login', component: Login},
        {path:'/dashboard', component: Dashboard},
      ]

})