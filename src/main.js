import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import vueScrollTo from "vue-scrollto";

// const VueScrollTo = require("vue-scrollto");

import "./scss/main.scss";

Vue.config.productionTip = false;

Vue.use(vueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
