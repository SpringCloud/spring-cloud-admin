import Dashboard from '@/views/containers/rocketbot/dashboard.vue';
import Topology from '@/views/containers/rocketbot/topology.vue';
import Trace from '@/views/containers/rocketbot/trace.vue';
import Alarm from '@/views/containers/rocketbot/alarm.vue';
import TraceDetail from '@/views/containers/rocketbot/trace-detail.vue';

export default [
  {
    path: '/trace',
    redirect: '/trace/dashboard',
  },
  {
    path: '/trace/dashboard',
    meta: { title: '仪表盘', menu: 'trace' },
    component: Dashboard,
  },
  {
    path: '/trace/topo',
    meta: { title: '拓扑图', menu: 'trace' },
    component: Topology,
  },
  {
    path: '/trace/link',
    meta: { title: '追踪', menu: 'trace' },
    component: Trace,
  },
  {
    path: '/trace/link/detail',
    meta: { title: '', menu: 'trace' },
    component: TraceDetail,
  },
  {
    path: '/trace/alarm',
    meta: { title: '告警', menu: 'trace' },
    component: Alarm,
  },
];
