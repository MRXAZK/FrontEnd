import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "../components/Pages/LoginPage";
import RegisterPage from "../components/Pages/RegisterPage";
import ProfilePage from "../components/Pages/ProfilePage";
import VerificationEmailPage from "../components/Pages/VerificationEmailPage";
import AllFilesPage from "../components/Pages/AllFilesPage";
import HomePage from "../components/Pages/HomePage";

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

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
