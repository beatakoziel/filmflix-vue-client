import Login from './Login.vue'
import Register from './Register.vue'
import RegisterPayment from './RegisterPayment.vue'
import Home from './Home.vue'
import Player from './Player.vue'

export const routes = [{
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/register/payment',
    component: RegisterPayment
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/play/:resource',
    component: Player
  }
];
