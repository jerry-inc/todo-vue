import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import firebase from 'firebase';
import '../src/assets/css/theme.less';

Vue.config.productionTip = false;
Vue.use(Antd);

const config = {
  apiKey: 'AIzaSyAaMCidZIvZORi5cLeITouS2XG32BTf2fo',
  authDomain: 'todo-vuejs-4016f.firebaseapp.com',
  projectId: 'todo-vuejs-4016f',
  storageBucket: 'todo-vuejs-4016f.appspot.com', // databaseURL
  messagingSenderId: '983332104429',
  appId: '1:983332104429:web:b7548a0e1c361c08d944e4', // projectId
  measurementId: 'G-370EQ9HNQL'
};

firebase.initializeApp(config);
firebase.analytics();
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
