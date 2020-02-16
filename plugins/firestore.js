/* eslint-disable */
// Firestore
import { db } from '~/plugins/firebase'

// Require:
//  * yarn install
//  * {project-root}/utils/firebase-functions/firebase-config.json を配置する
//  * Firestore の Rules を編集する(spots コレクションの Rules を参考に)

// Get all collection
async function getAll(collectionName) {
  try {
    const querySnapshot = await db
      .collection(collectionName)
      .get()
    // console.log(querySnapshot)
    const docArray = []
    querySnapshot.forEach(doc => {
      docArray.push(doc.data())
    })
    return docArray
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}

async function getDocData(collectionName, docName) {
  try {
    const doc = await db
      .collection(collectionName)
      .doc(docName)
      .get()
    const docData = doc.data()
    return docData
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}

// Get
async function get(collectionName, startAt, limit) {
  try {
    const querySnapshot = await db
      .collection(collectionName)
      .orderBy('createdAt', 'desc')
      .startAt(startAt)
      .limit(limit)
      .get()
    // console.log(querySnapshot)
    const docArray = []
    querySnapshot.forEach(doc => {
      docArray.push(doc.data())
    })
    return docArray
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}
// Set
// 引数のdocumentName が存在しなければ値が追加され、存在すれば値が更新される
async function set(collectionName, docName, docObject) {
  try {
    const docRef = await db
      .collection(collectionName)
      .doc(docName)
      .set(docObject)
    return docRef
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}
// Set
// 引数のdocumentName が存在しなければ値が追加され、存在すれば値が更新される
// 値を統合する
async function setToMerge(collectionName, docName, docObject) {
  try {
    const docRef = await db
      .collection(collectionName)
      .doc(docName)
      .set(docObject, { merge: true })
    return docRef
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}
// AddForReview
// レビュー用のサブコレクション（review）に新規レコードを追加する
// ドキュメントIDはFirestoreで自動生成する
async function addForReview(collectionName, docName, docObject) {
  try {
    const docRef = await db
      .collection(collectionName)
      .doc(docName)
      .collection('review')
      .add(docObject)
    return docRef
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}

export { getAll, getDocData, get, set, setToMerge, addForReview }
/* eslint-enable */
