<template>
    <div class="flex flex-col justify-center items-center py-24 sm:pt-0 sm:pb-24 w-full px-4 sm:px-0 gap-2">
        <AP_AquaPodItem :image="BoatImage" :city="globalStore.activePodAdmin.name" :north="+(globalStore.activePodAdmin.latest_data[1].data.latitude.toFixed(4))" :east="+(globalStore.activePodAdmin.latest_data[1].data.longitude.toFixed(4))" />

        <!--AP_WarningBlock v-if="globalStore.activePod.properties.city == 'Poreč' && globalStore.admin" info="Poreč" text="Koš za smeće se zaglavio!" value="" measure="" :warning="false"/-->
        
        <p class="font-bold text-5xl sm:text-6xl text-AP_AccentFont mt-4"> {{ globalStore.activePodAdmin.total_garbage_collected }} </p>
        <p class="pt-2 mb-2 sm:mb-4 font-bold text-base sm:text-xl text-AP_SecondaryFont">KG UKLONJENO</p>

        <AP_TrashMeter :amount="globalStore.activePodAdmin.total_garbage_collected" />
        <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center sm:items-start w-full px-0 sm:px-20 gap-2 pb-64 sm:pb-[540px] transition-all sm:justify-around sm:gap-6">
            
            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Vjetar</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='wind_power'; selectedGraphName='Brzina vjetra'; globalStore.collapse = false;"
                        :image="WindSpeedIcon" info="Brzina" 
                        :value="globalStore.activePodAdmin.latest_data[6].data.wind_power" 
                        :measure="globalStore.activePodAdmin.latest_data[6].data.wind_power_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='wind_direction'; selectedGraphName='Smjer vjetra'; globalStore.collapse = false;"
                        :image="WindDirectionIcon" info="Smjer" 
                        :value="globalStore.activePodAdmin.latest_data[6].data.wind_direction" 
                        :measure="globalStore.activePodAdmin.latest_data[6].data.wind_direction_unit.symbol" />
                </div>
            </div>

            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">More</div>
                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='sea_depth'; selectedGraphName='Dubina mora'; globalStore.collapse = false;"
                        :image="SeaDepthIcon" info="Dubina" 
                        :value="globalStore.activePodAdmin.latest_data[6].data.sea_depth" 
                        :measure="globalStore.activePodAdmin.latest_data[6].data.sea_depth_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='sea_ph'; selectedGraphName='HP mora'; globalStore.collapse = false;"
                        :image="PHIcon" info="PH" 
                        :value="globalStore.activePodAdmin.latest_data[6].data.sea_ph" 
                        :measure="globalStore.activePodAdmin.latest_data[6].data.sea_ph_unit.symbol" />
                </div>
            </div>
            
            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Temperatura</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='air_temperature'; selectedGraphName='Temperatura zraka'; globalStore.collapse = false;"
                        :image="AirTemperatureIcon" info="Zrak" 
                        :value="globalStore.activePodAdmin.latest_data[6].data.air_temperature" 
                        :measure="globalStore.activePodAdmin.latest_data[6].data.air_temperature_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='sea_temperature'; selectedGraphName='Temperatura mora'; globalStore.collapse = false;"
                        :image="SeaTemperatureIcon" info="More" 
                        :value="globalStore.activePodAdmin.latest_data[6].data.sea_temperature" 
                        :measure="globalStore.activePodAdmin.latest_data[6].data.sea_temperature_unit.symbol" />
                </div>
            </div>

            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Pumpa</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='speed'; selectedGraphName='Broj okretaja pumpe'; globalStore.collapse = false;"
                        :image="DashboardIcon" info="Broj okretaja" 
                        :value="globalStore.activePodAdmin.latest_data[3].data.speed" 
                        :measure="globalStore.activePodAdmin.latest_data[3].data.speed_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='working_time'; selectedGraphName='Sati rada pumpe'; globalStore.collapse = false;"
                        :image="TimeIcon" info="Sati rada" 
                        :value="globalStore.activePodAdmin.latest_data[3].data.working_time" 
                        :measure="'h'" />
                </div>
            </div>

            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold mb-2">Solarni paneli</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='voltage'; selectedGraphName='Napon solarnih panela'; globalStore.collapse = false;"
                        :image="SolarPanelPowerIcon" info="Napon" 
                        :value="globalStore.activePodAdmin.latest_data[5].data.voltage" 
                        :measure="globalStore.activePodAdmin.latest_data[5].data.voltage_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='working_time'; selectedGraphName='Sati rada solarnih panela'; globalStore.collapse = false;"
                        :image="TimeIcon" info="Sati rada" 
                        :value="globalStore.activePodAdmin.latest_data[5].data.working_time" 
                        :measure="'h'" />
                </div>
            </div>

            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Solarni paneli</div>

                <AP_DashboardBlock @click="globalStore.type='utilization'; selectedGraphName='Iskorištenost solarnih panela'; globalStore.collapse = false;"
                        class="sm:w-[392px] sm:h-48" :image="UseIcon" info="Iskorištenost solarnih panela" 
                        :value="globalStore.activePodAdmin.latest_data[5].data.utilization" 
                        :measure="globalStore.activePodAdmin.latest_data[5].data.utilization_unit.symbol" />
            </div>

            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold">Akumulator</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='voltage'; selectedGraphName='Napon akumulatora'; globalStore.collapse = false;"
                        :image="VoltageIcon" info="Napon"
                        :value="globalStore.activePodAdmin.latest_data[4].data.voltage" 
                        :measure="globalStore.activePodAdmin.latest_data[4].data.voltage_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='capacity'; selectedGraphName='Preostali kapacitet akumulatora'; globalStore.collapse = false;"
                        :image="CapacityIcon" info="Preostali kapacitet"
                        :value="globalStore.activePodAdmin.latest_data[4].data.capacity" 
                        :measure="globalStore.activePodAdmin.latest_data[4].data.capacity_unit.symbol" />
                </div>
            </div>
            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Akumulator</div>

                <div class="flex justify-center w-full gap-2">
                    <AP_DashboardBlockSquare @click="globalStore.type='charge_current'; selectedGraphName='Struja punjenja akumulatora'; globalStore.collapse = false;"
                        :image="ChargingIcon" info="Struja punjenja"
                        :value="globalStore.activePodAdmin.latest_data[4].data.charge_current" 
                        :measure="globalStore.activePodAdmin.latest_data[4].data.charge_current_unit.symbol" />
                    <AP_DashboardBlockSquare @click="globalStore.type='discharge_current'; selectedGraphName='Struja pražnjenja akumulatora'; globalStore.collapse = false;"
                        :image="DepletingIcon" info="Struja pražnjenja"
                        :value="globalStore.activePodAdmin.latest_data[4].data.discharge_current" 
                        :measure="globalStore.activePodAdmin.latest_data[4].data.discharge_current_unit.symbol" />
                </div>
            </div>

            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Akumulator</div>
                <div class="flex flex-col gap-2">
                    <AP_DashboardBlock @click="globalStore.type='cycle_count'; selectedGraphName='Broj ciklusa akumulatora'; globalStore.collapse = false;"
                        class="sm:w-[392px] sm:h-48" :image="SpinIcon" info="Broj ciklusa akumulatora"
                        :value="globalStore.activePodAdmin.latest_data[4].data.cycle_count" 
                        measure="" />
                </div>
            </div>

            <div class="w-full sm:w-fit">
                <div class="text-2xl text-center text-AP_AccentFont font-bold hidden sm:block">Insolacija</div>
                <div class="flex flex-col gap-2">
                    <AP_DashboardBlock @click="globalStore.type='insolation'; selectedGraphName='Vrijednost insolacije'; globalStore.collapse = false;"
                            class="sm:w-[392px] sm:h-48" :image="SunIcon" info="Vrijednost insolacije" 
                        :value="globalStore.activePodAdmin.latest_data[5].data.insolation" 
                        :measure="globalStore.activePodAdmin.latest_data[5].data.insolation_unit.symbol" />
                </div>
            </div>

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
import { AquaPodPublic, AquaPodAdmin } from "@/services"

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
            dataEnvironment: [],
            dataBattery: [],
            dataSolarPanel: [],
            dataPump: [],
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
        extractData(type, data) {
            var dataArray = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                dataArray.push(item[type]);
            }
            return dataArray;
        },
    },
    async mounted() {
        this.dataEnvironment = await AquaPodPublic.GetEnvironment(this.globalStore.activePodUser.name);
        this.dataBattery = await AquaPodAdmin.GetBattery(this.globalStore.activePodUser.name);
        this.dataSolarPanel = await AquaPodAdmin.GetSolarPanel(this.globalStore.activePodUser.name);
        this.dataPump = await AquaPodAdmin.GetPump(this.globalStore.activePodUser.name);
    },
    computed: {
        chartData() {
            const labels = [];
            let data = [];
            let tempLabels = [];

            if (['Brzina vjetra', 'Smjer vjetra', 'Dubina mora', 'HP mora', 'Temperatura zraka', 'Temperatura mora'].includes(this.selectedGraphName)) {
                data = this.extractData(this.globalStore.type, this.dataEnvironment);
                tempLabels = this.extractData("operational_timestamp", this.dataEnvironment);
            }
            else if (['Broj okretaja pumpe', 'Sati rada pumpe'].includes(this.selectedGraphName)) {
                data = this.extractData(this.globalStore.type, this.dataPump);
                tempLabels = this.extractData("operational_timestamp", this.dataPump);
            }
            else if (['Napon solarnih panela', 'Sati rada solarnih panela', 'Iskorištenost solarnih panela', 'Vrijednost insolacije'].includes(this.selectedGraphName)) {
                data = this.extractData(this.globalStore.type, this.dataSolarPanel);
                tempLabels = this.extractData("operational_timestamp", this.dataSolarPanel);
            }
            else { 
                data = this.extractData(this.globalStore.type, this.dataBattery);
                tempLabels = this.extractData("operational_timestamp", this.dataBattery);
            }
            
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