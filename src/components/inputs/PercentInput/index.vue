<template>
    <div class="range__input-wrapper">
        <p class="range__input-text">
            Sed ut perspiciatis, unde omnis iste natus
        </p>
        <output class="range__input-value">{{ rangeValue }}%</output>
        <input
            id="range"
            v-model="rangeValue"
            class="range__input"
            type="range"
            name="range"
            min="0"
            max="100"
            step="1"
            @change="emit('update:model-value', rangeValue)"
        >
    </div>
</template>

<script>
export default {
    name: 'PercentInput',
};
</script>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update:model-value']);

const rangeValue = ref(0);
</script>

<style src="./styles.scss" lang="scss" scoped />
