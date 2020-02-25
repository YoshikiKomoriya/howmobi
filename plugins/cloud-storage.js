// Cloud Strage
import { storage } from '~/plugins/firebase'
global.XMLHttpRequest = require('xhr2')

// Get
async function getUrl(storagePath) {
  try {
    const url = await storage
      .ref()
      .child(storagePath)
      .getDownloadURL()
    return url
  } catch (error) {
    return null
  }
}

// Upload
async function upload(storagePath, blob) {
  try {
    const response = await storage
      .ref()
      .child(storagePath)
      .put(blob)
    return response
  } catch (error) {
    return null
  }
}

export { getUrl, upload }
