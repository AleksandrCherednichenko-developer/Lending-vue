import './assets/css/main.scss';

import App from './App.vue';
import { createApp } from 'vue';
import mitt from 'mitt';

export const emitter = mitt();

const app = createApp(App);
app
    .provide('emitter', emitter)
;

app.mount('#app');
