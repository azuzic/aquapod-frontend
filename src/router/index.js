import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import DashboardView from "@/views/DashboardView.vue";

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
    ],
});

export default router;
