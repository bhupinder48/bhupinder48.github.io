import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactUs from "../views/ContactUsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
