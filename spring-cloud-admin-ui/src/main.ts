import Vue from 'vue';
import moment from 'dayjs';
import clickout from '@/utils/clickout.ts';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components';
import iview from './components/iview.js';

import 'iview/dist/styles/iview.css';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';

Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => moment(dataStr).format(pattern));
Vue.directive('clickout', clickout);
Vue.use(components);
Vue.use(iview);

Vue.config.productionTip = false;
/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
