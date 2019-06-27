import Vue from "vue";
import Router from "vue-router";
 //引入Login 模块
// import Login from "./views/Login.vue"
import Login from "./views/Login.vue";
import Home from "./views/Home.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:"/home",
      component:Home
    }
  ]
});
