<script setup>
import trash_0 from "@/assets/icons/trash/trash_0.svg"
import trash_25 from "@/assets/icons/trash/trash_25.svg"
import trash_50 from "@/assets/icons/trash/trash_50.svg"
import trash_75 from "@/assets/icons/trash/trash_75.svg"
import trash_90 from "@/assets/icons/trash/trash_90.svg"
import trash_100 from "@/assets/icons/trash/trash_100.svg"
</script>

<template>
    <div class="flex w-full justify-center">
        <img class="h-36 sm:h-52" v-if="amount>95" :src="trash_100">
        <img class="h-36 sm:h-52" v-else-if="amount > 85" :src="trash_90">
        <img class="h-36 sm:h-52" v-else-if="amount > 70" :src="trash_75">
        <img class="h-36 sm:h-52" v-else-if="amount > 45" :src="trash_50">
        <img class="h-36 sm:h-52" v-else-if="amount > 20" :src="trash_25">
        <img class="h-36 sm:h-52" v-else :src="trash_0">
    </div>
</template>

<script>
export default {
    name: "AP_TrashMeter",
    props: {
        amount: Number
    },
}
</script>