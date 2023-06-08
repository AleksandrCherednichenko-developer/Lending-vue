<template>
    <label for="file" class="file__btn">
        <UISvgIcon class="file__btn-icon" name="file-icon" />

        <span class="file__btn-text">Прикрепить файл</span>

        <input
            id="file"
            type="file"
            class="file__btn-input"
            @change="uploadFile"
        >
    </label>
</template>

<script>
export default {
    name: 'FileButton',
};
</script>

<script setup>
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';

const emit = defineEmits(['upload-file']);

const uploadFile = ev => {
    const [file] = ev.target.files;
    ev.target.value = null;
    emit('upload-file', file);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
