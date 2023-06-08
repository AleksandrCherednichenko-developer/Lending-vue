<template>
    <div class="scheme__item">
        <div class="scheme__item-icon">
            <UISvgIcon :name="props.icon" />
        </div>
        <p class="scheme__item-text">
            {{ props.text }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'SchemeItem',
};
</script>

<script setup>
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';
const props = defineProps({
    icon: { type: String, default: '' },
    text: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
