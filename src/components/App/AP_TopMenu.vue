<script setup>
import AquapodLogo from "@/assets/logo/AquapodLogo.svg"
import MenuIcon from "@/assets/icons/MenuIcon.svg"
import SearchIcon from "@/assets/icons/SearchIcon.svg"
import { useGlobalStore } from '@/stores/globalStore'
import AP_searchInput from "@/components/App/AP_searchInput.vue"
const globalStore = useGlobalStore()
</script>

<template>
    <div class="fixed top-0 w-full z-[150] | transition-all duration-500"
        :class="[enableNavigation ? 'p-0' : 'p-4', enableNavigation2 ? 'opacity-0' : '']">
        <div class="relative TopMenuBG h-14 w-full flex justify-between items-center | transition-all duration-500"
            :class="enableNavigation ? 'BorderBottom rounded-[0px] pt-1.5 pl-4 pr-6 justify-between' : 'rounded-[200px] px-4 gap-4'">
            
            <!--BACK BUTTON-->
            <div v-if="enableNavigation3" class="flex items-center w-full h-full gap-1">
                <div @click="$router.go(-1)" class="mb-1">
                    <b class="text-3xl text-AP_DarkFont cursor-pointer">{{ "<--" }}</b> 
                </div> 
                <div class="text-2xl text-AP_DarkFont">Natrag</div>
            </div>

            <!--LOGO-->
            <router-link to="/">
            <img v-if="enableNavigation4" class="h-7 cursor-pointer" :src="AquapodLogo">
            </router-link>
            
            <!--SEARCH-->
            <img v-if="enableNavigation5" class="h-7 absolute left-4" :src="SearchIcon">
            <AP_searchInput v-if="enableNavigation5"/>

            <!--LOGIN BUTTON-->
            <router-link class="relative h-6 w-6" v-if="enableNavigation6" to="/Login">
                <img class="absolute h-full cursor-pointer z-50" :src="MenuIcon">
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: "AP_TopMenu",
    components: { AP_searchInput },
    computed: {
        enableNavigation() { return ['Home', 'Login', 'Warnings'].includes(this.$route.name); },
        enableNavigation2() { return this.$route.name == 'Map'; },
        enableNavigation3() { return ['Login'].includes(this.$route.name); },
        enableNavigation4() { return ['Home', 'Warnings'].includes(this.$route.name); },
        enableNavigation5() { return ['Map', 'Dashboard', 'ControlPanel'].includes(this.$route.name); },
        enableNavigation6() { return ['Map', 'Dashboard', 'Home', 'Warnings', 'ControlPanel'].includes(this.$route.name); },
    }
}
</script>

<style lang="scss" scoped>

.TopMenuBG {
    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
}
.BorderBottom {
    border-bottom: 0.25px solid rgba(0, 0, 0, 0.1);
}
.TopSearchBG {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1);
}
</style>