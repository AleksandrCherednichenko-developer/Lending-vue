<template>
    <footer class="footer">
        <div class="footer__inner content-container">
            <div class="footer__copyright">
                © 2018 «LoremIpsum.net» Все права защищены.
            </div>

            <span class="divider" />

            <div class="footer__payments">
                <div v-for="item in paymentsItems" :key="item.title" class="footer__payments-item">
                    <UISvgIcon :name="item.icon" path-to-icon="payments-icons" class="footer__payments-item-icon" />
                    <span class="footer__payments-item-text">
                        {{ item.title }}
                    </span>
                </div>
            </div>

            <span class="divider" />

            <div class="footer__contacts">
                <a
                    v-for="item in socialItems"
                    :key="item.title"
                    class="footer__contacts-item"
                    :href="item.to"
                >
                    <UISvgIcon
                        :name="item.icon"
                        path-to-icon="contact-icons"
                        class="footer__socials-item-icon"
                    />
                    <span class="footer__socials-item-text">
                        {{ item.title }}
                    </span>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';

export default {
    name: 'UIFooter',
    components: { UISvgIcon },
};
</script>

<script setup>
import { ref } from 'vue';

const paymentsItems = ref([
    { title: 'Qiwi wallet', icon: 'qiwi-wallet' },
    { title: 'Yandex Money', icon: 'yandex-money' },
    { title: 'Web Money', icon: 'web-money' },
]);

const socialItems = ref([
    { title: 'info@ipsum228.com', icon: 'mail-icon', to: 'mailto:info@ipsum228.com' },
    { title: 'Мы вконтакте', icon: 'vk-icon', to: '#' },
]);
</script>

<style src="./styles.scss" lang="scss" scoped />
