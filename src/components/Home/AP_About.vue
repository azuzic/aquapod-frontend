<script setup>
import AboutBG from "@/assets/images/aboutBG.svg"
</script>

<template>
    <div class="flex justify-center items-center w-full sm:max-w-xl relative h-32 px-12">
        <img class="absolute h-full top-0 left-0 w-full sm:rounded-full" :src="AboutBG">
        <p class="text-center text-lg sm:text-2xl leading-6 text-AP_DarkFont">
            <b>AquaPod</b> je autonomni robot koji skuplja otpad te provodi podvodna mjerenja 
        </p>
    </div>
</template>

<script>
export default {
    name: "AP_About",
    components: { },
    props: {},
    data() {return {}},    
}
</script>