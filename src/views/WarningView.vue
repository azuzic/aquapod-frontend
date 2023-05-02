<template>
    <div class="flex flex-col justify-center items-center py-24 w-full px-4 gap-2">

        <div class="text-2xl w-full text-AP_DarkFont font-bold mb-2">Upozorenja</div>

        <AP_dropdowninput  @selected="retrieveValue" :label="selected" :list="list"/>
     
        <AP_WarningBlock v-if="selected == 'Koš za smeće'" info="Karigador" text="Koš za smeće se zaglavio!" value="" measure="" :warning="false"/>
        <AP_WarningBlock v-if="selected == 'Koš za smeće'" info="Novigrad" text="Koš napunjen" value="75" measure="%" :warning="true"/>
        
    </div>
</template>

<script>
import AP_WarningBlock from '../components/Warning/AP_WarningBlock.vue';
import AP_dropdowninput from '../components/Warning/AP_dropdowninput.vue';

export default {
    name: "WarningView",
    components: { AP_dropdowninput, AP_WarningBlock },
    props: {},
    data() {
        return {
            list: ["Koš za smeće", "Akumulator", "Pumpa"],
            selected: "Koš za smeće",
        }
    },    
    methods: {
        retrieveValue(value) {
            this.selected = value;
        },
    }
}
</script>

<style lang="scss" scoped>
</style>