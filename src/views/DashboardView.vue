<script setup>
import AP_AquaPodItem from '@/components/Dashboard/AP_AquaPodItem.vue';
import NovigradBG from "@/assets/images/Novigrad.jpg"
import WindSpeedIcon from "@/assets/icons/WindSpeedIcon.svg"
import WindDirectionIcon from "@/assets/icons/WindDirectionIcon.svg"
import SeaDepthIcon from "@/assets/icons/SeaDepthIcon.svg"
import SeaTemperatureIcon from "@/assets/icons/SeaTemperatureIcon.svg"
import AirTemperatureIcon from "@/assets/icons/AirTemperatureIcon.svg"
import AP_DashboardBlock from '../components/Dashboard/AP_DashboardBlock.vue';
import AP_DashboardBlockSquare from '../components/Dashboard/AP_DashboardBlockSquare.vue';
import AP_TrashMeter from '../components/Dashboard/AP_TrashMeter.vue';
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>

<template>
    <div class="flex flex-col justify-center items-center py-24 w-full px-4 gap-2">
        <AP_AquaPodItem :image="NovigradBG" :city="'Novigrad'" :north="45.3157" :east="13.5619" />

        <!--COUNTER-->
        <p class="font-bold text-5xl text-AP_AccentFont mt-4"> {{ counter.toLocaleString() }} </p>
        <p class="pt-2 mb-2 font-bold text-base text-AP_SecondaryFont">KG UKLONJENO</p>

        <AP_TrashMeter v-if="globalStore.admin" :amount="75" />

        <AP_DashboardBlock :image="WindSpeedIcon" info="Brzina Vjetra" value="49" measure="km/h" />
        <AP_DashboardBlock :image="WindDirectionIcon" info="Smjer Vjetra" value="SSE" measure="(153)''" />
        
        <div class="text-2xl text-AP_AccentFont font-bold">Temperatura</div>

        <div class="flex w-full gap-2">
            <AP_DashboardBlockSquare :image="AirTemperatureIcon" info="Zraka" value="26" measure="°C" />
            <AP_DashboardBlockSquare :image="SeaTemperatureIcon" info="Mora" value="20" measure="°C" />
        </div>

        <AP_DashboardBlock :image="SeaDepthIcon" info="Dubina Mora" value="75" measure="m" />

    </div>
</template>

<script>
export default {
    name: "DashboardView",
    components: {
    AP_AquaPodItem,
    NovigradBG,
    WindSpeedIcon,
    WindDirectionIcon,
    SeaTemperatureIcon,
    AirTemperatureIcon,
    SeaDepthIcon,
    AP_DashboardBlock,
    AP_DashboardBlockSquare,
    AP_TrashMeter
},
    data() {
        return {
            counter: 560220
        }
    },
}
</script>