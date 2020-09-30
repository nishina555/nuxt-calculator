import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);


const state = {
  resultValue: 0,
  inputValue: 0
}

const store = () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;