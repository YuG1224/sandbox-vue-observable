import Vue from "vue";

export const state = Vue.observable({
  count: 0
});

export const getters = {
  count() {
    return state.count;
  }
};

export const actions = {
  increment() {
    mutations.increment();
  },
  decrement() {
    mutations.decrement();
  }
};

export const mutations = {
  increment() {
    state.count++;
  },
  decrement() {
    state.count--;
  }
};
