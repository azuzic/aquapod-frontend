<template>
    <div class="flex flex-col justify-center items-center py-24 sm:pt-0 sm:pb-24 w-full px-4 sm:px-0 gap-2">
        <AP_AquaPodItem :image="BoatImage" :city="globalStore.activePodUser.name" :north="+(globalStore.activePodUser.gps_position[0].latitude.toFixed(4))" :east="+(globalStore.activePodUser.gps_position[0].longitude.toFixed(4))" />

        <p class="font-bold text-5xl sm:text-6xl text-AP_AccentFont mt-4"> {{ globalStore.activePodUser.total_garbage_collected.toFixed(2) }} </p>
        <p class="pt-2 mb-2 sm:mb-4 font-bold text-base sm:text-xl text-AP_SecondaryFont">KG UKLONJENO</p>

        <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start w-full px-0 sm:px-20 gap-2 pb-64 sm:pb-[540px] transition-all">
            
            <AP_DashboardBlock @click="globalStore.type='wind_power'; selectedGraphName='Brzina vjetra'; globalStore.collapse = false;"
                        :image="WindSpeedIcon" info="Brzina vjetra" :value="globalStore.activePodUser.environment[0].wind_power" :measure="globalStore.activePodUser.environment[0].wind_power_unit.symbol" />
            <AP_DashboardBlock @click="globalStore.type='wind_direction'; selectedGraphName='Smjer vjetra'; globalStore.collapse = false;"
                        :image="WindDirectionIcon" info="Smjer vjetra" :value="globalStore.activePodUser.environment[0].wind_direction" :measure="globalStore.activePodUser.environment[0].wind_direction_unit.symbol" />

            <div class="w-full sm:w-fit sm:hidden">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2" :class="globalStore.admin ? '' : 'sm:hidden'">Temperatura</div>

                <div class="flex justify-center w-full gap-2 sm:hidden">
                    <AP_DashboardBlockSquare @click="globalStore.type='air_temperature'; selectedGraphName='Temperatura zraka'; globalStore.collapse = false;"
                        :image="AirTemperatureIcon" info="Zrak" 
                        :value="globalStore.activePodUser.environment[0].air_temperature" 
                        :measure="globalStore.activePodUser.environment[0].air_temperature_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='sea_temperature'; selectedGraphName='Temperatura mora'; globalStore.collapse = false;"
                        :image="SeaTemperatureIcon" info="More" 
                        :value="globalStore.activePodUser.environment[0].sea_temperature" 
                        :measure="globalStore.activePodUser.environment[0].sea_temperature_unit.symbol" />
                </div>
            </div>
            <AP_DashboardBlock @click="globalStore.type='air_temperature'; selectedGraphName='Temperatura zraka'; globalStore.collapse = false;"
                        class="hidden sm:flex" :image="AirTemperatureIcon" info="Temperatura zraka" 
                        :value="globalStore.activePodUser.environment[0].air_temperature" 
                        :measure="globalStore.activePodUser.environment[0].air_temperature_unit.symbol" />
            <AP_DashboardBlock @click="globalStore.type='sea_temperature'; selectedGraphName='Temperatura mora'; globalStore.collapse = false;"
                        class="hidden sm:flex" :image="SeaTemperatureIcon" info="Temperatura mora" 
                        :value="globalStore.activePodUser.environment[0].sea_temperature" 
                        :measure="globalStore.activePodUser.environment[0].sea_temperature_unit.symbol" />

            <AP_DashboardBlock @click="globalStore.type='sea_depth'; selectedGraphName='Dubina mora'; globalStore.collapse = false;"
                        :image="SeaDepthIcon" info="Dubina mora" :value="globalStore.activePodUser.environment[0].sea_depth" :measure="globalStore.activePodUser.environment[0].sea_depth_unit.symbol" />

        </div>
        <div class="w-full fixed z-[50] mb-14 sm:mb-0 px-1 sm:px-40 h-64 sm:h-[540px] sm:mt-8 bg-white border-t drop-shadow-md | transition-all duration-500"
        :class="globalStore.collapse ? '-bottom-[540px]' : 'bottom-0'">
            <div @click="globalStore.collapse = true" class="absolute text-3xl sm:text-6xl right-4 z-50 cursor-pointer"> 
                <i class="fa-solid fa-xmark text-AP_DarkFont hover:text-AP_DangerFont transition-all"></i> 
            </div>
            <Line :options="chartOptions" :data="chartData"/>
        </div>
    </div>
