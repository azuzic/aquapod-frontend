<script setup>
import WarningFilledIcon from "@/assets/icons/WarningFilledIcon.svg"
</script>

<template>
    <div class="w-full sm:max-w-sm h-fit py-2 pl-6 pr-2 flex items-center rounded-2xl gap-6" :class="warning ? 'dataWarning' : 'dataDanger'">
        <div class="flex justify-center items-center min-w-[36px]">
            <img class="icon w-full" :src="WarningFilledIcon">
        </div>
        <div class="flex flex-col gap-1">
            <div class="text-3xl font-bold" :class="warning ? 'text-AP_WarningFont' : 'text-AP_DangerFont'">
                {{ info }}
            </div>
            <div class="text-xl text-AP_BrownFont">
                {{ text }} <b>{{ value }}</b>{{ measure }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_WarningBlock",
    props: {
        info: String,
        text: String,
        value: String,
        measure: String,
        type: String,
        warning: Boolean
    }, 
}
</script>

<style lang="scss" scoped>
.dataWarning {
    background: linear-gradient(180deg, rgba(238, 198, 96, 0.25) 0%, rgba(191, 116, 4, 0.25) 100%);
    border-bottom: 1px solid rgba(8, 96, 199, 0.25);
    border-left: 1px solid rgba(82, 176, 165, 0.25);
    border-right: 1px solid rgba(82, 176, 165, 0.25);
    .icon {
        filter: invert(66%) sepia(68%) saturate(493%) hue-rotate(1deg) brightness(99%) contrast(91%);
    }
}
.dataDanger {
    background: linear-gradient(180deg, rgba(236, 99, 148, 0.25) 0%, rgba(223, 20, 45, 0.25) 100%);
    border-bottom: 1px solid rgba(8, 96, 199, 0.25);
    border-left: 1px solid rgba(82, 176, 165, 0.25);
    border-right: 1px solid rgba(82, 176, 165, 0.25);
    .icon {
        filter: invert(16%) sepia(78%) saturate(4356%) hue-rotate(327deg) brightness(89%) contrast(78%);
    }
}
</style>