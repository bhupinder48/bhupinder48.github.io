import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactUs from "../views/ContactUsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
