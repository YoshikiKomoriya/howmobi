# Howmobi

> My excellent Nuxt.js project

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

### 1. Firebase認証を行うためには、`plugins/firebase-config.js`に以下の項目を追加してください(Slackで共有されています)。

- apiKey
- authDomain
- databaseURL
- projectId
- storageBucket
- messagingSenderId
- appId

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
