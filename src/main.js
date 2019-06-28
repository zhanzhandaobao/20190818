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
   
//注册导航守卫
router.beforeEach( (to ,from,next) =>{
  //判断用户访问的是不是登陆页面 如果是登陆页面 就放行
  if(to.path==="/login"){
      next()
      return
  };
  if(localStorage.getItem('token')){
    next();
  } else {
    router.push("/login");
  }

})


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
