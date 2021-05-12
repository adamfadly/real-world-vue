import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: () =>
      import(/* webpackChunkName: "EventList" */ "../views/EventList.vue"),
  },
  {
    path: "/event",
    name: "event-show",
    component: () =>
      import(/* webpackChunkName: "EventShow" */ "../views/EventShow.vue"),
  },
  {
    path: "/create-event",
    name: "create-event",
    component: () =>
      import(/* webpackChunkName: "CreateEvent" */ "../views/CreateEvent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
