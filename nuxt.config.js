// dotenvの読み込み
// export default 内の envプロパティにも同様の値を設定する必要あり
require('dotenv').config()
const {
  APP_TITLE,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  GOOGLE_API_KEY,
} = process.env

// Vuetify.jsの色の設定値の読み込み
const colors = require('vuetify/es5/util/colors')

module.exports = {
  /**
   * レンダリングモードの設定
   */
  mode: 'spa',

  /*
   ** .envファイルの設定
   ** dotenvライブラリのrequire後に別途呼び出し処理を書く必要あり
   */
  env: {
    APP_TITLE,
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    GOOGLE_API_KEY,
  },

  /*
   ** 共通ヘッダーの設定
   */
  head: {
    titleTemplate: '%s - ' + process.env.APP_TITLE,
    title: process.env.APP_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.APP_TITLE || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** プログレスバーのカスタマイズ
   */
  loading: { color: '#fff' },

  /*
   ** 全ページで読み込まれるグローバルCSSの設定
   */
  css: ['~/assets/app.scss'],

  /*
   ** プラグインの設定
   ** ~/plugins にファイルを追加したらここに書いて有効化する
   */
  plugins: [
    '@/plugins/firebase',
    '@/plugins/filter',
    { src: '~/plugins/vue2-google-maps.js', ssr: false },
  ],

  /*
   ** サーバーミドルウェア（APIサーバー）の設定
   ** Expressを使用する
   */
  serverMiddleware: ['~/api/index.js'],

  /*
   ** 開発用（ビルド専用）モジュールの設定
   ** ほとんどの場合はこちらにモジュール設定を行う
   ** 判断基準はドキュメントを参照
   ** Doc: https://ja.nuxtjs.org/guide/modules/#%E3%83%93%E3%83%AB%E3%83%89%E5%B0%82%E7%94%A8%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  /*
   ** モジュールの設定
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
  ],

  /*
   ** Axiosの設定
   ** Doc: https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** Vendor Modules
   */
  vendor: ['vue2-google-maps'],

  /*
   ** Vuetify.jsの設定
   ** Doc: https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // ダークテーマの有効化（=ライトテーマの非有効化）
      dark: false,
      themes: {
        // ライトテーマの色設定
        light: {
          primary: colors.default.indigo.darken2,
          accent: colors.default.grey.darken3,
          secondary: colors.default.amber.darken3,
          info: colors.default.teal.lighten1,
          warning: colors.default.amber.base,
          error: colors.default.deepOrange.accent4,
          success: colors.default.green.accent3,
        },
        // ダークテーマの色設定
        dark: {
          primary: colors.default.indigo.darken2,
          accent: colors.default.grey.darken3,
          secondary: colors.default.amber.darken3,
          info: colors.default.teal.lighten1,
          warning: colors.default.amber.base,
          error: colors.default.deepOrange.accent4,
          success: colors.default.green.accent3,
        },
      },
    },
  },

  /*
   ** ビルドの設定
   */
  build: {
    /*
     ** webpackの拡張設定
     */
    extend(config, ctx) {
      /**
       * dotenvはファイルシステムモジュール（fs）を扱う。しかし、クライアント側でそれを使うことはできない。
       * SPAモードの場合は、クライアント側でfsを扱うことになる。この場合、ビルドに失敗する。
       * そこで、fsに'empty'を指定することで、ビルドの際にfsの部分に空ファイルを作成する。
       */
      config.node = {
        fs: 'empty',
      }
      // 開発環境のみ、保存時にeslintを走らせる
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
}
