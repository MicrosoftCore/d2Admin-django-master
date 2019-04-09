import { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
/**
 * @param {meta<T>}
 * @type {string} title
 * @type {boolean} keepAlive
 */
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/d2Admin',
    name: 'd2Admin',
    component: () => import('@/views/d2.vue'),
  },
];

export default routes;
