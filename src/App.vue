<script setup>
import AP_BottomMenu from '@/components/App/AP_BottomMenu.vue';
import AP_TopMenu from '@/components/App/AP_TopMenu.vue';
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
globalStore.setup()
</script>

<template>
    <div class="theme-default w-full h-full">
        <GlobalStoreDebug/>
        <AP_TopMenu/>
        <div class="min-h-full h-full flex flex-col w-full content transition-all relative">
            <router-view v-slot="{ Component, route }">
                <transition class="absolute" name="fade">
                    <component class="absolute"  :is="Component" :key="route.path" />
                </transition>
            </router-view>
        </div>
        <AP_BottomMenu/>
    </div>
</template>

<script>
import GlobalStoreDebug from "@/components/App/GlobalStoreDebug.vue";
export default {
    name: "App",
    components: { AP_BottomMenu, AP_TopMenu, GlobalStoreDebug }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}
.fade-enter-from {
    opacity: 0;
}
.fade-leave-to {
    opacity: 0;
}
</style>