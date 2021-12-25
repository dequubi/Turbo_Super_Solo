import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/tailwind.css";
import YoutubeIframe from "@techassi/vue-youtube-iframe";

createApp(App).use(YoutubeIframe).mount("#app");
