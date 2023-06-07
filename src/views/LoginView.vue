<script setup>
import AquapodLogo from "@/assets/logo/AquapodLogo.svg"
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <div class="flex flex-col justify-center items-center py-24 w-full h-full sm:px-24 gap-2 px-8 md:px-[25%] lg:px-[30%]  xl:px-[35%] ">

        <!--LOGO-->
        <img class="w-full mt-16 sm:mt-0" :src="AquapodLogo">

        <div class="mt-32 w-full font-bold text-AP_DarkFont text-3xl">Admin prijava</div>

        <div class="h-full w-full flex flex-col justify-between sm:justify-around mt-8">
            <div class="w-full">
                <div class="w-full">
                    <input v-model="globalStore.email" class="w-full text-2xl sm:text-lg text-AP_AccentFont placeholder:text-AP_SecondaryFont outline-none peer" placeholder="E-mail" type="text">
                    <div class="border-2 border-AP_DarkFont rounded-full mt-1 peer-focus:border-AP_AccentFont | transition-all duration-300"></div>
                </div>
            
                <div class="w-full">
                    <input v-model="globalStore.password" class="w-full mt-8 text-2xl sm:text-lg text-AP_AccentFont placeholder:text-AP_SecondaryFont outline-none peer" placeholder="Lozinka" :type="hide ? 'password' : 'text'">
                    <div class="relative flex justify-end border-2 border-AP_DarkFont rounded-full mt-1 peer-focus:border-AP_AccentFont | transition-all duration-300">
                        <i @click="hide = !hide" class="fa-solid absolute -top-8 text-2xl text-AP_DarkFont" :class="hide ? 'fa-eye-slash' : 'fa-eye right-0.5'"></i>
                    </div>
                </div>
            </div>

            <button @click="globalStore.login() ? $router.push('/') : ''"
                class="btn text-AP_DarkFont font-bold text-2xl sm:text-lg px-16 py-4 sm:py-3 rounded-full w-full sm:w-64 hover:opacity-100 opacity-90 transition-all">
                Prijavi se
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: "LoginView",
    components: { AquapodLogo },
    props: {},
    data() { return {
        hide: true,
    } },
}
</script>

<style lang="scss" scoped>
.btn {
    background: linear-gradient(180deg, rgba(82, 176, 165, 0.25) 0%, rgba(8, 96, 199, 0.25) 100%);
}
</style>