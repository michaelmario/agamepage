import Vue from "vue";
import Router from "vue-router";
import MainPage from '@/views/MainPage';

Vue.use(Router);

let router = new Router({
    mode: "history",
    fallback: false,
   // scrollBehavior: () => ({ y: 0 }),
   // base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name:"MainPage",
        component: MainPage
      },
      {
        path: '/blog',
        name:"blog",
        component: () =>
          import(/* webpackChunkName: "blog" */ '@/views/Blog'),
      },
      {
        path:'/blog/:id',
        name:'BlogContent',
        component: () =>
          import(/* webpackChunkName: "blog" */ '@/components/BlogContent'),
      },
      {
        path:'/gallery',
        name:"Gallery",
        component: () =>
          import(/* webpackChunkName: "contact" */ '@/views/Gallery'),
  
      },
      {
        path:'/contact',
        name:"Contact",
        component: () =>
          import(/* webpackChunkName: "contact" */ '@/views/Contact'),
  
      },
      {
        path:'/apropos',
        name:'apropos',
         component: () =>
          import(/* webpackChunkName: "apropos" */ '@/views/Apropos'),
      }  
    ]
});

export default router;