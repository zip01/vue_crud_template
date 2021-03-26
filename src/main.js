import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './public.css'
import HelloWorld from "./components/HelloWorld";
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('Hello', HelloWorld)
new Vue({
  render: h => h(App),
}).$mount('#app')
