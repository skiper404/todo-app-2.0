import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./routes/routes";
import i18n from "./localization";

const pinia = createPinia();

createApp(App).use(pinia).use(i18n).use(router).mount("#app");
