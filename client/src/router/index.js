import { createRouter, createWebHistory } from 'vue-router'
import Store from '../store/index'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    meta: {requiresAuth: true},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/search',
    name: 'Search',
    meta: {requiresAuth: true},
    component: () => import('../views/Search.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: {requiresAuth: true},
    component: () => import('../views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = Store.state.isUserLoggedIn;
  if(requiresAuth && !isAuthenticated){
    next({path: "/"})
  }
  else{
    next();
  }
})

export default router
