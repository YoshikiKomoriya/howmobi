<template>
  <div>
    <v-btn @click="dialog = true">レビューを書く</v-btn>
    <v-dialog v-model="dialog">
      <v-card>
        <!-- スマホ表示 -->
        <v-card-title v-if="$vuetify.breakpoint.xs">
          いかがでしたか？
          <helpButton
            help="この場所の評価を星でつけてください(最大5)
レビューする際にはあなたのお名前(仮名可能)、詳細についてお書きください。
またぜひあなたがこの場所で撮った写真を追加してください(任意)。
あなたの撮った写真がアプリのトップを飾るかも知れません。"
          ></helpButton>
        </v-card-title>
        <!-- タブレット・PC表示時 -->
        <v-card-title v-else class="headline">
          この場所はいかがでしたか？
          <helpButton
            help="この場所の評価を星でつけてください(最大5)
レビューする際にはあなたのお名前(仮名可能)、詳細についてお書きください。
またぜひあなたがこの場所で撮った写真を追加してください(任意)。
あなたの撮った写真がアプリのトップを飾るかも知れません。"
          ></helpButton>
        </v-card-title>
        <v-card-text>
          <v-rating
            v-model="rating"
            :size="40"
            background-color="indigo lighten-3"
            color="indigo"
          ></v-rating>
          <v-text-field
            v-model="name"
            name="name"
            label="お名前"
          ></v-text-field>
          <v-textarea
            v-model="description"
            name="description"
            label="説明"
          ></v-textarea>
          <v-file-input
            v-model="images"
            :rules="imageRule"
            accept="image/*"
            label="画像を追加する"
            prepend-icon="mdi-camera"
            multiple
          ></v-file-input>
          <v-card-actions>
            <template v-if="isLogin === true">
              <v-btn
                color="primary"
                :disabled="disabled"
                @click="
                  dialog = false
                  disabled = true
                  register()
                "
                >送信</v-btn
              >
            </template>
            <template v-else>
              <v-btn
                color="primary"
                :disabled="disabled"
                @click="
                  dialog = false
                  disabled = true
                  anonymousLogin()
                  register()
                "
                >新規登録して送信</v-btn
              >
              <v-btn
                v-if="isLogin === false"
                color="primary"
                :disabled="disabled"
                @click="
                  dialog = false
                  disabled = true
                  serviceLogin()
                "
                >ログインする</v-btn
              >
            </template>
            <v-btn text @click="dialog = false">キャンセル</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import * as firebase from 'firebase/app'
import 'firebase/auth'
import { setToMerge, addForReview } from '~/plugins/firestore.js'
import { upload } from '~/plugins/cloud-storage.js'
import helpButton from '~/components/help_button.vue'

export default {
  components: {
    helpButton,
  },
  props: {
    collection: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: true,
    },
    averageRating: {
      type: Number,
      default: 0,
      required: true,
    },
    reviewCount: {
      type: Number,
      default: 0,
      required: true,
    },
  },

  data() {
    return {
      dialog: false,
      disabled: false,
      rating: 3,
      name: '',
      description: '',
      images: [],
      imageRule: [(value) => !value || this.imageValidation(value)],
    }
  },
  computed: {
    isLogin: {
      get() {
        return this.getIsLogin()
      },
    },
  },
  // メソッドの設定
  methods: {
    // login.js から、環境設定用のGetter関数を取り出す
    ...mapGetters('login', ['getIsLogin']),
    // login.js から、環境設定用のAction関数を取り出す
    ...mapActions('login', ['login', 'logout']),
    // 「ログイン」を押した場合のメソッド
    serviceLogin() {},
    // 「新規登録をして送信」を押した場合のメソッド
    anonymousLogin() {
      // 新規登録&ログインを行う
      this.login()
    },
    // 画像のバリデーション
    imageValidation(value) {
      // 引数の型の判定
      if (!Array.isArray(value)) {
        this.disabled = true
        return '画像を選択してください'
      }

      // 画像枚数の判定
      if (value.length > 4) {
        this.disabled = true
        return '画像は4枚以下にしてください'
      }

      // 画像サイズの判定
      for (let i = 0; i < value.length; i++) {
        if (value[i].size > 2000000) {
          this.disabled = true
          return '画像サイズは2MB以下にしてください'
        }
      }

      // 全ての判定に引っかからなかった場合
      return true
    },
    // レビューを登録する
    register() {
      // 画像が選択されている場合
      if (this.images.length > 0) {
        this.uploadImages()
      } else {
        // 画像が選択されていない場合
        this.addReview()
      }
    },
    // レビューを追加する
    addReview(uploadedImages = false) {
      // レビュー投稿数をプラス1する
      const totalCount = this.reviewCount + 1
      const spot = {
        // 平均点数を計算し直す
        averageRating:
          (this.averageRating * this.reviewCount + this.rating) / totalCount,
        reviewCount: totalCount,
      }
      const review = {
        rating: this.rating,
        name: this.name,
        description: this.description,
        images: uploadedImages ? uploadedImages.join(',') : '',
        createdAt: new Date(),
      }
      // TODO:トランザクションを張る
      // 点数情報の更新
      setToMerge(this.collection, this.document, spot)
      // レビューレコードの追加
      addForReview(this.collection, this.document, review)
    },
    // 画像をアップロードして、レビューを追加する
    uploadImages() {
      // アップロード済みのファイル名を記録する配列を定義する
      const uploadedImages = []
      // map関数中でも使えるようにthisを変数に格納する
      const self = this

      // 選択された画像ファイルの分だけループする
      this.images.map((image) => {
        // 選択したファイルを読み込んでMIMEタイプを判定するために、FileReaderを定義する
        const fileReader = new FileReader()
        // 選択された画像をバイナリデータとして読み取り、MIMEタイプの判定と画像のアップロードを行う
        fileReader.readAsArrayBuffer(image)
        // FileReaderがファイルを読み込み終わった後のイベントを定義する
        fileReader.onload = function() {
          // 読み込んだデータから、MIMEタイプの判定に必要な分（先頭の4要素）をバイナリファイルとして変換する
          const headerOfBinary = new Uint8Array(fileReader.result).subarray(
            0,
            4,
          )

          // 変換したヘッダーの値を16進数に変換する
          let header = ''
          headerOfBinary.map((binary) => {
            header += binary.toString(16)
          })

          // 16進数のヘッダーの先頭文字列から拡張子とMIMEタイプを判定する
          let mimeType = ''
          let extension = ''
          switch (true) {
            case header.startsWith('89504e47'):
              mimeType = 'image/png'
              extension = '.png'
              break
            case header.startsWith('424d'):
              mimeType = 'image/bmp'
              extension = '.bmp'
              break
            case header.startsWith('47494638'):
              mimeType = 'image/gif'
              extension = '.gif'
              break
            case header.startsWith('ffd8ffe0'):
            case header.startsWith('ffd8ffe1'):
            case header.startsWith('ffd8ffe2'):
              mimeType = 'image/jpeg'
              extension = '.jpg'
              break
            default:
              mimeType = 'unknown'
              break
          }

          // アップロード用ファイルの生成
          const blob = new Blob([fileReader.result], { type: mimeType })
          const fileName = Math.random()
            .toString(32)
            .substring(2)
          const file = fileName + extension
          const filePath = 'reviews/' + file

          // 画像のアップロード
          upload(filePath, blob)

          // 追加した画像名を記録する
          uploadedImages.push(file)

          // 最後のファイルを追加した場合、レビューを記録する
          if (uploadedImages.length === self.images.length) {
            self.addReview(uploadedImages)
          }
        }
      })
    },
  },
}
</script>
