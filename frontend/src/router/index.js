import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import EmployeeDashboard from "../pages/EmployeeDashboard.vue";
import EmployerDashboard from "../pages/EmployerDashboard.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/employee-dashboard",
    component: EmployeeDashboard,
  },
  {
    path: "/employer-dashboard",
    component: EmployerDashboard,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
