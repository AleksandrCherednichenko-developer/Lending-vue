<template>
    <div class="form__block">
        <div class="form__block-inner content-container">
            <div class="form__block-text">
                <h5 class="form__block-text-title">
                    Оформление <span>Заказа</span>
                </h5>
                <p class="form__block-text-subtitle">
                    Перед заполнением формы ознакомьтесь с нашей схемой работы!
                </p>
            </div>
            <div class="form__block-scheme">
                <SchemeItem
                    v-for="(item, index) in schemeItems"
                    :key="index"
                    :icon="item.icon"
                    :text="item.text"
                />
            </div>

            <form class="base__form">
                <div class="base__form-inner">
                    <BaseSelect
                        :model-value="body.type"
                        :option="selectOption"
                        @update:model-value="(val)=>body.type=val"
                    />
                    <BaseInput
                        :model-value="body.email"
                        placeholder="Ваш e-mail"
                        @update:model-value="(val)=>body.email=val"
                    />
                    <BaseInput
                        :model-value="body.name"
                        placeholder="Ваше имя"
                        @update:model-value="(val)=>body.name=val"
                    />
                    <PercentInput
                        :model-value="body.percent"
                        @update:model-value="(val)=>body.percent=val"
                    />
                    <FileButton @upload-file="(val)=>body.file=val" />
                </div>
                <button class="base__form-btn" type="submit" @click.prevent="submitData">
                    Отправить
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormSection',
};
</script>

<script setup>
import { reactive, ref } from 'vue';
import BaseInput from '@/components/inputs/BaseInput/index.vue';
import SchemeItem from '@/components/SchemeItem/index.vue';
import PercentInput from '@/components/inputs/PercentInput/index.vue';
import BaseSelect from '@/components/BaseSelect/index.vue';
import FileButton from '@/components/buttons/FileButton/index.vue';

const schemeItems = ref([
    { icon: 'search-icon', text: 'Lorem ipsum dolor sit amet' },
    { icon: 'percent-icon', text: 'Сonsecteturadipiscing elit' },
    { icon: 'add-file-icon', text: 'Sed do eiusmod tempor' },
    { icon: 'mail-icon', text: 'Esse cillum dolore eu fugiat' },
    { icon: 'money-icon', text: 'Excepteur sint occaecat cupidatat non proident' },
]);

const selectOption = ref([
    'Sed ut perspiciatis',
    'Nemo enim ipsam',
    'Et harum quidem',
    'Temporibus autem',
    'Itaque earum rerum',
]);

const body = reactive({
    type: '',
    email: '',
    name: '',
    file: {},
    percent: 0,
});

const submitData = () => {
    console.log(body);
};
</script>

<style src="./styles.scss" lang="scss" scoped />
