import healthCheck from './healthCheck.js'

// expressの読み込み
const express = require('express')
const helmet = require('helmet')

// expressの設定
// expressの初期化
const app = express()
app.use(helmet())
app.use(require('morgan')('combined'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))

// ルーティング
app.get('/', (req, res) => {
  res.send('root')
})

// APIの起点
app.use('/api/healthCheck', healthCheck)

module.exports = {
  path: '/api',
  handler: app,
}
