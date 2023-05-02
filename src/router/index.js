import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import DashboardView from "@/views/DashboardView.vue";
import LoginView from "@/views/LoginView.vue";
import WarningView from "@/views/WarningView.vue";
import ControlPanelView from "@/views/ControlPanelView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/map",
            name: "Map",
            component: MapView,
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: DashboardView,
        },
        {
            path: "/login",
            name: "Login",
            component: LoginView,
        },
        {
            path: "/warnings",
            name: "Warnings",
            component: WarningView,
        },
        {
            path: "/control-panel",
            name: "ControlPanel",
            component: ControlPanelView,
        },
    ],
});

export default router;
