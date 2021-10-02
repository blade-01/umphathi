import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");


// onAuthStateChanged(auth, (user) => {
//   if(!app || user) {
//     app = createApp(App).use(router).use(store).mount('#app');
//   } 
// })