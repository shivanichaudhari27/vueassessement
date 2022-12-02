import { createStore } from "vuex";
import todos from "./modules/todos";

export default createStore({
  state() {
    return {
      storeValue: "Welcome to pagination",
      currentValue: 9,
      newMessages: [],
      updateUserData: {},
    };
  },
  getters: {
    getStoreValue(state) {
      return state.storeValue;
    },
    getCurrentValue(state) {
      return state.currentValue;
    },
    newMessages(state) {
      return state.newMessages;
    },
    getUpdateUserData(state) {
      return state.updateUserData;
    },
  },
  mutations: {
    setStoreValue(state, payload) {
      state.storeValue = payload;
    },
    setCurrentValue(state, payload) {
      state.currentValue = payload;
    },
    update_newMessages(state, newMessages) {
      state.newMessages = newMessages;
    },
    setUpdateUserData(state, payload) {
      state.updateUserData = payload;
      console.log("updatepayload", payload);
    },
  },
});
