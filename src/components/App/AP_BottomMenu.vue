<script setup>
import HomeIcon from "@/assets/icons/HomeIcon.svg"
import HomeFilledIcon from "@/assets/icons/HomeFilledIcon.svg"
import MapIcon from "@/assets/icons/MapIcon.svg"
import MapFilledIcon from "@/assets/icons/MapFilledIcon.svg"
import DashboardIcon from "@/assets/icons/DashboardIcon.svg"
import DashboardFilledIcon from "@/assets/icons/DashboardFilledIcon.svg"
</script>

<template>
    <div class="fixed bottom-0 BottomMenuBG h-14 w-full flex items-center justify-around pb-1.5 z-50">
        <router-link to="/Dashboard">
            <img class="h-7" :src="this.$route.name != 'Dashboard' ? DashboardIcon : DashboardFilledIcon">
        </router-link>
        <router-link to="/">
            <img class="h-7" :src="this.$route.name != 'Home' ? HomeIcon : HomeFilledIcon">
        </router-link>
        <router-link to="/Map">
            <img class="h-7" :src="this.$route.name != 'Map' ? MapIcon : MapFilledIcon">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "AP_BottomMenu",
    components: { HomeIcon, HomeFilledIcon, MapIcon, MapFilledIcon, DashboardIcon, DashboardFilledIcon },
    props: {},
    data() { return {} },
}
</script>

<style lang="scss" scoped>

.BottomMenuBG {
    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
    border-top: 0.25px solid rgba(0, 0, 0, 0.25);
}

</style>