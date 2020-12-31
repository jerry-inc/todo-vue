import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todo: null
  },
  getters: {
    getList: state => {
      return state.todo;
    }
  },
  mutations: {
    getListFromServer: (state, todo) => {
      state.todo = todo;
    }
  },
  actions: {
    getListFromServer: context => {
      return new Promise((resolve, reject) => {
        let todo = [];
        try {
          db.collection('todo-list')
            .orderBy('created_at')
            .onSnapshot(snapshot => {
              todo = [];
              snapshot.forEach(doc => {
                todo.push({ id: doc.id, title: doc.data().title });
              });
              context.commit('getListFromServer', todo);
              resolve();
            });
        } catch (e) {
          reject();
        }
      });
    }
  },
  modules: {}
});
