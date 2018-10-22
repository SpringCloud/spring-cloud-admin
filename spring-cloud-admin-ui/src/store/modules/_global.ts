import { Commit, ActionTree } from 'vuex';
import * as types from '../mutation-types';

export interface Router {
  title: String;
  url: String;
}

export interface State {
  eventStack: any;
  chartStack: any;
  routerStack: Router[];
}

const initState: State = {
  eventStack: [],
  chartStack: [],
  routerStack: [],
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
  [types.SET_ROUTER](state: State, router: Router) {
    if (!state.routerStack.filter(i => i.url === router.url).length) {
      state.routerStack.push(router);
    }
  },
  [types.DELETE_ROUTER](state: State, index: number) {
    state.routerStack.splice(index, 1);
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
  SET_ROUTER(context: { commit: Commit }, router: Router) {
    context.commit(types.SET_ROUTER, router);
  },
  DELETE_ROUTER(context: { commit: Commit }, index: Number) {
    context.commit(types.DELETE_ROUTER, index);
  },
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
