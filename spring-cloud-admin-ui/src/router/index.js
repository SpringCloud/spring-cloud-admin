import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index.ts';
import Container from '@/views/containers/index.ts';

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
      },
      component: Container.servList,
    },
    {
      path: '/services/:id',
      component: Container.servMonitor,
      children: [
        {
          path: '',
          meta: { title: '详细' },
          component: Container.servMonitorDetail,
        },
        {
          path: 'logback',
          meta: { title: '日志级别' },
          component: Container.servMonitorLogback,
        },
        {
          path: 'swagger',
          meta: { title: '文档' },
          component: Container.servMonitorSwagger,
        },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  next();
  store.dispatch('SET_ROUTER', { url: to.path, title: to.meta.title });
});

export default router;
