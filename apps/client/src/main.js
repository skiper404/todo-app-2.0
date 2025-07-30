import "./shared/assets/tailwind.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import i18n from "./shared/lib/i18n";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(i18n).mount("#app");
