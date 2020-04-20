import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import GLOBAL from '@/global/global.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
window.Hls = require('hls.js')
Vue.prototype.GLOBAL = GLOBAL
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
