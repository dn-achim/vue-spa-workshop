import Vue from 'vue'
import { App, router, store, vuetify } from '@/ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
