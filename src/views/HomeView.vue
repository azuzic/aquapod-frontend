<script setup>
import BoatImage from "@/assets/images/Boat.png"
import AP_About from "@/components/Home/AP_About.vue"
import AP_AquaPodItem from "../components/Home/AP_AquaPodItem.vue";
import NovigradBG from "@/assets/images/Novigrad.jpg"
import PorecBG from "@/assets/images/Porec.jpg"
</script>

<template>
    <div class="flex flex-col justify-center items-center py-14 w-full">

        <!--HOME IMAGE-->
        <div class="m-4 rounded-3xl overflow-hidden relative">
            <img class="z-10" :src="BoatImage">
            <div class="absolute homeImageBG w-full h-full z-20 top-0 left-0"></div>
        </div>

        <!--COUNTER-->
        <p class="font-bold text-5xl text-AP_AccentFont"> {{ counter.toLocaleString() }} </p>
        <p class="pt-2 mb-4 font-bold text-base text-AP_SecondaryFont">KG UKLONJENO</p>

        <!--ABOUT-->
        <AP_About/>

        <!--AQUAPOD ITEMS-->
        <div class="flex flex-col w-full mt-8 gap-4">
            <AP_AquaPodItem :image="NovigradBG" :city="'Novigrad'" :temp="20" :wind="49" :depth="75" />
            <AP_AquaPodItem :image="PorecBG"    :city="'Poreč'"    :temp="19" :wind="62" :depth="86" />
        </div>

    </div>
</template>

<script>
export default {
    name: "HomeView",
    components: { BoatImage, AP_About, AP_AquaPodItem, PorecBG, NovigradBG },
    data() {
        return {
            counter: 33288417
        }
    },
}
</script>

<style lang="scss" scoped>
.homeImageBG {
    background: linear-gradient(180deg, #99DDD5 0%, #044086 100%);
    opacity: 0.33;
}
</style>