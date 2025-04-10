import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/believer",
      name: "believer",
      component: () => import("../views/BelieverView.vue"),
    },
    {
      path: "/church",
      name: "church",
      component: () => import("../views/ChurchView.vue"),
    },
    {
      path: "/center",
      name: "center",
      component: () => import("../views/CenterView.vue"),
    },
    {
      path: "/seminary",
      name: "seminary",
      component: () => import("../views/SeminaryView.vue"),
    },
    {
      path: "/mission",
      name: "mission",
      component: () => import("../views/MissionView.vue"),
    },
    {
      path: "/blank",
      name: "blank",
      component: () => import("../views/BlankView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        return {
          el: to.hash,
          behavior: "smooth", // Smooth scrolling
        };
      }
    }
    return savedPosition || { top: 0 }; // Default scroll to top
  },
});

export default router;
