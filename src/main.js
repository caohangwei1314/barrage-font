import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import GLOBAL from '@/global/global.js'
import VueX from 'vuex'
import store from '@/store/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
window.Hls = require('hls.js')
Vue.prototype.GLOBAL = GLOBAL
Vue.use(VueX)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
