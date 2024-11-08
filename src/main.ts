import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";
import * as IonicVueComponents from "@ionic/vue";
import axios from "axios";

// @ts-ignore
import store from './store.js'

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
// import '@ionic/vue/css/padding.css';
// import '@ionic/vue/css/float-elements.css';
// import '@ionic/vue/css/text-alignment.css';
// import '@ionic/vue/css/text-transformation.css';
// import '@ionic/vue/css/flex-utils.css';
// import '@ionic/vue/css/display.css';
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import "@ionic/vue/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

const app = createApp(App);

app.use(IonicVue);
app.use(router);
app.use(store);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$user = store.getters.getUser;
app.config.globalProperties.$store = store;

for (const [key, component] of Object.entries(IonicVueComponents)) {
  if (key.startsWith("Ion")) {
    app.component(key, component);
  }
}

router.isReady().then(() => {
  app.mount("#app");
});
