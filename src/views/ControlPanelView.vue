<script setup>
import AP_AquaPodItem from '@/components/Dashboard/AP_AquaPodItem.vue';
import AP_Checkbox from '@/components/ControlPanel/AP_Checkbox.vue';
import NovigradBG from "@/assets/images/Novigrad.jpg"
import SpinIcon from "@/assets/icons/SpinIcon.svg"
import VoltageIcon from "@/assets/icons/VoltageIcon.svg"
import { useGlobalStore } from '@/stores/globalStore'
import AP_ControlBlock from '@/components/ControlPanel/AP_ControlBlock.vue';
const globalStore = useGlobalStore()
</script>

<template>
    <div class="flex flex-col justify-center items-center py-24 w-full px-4 gap-2">
        <AP_AquaPodItem :image="NovigradBG" :city="'Novigrad'" :north="45.3157" :east="13.5619" />

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
</template>

<script>
export default {
    name: "ControlPanelView",
    components: { AP_AquaPodItem, AP_Checkbox, AP_ControlBlock },
    props: {},
    data() {return {}},    
}
</script>

<style lang="scss" scoped>
.btn {
    background: linear-gradient(180deg, rgba(82, 176, 165, 0.25) 0%, rgba(8, 96, 199, 0.25) 100%);
}
</style>