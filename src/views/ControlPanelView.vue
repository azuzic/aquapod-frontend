<template>
    <div class="flex flex-col justify-center items-center py-24 sm:pt-0 sm:pb-24 w-full px-4 sm:px-0 gap-2">
        <AP_AquaPodItem :image="BoatImage" :city="globalStore.activePodAdmin.name" :north="+(globalStore.activePodAdmin.latest_data[1].data.latitude.toFixed(4))" :east="+(globalStore.activePodAdmin.latest_data[1].data.longitude.toFixed(4))" />

        <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-start sm:gap-6 items-center sm:items-start w-full px-0 sm:pt-4 sm:px-20 gap-2">
            <AP_Checkbox label="Pumpa upaljena"/>

            <AP_ControlBlock  :image="SpinIcon" info="Broj okretaja pumpe" :value="2000" measure="rpm" :i="100" :max="2500" :min="1500" />
            <AP_ControlBlock  :image="VoltageIcon" info="Snaga elektroventila 1" :value="25" measure="W" :i="5" :max="100" :min="0" />
            <AP_ControlBlock  :image="VoltageIcon" info="Snaga elektroventila 2" :value="25" measure="W" :i="5" :max="100" :min="0" />
            <AP_ControlBlock  :image="VoltageIcon" info="Snaga elektroventila 3" :value="25" measure="W" :i="5" :max="100" :min="0" />
            <AP_ControlBlock  :image="VoltageIcon" info="Snaga elektroventila 4" :value="25" measure="W" :i="5" :max="100" :min="0" />

            <AP_Checkbox label="Kamera upaljena"/>

            <button class="btn text-AP_DarkFont font-bold text-2xl px-20 py-3 rounded-full">
                Kamera
            </button>
        </div>
    </div>
</template>

<script>
import AP_AquaPodItem from '@/components/Dashboard/AP_AquaPodItem.vue';
import AP_Checkbox from '@/components/ControlPanel/AP_Checkbox.vue';
import SpinIcon from "@/assets/icons/SpinIcon.svg"
import VoltageIcon from "@/assets/icons/VoltageIcon.svg"
import BoatImage from "@/assets/images/boat.png"
import AP_ControlBlock from '@/components/ControlPanel/AP_ControlBlock.vue';
import { useGlobalStore } from '@/stores/globalStore'
import { AquaPodAdmin } from "@/services"
export default {
    name: "ControlPanelView",
    components: { AP_AquaPodItem, AP_Checkbox, AP_ControlBlock },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore, SpinIcon, VoltageIcon, BoatImage }
    },
    data() {return {
        dataBattery: [],
        dataSolarPanel: [],
        dataPump: [],
    }},    
    async mounted() {
        this.dataPump = await AquaPodAdmin.GetPump(this.globalStore.activePodUser.name);
    },
}
</script>

<style lang="scss" scoped>
.btn {
    background: linear-gradient(180deg, rgba(82, 176, 165, 0.25) 0%, rgba(8, 96, 199, 0.25) 100%);
}
</style>