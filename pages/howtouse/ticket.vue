<template>
  <v-container>
    <v-layout column align-center>
      <h2 class="display-1 my-3">How To Use 券売機</h2>
      <v-tabs v-model="tab" grow>
        <v-tab @click="steps = 1">切符を買う</v-tab>
        <v-tab-item>
          <v-stepper v-model="steps" vertical>
            <v-stepper-step :complete="steps > 1" step="1" @click="steps = 1">
              購入の前に…
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card class="mb-3" flat>
                <v-card-text>
                  目的地までの運賃を調べておくとスムーズです。<br />
                  運賃は券売機の上部や駅周辺で案内が設置されているほか、インターネットでも検索することができます。<br />
                  <v-btn to="/route">はうもびで運賃を調べる</v-btn>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 2" step="2" @click="steps = 2">
              券売機を選ぶ
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card class="mb-3" flat>
                <v-card-text>
                  以下の券売機で、切符が購入できます。<br />
                  通常券売機<br />
                  多機能券売機（定期券券売機）<br />
                  クレジットカードが使える券売機<br />
                  クレジットカード専用券売機<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 3" step="3" @click="steps = 3">
              人数を選択する
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card class="mb-3" flat>
                <v-card-text>
                  券売機の左側に人数選択ボタンがあります。<br />
                  利用する人数によって使い分けましょう。<br />
                  最初の状態では、「大人1人」が選択されています。<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 4" step="4" @click="steps = 4">
              お金を投入する
            </v-stepper-step>

            <v-stepper-content step="4">
              <v-card class="mb-3" flat>
                <v-card-text>
                  お金を投入し、運賃分のボタンを選択します。<br />
                  操作を間違えてしまった場合は、「とりけし」ボタンを押すことで、最初からやり直すことができます。<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 5" step="5" @click="steps = 5">
              切符を受け取る
            </v-stepper-step>

            <v-stepper-content step="5">
              <v-card class="mb-3" flat>
                <v-card-text>
                  券売機の下部から切符が出てきます。<br />
                  これを受け取って、改札で使いましょう。<br />
                  お疲れ様でした。<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>
          </v-stepper>
        </v-tab-item>

        <v-tab @click="steps = 1">ICカードを買う</v-tab>
        <v-tab-item>
          <v-stepper v-model="steps" vertical>
            <v-stepper-step :complete="steps > 1" step="1" @click="steps = 1">
              購入の前に…
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card class="mb-3" flat>
                <v-card-text>
                  目的地までの運賃を調べておくとスムーズです。<br />
                  運賃は券売機の上部や駅周辺で案内が設置されているほか、インターネットでも検索することができます。<br />
                  また、ICカードのデポジットとして、チャージ金額とは別に「500円」が必要です。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 2" step="2" @click="steps = 2">
              券売機を選ぶ
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card class="mb-3" flat>
                <v-card-text>
                  以下の券売機で、ICカードが購入できます。<br />
                  通常券売機<br />
                  多機能券売機（定期券券売機）<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 3" step="3" @click="steps = 3">
              「Suicaの購入」メニューを選ぶ
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card class="mb-3" flat>
                <v-card-text>
                  案内に従ってICカード購入ボタンをタッチします。<br />
                  「Suicaカード新規購入」ボタンをタッチします。<br />
                  ※記名式のSuicaを購入することもできます。詳しくは<a
                    href="https://www.jreast.co.jp/suica/whats/service.html"
                    >ホームページ</a
                  >
                  >へどうぞ。<br />
                  デポジット料とチャージ金額を投入します。<br />
                  操作を間違えてしまった場合は、「とりけし」ボタンを押すことで、最初からやり直すことができます。<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 4" step="4" @click="steps = 4">
              ICカードを受け取る
            </v-stepper-step>

            <v-stepper-content step="4">
              <v-card class="mb-3" flat>
                <v-card-text>
                  券売機の下部からICカードとお釣りが出てきます。<br />
                  これを受け取って、改札で使いましょう。<br />
                  操作を間違えてしまった場合は、「とりけし」ボタンを押すことで、最初からやり直すことができます。<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 5" step="5" @click="steps = 5">
              ICカードを返却したい場合
            </v-stepper-step>

            <v-stepper-content step="5">
              <v-card class="mb-3" flat>
                <v-card-text>
                  ICカードを返却したい場合、各駅のみどりの窓口から返却手続きができます。<br />
                  <v-btn to="/howtouse" exact
                    >はうもびでみどりの窓口を調べる</v-btn
                  >
                </v-card-text>
                <v-card-actions>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>
          </v-stepper>
        </v-tab-item>

        <v-tab @click="steps = 1">ICカードを使う</v-tab>
        <v-tab-item>
          <v-stepper v-model="steps" vertical>
            <v-stepper-step :complete="steps > 1" step="1" @click="steps = 1">
              購入の前に…
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card class="mb-3" flat>
                <v-card-text>
                  目的地までの運賃を調べておくとスムーズです。<br />
                  運賃は券売機の上部や駅周辺で案内が設置されているほか、インターネットでも検索することができます。<br />
                  また、ICカードのデポジットとして、チャージ金額とは別に「500円」が必要です。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 2" step="2" @click="steps = 2">
              券売機を選ぶ
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card class="mb-3" flat>
                <v-img src="/images/image_01.jpg"></v-img>
                <v-card-text>
                  以下の券売機で、ICカードのチャージができます。<br />
                  自動券売機<br />
                  多機能券売機（定期券券売機）<br />
                  チャージ専用券売機
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 3" step="3" @click="steps = 3">
              「チャージ（入金）」メニューを選ぶ
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card class="mb-3" flat>
                <v-img src="/images/howtouse/ticket_machine.png"></v-img>
                <v-card-text>
                  「チャージ（入金）」ボタンをタッチします。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 4" step="4" @click="steps = 4">
              ICカードを挿入する
            </v-stepper-step>

            <v-stepper-content step="4">
              <v-card class="mb-3" flat>
                <v-img src="/images/howtouse/insert_ic_card.png"></v-img>
                <v-card-text>
                  券売機下部にあるカード挿入口から、ICカードを挿入します。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 5" step="5" @click="steps = 5">
              お金を投入する
            </v-stepper-step>

            <v-stepper-content step="5">
              <v-card class="mb-3" flat>
                <v-img src="/images/howtouse/insert_bill.png"></v-img>
                <v-card-text>
                  チャージしたい金額に合わせて、お金を投入します。<br />
                  紙幣・硬化どちらも投入できます。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 6" step="6" @click="steps = 6">
              チャージ金額を選択する
            </v-stepper-step>

            <v-stepper-content step="6">
              <v-card class="mb-3" flat>
                <v-img src="/images/howtouse/charge_ic/charge_02.png"></v-img>
                <v-card-text>
                  チャージしたい金額に合わせて、ボタンをタッチします。<br />
                  色が変わったボタンが選択可能です。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 7" step="7" @click="steps = 7">
              チャージ完了まで待つ
            </v-stepper-step>

            <v-stepper-content step="7">
              <v-card class="mb-3" flat>
                <v-img src="/images/howtouse/charge_ic/charge_03.png"></v-img>
                <v-card-text>
                  チャージが完了すると、券売機下部からカードとおつりが出てきます。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 8" step="8" @click="steps = 8">
              カードとおつりを受け取る
            </v-stepper-step>

            <v-stepper-content step="8">
              <v-card class="mb-3" flat>
                <v-img src="/images/howtouse/return_ic_and_change.png"></v-img>
                <v-card-text>
                  券売機下部からカードとおつりが出てきます。<br />
                  このICカードを受け取って、改札で使いましょう。
                </v-card-text>
                <v-card-actions>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>
          </v-stepper>
        </v-tab-item>

        <v-tab @click="steps = 1">乗り越し精算をする</v-tab>
        <v-tab-item>
          <v-stepper v-model="steps" vertical>
            <v-stepper-step :complete="steps > 1" step="1" @click="steps = 1">
              券売機を選ぶ
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card class="mb-3" flat>
                <v-card-text>
                  以下の券売機で、乗り越し精算ができます。<br />
                  乗り越し精算機<br />
                  <v-img
                    src="/images/howtouse/fare_adjustment_machines.jpg"
                  ></v-img>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 2" step="2" @click="steps = 2">
              精算方法を選ぶ
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card class="mb-3" flat>
                <v-card-text>
                  案内に従って切符またはICカード挿入します。<br />
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 3" step="3" @click="steps = 3">
              精算を行う
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card class="mb-3" flat>
                <v-card-text>
                  「精算」ボタンを押すと、精算ができます。<br />
                  案内に従って、不足している金額を投入します。
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="steps = steps + 1">進む</v-btn>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="steps > 4" step="4" @click="steps = 4">
              カードとおつりを受け取る
            </v-stepper-step>

            <v-stepper-content step="4">
              <v-card class="mb-3" flat>
                <v-card-text>
                  精算が完了すると、券売機下部から切符またはICカードとおつりが出てきます。
                </v-card-text>
                <v-card-actions>
                  <v-btn flat @click="steps = steps - 1">戻る</v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>
          </v-stepper>
        </v-tab-item>
      </v-tabs>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: parseInt(this.$route.query.tab, 10),
      steps: 1,
    }
  },
}
</script>
