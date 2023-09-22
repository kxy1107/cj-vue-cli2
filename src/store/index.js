import Vue from "vue";
import Vuex from "vuex";
import appStore from "./modules/appStore.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appStore,
  },
});
