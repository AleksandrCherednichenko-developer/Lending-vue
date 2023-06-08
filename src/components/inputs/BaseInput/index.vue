<template>
    <div class="base__input-wrapper">
        <input
            :value="props.modelValue"
            class="base__input"
            :placeholder="props.placeholder"
            :maxlength="props.maxLength"
            @input="onInput"
            @focus="emit('focus')"
            @blur="emit('blur')"
        >
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
};
</script>

<script setup>
const props = defineProps({
    modelValue: { type: [String, Number], default: '' },
    placeholder: { type: String, default: '' },
    maxLength: { type: Number, default: 120 },
    inputNumber: { type: Boolean },
    integerNumber: { type: Boolean },
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const onInput = ev => {
    const { value } = ev.target;

    if (!props.inputNumber) {
        return emit('update:modelValue', value.trim());
    } else {
        ev.target.value = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        if (props.integerNumber) {
            ev.target.value = value.replace(/[^0-9]/g, '');
        }
        return emit('update:modelValue', Number(value));
    }
};
</script>

<style src="./styles.scss" lang="scss" scoped />
