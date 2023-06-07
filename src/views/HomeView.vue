<script setup>
import BoatImage from "@/assets/images/boat.png"
import AP_About from "@/components/Home/AP_About.vue"
import AP_AquaPodItem from "@/components/Home/AP_AquaPodItem.vue";
import { useGlobalStore } from '@/stores/globalStore'
import AP_WarningBlock from "@/components/Warning/AP_WarningBlock.vue";
const globalStore = useGlobalStore()
</script>

<template>
    <div class="flex flex-col justify-center items-center py-20 sm:pt-0 sm:pb-20 w-full">

        <!--HOME IMAGE-->
        <div v-if="!globalStore.admin" class="mx-4 mb-4 rounded-3xl overflow-hidden relative sm:hidden">
            <img class="z-10" :src="BoatImage">
            <div class="absolute homeImageBG w-full h-full z-20 top-0 left-0 opacity-30"></div>
        </div>
        <div class="mx-4 mb-4 w-full h-64 overflow-hidden relative hidden sm:block">
            <div class="w-full h-full bg-center bg-cover blur-sm" :style="'background-image: url('+BoatImage+')'"></div>
            <div class="absolute homeImageBG w-full h-full z-20 top-0 left-0 opacity-60"></div>
        </div>

        <!--COUNTER-->
        <p class="font-bold text-5xl sm:text-7xl text-AP_AccentFont sm:mt-2"> {{ globalStore.counter.toLocaleString() }} </p>
        <p class="pt-2 sm:pt-4 mb-4 font-bold text-base sm:text-2xl  text-AP_SecondaryFont">KG UKLONJENO</p>

        <!--ABOUT-->
        <AP_About v-if="!globalStore.admin"/>

        <!--AQUAPOD ITEMS-->
        <div class="flex flex-col sm:flex-row sm:flex-wrap w-full gap-4 sm:px-20" :class="globalStore.admin ? 'sm:justify-start sm:gap-2' : 'mt-8 sm:justify-center sm:gap-8'">
            <AP_AquaPodItem v-for="i in globalStore.geojson.features" 
                                        :image="i.properties.image" 
                                        :city="i.properties.city" 
                                        :temp="i.properties.temp" 
                                        :wind="i.properties.wind" 
                                        :depth="i.properties.depth" 
                                        @click="globalStore.activePod = i; $router.push('/dashboard')"/>
        </div>

        <div v-if="globalStore.admin" class="flex flex-col w-full mt-4 gap-2 px-4 sm:px-20">
            <div class="w-full border-2  border-AP_DarkFont rounded-full"></div>
            <div class="text-2xl sm:text-3xl w-full text-AP_DarkFont font-bold mb-2">Upozorenja</div>
     
            <AP_WarningBlock info="Karigador" text="Koš za smeće se zaglavio!" value="" measure="" :warning="false"/>
            <AP_WarningBlock info="Novigrad" text="Koš napunjen" value="75" measure="%" :warning="true"/>
        </div>

    </div>
</template>

<script>
export default {
    name: "HomeView",
    components: { AP_About, AP_AquaPodItem, AP_WarningBlock }, 
}
</script>

<style lang="scss" scoped>
.homeImageBG {
    background: linear-gradient(180deg, #99DDD5 0%, #044086 100%);
}
</style>