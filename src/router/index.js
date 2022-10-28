import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/owner",
    name: "Owner",
    component: () =>
      import(/* webpackChunkName: "owner" */ "../views/Owner.vue"),
  },
  {
    path: "/firm",
    name: "Firm",
    component: () => import(/* webpackChunkName: "firm" */ "../views/Firm.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: "smooth" });
      }, 200);
    });
  },
});

export default router;
