import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

import LandingPage from './components/LandingPage.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Verification from './components/Verification.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/verification', name: 'Verification', component: Verification },
    {
        path: '/user-panel',
        component: UserPanel,
        meta: { requiresAuth: true, role: 'user' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const auth = getAuth();
  
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // If user is authenticated and the route requires authentication, proceed.
        if (to.matched.some(record => record.meta.requiresAuth)) {
          next();
        } else {
          // Redirect authenticated users from public pages to the home page.
          next({ path: '/user-home' });
        }
      } else if (to.matched.some(record => record.meta.requiresAuth)) {
        // Redirect unauthenticated users to the login page if trying to access protected pages.
        next({ path: '/login' });
      } else {
        // Proceed to the route if it doesn’t require authentication.
        next();
      }
    });
  });
  
  export default router;
  

