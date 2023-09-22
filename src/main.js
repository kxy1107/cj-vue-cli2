import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getMethod, postMethod } from "@/utils/http.js";
import "@/assets/css/index.css";
Vue.config.productionTip = false;
Vue.prototype.$getMethod = getMethod;
Vue.prototype.$postMethod = postMethod;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
