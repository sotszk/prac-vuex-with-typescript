import Vue from "vue";
import Vuex from "vuex";
import * as counterStore from "./counter";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter: {
      namespaced: true,
      ...counterStore
    }
  }
});
