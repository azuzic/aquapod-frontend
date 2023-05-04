<template>
    <div class="w-full h-fit py-2 px-8 data flex items-center rounded-2xl gap-6">
        <div class="flex justify-center items-center max-w-[44px]">
            <img class="icon w-32" :src="image">
        </div>
        <div class="flex flex-col gap-2">
            <div class="text-2xl text-AP_SecondaryFont">
                {{ info }}
            </div>
            <div class="text-3xl text-AP_AccentFont">
                {{ value }} <b class="text-AP_DarkFont">{{ measure }}</b>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_DashboardBlock",
    props: {
        image: String,
        info: String,
        value: String,
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