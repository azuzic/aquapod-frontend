<template>
    <button class="w-full sm:w-48 data flex flex-col py-4 justify-center items-center rounded-2xl gap-2 
        hover:border-4 focus:border-4 hover:-mb-2 transition-all cursor-pointer text-left">
        <div class="w-full h-full flex flex-col justify-between items-center">
            <div class="text-2xl text-AP_SecondaryFont text-center flex justify-center items-center h-full px-1">
                {{ info }}
            </div>
            <div class="flex justify-center items-center max-w-[44px]">
                <img class="icon w-11 h-12 mt-1" :src="image">
            </div>
        </div>
        <div class="text-3xl text-AP_AccentFont w-full flex justify-center items-center">
            {{ value }} <b class="ml-1 text-AP_DarkFont">{{ measure }}</b>
        </div>
    </button>
</template>

<script>
export default {
    name: "AP_DashboardBlockSquare",
    props: {
        image: String,
        info: String,
        value: Number,
        measure: String,
    }, 
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