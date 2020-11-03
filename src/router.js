import Vue from 'vue'
import Router from 'vue-router'
import ListHandler from './components/ListHandler.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'listHandler',
            component: ListHandler
        },
        {
            path: '/monitorering/:id',
            name: 'monitorering',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./components/MonitoreringHandler.vue')
        },
        {
            path: '/monitoreringstillfalle/:id',
            name: 'monitoreringstillfalle',
            component: () => import('./components/MonitoreringstillfalleHandler.vue')
        }
    ]
})