import Vue from 'vue'
import VueX from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(VueX)

const state = {
    token: ''
}

export default new VueX.Store({
    state,
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})
