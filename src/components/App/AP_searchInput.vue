<template>
    <div class="absolute w-full right-0 h-full flex gap-2 items-center">
        <div class="relative z-20 w-full h-full group">
            <input @input="updateList()" v-model="value" @focusout="!focus ? show = false : ''" @click="show = true" placeholder="Search AquaPods..."
            class="block py-2.5 w-full h-full text-AP_DarkFont text-lg placeholder:text-AP_SecondaryFont bg-transparent px-12 appearance-none outline-none focus:ring-0 peer"/>

            <div @mouseleave="focus = false" @mouseenter="focus = true" :class="show ? 'h-fit max-h-64 opacity-100' : 'h-0 opacity-0'"
                class="w-full mt-2 | TopMenuBG | TopSearchBG rounded-2xl | overflow-hidden | transition-opacity duration-300 | absolute overflow-y-auto">
                <ul class="text-sm z-50" aria-labelledby="dropdownDefaultButton">
                    <div v-for="v in  list " @click="value = v.properties.city; show = false; globalStore.activePod = v" 
                        class="block px-6 py-2 text-lg hover:bg-AP_DarkFont cursor-pointer hover:text-slate-200 hover:font-bold z-50"
                        :class="v.properties.city == value ? 'bg-AP_AccentFont text-slate-100' : 'text-AP_DarkFont font-bold'"> 
                        {{ v.properties.city }} 
                    </div>   
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useGlobalStore } from '@/stores/globalStore'

let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};

export default {
    name: "AP_searchInput",
    data() {
        return {
            value: "",
            show: false,
            focus: false
        }
    },   
    setup() {
        const globalStore = useGlobalStore()
        const list = globalStore.geojson.features
        return { globalStore, list }
    },
    methods: {
        async updateList() {
            if (this.value.length > 0) {
                this.list = this.globalStore.geojson.features.filter(feature => feature.properties.city.toLowerCase().includes(this.value));
            } else {
                this.list = this.globalStore.geojson.features;
            }
            await wait(0.05);
            this.$forceUpdate();
        }
    } 
}
</script>
<style lang="scss" scoped>
.TopMenuBG {
    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
}

.BorderBottom {
    border-bottom: 0.25px solid rgba(0, 0, 0, 0.1);
}

.TopSearchBG {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1);
}
</style>