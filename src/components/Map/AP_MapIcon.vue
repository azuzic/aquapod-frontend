<script setup>
import SeaDepthIcon from "../../assets/icons/SeaDepthIcon.svg"
import SeaTemperatureIcon from "../../assets/icons/SeaTemperatureIcon.svg"
import WindSpeedIcon from "../../assets/icons/WindSpeedIcon.svg"
import BoatIcon from "../../assets/icons/BoatIcon.svg"
import WarningFilledIcon from "../../assets/icons/WarningFilledIcon.svg"
</script>

<template>
    <div class="w-fit">
        <div class="flex flex-col justify-center items-center h-16 bg-cover bg-center relative p-2">
            
            <div :class="info ? 'opacity-100' : 'opacity-0'" class="absolute AquaPodItemImageBG rounded-xl w-full h-full z-20 top-0 left-0"></div>

            <p :class="info ? 'opacity-100' : 'opacity-0'"  class="w-full text-lg text-AP_DarkFont z-50"> Aquapod: <b>{{ city }}</b> </p>

            <div :class="info ? 'opacity-100' : 'opacity-0'"  class="flex w-full justify-center items-center text-lg text-white z-50 gap-4">
                <div class="flex items-center justify-center">
                    <img class="h-6 mr-1" :src="SeaTemperatureIcon"> 
                    <div class=" text-AP_DarkFont flex gap-1"><div class="text-AP_AccentFont">{{ temp }}</div>°C</div>
                </div>
                <div class="flex items-center justify-center">
                    <img class="h-5 mr-1" :src="WindSpeedIcon">
                    <div class=" text-AP_DarkFont flex gap-1"><div class="text-AP_AccentFont">{{ wind }}</div>km/h</div> 
                </div>
                <div class="flex items-center justify-center">
                    <img class="h-4 mr-1 text-da" :src="SeaDepthIcon">
                    <div class=" text-AP_DarkFont flex gap-1"><div class="text-AP_AccentFont">{{ depth }}</div> m</div>
                </div>
            </div>

            <div :class="info ? 'opacity-100' : 'opacity-0'"  class="arrow h-5 w-5 -bottom-2.5 z-0"></div>
            <img class="absolute -bottom-14 w-10" :src="BoatIcon">
            <img v-if="warning" class="absolute -bottom-8 ml-10 w-5 warningIcon" :src="WarningFilledIcon" >
            <img v-if="danger" class="absolute -bottom-8 ml-10 w-5 dangerIcon" :src="WarningFilledIcon" >
            
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_MapIcon",
    components: { },
    props: { 
        city: String,
        temp: Number,
        wind: Number,
        depth: Number,
        info: Boolean,
        warning: Boolean,
        danger: Boolean
    },
}
</script>

<style lang="scss" scoped>
.AquaPodItemImageBG {
    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
.arrow {
    /* Arrow */
    position: absolute;

    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    transform: matrix(0.75, 0.66, -0.75, 0.66, 0, 0);
}
.warningIcon {
    filter: invert(66%) sepia(68%) saturate(493%) hue-rotate(1deg) brightness(99%) contrast(91%);
}
.dangerIcon {
    filter: invert(16%) sepia(78%) saturate(4356%) hue-rotate(327deg) brightness(89%) contrast(78%);
}
</style>