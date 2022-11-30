import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'flowbite';
import './assets/style/main.scss';
import i18n from './plugins/i18n';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(i18n).use(store).use(router).use(i18n).use(VueSweetalert2).mount('#app')
