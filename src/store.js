import Vue from 'vue'
import Vuex from 'vuex'
import { SUM, INCREMENT, DECREMENT } from "./mutation-types";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    count: state => state.count,
  },
  mutations: {
    [INCREMENT] (state) {
      state.count++
    },
    [SUM] (state, n) {
      state.count += n
    },
    [DECREMENT] (state) {
      state.count--
    }
  },
  actions: {
    increment({commit}) {
      commit(INCREMENT)
    },
    decrement({commit}) {
      commit(DECREMENT)
    }
  }
})
