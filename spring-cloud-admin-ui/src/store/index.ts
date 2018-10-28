import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import global, { State as GlobalState } from './modules/_global';
import options, { State as OptionsState } from '@/store/modules/rocketbot/options';
import dashboard, { State as DashboardState } from '@/store/modules/rocketbot/dashboard';
import alarm, { State as AlarmState } from '@/store/modules/rocketbot/alarm';
import trace, { State as TraceState } from '@/store/modules/rocketbot/trace';
import topo, { State as TopoState } from '@/store/modules/rocketbot/topo';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    global,
    options,
    dashboard,
    alarm,
    trace,
    topo,
  },
});

export interface State {
  options: OptionsState;
  global: GlobalState;
  dashboard: DashboardState;
  alarm: AlarmState;
  trace: TraceState;
  topo: TopoState;
}
