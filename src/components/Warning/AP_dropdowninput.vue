<template>
    <div class="w-full flex gap-2 items-center">
        <div class="relative z-20 w-full group">
            <input v-model="value" @focusout="!focus ? show = false : ''" @click="show = true" readonly
            class="block py-2.5 w-full text-sm bg-AP_DarkFont rounded-full px-4 appearance-none focus:outline-none focus:ring-0 peer caret-transparent"
            :class="show ? 'text-slate-200' : 'text-slate-400'"/>

            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg" 
                class="w-4 h-4 absolute top-3 right-4 text-slate-400 peer-focus:text-slate-200 transition-all duration-300 cursor-pointer z-10"
                :class="show ? '-scale-100' : ''" >
                <path d="M2.84105 0.661316C3.21712 -0.0462316 4.23101 -0.0462312 4.60708 0.661317L6.53082 4.28066C6.88485 4.94672 6.4021 5.75 5.64781 5.75H1.80032C1.04602 5.75 0.563281 4.94672 0.917302 4.28066L2.84105 0.661316Z" fill="url(#paint0_linear_151_715)" fill-opacity="0.9"/>
                <defs>
                <linearGradient id="paint0_linear_151_715" x1="3.72406" y1="-1" x2="3.72406" y2="8" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DAEBFF"/>
                <stop offset="1" stop-color="#DAFFFB"/>
                </linearGradient>
                </defs>
            </svg>

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
    name: "MQ_dropdownInput",
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