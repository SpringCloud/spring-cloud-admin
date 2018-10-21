import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import global, { State as GlobalState } from './modules/_global';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    global,
  },
});

export interface State {
}
