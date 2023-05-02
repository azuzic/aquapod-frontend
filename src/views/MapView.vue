<script setup>
import MapImage from "@/assets/images/Map.png"
import AP_MapIcon from "../components/Map/AP_MapIcon.vue";
</script>

<template>
    <div class="flex flex-col justify-center items-center w-full h-full bg-cover"
        :style="'background-image: url(' + MapImage + ');'">
        <div class="relative w-full h-full">
            <AP_MapIcon class="absolute -left-[60px] top-[120px]" :city="'Novigrad'" :temp="20" :wind="49" :depth="75" :info="false"/>
            <AP_MapIcon class="absolute left-[10px] top-[300px]" :city="'Novigrad'" :temp="20" :wind="49" :depth="75" :info="true"/>
            <AP_MapIcon class="absolute left-[60px] top-[620px]" :city="'Poreč'"    :temp="19" :wind="62" :depth="86" :info="true" />
        </div>
    </div>
</template>

<script>
export default {
    name: "MapView",
    components: { MapImage, AP_MapIcon },
}
</script>

<style lang="scss" scoped>
</style>