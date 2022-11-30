import {createStore} from 'vuex'

const getDefaultState = () => {
    return {
        token: "",
        user: {},
    };
};

export default createStore({
    state: {
        isLoading: false,
        token: "",
        user: {},
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload;
        },
        setToken: (state, token) => {
            state.token = token;
        },
        setUser: (state, user) => {
            state.user = user;
        },
        reset: (state) => {
            Object.assign(state, getDefaultState());
        },
    },
    actions: {
        login: ({commit, dispatch}, {token, user}) => {
            commit("setToken", token);
            commit("setUser", user);
        },
        logout: ({commit}) => {
            commit("reset", "");
        },
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        },
        isLoggedIn(state) {
            return state.token !== "";
        },
        user(state) {
            return state.user;
        }
    },
})