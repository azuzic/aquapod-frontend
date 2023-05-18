<script setup>
import ArrowIcon from "../../assets/icons/ArrowIconDark.svg"
</script>

<template>
    <div class="w-full h-fit py-2 px-3 data flex items-center rounded-2xl gap-3">
        <div class="flex justify-center items-center max-w-[44px]">
            <img class="icon h-12" :src="image">
        </div>
        <div class="flex flex-col gap-2 w-full">
            <div class="text-xl text-AP_SecondaryFont">
                {{ info }}
            </div>
            <div class="text-2xl text-AP_AccentFont bg-white px-6 py-2 w-full rounded-lg relative">
                <u>{{ n }}</u> <b class="text-AP_DarkFont">{{ measure }}</b>
                <img @click="n < max ? n += this.i : '';" :src="ArrowIcon" class="w-4 h-4 absolute top-1 right-2 cursor-pointer z-10" >
                <img @click="n > min ? n -= this.i : '';" :src="ArrowIcon" class="w-4 h-4 absolute bottom-1 right-[7px] cursor-pointer z-10 rotate-180" >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_ControlBlock",
    props: {
        image: String,
        info: String,
        value: Number,
        measure: String,
        i: Number,
        max: Number,
        min: Number,
    }, 
    data() { return {
        n: this.value,
    } },
}
</script>

<style lang="scss" scoped>
.data {
    background: linear-gradient(180deg, rgba(153, 221, 213, 0.25) 0%, rgba(71, 132, 154, 0.25) 100%);
    border-bottom: 1px solid rgba(8, 96, 199, 0.25);
    border-left: 1px solid rgba(82, 176, 165, 0.25);
    border-right: 1px solid rgba(82, 176, 165, 0.25);
    .icon {
        filter: invert(26%) sepia(56%) saturate(1948%) hue-rotate(171deg) brightness(82%) contrast(106%);
    }
}
</style>