// router/index.js
import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "../components/Pages/LoginPage";
import RegisterPage from "../components/Pages/RegisterPage";
import ProfilePage from "../components/Pages/ProfilePage";
import VerificationEmailPage from "../components/Pages/VerificationEmailPage";
import AllFilesPage from "../components/Pages/AllFilesPage";
import HomePage from "../components/Pages/HomePage";
import { useAuthStore } from "@/stores";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  {
    path: "/verification",
    name: "VerificationEmailPage",
    component: VerificationEmailPage,
  },
  { path: "/all-files", name: "AllFilesPage", component: AllFilesPage },
];

export const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach(async (to, from, next) => {
  const publicPages = ["/login", "/register", "/verification"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  // redirect to login page if not logged in and trying to access a restricted page
  if (authRequired && !auth.access_token && !auth.refresh_token) {
    auth.returnUrl = to.fullPath;
    return next("/login");
  }

  // redirect to home page if user is already logged in and trying to access the login page
  if (to.path === "/login" && auth.access_token) {
    return next("/");
  }
  if (to.path === "/register" && auth.access_token) {
    return next("/");
  }
  if (to.path === "/verification" && from.path !== "/register") {
    return next("/");
  }
  // allow navigation to /verification from /register
  if (to.path === "/verification" && from.path === "/register") {
    return next();
  }

  next();
});

export default router;
