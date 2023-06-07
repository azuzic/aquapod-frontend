<template>
    <div class="flex flex-col justify-center sm:items-start items-start py-24 w-full px-4 sm:px-20 gap-2">

        <div class="text-2xl w-full text-AP_DarkFont font-bold mb-2">Upozorenja</div>

        <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex gap-2 items-center z-50">
                <p class="text-AP_DarkFont text-xl">Type:</p> 
                <AP_dropdowninput @selected="retrieveValue" :label="selected" :list="list"/>
            </div> 
            <div class="flex gap-2 items-center">
                <p class="text-AP_DarkFont text-xl">City:</p> 
                <AP_dropdowninput @selected="retrieveValue2" :label="city" :list="listCity"/>
            </div>
        </div>
     
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Poreč', 'All'].includes(city)" info="Poreč" text="Koš napunjen" value="50" measure="%" :warning="true"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Poreč', 'All'].includes(city)" info="Poreč" text="Koš napunjen" value="75" measure="%" :warning="true"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Poreč', 'All'].includes(city)" info="Poreč" text="Koš napunjen" value="90" measure="%" :warning="false"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Poreč', 'All'].includes(city)" info="Poreč" text="Koš za smeće se zaglavio!" value="" measure="" :warning="false"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Novigrad', 'All'].includes(city)" info="Novigrad" text="Koš napunjen" value="50" measure="%" :warning="true"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Novigrad', 'All'].includes(city)" info="Novigrad" text="Koš napunjen" value="75" measure="%" :warning="true"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Dubrovnik', 'All'].includes(city)" info="Dubrovnik" text="Koš napunjen" value="50" measure="%" :warning="true"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Dubrovnik', 'All'].includes(city)" info="Dubrovnik" text="Koš napunjen" value="75" measure="%" :warning="true"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Dubrovnik', 'All'].includes(city)" info="Dubrovnik" text="Koš napunjen" value="90" measure="%" :warning="false"/>
        <AP_WarningBlock v-if="['Koš za smeće', 'All'].includes(selected) && ['Split', 'All'].includes(city)" info="Split" text="Koš napunjen" value="50" measure="%" :warning="true"/>
        
    </div>
</template>

<script>
import AP_WarningBlock from '@/components/Warning/AP_WarningBlock.vue';
import AP_dropdowninput from '@/components/Warning/AP_dropdowninput.vue';
import AP_CheckBox from '@/components/ControlPanel/AP_Checkbox.vue';

export default {
    name: "WarningView",
    components: { AP_dropdowninput, AP_WarningBlock, AP_CheckBox },
    props: {},
    data() {
        return {
            list: ["All", "Koš za smeće", "Akumulator", "Pumpa"],
            listCity: ["All", "Poreč", "Novigrad", "Dubrovnik", "Split"],
            selected: "All",
            city: "All",
        }
    },    
    methods: {
        retrieveValue(value) {
            this.selected = value;
        },
        retrieveValue2(value) {
            this.city = value;
        },
    }
}
</script>

<style lang="scss" scoped>
</style>