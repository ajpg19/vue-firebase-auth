import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import { en } from '../src/locales/en.js'
import { es } from '../src/locales/es.js'

const languages = {
    en,
    es,
}

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages: languages,
})

createApp(App).use(i18n).mount('#app')