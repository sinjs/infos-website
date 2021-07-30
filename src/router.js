import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import About from "./About.vue";

export const routes = [
  { path: "/", component: App },
  { path: "/about", component: About },
];
export const router = createRouter({
  routes,
  history: createWebHistory("/"),
});
