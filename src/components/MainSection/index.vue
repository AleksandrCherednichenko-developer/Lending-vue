<template>
    <main class="main">
        <PromoBlock />
        <FormBlock />
    </main>
</template>

<script>
export default {
    name: 'MainSection',
};
</script>

<script setup>
import PromoBlock from '@/components/PromoSection/index.vue';
import FormBlock from '@/components/FormSection/index.vue';

</script>
