const express = require('express')

// ルーティングモジュールを呼び出し
const router = express.Router()

// ヘルスチェック用API
router.get('/', (req, res) => {
  res.status(200).json('OK')
})

export default router
