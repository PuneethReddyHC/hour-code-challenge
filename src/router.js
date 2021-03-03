import Vue from "vue";
import Router from "vue-router";
import root from "./App.vue";
import home from "./views/home.vue";


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: `/`,
      
    },
    
    {
        path: '/',
        component: root,
        children: [
          {
            path: '',
            name: 'home',
            component: home
          },
        ]
    } 
  ],
  
});



export default router