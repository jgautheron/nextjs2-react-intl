// Uncomment if you need the intl polyfill
// http://caniuse.com/#search=intl
// import Intl from 'intl';

export const enabledLanguages = [
  'en-GB',
  'fr-FR',
]

export const localizationData = {}
import { addLocaleData } from 'react-intl'

function flattenMessages(nestedMessages = {}, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      messages[prefixedKey] = value // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

// polyfill
// import 'intl/locale-data/jsonp/en'
import en from 'react-intl/locale-data/en'
import enData from './localizationData/en-GB'

addLocaleData(en)
localizationData['en-GB'] = enData
localizationData['en-GB'].messages = flattenMessages(localizationData['en-GB'].messages)

// polyfill
// import 'intl/locale-data/jsonp/fr'
import fr from 'react-intl/locale-data/fr'
import frData from './localizationData/fr-FR'

addLocaleData(fr)
localizationData['fr-FR'] = frData
localizationData['fr-FR'].messages = flattenMessages(localizationData['fr-FR'].messages)
