import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBl9XMJZog4U1w1KVin28gCD1yJVkKyo0g',
    libraries: 'places'
  }
})
