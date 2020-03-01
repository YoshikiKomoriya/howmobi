// firebase.auth()の読み込み
import { auth } from '~/plugins/firebase'

// stateの初期値の設定
const defaultState = () => ({
  login_user: null,
})

// stateの設定
export const state = defaultState
console.log(state)

// mutationの設定
export const mutations = {
  // 初期化用の設定
  setDefaultState(state) {
    console.log(mutations)
    // stateの初期値を受け取る
    const defaultStateObject = defaultState()
    // for...inでループしながら、stateのそれぞれの値に設定する
    for (const key in defaultStateObject) {
      // state内にキーが存在する場合のみデフォルト値で上書きする
      if (state.hasOwnProperty(key)) {
        state[key] = defaultStateObject[key]
      }
    }
  },
  setLoginUser(state, user) {
    state.login_user = user
  },
  deleteLoginUser(state) {
    state.login_user = null
  },
}

export const actions = {
  // 初期化用の設定
  setDefaultState({ commit }) {
    commit('setDefaultState')
  },
  // ログアウトの設定
  logout() {
    auth.signOut()
  },
  // ログインの設定
  login() {
    this.isProgress = true
    auth.signInAnonymously().catch(function(error) {
      // エラーハンドリング
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorCode, errorMessage)
      this.isProgress = false
    })
  },
}

export const getters = {
  uid: (state) => (state.login_user ? state.login_user.uid : null),
}
