<template>
    <div class="flex flex-col justify-center items-center w-full h-full bg-center bg-no-repeat"
        :style="'background-image: url(' + MapImage + ');'">

        <div class="fixed top-0 w-full z-[150] | transition-all duration-500 p-4">
            <div class="relative TopMenuBG h-14 w-full flex justify-between items-center | transition-all duration-500 rounded-[200px] px-4 gap-4'">
        
                <!--SEARCH-->
                <img class="h-7" :src="SearchIcon">

                <div class="absolute w-full right-0 h-full flex gap-2 items-center">
                    <div class="relative z-20 w-full h-full group">
                        <input @input="updateList()" v-model="value" @focusout="!focus ? show = false : ''" @click="show = true" placeholder="Search AquaPods..."
                        class="block py-2.5 w-full h-full text-AP_DarkFont text-lg placeholder:text-AP_SecondaryFont bg-transparent px-12 appearance-none outline-none focus:ring-0 peer"/>

                        <div @mouseleave="focus = false" @mouseenter="focus = true" :class="show ? 'h-fit max-h-64 opacity-100' : 'h-0 opacity-0'"
                            class="w-full mt-2 | TopMenuBG | TopSearchBG rounded-2xl | overflow-hidden | transition-opacity duration-300 | absolute overflow-y-auto">
                            <ul class="text-sm z-50" aria-labelledby="dropdownDefaultButton">
                                <div v-for="v in  list " @click="value = v.properties.city; show = false; globalStore.activePod = v; findAquapod(v.geometry.coordinates)" 
                                    class="block px-6 py-2 text-lg hover:bg-slate-200 cursor-pointer hover:text-AP_DarkFont hover:font-bold z-50"
                                    :class="v.properties.city == value ? 'bg-AP_AccentFont text-slate-100' : 'text-AP_DarkFont font-bold'"> 
                                    {{ v.properties.city }} 
                                </div>   
                            </ul>
                        </div>
                    </div>
                </div>

                <!--LOGIN BUTTON-->
                <router-link v-if="['Map', 'Dashboard', 'Home', 'Warnings', 'ControlPanel'].includes(this.$route.name)" to="/Login">
                    <img class="h-5" :src="MenuIcon">
                </router-link>

            </div>
        </div>

        <div class="absolute top-0 bottom-0 w-full h-full" id="map" ref="container">
        </div>
    </div>
</template>

<script>
import AP_MapIcon from '@/components/Map/AP_MapIcon.vue';
import MapImage from "@/assets/images/loading.gif"
import SeaDepthIcon from "@/assets/icons/SeaDepthIcon.svg"
import SeaTemperatureIcon from "@/assets/icons/SeaTemperatureIcon.svg"
import WarningFilledIcon from "@/assets/icons/WarningFilledIcon.svg"
import WindSpeedIcon from "@/assets/icons/WindSpeedIcon.svg"
import BoatIcon from "@/assets/icons/BoatIcon.svg"
import { useGlobalStore } from '@/stores/globalStore'
import mapboxgl from 'mapbox-gl';
import MenuIcon from "@/assets/icons/MenuIcon.svg"
import SearchIcon from "@/assets/icons/SearchIcon.svg"
import AP_searchInput from "@/components/App/AP_searchInput.vue"

let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};

export default {
    name: "MapView",
    components: { AP_MapIcon, AP_searchInput },
    setup() {
        const globalStore = useGlobalStore()
        const list = globalStore.geojson.features
        return { globalStore, list, MapImage, SeaDepthIcon, SeaTemperatureIcon, WindSpeedIcon, BoatIcon, MenuIcon, SearchIcon }
    },
    data() {
        return {
            value: "",
            show: false,
            focus: false,
            map: Object
        }
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
        },
        findAquapod(coord) {
            this.map.flyTo({
                center: coord,
                speed: 0.6,
                zoom: 10.5,
                curve: 1,
                essential: true
            });
        }
    },
    async mounted() {
        await wait(1)
        return;
        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
        
        this.map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
            center: [13.5619, 45.3157], // starting position [lng, lat]
            zoom: 10.5, // starting zoom
        });

        // Add markers to the map.
        for (const marker of this.globalStore.geojson.features) {
            // Create a DOM element for each marker.
            const el = document.createElement('div');
            el.className = 'w-fit';
            el.innerHTML = ''+
            '<div class="flex flex-col justify-center items-center h-16 bg-cover bg-center relative p-2 cursor-pointer">'+
                '<div class="absolute -top-20 markerBG rounded-xl w-full h-full z-20 left-0"></div>'+
                '<p class="relative -top-20 w-full text-lg text-AP_DarkFont z-50"> Aquapod: <b> '+ marker.properties.city+' </b> </p>'+
                '<div class="relative -top-20 flex w-full justify-center items-center text-lg text-white z-50 gap-4">'+
                    '<div class="flex items-center justify-center">'+
                        '<img class="h-6 mr-1" src="'+SeaTemperatureIcon+'">'+
                        '<div class=" text-AP_DarkFont flex gap-1"><div class="text-AP_AccentFont"> '+ marker.properties.temp+' </div>°C</div>'+
                    '</div>'+
                    '<div class="flex items-center justify-center">'+
                        '<img class="h-5 mr-1" src="'+WindSpeedIcon+'">'+
                        '<div class=" text-AP_DarkFont flex gap-1"><div class="text-AP_AccentFont"> '+ marker.properties.wind+' </div>km/h</div>'+
                    '</div>'+
                    '<div class="flex items-center justify-center">'+
                        '<img class="h-4 mr-1 text-da" src="'+SeaDepthIcon+'">'+
                        '<div class=" text-AP_DarkFont flex gap-1"><div class="text-AP_AccentFont"> '+ marker.properties.depth+' </div> m</div>'+
                    '</div>'+
                '</div>'+
                '<div class="markerArrow h-5 w-5 z-0"></div>'+
                '<img class="absolute w-10" src="'+BoatIcon+'">'+
                (this.globalStore.admin ? '<img class="absolute mb-8 ml-12 w-5 '+ marker.properties.alert +'" src="'+WarningFilledIcon+'" >' : '')+
            '</div>'
            el.addEventListener('click', () => {
                this.globalStore.activePod = marker; 
                this.$router.push('/dashboard');
            });
            // Add markers to the map.
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(this.map);
        }
    }
}
</script>

<style lang="scss">
.marker {
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 100%;
}
.markerBG {
    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
.markerArrow {
    /* Arrow */
    position: absolute;
    bottom: 68px;

    background: linear-gradient(180deg, rgba(218, 235, 255, 0.9) 0%, rgba(218, 255, 251, 0.9) 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    transform: matrix(0.75, 0.66, -0.75, 0.66, 0, 0);
}
.warningIcon {
    filter: invert(66%) sepia(68%) saturate(493%) hue-rotate(1deg) brightness(99%) contrast(91%);
}
.dangerIcon {
    filter: invert(16%) sepia(78%) saturate(4356%) hue-rotate(327deg) brightness(89%) contrast(78%);
}
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