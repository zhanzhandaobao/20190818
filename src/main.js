import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//1。 引入elemrntui
import ElementUI from 'element-ui';

//引入css文件
import 'element-ui/lib/theme-chalk/index.css';

// import "./assets/css/index.css";

//引入css
import "./assets/css/index.css"

//2。安装elementui
Vue.use(ElementUI)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
