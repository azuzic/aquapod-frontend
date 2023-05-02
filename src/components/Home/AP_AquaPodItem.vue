<script setup>
import SeaDepthIcon from "@/assets/icons/SeaDepthIcon.svg"
import SeaTemperatureIcon from "@/assets/icons/SeaTemperatureIcon.svg"
import WindSpeedIcon from "@/assets/icons/WindSpeedIcon.svg"
</script>

<template>
    <div class="w-full h-28 px-4">
        <div class="flex flex-col justify-center items-center w-full h-full bg-cover bg-center rounded-2xl relative overflow-hidden"
            :style="'background-image: url(' + image + ');'">
            
            <div class="absolute AquaPodItemImageBG w-full h-full z-20 top-0 left-0"></div>

            <p class="mt-2 text-4xl font-bold text-white z-50"> {{ city.toUpperCase() }} </p>
            <div class="flex w-full justify-center items-center mt-3 text-lg text-white z-50 gap-4">
                <div class="flex items-center justify-center">
                    <img class="invert brightness-0 h-7 mr-1" :src="SeaTemperatureIcon"> <div>{{ temp }} °C</div> 
                </div>
                <div class="flex items-center justify-center">
                    <img class="invert brightness-0 h-6 mr-1" :src="WindSpeedIcon"> <div>{{ wind }} km/h</div> 
                </div>
                <div class="flex items-center justify-center">
                    <img class="invert brightness-0 h-5 mr-1" :src="SeaDepthIcon"> <div>{{ depth }} m</div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_AquaPodItem",
    components: { SeaDepthIcon, SeaTemperatureIcon, WindSpeedIcon },
    props: { 
        image: String,
        city: String,
        temp: Number,
        wind: Number,
        depth: Number
    },
}
</script>

<style lang="scss" scoped>
.AquaPodItemImageBG {
    background: linear-gradient(180deg, rgba(82, 176, 165, 0.95) 0%, rgba(3, 49, 102, 0.95) 100%);
    opacity: 0.66;
}
</style>