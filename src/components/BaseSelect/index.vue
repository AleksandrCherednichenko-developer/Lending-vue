<template>
    <div class="select__wrapper" :class="{'active': showMenu}">
        <div class="select__field-wrapper" @click="toggleShowMenu">
            <input
                type="text"
                class="select__field"
                readonly
                :value="selectValue"
                placeholder="Выберите тип системы"
            >
            <UISvgIcon class="select__field-icon" name="arrow-icon" />
        </div>
        <div v-if="showMenu" class="select__menu">
            <div class="select__menu-inner">
                <p
                    v-for="(item,index) in props.option"
                    :key="index"
                    class="select__menu-item"
                    @click="selectMenuItem(item)"
                >
                    {{ item }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseSelect',
};
</script>

<script setup>
import { ref } from 'vue';
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';

const props = defineProps({
    modelValue: { type: String, default: '' },
    option: { type: [Array, Object], default: () => ([]) },
});

const emit = defineEmits(['update:model-value']);

const selectValue = ref(props.modelValue);

const showMenu = ref(false);

const toggleShowMenu = force => {
    showMenu.value = force ?? !showMenu.value;
};

const selectMenuItem = item => {
    selectValue.value = item;
    emit('update:model-value', item);
    toggleShowMenu(false);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
