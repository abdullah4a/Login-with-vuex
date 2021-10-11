import Vue from 'vue'
import Vuex from 'vuex'
import { Data } from "../shared";
Vue.use(Vuex)
const state = {
    // a: 2,
    UserLogin: [],
    AdminLogin: [],
    IsNotlogin: false,
    error: "Error in login\n Check again your Email and Password"
};
const mutations = {
    GetUsersMut(state, user) {
        state.UserLogin = user;
    },
    GetAdminMut(state, admin) {
        state.AdminLogin = admin
    },
    UserLoginmut(state, user) {
        if (state.UserLogin.email === user.email || state.UserLogin.username === user.username && state.UserLogin.password === user.password) {
            user.id = state.UserLogin.id;
            user.isactive = state.UserLogin.isactive
        } else {
            user.isactive = state.IsNotlogin
            user.type = state.error
        }
    },
    AdminLoginmut(state, Admin) {
        if (state.AdminLogin.email === Admin.email || state.AdminLogin.username === Admin.username && state.AdminLogin.password === Admin.password) {
            Admin.id = state.AdminLogin.id;
            Admin.isactive = state.AdminLogin.isactive
        } else {
            Admin.isactive = state.IsNotlogin
            Admin.type = state.error
        }
    },
    LogoutMut(state) {
        state.UserLogin = [];
        state.AdminLogin = [];

    }
}
const actions = {
    async getUserAction({ commit }) {
        const User = await Data.GetUsers()
        commit("GetUserMut", User)
    },
    async getAdminAction({ commit }) {
        const Admin = await Data.GetAdmins()
        commit("GetAdminMut", Admin)
    },
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