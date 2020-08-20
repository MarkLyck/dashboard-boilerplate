import React from 'react'
import ReactDOM from 'react-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// translation files
import en from './en'
import fr from './fr'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      fr,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })
