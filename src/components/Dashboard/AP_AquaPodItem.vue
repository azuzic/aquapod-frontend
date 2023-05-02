<template>
    <div class="w-full h-28">
        <div class="flex flex-col justify-center items-center w-full h-full bg-cover bg-center rounded-2xl relative overflow-hidden"
            :style="'background-image: url(' + image + ');'">
            
            <div class="absolute AquaPodItemImageBG w-full h-full z-20 top-0 left-0"></div>

            <p class="mt-2 text-4xl font-bold text-white z-50"> {{ city.toUpperCase() }} </p>
            <div class="flex w-full justify-center items-center mt-2 text-2xl text-white z-50 gap-4">
                <div class="flex items-center justify-center">
                    <div>{{ north }}° <b>N</b></div> 
                </div>
                <div class="flex items-center justify-center">
                    <div>{{ east }}° <b>E</b></div> 
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "AP_AquaPodItem",
    props: { 
        image: String,
        city: String,
        north: Number,
        east: Number,
    },
}
</script>

<style lang="scss" scoped>
.AquaPodItemImageBG {
    background: linear-gradient(180deg, rgba(82, 176, 165, 0.95) 0%, rgba(3, 49, 102, 0.95) 100%);
    opacity: 0.66;
}
</style>