</template>

<script>
import BoatImage from "@/assets/images/boat.png"
import AP_AquaPodItem from '@/components/Dashboard/AP_AquaPodItem.vue';
import WindSpeedIcon from "@/assets/icons/WindSpeedIcon.svg"
import WindDirectionIcon from "@/assets/icons/WindDirectionIcon.svg"
import SeaDepthIcon from "@/assets/icons/SeaDepthIcon.svg"
import SeaTemperatureIcon from "@/assets/icons/SeaTemperatureIcon.svg"
import AirTemperatureIcon from "@/assets/icons/AirTemperatureIcon.svg"
import AP_DashboardBlock from '@/components/Dashboard/AP_DashboardBlock.vue';
import AP_WarningBlock from '@/components/Warning/AP_WarningBlock.vue';
import AP_DashboardBlockSquare from '@/components/Dashboard/AP_DashboardBlockSquare.vue';
import AP_TrashMeter from '@/components/Dashboard/AP_TrashMeter.vue';
import DashboardIcon from "@/assets/icons/DashboardIcon.svg"
import CapacityIcon from "@/assets/icons/CapacityIcon.svg"
import ChargingIcon from "@/assets/icons/ChargingIcon.svg"
import DepletingIcon from "@/assets/icons/DepletingIcon.svg"
import PHIcon from "@/assets/icons/PHIcon.svg"
import SolarPanelPowerIcon from "@/assets/icons/SolarPanelPowerIcon.svg"
import SpinIcon from "@/assets/icons/SpinIcon.svg"
import SunIcon from "@/assets/icons/SunIcon.svg"
import TimeIcon from "@/assets/icons/TimeIcon.svg"
import UseIcon from "@/assets/icons/UseIcon.svg"
import VoltageIcon from "@/assets/icons/VoltageIcon.svg"
import { useGlobalStore } from '@/stores/globalStore';
import { Bar } from 'vue-chartjs'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { AquaPodPublic } from "@/services"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend )

export default {
    name: "DashboardView",
    components: {
    AP_AquaPodItem,
    AP_DashboardBlock,
    AP_DashboardBlockSquare,
    AP_TrashMeter,
    Bar,
    Line,
    AP_WarningBlock
},
    setup() {
        const globalStore = useGlobalStore();
        return { 
            BoatImage,
            globalStore, 
            WindSpeedIcon,
            WindDirectionIcon,
            SeaDepthIcon,
            SeaTemperatureIcon,
            AirTemperatureIcon,
            AP_DashboardBlock,
            AP_DashboardBlockSquare,
            AP_TrashMeter,
            DashboardIcon,
            CapacityIcon,
            ChargingIcon,
            DepletingIcon,
            PHIcon,
            SolarPanelPowerIcon,
            SpinIcon,
            SunIcon,
            TimeIcon,
            UseIcon,
            VoltageIcon 
        }
    },
    data() {
        return {
            data: [],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
            selectedGraphName: ""
        }
    },
    methods: {
        formatTime(unixTime) {
            let timestampString = unixTime;
            let dateObject = new Date(timestampString);
            let unixTimestamp = Math.floor(dateObject.getTime() / 1000);

            const currentTime = Math.floor(Date.now() / 1000); // Current Unix time in seconds
            const timeDifference = currentTime - unixTimestamp;

            const hours = Math.floor(timeDifference / 3600);
            const minutes = Math.floor((timeDifference % 3600) / 60);
            const seconds = timeDifference % 60;
            return `${hours == 0 ? 'trenutno' : hours == 1 ? ' prije '+ hours +' sat' : ' prije  '+ hours +'  sati'}`;
        },
        extractData(type) {
            var dataArray = [];
            for (var i = 0; i < this.data.length; i++) {
                var item = this.data[i];
                dataArray.push(item[type]);
            }
            return dataArray;
        },
    },
    async mounted() {
        this.data = await AquaPodPublic.GetEnvironment(this.globalStore.activePodUser.name);
    },
    computed: {
        chartData() {
            const labels = [];
            let data = [];

            data = this.extractData(this.globalStore.type);

            let tempLabels = this.extractData("operational_timestamp");
            tempLabels.forEach(element => {
                labels.push(this.formatTime(element))
            });

            return {
                labels: labels,
                datasets: [
                    {
                        label: this.selectedGraphName,
                        backgroundColor: '#146b90',
                        data: data
                    }
                ]
            };
        }
    }
}
</script>