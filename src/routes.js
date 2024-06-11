import {createWebHistory, createRouter} from 'vue-router';
import Home from "./Pages/Home.vue";
import Products from "./Pages/products/index.vue";
import Contact from "./Pages/contact-us/index.vue";
import About from "./Pages/about-us/index.vue";




const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/products",
      component: Products,
      name: "products",
    },
    {
      path: "/about-us",
      component: About,
      name: "about-us",
    },
    {
      path: "/contact-us",
      component: Contact,
      name: "contact-us",
    },
    {
      path: "/:catchAll(.*)",
      component: "../index.html", // Specify the path to your index.html file
    },
  ],
});

export default router;