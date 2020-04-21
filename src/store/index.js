import Vue from 'vue'
import VueX from 'vuex'
import mutations from './mutations.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(VueX)

const state = {
    token: '',
    switchOn: 0
}

export default new VueX.Store({
    state,
    mutations,
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})
