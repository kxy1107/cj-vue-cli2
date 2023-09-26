import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as Sentry from "@sentry/vue";
import { getMethod, postMethod } from "@/utils/http.js";
import "@/assets/css/index.css";
Vue.config.productionTip = false;
Vue.prototype.$getMethod = getMethod;
Vue.prototype.$postMethod = postMethod;
Sentry.init({
  Vue,
  dsn: process.env.VUE_APP_SENTRY_DNS,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
