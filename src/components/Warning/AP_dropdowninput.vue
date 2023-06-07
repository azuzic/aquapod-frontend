<script setup>
import ArrowIcon from "@/assets/icons/ArrowIcon.svg"
</script>

<template>
    <div class="w-full sm:max-w-sm flex gap-2 items-center">
        <div class="relative z-20 w-full group">
            <input v-model="value" @focusout="!focus ? show = false : ''" @click="show = true" readonly
            class="block py-2.5 w-full text-sm bg-AP_DarkFont rounded-full px-4 appearance-none focus:outline-none focus:ring-0 peer caret-transparent"
            :class="show ? 'text-slate-200' : 'text-slate-400'"/>

            <img :src="ArrowIcon" class="w-4 h-4 absolute top-3 right-4 text-slate-400 peer-focus:text-slate-200 transition-all duration-300 cursor-pointer z-10"
                :class="show ? '-scale-100' : ''" >

            <div @mouseleave="focus = false" @mouseenter="focus = true" :class="show ? 'h-fit max-h-64 opacity-100' : 'h-0 opacity-0'"
                class="w-full mt-2 | bg-AP_DarkFont | drop-shadow-md rounded-2xl | overflow-hidden | transition-opacity duration-300 | absolute overflow-y-auto">
                <ul class="text-sm z-50" aria-labelledby="dropdownDefaultButton">
                    <div v-for="v, id in  list " @click="value = v; show = false; $emit('selected', v)" 
                        class="block px-4 py-2 hover:bg-slate-200 cursor-pointer hover:text-AP_DarkFont hover:font-bold z-50"
                        :class="v == value ? 'bg-AP_AccentFont text-AP_DarkFont font-bold' : 'text-slate-200'"> 
                        {{ v }} 
                    </div>   
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_dropdownInput",
    props: {
        label: String,
        list: Array,
        rules: Object,
    },
    data() {
        return {
            value: this.label,
            show: false,
            focus: false
        }
    },    
}
</script>