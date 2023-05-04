<template>
    <div class="inline-flex justify-left items-center gap-2 w-full">
        <label class="relative inline-flex items-center cursor-pointer mt-1 mb-2">
            <input type="checkbox" v-model="a" class="sr-only peer">
            <div
                class="w-9 h-5 rounded-full bg-AP_DangerFont peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] hover:after:bg-AP_DarkFont after:bg-AP_DarkFont after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-AP_AccentFont">
            </div>
        </label>
        <div class="text-lg mb-0.5 text-AP_DarkFont">{{ label }}</div>
    </div>
</template>

<script>
    export default {
        name: "AP_Checkbox",
        props: { label: String },
        data() { return {a:true} },
    }
</script>