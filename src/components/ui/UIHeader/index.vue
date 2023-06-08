<template>
    <header class="header">
        <div class="header__inner content-container">
            <UILogo />
            <UINavbar v-if="!isSm" />
            <BurgerButton v-else @click-burger-button="(active)=>emit('click-burger-button', active)" />
        </div>
    </header>
</template>

<script>
export default {
    name: 'UIHeader',
};
</script>

<script setup>
import { inject } from 'vue';
import UILogo from '@/components/ui/UILogo/index.vue';
import UINavbar from '@/components/ui/UINavbar/index.vue';
import BurgerButton from '@/components/buttons/BurgerButton/index.vue';

const isSm = inject('isSm');
const emit = defineEmits(['click-burger-button']);
</script>

<style src="./styles.scss" lang="scss" scoped />
