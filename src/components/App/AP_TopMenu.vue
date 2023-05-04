<script setup>
import AquapodLogo from "@/assets/logo/AquapodLogo.svg"
import MenuIcon from "@/assets/icons/MenuIcon.svg"
import SearchIcon from "@/assets/icons/SearchIcon.svg"
</script>

<template>
    <div class="fixed top-0 w-full z-[150] | transition-all duration-500"
        :class="['Home', 'Login'].includes(this.$route.name) ? 'p-0' : 'p-4'">
        <div class="TopMenuBG h-14 w-full flex items-center | transition-all duration-500"
            :class="['Home', 'Login'].includes(this.$route.name) ? 'BorderBottom rounded-[0px] pt-1.5 pl-4 pr-6 justify-between' : 'rounded-[200px] px-4 gap-4'">
            
            <!--BACK BUTTON-->
            <div v-if="['Login'].includes(this.$route.name)" class="flex items-center w-full h-full gap-1">
                <div @click="$router.go(-1)" class="mb-1">
                    <b class="text-3xl text-AP_DarkFont">{{ "<--" }}</b> 
                </div> 
                <div class="text-2xl text-AP_DarkFont">Natrag</div>
            </div>
            

            <!--LOGO-->
            <img v-if="['Home'].includes(this.$route.name)" class="h-7" :src="AquapodLogo">
            
            <!--SEARCH-->
            <img v-if="['Map', 'Dashboard', 'Warnings', 'ControlPanel'].includes(this.$route.name )" class="h-7" :src="SearchIcon">
            <input v-if="['Map', 'Dashboard', 'Warnings', 'ControlPanel'].includes(this.$route.name)" class="bg-transparent w-full h-full outline-none text-AP_DarkFont text-lg placeholder:text-AP_SecondaryFont" placeholder="Search AquaPods..." type="text">
            
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
    components: { },
    props: {},
    data() { return {} },
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