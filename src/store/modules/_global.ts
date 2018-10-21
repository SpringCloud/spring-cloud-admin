import { Commit, ActionTree } from 'vuex';
import * as types from '../mutation-types';

export interface State {
  eventStack: any;
  chartStack: any;
}

const initState: State = {
  eventStack: [],
  chartStack: [],
};

// getters
const getters = {
};

// mutations
const mutations = {
  [types.SET_EVENTS](state: State, data: any[]) {
    state.eventStack = data;
  },
  [types.CLEAR_EVENTS](state: State) {
    state.eventStack = [];
  },
  [types.RUN_EVENTS](state: State) {
    state.eventStack.forEach((i) => {
      setTimeout(i(), 0);
    });
  },
  [types.SET_CHARTS](state: State, data: any[]) {
    state.chartStack.push(data);
  },
  [types.CLEAR_CHARTS](state: State) {
    state.chartStack = [];
  },
};

// actions
const actions: ActionTree<State, any> = {
  RUN_EVENTS(context: { commit: Commit }) {
    context.commit(types.RUN_EVENTS);
  },
  SET_EVENTS(context: { commit: Commit }, data: any[]) {
    context.commit(types.CLEAR_EVENTS);
    context.commit(types.SET_EVENTS, data);
  },
  SET_CHARTS(context: { commit: Commit }, data: any[]) {
    context.commit(types.SET_CHARTS, data);
  },
  CLEAR_CHARTS(context: { commit: Commit }) {
    context.commit(types.CLEAR_CHARTS);
  },
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
