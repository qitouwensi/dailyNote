import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: (resolve) => require(["_v/Home.vue"], resolve)
  },
];

const router = new VueRouter({
  routes,
});

export default router;
