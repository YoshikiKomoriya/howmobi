<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center column>
      <v-flex xs12>
        <h2 class="display-1 my-3 text-center">FAQ</h2>
      </v-flex>
      <h3 class="title my-3">
        <v-icon x-large>mdi-comment-question</v-icon
        >はうもびってどんなサービス？
      </h3>
      <h3 class="title my-3">
        <v-icon x-large>mdi-comment-check</v-icon
        >はうもびは、「どのように移動手段を活用するか」を考えるサービスです。
      </h3>
      <p>
        はうもびを使ってあなたにとって身近な移動をもっと便利に、もっと楽しくすることができます。<br />
        現在は、東京駅を起点にした移動を支援するサービスのみを提供しています。
      </p>
      <v-divider class="my-5"></v-divider>
      <h3 class="title my-3">
        <v-icon x-large>mdi-comment-question</v-icon
        >はうもびを使って何ができるの？
      </h3>
      <h3 class="title my-3">
        <v-icon x-large>mdi-comment-check</v-icon
        >はうもびには、以下の機能があります。
      </h3>
      <p>
        1. 交通(モビリティ)システムの使い方の紹介
      </p>
      <p class="indent">
        Suicaなど交通システムの使い方を分かりやすく紹介しています。<br />
        切符・Suicaの購入方法、払い戻し方について解説しています。
      </p>
      <p>
        2. 暇つぶしスポットの紹介
      </p>
      <p class="indent">
        ちょっと空き時間ができる時ってないですか？<br />
        そんな時のために気軽に、短時間(小一時間を想定)で暇つぶしに行くことができる場所を紹介しています。<br />
        現在は、東京駅を起点としてその周辺の暇つぶしスポットを紹介しています。
      </p>
      <p>
        3. 評価・レビュー機能
      </p>
      <p class="indent">
        評価・レビュー機能を通して、<br />
        モビリティサービス(例：電車・駅など)の利用者自身が駅をデザインするプラットフォームを提供します。
      </p>
      <p>
        4. Myプランの作成
      </p>
      <p class="indent">
        あなただけの移動・旅行プランを作成することができます。現在メンテナンス中です。
      </p>
      <p>
        5. 休憩所の紹介
      </p>
      <p class="indent">
        移動・旅に必要不可欠な休憩所の内容について紹介しています。現在メンテナンス中です。
      </p>
      <v-divider class="my-5"></v-divider>
      <h3 class="title my-3">
        <v-icon x-large>mdi-comment-question</v-icon
        >アプリにおける著作権等はどうなっていますか？
      </h3>
      <h3 class="title my-3">
        <v-icon x-large>mdi-comment-check</v-icon
        >本アプリケーションの内容、テキスト、画像には著作権があります。
      </h3>
      <p>
        本アプリケーションの内容、テキスト、画像には著作権があります。無断転載・無断使用を禁じます。
      </p>
      <v-divider class="my-5"></v-divider>
      <v-footer class="d-inline text-center">
        <h4>©︎ 2019 はうもび.</h4>
      </v-footer>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
h3 {
  text-indent: -2.1em;
  padding-left: 2.5em;
}
.mdi-comment-question {
  color: $primary-background !important;
}
.mdi-comment-check {
  color: $accent-background !important;
}
p {
  padding-left: 2.6em;
}
p.indent {
  padding-left: 3.6em;
}
</style>
