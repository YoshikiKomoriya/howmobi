// firebase.auth()の読み込み
import { auth } from '~/plugins/firebase'

// stateの初期値の設定
const defaultState = () => ({
  isLogin: false,
  uid: null,
  service: null,
})

// stateの設定
export const state = defaultState

// mutationの設定
export const mutations = {
  // 初期化用の設定
  setDefaultState(state) {
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
  setIsLogin(state, login) {
    state.isLogin = login
  },
  setUid(state, uid) {
    state.uid = uid
  },
  setService(state, service) {
    state.service = service
  },
}

export const actions = {
  // 初期化用の設定
  setDefaultState({ commit }) {
    commit('setDefaultState')
  },
  // ログインの設定
  login({ commit }) {
    // 実行中のフラグを立てる
    this.isProgress = true
    // 匿名ログインを行う
    auth.signInAnonymously().catch(function(error) {
      // エラーハンドリング
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorCode, errorMessage)
      this.isProgress = false
      return false
    })

    // ログイン情報を取り出す（ログイン or ログアウト時にログイン情報が変更される）
    // ただし、login()はログイン時にのみ呼び出される想定であるため、ここの処理はログインされた場合の処理のみとなる
    auth.onAuthStateChanged(function(user) {
      // ログイン済の場合
      if (user) {
        // ログイン情報を格納する
        commit('setIsLogin', true)
        commit('setUid', user.uid)
        commit('setService', 'ここにログイン元のサービス種別')

        // 匿名ログインかどうか判定する
        if (user.isAnonymous) {
          // 匿名ログインの場合、サービスは匿名で固定する
          commit('setService', 'anonymous')
        }
      }
    })
  },
  // ログアウトの設定
  logout({ commit }) {
    // firebase側のログアウト処理
    auth.signOut()
    // Vuex側の初期化処理
    commit('setDefaultState')
  },
}

export const getters = {
  getIsLogin: (state) => state.isLogin,
  getUid: (state) => state.uid,
  getService: (state) => state.service,
}
