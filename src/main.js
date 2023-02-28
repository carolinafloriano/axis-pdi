import { createApp } from "vue";
import App from "./App.vue";

//PrimeVue Config
import PrimeVue from "primevue/config";

//PrimeVue CSS
import "primevue/resources/themes/lara-light-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);

createApp(App).mount("#app");
