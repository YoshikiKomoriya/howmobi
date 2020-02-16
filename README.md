# Howmobi
## ブランチ構成
```
┏━ Master（リリースブランチ）
┗━ dev（開発用ブランチ。軽微な修正はこちらでも可。ステージング環境で動作確認する場合にもこちらを使う）
    ┣━ hotfix/（バグ修正）
    ┗━ feature/（新機能）
```

## ブランチ名のルール
### hotfix
- hotfix/fix-* （修正）

### feature
- feature/add-* （機能追加）
- feature/improve-* （既存処理の改善・変更）

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## firebaseとの接続

### 1. Firebase認証を行うためには、.envファイルに以下の項目を追加してください(Slackで共有されています)。

- FIREBASE_API_KEY
- FIREBASE_AUTH_DOMAIN
- FIREBASE_DATABASE_URL
- FIREBASE_PROJECT_ID
- FIREBASE_STORAGE_BUCKET
- FIREBASE_MESSAGING_SENDER_ID
- FIREBASE_APP_ID

### 2. 依存関係のあるライブラリをインストール

```
$ yarn install
```

### 3. 開発用サーバーを起動する

```
$ yarn run dev
```

## Spreadsheetに記述された暇つぶしスポット情報をFirestoreに同期するための方法


### 1. GCPの認証情報となる Service Accounts の Creadential (JSON) をローカルに配置し、環境変数に設定する

※Creadential (JSON) はSlackで展開(GCPのコンソールからもダウンロードできます)。

### 2.スプレッドシートのスポット情報を更新する
スプレッドシートのURLは下記になります。

https://docs.google.com/spreadsheets/d/1f9WkybTSTXhGrY_RKj6AV-u-r3LX4wY_hXrn6nxI8Es/edit#gid=0

node-samples/sync-spreadsheet.js を確認して下さい。
パラメータとして、スクリプト内の変数に適切な値を設定して下さい。

```
const FIRESTORE = {
  'root': 'spots'  <- firestoreのルートフォルダです
}
const SPREADSHEET = {
  'id': '1f9WkybTSTXhGrY_RKj6AV-u-r3LX4wY_hXrn6nxI8Es',  <- スプリントシートIDです。変更不要です。
  'range': 'Sheet1!A1:K21'  <- 更新対象となるスプレッドシートの範囲です。
}
```

適切な値を設定したうえで、次のようにスクリプトを実行してください。

```
cd node-samples
node sync-spreadsheet.js
```

## デプロイ手順

### firebase-toolsのインストールと初期設定
初回以降は不要
```
$ npm install firebase-tools --global
$ firebase login
```

### Nuxtのビルド
```
$ yarn run generate
```

### Firebaseにデプロイ
```
$ firebase use release
$ firebase deploy
```
