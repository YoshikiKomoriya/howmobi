import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'dotenv'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API_KEY,
    region: 'JP',
    language: 'ja',
    libraries: 'places',
  },
})
