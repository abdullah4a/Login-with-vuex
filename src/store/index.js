import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    // a: 2,
    UserLogin: [],
    Islogin: false,
    error: "Error in login\n Check again your Email and Password"
};
const mutations = {
    UserLoginmut(state, user) {
        if (state.UserLogin.email === user.email && state.UserLogin.Pwd) {
            user.UID = state.UserLogin.UID;
            user.Islogin = true
        } else {
            user.Islogin = state.Islogin
            user.error = state.error
        }
    }

}
const actions = {
    LoginUserAct({ commit }, user) {
        commit("UserLoginmut", user)
    }
}
const modules = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules
})