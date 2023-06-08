<template>
    <nav class="navbar">
        <a
            v-for="item in navbarItems"
            :key="item.name"
            class="navbar__item"
            :href="item.to"
            @click="emit('click-navbar-item')"
        >
            {{ item.name }}
        </a>
    </nav>
</template>

<script>
export default {
    name: 'UINavbar',
};
</script>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['click-navbar-item']);

const navbarItems = ref([
    { name: 'Бизнес', to: '#' },
    { name: 'О нас', to: '#' },
    { name: 'Цены', to: '#' },
    { name: 'Оформить заказ', to: '#' },
]);
</script>

<style src="./styles.scss" lang="scss" scoped />
