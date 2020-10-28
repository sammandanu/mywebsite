import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentRoute: "#banner",
  },
  mutations: {
    changeRoute: (state, data) => {
      Vue.set(state, "currentRoute", data);
    },
  },
  actions: {},
  modules: {},
});
