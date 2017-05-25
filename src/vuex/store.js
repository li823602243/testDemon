import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './type'
Vue.use(Vuex);

// 需要维护的状态
const state = {
 'headerTitle': '福利',
  noticeList: [],
  activeNote: {},
  show: ''
};

const mutations = {
  UPDATE_TITLE(state, title) {//更改标题
    state.headerTitle = title;
  },
   [types.GET_NOTICE](state, res) {
    console.log(res)
     state.noticeList = res.data
    }
};
export default new Vuex.Store({
  state,
  mutations
});