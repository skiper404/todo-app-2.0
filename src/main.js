import "./assets/tailwind.css";
import "vue3-draggable-resizable/dist/Vue3DraggableResizable.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./routes/routes";
const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
