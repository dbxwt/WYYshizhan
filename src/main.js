import 'lib-flexible/flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import * as API from './api'
import store from './vuex'
import {Toast,Notify,Button} from 'vant'
Vue.config.productionTip = false
Vue.prototype.$API = API
Vue.use(Toast)
Vue.use(Notify)
Vue.use(Button)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

