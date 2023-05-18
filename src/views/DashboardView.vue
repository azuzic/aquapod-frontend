<script setup>
import AP_AquaPodItem from '../components/Dashboard/AP_AquaPodItem.vue';
import WindSpeedIcon from "../assets/icons/WindSpeedIcon.svg"
import WindDirectionIcon from "../assets/icons/WindDirectionIcon.svg"
import SeaDepthIcon from "../assets/icons/SeaDepthIcon.svg"
import SeaTemperatureIcon from "../assets/icons/SeaTemperatureIcon.svg"
import AirTemperatureIcon from "../assets/icons/AirTemperatureIcon.svg"
import AP_DashboardBlock from '../components/Dashboard/AP_DashboardBlock.vue';
import AP_DashboardBlockSquare from '../components/Dashboard/AP_DashboardBlockSquare.vue';
import AP_TrashMeter from '../components/Dashboard/AP_TrashMeter.vue';
import DashboardIcon from "../assets/icons/DashboardIcon.svg"
import CapacityIcon from "../assets/icons/CapacityIcon.svg"
import ChargingIcon from "../assets/icons/ChargingIcon.svg"
import DepletingIcon from "../assets/icons/DepletingIcon.svg"
import PHIcon from "../assets/icons/PHIcon.svg"
import SolarPanelPowerIcon from "../assets/icons/SolarPanelPowerIcon.svg"
import SpinIcon from "../assets/icons/SpinIcon.svg"
import SunIcon from "../assets/icons/SunIcon.svg"
import TimeIcon from "../assets/icons/TimeIcon.svg"
import UseIcon from "../assets/icons/UseIcon.svg"
import VoltageIcon from "../assets/icons/VoltageIcon.svg"
import { useGlobalStore } from '../stores/globalStore'
const globalStore = useGlobalStore()
</script>

<template>
    <div class="flex flex-col justify-center items-center py-24 w-full px-4 gap-2">
        <AP_AquaPodItem :image="globalStore.activePod.properties.image" :city="globalStore.activePod.properties.city" :north="globalStore.activePod.geometry.coordinates[1].toFixed(4)" :east="globalStore.activePod.geometry.coordinates[0].toFixed(4)" />

        <!--COUNTER-->
        <p class="font-bold text-5xl text-AP_AccentFont mt-4"> {{ globalStore.activePod.data.trashRemovedTotal }} </p>
        <p class="pt-2 mb-2 font-bold text-base text-AP_SecondaryFont">KG UKLONJENO</p>

        <AP_TrashMeter v-if="globalStore.admin" :amount="globalStore.activePod.data.trashCapacity" />

        <div class="w-full" v-if="globalStore.admin">
            <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Vjetar</div>

            <div class="flex w-full gap-2">
                <AP_DashboardBlockSquare :image="WindSpeedIcon" info="Brzina" :value="globalStore.activePod.data.windSpeed" measure="km/h" />
                <AP_DashboardBlockSquare :image="WindDirectionIcon" info="Smjer" :value="globalStore.activePod.data.windDirection[0]" :measure="globalStore.activePod.data.windDirection[1]" />
            </div>
        </div>

        <div class="w-full flex flex-col gap-2" v-else>
            <AP_DashboardBlock :image="WindSpeedIcon" info="Brzina vjetra" :value="globalStore.activePod.data.windSpeed" measure="km/h" />
            <AP_DashboardBlock :image="WindDirectionIcon" info="Smjer vjetra" :value="globalStore.activePod.data.windDirection[0]" :measure="globalStore.activePod.data.windDirection[1]" />
        </div>

        <AP_DashboardBlock v-if="globalStore.admin" :image="SeaDepthIcon" info="Dubina mora" :value="globalStore.activePod.data.seaDepth" measure="m" />

        <AP_DashboardBlock v-if="globalStore.admin" :image="PHIcon" info="PH mora" :value="globalStore.activePod.data.seaPH" measure="pH" />
        
        <div class="text-2xl text-AP_AccentFont font-bold">Temperatura</div>

        <div class="flex w-full gap-2">
            <AP_DashboardBlockSquare :image="AirTemperatureIcon" info="Zrak" :value="globalStore.activePod.data.airTemp" measure="°C" />
            <AP_DashboardBlockSquare :image="SeaTemperatureIcon" info="More" :value="globalStore.activePod.data.seaTemp" measure="°C" />
        </div>
        
        <div v-if="globalStore.admin" class="w-full flex flex-col justify-center items-center gap-2">

            <div class="text-2xl text-center text-AP_AccentFont font-bold">Pumpa</div>

            <div class="flex w-full gap-2">
                <AP_DashboardBlockSquare :image="DashboardIcon" info="Broj okretaja" :value="globalStore.activePod.data.pumpRPM" measure="rpm" />
                <AP_DashboardBlockSquare :image="TimeIcon" info="Sati rada" :value="globalStore.activePod.data.pumpWork" measure="h" />
            </div>

            <div class="text-2xl text-center text-AP_AccentFont font-bold">Solarni paneli</div>

            <div class="flex w-full gap-2">
                <AP_DashboardBlockSquare :image="SolarPanelPowerIcon" info="Napon" :value="globalStore.activePod.data.solarVoltage" measure="V" />
                <AP_DashboardBlockSquare :image="TimeIcon" info="Sati rada" :value="globalStore.activePod.data.solarWork" measure="h" />
            </div>

            <AP_DashboardBlock v-if="globalStore.admin" :image="UseIcon" info="Iskorištenost solarnih panela" :value="globalStore.activePod.data.solarUse" measure="Wh" />

            <div class="text-2xl text-center text-AP_AccentFont font-bold">Akumulator</div>

            <div class="flex w-full gap-2">
                <AP_DashboardBlockSquare :image="ChargingIcon" info="Struja punjenja" :value="globalStore.activePod.data.accCharge" measure="A" />
                <AP_DashboardBlockSquare :image="DepletingIcon" info="Struja pražnjenja" :value="globalStore.activePod.data.accDeplete" measure="A" />
            </div>

            <div class="flex w-full gap-2">
                <AP_DashboardBlockSquare :image="VoltageIcon" info="Napon" :value="globalStore.activePod.data.accVoltage" measure="V" />
                <AP_DashboardBlockSquare :image="CapacityIcon" info="Preostali kapacitet" :value="globalStore.activePod.data.accCapacity" measure="Ah" />
            </div>

            <AP_DashboardBlock v-if="globalStore.admin" :image="SpinIcon" info="Broj ciklusa akumulatora" :value="globalStore.activePod.data.accCycle" measure="" />

            <AP_DashboardBlock v-if="globalStore.admin" :image="SunIcon" info="Vrijednost insolacije" :value="globalStore.activePod.data.accInsolation" measure="kWh/m²" />
        </div>

        <AP_DashboardBlock v-if="!globalStore.admin" :image="SeaDepthIcon" info="Dubina mora" :value="globalStore.activePod.data.seaDepth" measure="m" />

    </div>
</template>

<script>
export default {
    name: "DashboardView",
    components: {
        AP_AquaPodItem,
        AP_DashboardBlock,
        AP_DashboardBlockSquare,
        AP_TrashMeter
    },
}
</script>