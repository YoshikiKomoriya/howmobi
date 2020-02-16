// expressの読み込み
const express = require('express')

// expressの設定
// expressの初期化
const app = express()
app.use(require('morgan')('combined'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))

// ルーティング
app.get('/', (req, res) => {
  res.send('root')
})

module.exports = {
  path: '/api',
  handler: app,
}
