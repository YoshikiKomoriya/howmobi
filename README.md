# Howmobi
## ブランチ構成
```
┏━ master（リリースブランチ）
┗━ dev（開発用ブランチ。軽微な修正はこちらでも可。）
    ┣━ hotfix/（バグ修正）
    ┗━ feature/（新機能）
```

## ブランチ名のルール
### hotfix
- hotfix/fix-* （修正）

### feature
- feature/add-* （機能追加）
- feature/improve-* （既存処理の改善・変更）

## ブランチ運用
### 開発からリリースまでの流れ
1. devから分岐するhotfix or feature ブランチを作成
2. 作成したブランチで開発して、プッシュを行う
3. ESLintなどの解析が行われるので、エラーが出なくなるまで修正→プッシュを行う
4. dev←作成ブランチ となるプルリクエストを作成
5. レビュー後、プルリクエスト作成者がマージする
6. master←dev となるプルリクエストを作成（便宜上、リリースプルリクエストと呼ぶ）
7. マージ後、デプロイ作業を行う（そのうち自動化するかも）

### 軽微な修正を行う場合
分岐するブランチを作るほどでもない軽微な修正の場合、devに直接コミットして、リリースプルリクエストを作成しても良い。

マージまでに他のコミットが入った場合は、コミット者が修正内容を追記する形でコメントを更新する。

## firebaseとの接続

1. Firebase認証を行うためには、.envファイルに以下の項目を追加してください(Slackで共有されています)。

- FIREBASE_API_KEY
- FIREBASE_AUTH_DOMAIN
- FIREBASE_DATABASE_URL
- FIREBASE_PROJECT_ID
- FIREBASE_STORAGE_BUCKET
- FIREBASE_MESSAGING_SENDER_ID
- FIREBASE_APP_ID

2. 依存関係のあるライブラリをインストール

```
$ yarn install
```

3. 開発用サーバーを起動する

```
$ yarn run dev
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
