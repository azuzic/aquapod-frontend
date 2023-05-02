<script setup>
import AquapodLogo from "@/assets/logo/AquapodLogo.svg"
import MenuIcon from "@/assets/icons/MenuIcon.svg"
import SearchIcon from "@/assets/icons/SearchIcon.svg"
</script>

<template>
    <div class="fixed top-0 w-full z-50 | transition-all duration-500"
        :class="this.$route.name == 'Home' ? 'p-0' : 'p-4'">
        <div class="TopMenuBG h-14 w-full flex items-center | transition-all duration-500"
            :class="this.$route.name == 'Home' ? 'BorderBottom rounded-[0px] pt-1.5 pl-4 pr-6 justify-between' : 'rounded-[200px] px-4 gap-4'">
            <img v-if="this.$route.name == 'Home'" class="h-7" :src="AquapodLogo">
            <img v-if="this.$route.name != 'Home'" class="h-7" :src="SearchIcon">
            <input v-if="this.$route.name != 'Home'" class="bg-transparent w-full h-full outline-none text-AP_DarkFont text-lg placeholder:text-AP_SecondaryFont" placeholder="Search AquaPods..." type="text">
            <img class="h-5" :src="MenuIcon">
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_TopMenu",
    components: { AquapodLogo, MenuIcon, SearchIcon },
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
/**
<div class="TopSearchBG w-full h-14 rounded-full flex items-center px-4 gap-4">
    <img class="h-7" :src="SearchIcon">
    <div class="w-full h-full flex items-center justify-between">
        <input class="bg-transparent outline-none text-AP_DarkFont text-lg placeholder:text-AP_SecondaryFont" placeholder="Search AquaPods..." type="text">
        <img class="h-5" :src="MenuIcon">
    </div>
</div>
 */
</style>