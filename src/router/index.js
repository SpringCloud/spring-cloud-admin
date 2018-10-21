import Vue from 'vue';
import Router from 'vue-router';
import Container from '@/views/containers/index.ts';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/services',
    },
    {
      path: '/services',
      meta: {
        title: '服务列表',
      },
      component: Container.servList,
    },
    {
      path: '/services/:id',
      meta: {
        title: '服务列表',
      },
      component: Container.servMonitor,
    },
  ],
});
