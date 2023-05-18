<script setup>
    import AP_BottomMenu from '../src/components/App/AP_BottomMenu.vue';
    import AP_TopMenu from '../src/components/App/AP_TopMenu.vue';
</script>

<template>
    <div class="theme-default w-full h-full">
        <AP_TopMenu/>
        <div class="min-h-full h-full flex flex-col w-full content md:px-[15%] lg:px-[20%]  xl:px-[30%] transition-all">
            <router-view v-slot="{ Component, route }">
                <transition name="fade">
                    <component  :is="Component" :key="route.path" />
                </transition>
            </router-view>
        </div>
        <AP_BottomMenu/>
    </div>
</template>

<script>
export default {
    name: "App",
    components: { AP_BottomMenu, AP_TopMenu }
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