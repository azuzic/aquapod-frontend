import { createRouter, createWebHistory } from "vue-router";
import { useGlobalStore } from "@/stores/globalStore";
import { User, AquaPodAdmin } from "@/services";
import HomeView from "@/views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import DashboardViewUser from "@/views/DashboardViewUser.vue";
import DashboardViewAdmin from "@/views/DashboardViewAdmin.vue";
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
            path: "/dashboard-user",
            name: "DashboardUser",
            component: DashboardViewUser,
        },
        {
            path: "/dashboard-admin",
            name: "DashboardAdmin",
            component: DashboardViewAdmin,
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

router.beforeEach(async (to, from, next) => {
    const globalStore = useGlobalStore();
    const userLocalStorage = User.GetLocalStorage();
    globalStore.admin = userLocalStorage;

    if (["DashboardUser","DashboardAdmin"].includes(to.name)) {
        if (globalStore.activePodUser == "empty") next("/");
        else {
            let response = await AquaPodAdmin.GetSpecificAquapod(globalStore.activePodUser.name);
            globalStore.activePodAdmin = response;
            next();
        }
    }
    else next();
});

export default router;