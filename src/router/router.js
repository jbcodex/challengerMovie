import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import Cadastro from '@/views/Cadastro.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/login', component: Login},
        {path:'/cadastro', component: Cadastro},
        {path:'/home', component: Home},
        {path:'/', component: Home}
      ]

})