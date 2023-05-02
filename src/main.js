import { createApp } from "vue";
import App from "./App.vue";

//VUE ROUTER
import router from "./router";

//GLOBAL STORES
import { createPinia } from "pinia";

//GLOBAL STYLE
import "./style.css";

//PINIA AND VUE
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
