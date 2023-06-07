<template>
    <div class="flex flex-col justify-center items-center py-24 sm:pt-0 sm:pb-24 w-full px-4 sm:px-0 gap-2">
        <AP_AquaPodItem :image="globalStore.activePod.properties.image" :city="globalStore.activePod.properties.city" :north="+(globalStore.activePod.geometry.coordinates[1].toFixed(4))" :east="+(globalStore.activePod.geometry.coordinates[0].toFixed(4))" />

        <AP_WarningBlock v-if="globalStore.activePod.properties.city == 'Poreč' && globalStore.admin" info="Poreč" text="Koš za smeće se zaglavio!" value="" measure="" :warning="false"/>
        
        <!--COUNTER-->
        <p class="font-bold text-5xl sm:text-6xl text-AP_AccentFont mt-4"> {{ globalStore.activePod.data.trashRemovedTotal }} </p>
        <p class="pt-2 mb-2 sm:mb-4 font-bold text-base sm:text-xl text-AP_SecondaryFont">KG UKLONJENO</p>

        <AP_TrashMeter v-if="globalStore.admin" :amount="globalStore.activePod.data.trashCapacity" />
        <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start w-full px-0 sm:px-20 gap-2 pb-64 sm:pb-[540px] transition-all"
            :class="globalStore.admin ? 'sm:justify-around sm:gap-6' : ''">
            
            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Vjetar</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='Brzina vjetra'; globalStore.collapse = false;"
                        :image="WindSpeedIcon" info="Brzina" :value="globalStore.activePod.data.windSpeed" measure="km/h" />
                    <AP_DashboardBlockSquare @click="globalStore.type='Smjer vjetra'; globalStore.collapse = false;"
                        :image="WindDirectionIcon" info="Smjer" :value="globalStore.activePod.data.windDirection[0]" :measure="globalStore.activePod.data.windDirection[1]" />
                </div>
            </div>

            <div class="w-full flex flex-col sm:hidden gap-2" v-else>
                <AP_DashboardBlock @click="globalStore.type='Brzina vjetra'; globalStore.collapse = false;"
                        :image="WindSpeedIcon" info="Brzina vjetra" :value="globalStore.activePod.data.windSpeed" measure="km/h" />
                <AP_DashboardBlock @click="globalStore.type='Smjer vjetra'; globalStore.collapse = false;"
                        :image="WindDirectionIcon" info="Smjer vjetra" :value="globalStore.activePod.data.windDirection[0]" :measure="globalStore.activePod.data.windDirection[1]" />
            </div>
            <AP_DashboardBlock @click="globalStore.type='Brzina vjetra'; globalStore.collapse = false;"
                         v-if="!globalStore.admin" class="hidden sm:flex" :image="WindSpeedIcon" info="Brzina vjetra" :value="globalStore.activePod.data.windSpeed" measure="km/h" />
            <AP_DashboardBlock @click="globalStore.type='Smjer vjetra'; globalStore.collapse = false;"
                         v-if="!globalStore.admin" class="hidden sm:flex" :image="WindDirectionIcon" info="Smjer vjetra" :value="globalStore.activePod.data.windDirection[0]" :measure="globalStore.activePod.data.windDirection[1]" />
            
            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">More</div>
                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='Dubina mora'; globalStore.collapse = false;"
                          v-if="globalStore.admin" :image="SeaDepthIcon" info="Dubina" :value="globalStore.activePod.data.seaDepth" measure="m" />
                    <AP_DashboardBlockSquare @click="globalStore.type='PH mora'; globalStore.collapse = false;"
                          v-if="globalStore.admin" :image="PHIcon" info="PH" :value="globalStore.activePod.data.seaPH" measure="pH" />
                </div>
            </div>
            
            <div class="w-full sm:w-fit sm:hidden">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2" :class="globalStore.admin ? '' : 'sm:hidden'">Temperatura</div>

                <div class="flex justify-center w-full gap-2" :class="globalStore.admin ? '' : 'sm:hidden'">
                    <AP_DashboardBlockSquare @click="globalStore.type='Temperatura zraka'; globalStore.collapse = false;"
                           :image="AirTemperatureIcon" info="Zrak" :value="globalStore.activePod.data.airTemp" measure="°C" />
                    <AP_DashboardBlockSquare @click="globalStore.type='Temperatura mora'; globalStore.collapse = false;"
                           :image="SeaTemperatureIcon" info="More" :value="globalStore.activePod.data.seaTemp" measure="°C" />
                </div>
            </div>

            <AP_DashboardBlock @click="globalStore.type='Temperatura zraka'; globalStore.collapse = false;"
                            v-if="!globalStore.admin" class="hidden sm:flex" :image="AirTemperatureIcon" info="Temperatura zraka" :value="globalStore.activePod.data.airTemp" measure="°C" />
            <AP_DashboardBlock @click="globalStore.type='Temperatura mora'; globalStore.collapse = false;"
                            v-if="!globalStore.admin" class="hidden sm:flex" :image="SeaTemperatureIcon" info="Temperatura mora" :value="globalStore.activePod.data.seaTemp" measure="°C" />

            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Pumpa</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='Broj okretaja pumpe'; globalStore.collapse = false;"
                             :image="DashboardIcon" info="Broj okretaja" :value="globalStore.activePod.data.pumpRPM" measure="rpm" />
                    <AP_DashboardBlockSquare @click="globalStore.type='Sati rada pumpe'; globalStore.collapse = false;"
                             :image="TimeIcon" info="Sati rada" :value="globalStore.activePod.data.pumpWork" measure="h" />
                </div>
            </div>

            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Solarni paneli</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='Napon solarnih panela'; globalStore.collapse = false;"
                            :image="SolarPanelPowerIcon" info="Napon" :value="globalStore.activePod.data.solarVoltage" measure="V" />
                    <AP_DashboardBlockSquare @click="globalStore.type='Sati rada solarnih panela'; globalStore.collapse = false;"
                            :image="TimeIcon" info="Sati rada" :value="globalStore.activePod.data.solarWork" measure="h" />
                </div>
            </div>

            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Solarni paneli</div>

                <AP_DashboardBlock @click="globalStore.type='Iskorištenost solarnih panela'; globalStore.collapse = false;"
                            class="sm:w-[392px] sm:h-48" v-if="globalStore.admin" :image="UseIcon" info="Iskorištenost solarnih panela" :value="globalStore.activePod.data.solarUse" measure="Wh" />
            </div>

            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold">Akumulator</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='Napon akumulatora'; globalStore.collapse = false;"
                            :image="VoltageIcon" info="Napon" :value="globalStore.activePod.data.accVoltage" measure="V" />
                    <AP_DashboardBlockSquare @click="globalStore.type='Preostali kapacitet akumulatora'; globalStore.collapse = false;"
                            :image="CapacityIcon" info="Preostali kapacitet" :value="globalStore.activePod.data.accCapacity" measure="Ah" />
                </div>
            </div>
            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Akumulator</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='Struja punjenja akumulatora'; globalStore.collapse = false;"
                            :image="ChargingIcon" info="Struja punjenja" :value="globalStore.activePod.data.accCharge" measure="A" />
                    <AP_DashboardBlockSquare @click="globalStore.type='Struja pražnjenja akumulatora'; globalStore.collapse = false;"
                            :image="DepletingIcon" info="Struja pražnjenja" :value="globalStore.activePod.data.accDeplete" measure="A" />
                </div>
            </div>

            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Akumulator</div>
                <div class="flex flex-col gap-2">
                    <AP_DashboardBlock @click="globalStore.type='Broj ciklusa akumulatora'; globalStore.collapse = false;"
                               class="sm:w-[392px] sm:h-48" v-if="globalStore.admin" :image="SpinIcon" info="Broj ciklusa akumulatora" :value="globalStore.activePod.data.accCycle" measure="" />
                </div>
            </div>

            <div class="w-full sm:w-fit" v-if="globalStore.admin">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Insolacija</div>
                <div class="flex flex-col gap-2">
                    <AP_DashboardBlock @click="globalStore.type='Vrijednost insolacije'; globalStore.collapse = false;"
                               class="sm:w-[392px] sm:h-48" v-if="globalStore.admin" :image="SunIcon" info="Vrijednost insolacije" :value="globalStore.activePod.data.accInsolation" measure="kWh/m²" />
                </div>
            </div>

            <AP_DashboardBlock @click="globalStore.type='Dubina mora'; globalStore.collapse = false;"
                               v-if="!globalStore.admin" :image="SeaDepthIcon" info="Dubina mora" :value="globalStore.activePod.data.seaDepth" measure="m" />

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

//ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
            data: {
                "Brzina vjetra": [49, 51, 48, 50, 49, 49, 47, 51, 50, 50, 49, 49, 52, 49, 51, 50, 49, 48, 50, 51, 49, 50, 50, 51, 49],
                "Smjer vjetra": [ 153, 154, 152, 153, 153, 152, 155, 151, 154, 154, 152, 153, 151, 153, 154, 152, 153, 152, 152, 153, 152, 152, 153, 152, 151, 153],
                "Dubina mora": [75, 75, 74, 75, 76, 75, 74, 74, 74, 74, 74, 74, 75, 76, 75, 75, 75, 74, 76, 74, 75, 74, 75, 75, 74],
                "PH mora": [8.1, 8.1, 8.1, 8.2, 8.1, 8.1, 8.0, 8.1, 8.1, 8.1, 8.1, 8.2, 8.1, 8.1, 8.0, 8.1, 8.0, 8.1, 8.1, 8.1, 8.2, 8.1, 8.1, 8.1, 8.1],
                "Temperatura mora": [26, 26.2, 25.9, 26.1, 26, 25.8, 26, 26.3, 26.1, 26, 25.9, 26.2, 25.8, 26, 26.1, 25.9, 25.8, 26.3, 26.1, 26, 26, 26.2, 26, 25.9, 26.1],
                "Temperatura zraka": [20, 20.1, 20, 20.2, 20, 19.9, 20, 20.1, 20.2, 20, 20.1, 20, 20.2, 19.9, 20, 20.1, 20, 20.2, 19.9, 20, 20, 20.1, 20.2, 20, 20.1],
                "Broj okretaja pumpe": [2000, 1999, 2001, 1998, 2000, 2000, 1997, 2002, 2001, 1999, 1998, 2002, 1997, 2000, 1999, 2001, 2000, 1997, 2001, 1998, 1999, 2000, 1998, 2002, 1997],
                "Sati rada pumpe": [2486, 2487, 2488, 2489, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2504, 2505, 2506, 2507, 2508],
                "Napon solarnih panela": [12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.5, 12.3, 12.4, 12.5, 12.3, 12.4, 12.3, 12.5, 12.4, 12.3, 12.4, 12.5, 12.3, 12.4, 12.5],
                "Sati rada solarnih panela": [1242, 1243, 1243, 1243, 1244, 1245, 1246, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1254, 1255, 1256, 1256, 1256, 1257, 1258, 1259, 1260],
                "Iskorištenost solarnih panela": [3598, 3598, 3599, 3600, 3600, 3600, 3601, 3602, 3603, 3604, 3604, 3605, 3605, 3606, 3606, 3606, 3606, 3606, 3606, 3606, 3606, 3606, 3606, 3606, 3607],
                "Struja punjenja akumulatora": [85, 86, 84, 85, 86, 84, 85, 86, 84, 85, 86, 84, 85, 86, 84, 85, 84, 86, 85, 84, 86, 85, 86, 84, 85],
                "Struja pražnjenja akumulatora": [76, 77, 75, 76, 77, 75, 76, 77, 75, 76, 77, 75, 76, 77, 75, 76, 75, 77, 76, 75, 77, 76, 77, 75, 76],
                "Napon akumulatora": [12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4, 12.3, 12.5, 12.4],
                "Preostali kapacitet akumulatora": [5150, 5158, 5167, 5162, 5157, 5158, 5154, 5159, 5153, 5154, 5160, 5155, 5151, 5156, 5148, 5144, 5140, 5147, 5155, 5151, 5159, 5156, 5152, 5159, 5155],
                "Broj ciklusa akumulatora": [630, 631, 629, 630, 631, 629, 630, 631, 629, 630, 631, 629, 630, 631, 629, 630, 629, 631, 630, 629, 631, 630, 631, 629, 630],
                "Vrijednost insolacije": [179.8, 179.7, 179.9, 179.8, 179.7, 179.6, 179.8, 180.0, 179.9, 179.8, 179.7, 179.6, 179.8, 179.7, 179.9, 179.8, 179.7, 179.6, 179.7, 179.7, 179.9, 180.0, 179.7, 179.9, 180.0],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
        }
    },
    methods: {
        generateRandomData() {
            const data = [];
            const initialTime = Math.floor(Date.now() / 1000); // Current Unix time in seconds

            for (let i = 0; i < 25; i++) {
                const time = initialTime - i * 3600; // Add 1 hour (3600 seconds) for each data point
                data.push({ time });
            }

            return data;
        },
        formatTime(unixTime) {
            const currentTime = Math.floor(Date.now() / 1000); // Current Unix time in seconds
            const timeDifference = currentTime - unixTime;

            const hours = Math.floor(timeDifference / 3600);
            const minutes = Math.floor((timeDifference % 3600) / 60);
            const seconds = timeDifference % 60;
            return `${hours > 0 ? hours : ''} ${hours == 0 ? 'currently' : hours == 1 ? ' hour ago' : ' hours ago'}`;
        }
    },
    computed: {
        chartData() {
            const labels = [];
            let data = [];

            this.generateRandomData().forEach((dataPoint) => {
                labels.push(this.formatTime(dataPoint.time));
            });
            data = this.data[this.globalStore.type];

            return {
                labels: labels.reverse(),
                datasets: [
                    {
                        label: this.globalStore.type,
                        backgroundColor: '#146b90',
                        data: data
                    }
                ]
            };
        }
    }
}
</script>