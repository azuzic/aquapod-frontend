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
        :class="[['Home', 'Login', 'Warnings'].includes(this.$route.name) ? 'p-0' : 'p-4', this.$route.name == 'Map' ? 'opacity-0' : '']">
        <div class="relative TopMenuBG h-14 w-full flex justify-between items-center | transition-all duration-500"
            :class="['Home', 'Login', 'Warnings'].includes(this.$route.name) ? 'BorderBottom rounded-[0px] pt-1.5 pl-4 pr-6 justify-between' : 'rounded-[200px] px-4 gap-4'">
            
            <!--BACK BUTTON-->
            <div v-if="['Login'].includes(this.$route.name)" class="flex items-center w-full h-full gap-1">
                <div @click="$router.go(-1)" class="mb-1">
                    <b class="text-3xl text-AP_DarkFont">{{ "<--" }}</b> 
                </div> 
                <div class="text-2xl text-AP_DarkFont">Natrag</div>
            </div>

            <!--LOGO-->
            <img v-if="['Home', 'Warnings'].includes(this.$route.name)" class="h-7" :src="AquapodLogo">
            
            <!--SEARCH-->
            <img v-if="['Map', 'Dashboard', 'ControlPanel'].includes(this.$route.name )" class="h-7" :src="SearchIcon">
            <AP_searchInput v-if="['Map', 'Dashboard', 'ControlPanel'].includes(this.$route.name)"/>

            <!--LOGIN BUTTON-->
            <router-link v-if="['Map', 'Dashboard', 'Home', 'Warnings', 'ControlPanel'].includes(this.$route.name)" to="/Login">
                <img class="h-5" :src="MenuIcon">
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: "AP_TopMenu",
    components: { AP_searchInput },
    props: {},
    data() { return { } },
    methods: { }
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