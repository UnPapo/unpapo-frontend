import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';


export default createStore({
    state: {
        user: null,
        token: null,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.user = null;
            state.token = null;
        }
    },
    actions: {
        async login({ commit }, data) {
            commit('setUser', data.data.user);
            commit('setToken', data.data.token);
        },

        logout({ commit }) {
            commit('logout');
        },
    },
    getters: {
        isAuthenticated: state => !!state.user,
        getUser: state => state.user,
    },
    
    plugins: [createPersistedState()]
});
