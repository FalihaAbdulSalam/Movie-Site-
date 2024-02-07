import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MovieDetails from './movies/moviedetails.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    { path: '/movie/:id', name: 'movieDetails', component: MovieDetails }
  ]
})
export default router
