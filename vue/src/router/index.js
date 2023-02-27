import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueCookie from 'vue-cookie'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(
        '../views/membership/Login.vue'
    )
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(
        '../views/membership/SignUp.vue'
    )
  }
/*,
  {
    path: '*',
    component: () => import(
        '@/views/common/NotFound.vue'
    )
  }
*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*router.beforeEach( async(to, from, next) => {
  if (VueCookie.get('accessToken') === null) {
    if (VueCookie.get('refreshToken') !== null)
      await refreshToken();
  }

  if (to.matched.some(record => record.meta.unauthorized) || VueCookie.get('token')) {
    return next();
  }
})*/

export default router
