<script setup>
import WarningIcon from "@/assets/icons/WarningIcon.svg"
import WarningFilledIcon from "@/assets/icons/WarningFilledIcon.svg"
import HomeIcon from "@/assets/icons/HomeIcon.svg"
import HomeFilledIcon from "@/assets/icons/HomeFilledIcon.svg"
import PanelFilledIcon from "@/assets/icons/PanelFilledIcon.svg"
import PanelIcon from "@/assets/icons/PanelIcon.svg"
import MapIcon from "@/assets/icons/MapIcon.svg"
import MapFilledIcon from "@/assets/icons/MapFilledIcon.svg"
import DashboardIcon from "@/assets/icons/DashboardIcon.svg"
import DashboardFilledIcon from "@/assets/icons/DashboardFilledIcon.svg"
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>

<template>
    <div :class="$route.name == 'Login' ? 'translate-y-16 sm:translate-y-0 sm:-translate-x-16 sm:py-4' : 'translate-y-0 sm:py-8'" 
        class="fixed bottom-0 BottomMenuBG h-14 w-full flex items-center justify-around pb-1.5 z-50 | transition-all duration-500
        sm:left-0 sm:top-0 sm:w-14 sm:h-full sm:flex-col sm:justify-start sm:gap-8">
        
        <div @click="$router.go(-1)" v-if="$route.name == 'Login'" class="group flex items-center w-full gap-1 translate-x-20 whitespace-nowrap cursor-pointer">
            <div class="mb-1 group-hover:scale-90 transition-all">
                <b class="text-3xl text-AP_DarkFont cursor-pointer">{{ "<--" }}</b> 
            </div> 
            <div class="text-2xl text-AP_DarkFont group-hover:underline">Natrag</div>
        </div>
        <router-link class="hidden sm:block" to="/">
            <img class="h-7 hover:scale-90 transition-all" :src="$route.name != 'Home' ? HomeIcon : HomeFilledIcon">
        </router-link>
        <router-link v-if="globalStore.admin" to="/warnings">
            <img class="h-7 hover:scale-90 transition-all" :src="$route.name != 'Warnings' ? WarningIcon : WarningFilledIcon">
        </router-link>
        <router-link to="/dashboard-user">
            <img class="h-8 hover:scale-90 transition-all" :src="!['DashboardUser', 'DashboardAdmin'].includes($route.name) ? DashboardIcon : DashboardFilledIcon">
        </router-link>
        <router-link class="sm:hidden" to="/">
            <img class="h-7 hover:scale-90 transition-all" :src="$route.name != 'Home' ? HomeIcon : HomeFilledIcon">
        </router-link>
        <router-link to="/map">
            <img class="h-8 hover:scale-90 transition-all" :src="$route.name != 'Map' ? MapIcon : MapFilledIcon">
        </router-link>
        <router-link v-if="globalStore.admin" to="/control-panel">
            <img class="h-7 hover:scale-90 transition-all" :src="$route.name != 'ControlPanel' ? PanelIcon : PanelFilledIcon">
        </router-link>
        
        <!--LOGIN BUTTON-->
        <router-link class="z-50 absolute bottom-8 hidden sm:block" to="/Login">
            <i class="fa-solid fa-right-to-bracket text-AP_DarkFont text-3xl hover:scale-90 transition-all"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "AP_BottomMenu",
}
</script>

<style lang="scss" scoped>

.BottomMenuBG {
    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
    border-top: 0.25px solid rgba(0, 0, 0, 0.25);
}

</style>