import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import routes from './routes'
import 'animate.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
