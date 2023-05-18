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
    <div :class="enableNavigation1 ? 'translate-y-16' : 'translate-y-0'" 
        class="fixed bottom-0 BottomMenuBG h-14 w-full flex items-center justify-around pb-1.5 z-50 | transition-all duration-500">
        <router-link v-if="globalStore.admin" to="/warnings">
            <img class="h-7" :src="enableNavigation2 ? WarningIcon : WarningFilledIcon">
        </router-link>
        <router-link to="/dashboard">
            <img class="h-8" :src="enableNavigation3 ? DashboardIcon : DashboardFilledIcon">
        </router-link>
        <router-link to="/">
            <img class="h-7" :src="enableNavigation4 ? HomeIcon : HomeFilledIcon">
        </router-link>
        <router-link to="/map">
            <img class="h-8" :src="enableNavigation5 ? MapIcon : MapFilledIcon">
        </router-link>
        <router-link v-if="globalStore.admin" to="/control-panel">
            <img class="h-7" :src="enableNavigation6 ? PanelIcon : PanelFilledIcon">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "AP_BottomMenu",
    computed: {
        enableNavigation1() { return this.$route.name == 'Login'; },
        enableNavigation2() { return this.$route.name == 'Warnings'; },
        enableNavigation3() { return this.$route.name == 'Dashboard'; },
        enableNavigation4() { return this.$route.name == 'Home'; },
        enableNavigation5() { return this.$route.name == 'Map'; },
        enableNavigation6() { return this.$route.name == 'ControlPanel'; },
    }
}
</script>

<style lang="scss" scoped>

.BottomMenuBG {
    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
    border-top: 0.25px solid rgba(0, 0, 0, 0.25);
}

</style>