import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'flowbite';
import './assets/style/main.scss';
import i18n from './plugins/i18n';

createApp(App).use(i18n).use(store).use(router).use(i18n).mount('#app')
