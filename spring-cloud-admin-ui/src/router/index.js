import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index.ts';
import Container from '@/views/containers/index.ts';
import Rocketbot from './rocketbot';

Vue.use(Router);

const router = new Router({
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
        title: '应用管理',
        menu: 'services',
      },
      component: Container.servList,
    },
    {
      path: '/services/:id',
      component: Container.servMonitor,
      children: [
        {
          path: '',
          meta: { title: '详细', menu: 'services' },
          component: Container.servMonitorDetail,
        },
        {
          path: 'logback',
          meta: { title: '日志级别', menu: 'services' },
          component: Container.servMonitorLogback,
        },
        {
          path: 'swagger',
          meta: { title: '文档', menu: 'services' },
          component: Container.servMonitorSwagger,
        },
      ],
    },
    ...Rocketbot,
  ],
});
router.beforeEach((to, from, next) => {
  next();
  store.dispatch('SET_ROUTER', { url: to.path, title: to.meta.title });
});

export default router;
