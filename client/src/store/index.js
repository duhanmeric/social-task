import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    users: [],
  },
  getters: {
    getAllUsers (state) {
      return state.users
    },
    getCurrentUser (state) {
      return state.user
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
      if(token){
        state.isUserLoggedIn = true;
      }
      else{
        state.isUserLoggedIn = false;
      }
    },
    setUser (state, user) {
      state.user = user;
    },
    changeSecretState (state, user) {
      state.user.isProfileSecret = user.isProfileSecret
    },
    makeAllUsers (state, users){
      state.users = users;
      for (let i = 0; i < state.users.length; i++) {
        if(state.user.id == users[i].id){
          this.state.user = users[i]
        }
      }
    }
  },
  actions: {
    setToken (context, token) {
      context.commit("setToken", token)
    },
    setUser (context, user) {
      context.commit("setUser", user)
    },
    changeSecretState (context, user) {
      context.commit("changeSecretState", user)
    },
    makeAllUsers (context, users){
      context.commit("makeAllUsers", users)
    }
  },
  modules: {
  }
})
