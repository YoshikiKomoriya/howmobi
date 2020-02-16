/* eslint-disable */
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

import config from '~/plugins/firebase-config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const db = firebase.firestore()
export const storage = firebase.storage()
/* eslint-enable */
