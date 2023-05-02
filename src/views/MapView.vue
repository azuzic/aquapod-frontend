<template>
    <div class="flex flex-col justify-center items-center w-full h-full bg-center bg-no-repeat"
        :style="'background-image: url(' + MapImage + ');'">
        <div class="absolute top-0 bottom-0 w-full h-full" id="map" ref="container">
        </div>
    </div>
</template>

<script>
import MapImage from "@/assets/images/loading.gif"
import SeaDepthIcon from "@/assets/icons/SeaDepthIcon.svg"
import SeaTemperatureIcon from "@/assets/icons/SeaTemperatureIcon.svg"
import WindSpeedIcon from "@/assets/icons/WindSpeedIcon.svg"
import BoatIcon from "@/assets/icons/BoatIcon.svg"
import { useGlobalStore } from '@/stores/globalStore'
import mapboxgl from 'mapbox-gl';

let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};

export default {
    name: "MapView",
    components: { },
    setup() {
        const globalStore = useGlobalStore()
        return { globalStore, MapImage, SeaDepthIcon, SeaTemperatureIcon, WindSpeedIcon, BoatIcon }
    },
    async mounted() {
        await wait(1)
        
        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
        
        const map = new mapboxgl.Map({
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
            '<div class="flex flex-col justify-center items-center h-16 bg-cover bg-center relative p-2">'+
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
            '</div>'

            // Add markers to the map.
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
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
</style>