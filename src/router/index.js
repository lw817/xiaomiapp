import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Capacity from '../views/Capacity.vue'
import Details from  '../views/Details.vue'
import Shoopcar  from '../views/Shoopcar'
import Myself  from '../views/Myself'
import Submit  from '../views/Submit'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		resit:true
	}
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details,
	meta:{
		resit:false
	}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	meta:{
		resit:true
	}
  },
  {
    path: '/capacity',
    name: 'capacity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Capacity.vue'),
	meta:{
		resit:true
	}
  },
  {
    path: '/shoopcar',
    name: 'shoopcar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shoopcar.vue'),
  	meta:{
  		resit:true
  	}
  },
  {
    path: '/myself',
    name: 'myself',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Myself.vue'),
  	meta:{
  		resit:true
  	}
  },
  {
    path: '/submit',
    name: 'submit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Submit.vue'),
  	meta:{
  		resit:true
  	}
  }
]

const router = new VueRouter({
  routes
})

export default router
