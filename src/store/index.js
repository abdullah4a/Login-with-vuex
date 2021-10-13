import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router"
import { Data } from "../shared";
Vue.use(Vuex)
const state = {
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
        if (state.UserLogin.email === user.email && state.UserLogin.password === user.password) {
            // user.id = state.UserLogin.id;
            // user.isactive = state.UserLogin.isactive
            // router.push("/")
            state.IsNotlogin = user.isactive
        } else {
            console.log("Can't Login")
                // user.isactive = state.IsNotlogin
                // user.type = state.error
        }
    },
    AdminLoginmut(state, Admin) {
        if (state.AdminLogin.email === Admin.email & state.AdminLogin.password === Admin.password) {
            // Admin.id = state.AdminLogin.id;
            // Admin.isactive = state.AdminLogin.isactive
            state.IsNotlogin = Admin.isactive
        } else {
            console.log("Can't Login")
                // Admin.isactive = state.IsNotlogin
                // Admin.type = state.error
        }
    },
    LogoutMut(state) {
        state.UserLogin = [];
        state.AdminLogin = [];
        router.push("/")
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
    },
    LoginAdminAct({ commit }, admin) {
        commit("AdminLoginmut", admin)
    }
}
const modules = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules
})