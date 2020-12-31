import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo: null
  },
  getters: {
    getItems: state => {
      return state.todo;
    }
  },
  mutations: {
    setItems: state => {
      let todo = [];
      db.collection('todo-list')
        .orderBy('created_at')
        .onSnapshot(snapshot => {
          todo = [];
          snapshot.forEach(doc => {
            todo.push({ id: doc.id, title: doc.data().title });
          });

          state.todo = todo;
        });
    }
  },
  actions: {
    setItems: context => {
      context.commit('setItems');
    }
  },
  modules: {}
});
