<template>
  <v-container>
    <v-timeline align-top dense>
      <v-layout column>
        <v-timeline-item color="teal lighten-3" small right>
          <v-flex>
            <h2>駅へ入場する</h2>
            <p>切符またはICカードを購入・使用します。</p>
            <v-btn outlined @click="show = !show">詳しい利用方法を見る</v-btn>
            <v-card v-show="show" class="mt-3">
              <v-card-text>
                この辺にちょっとだけ詳細的な説明。
                さらに詳しく知りたい人向けにリンクも設置する。
              </v-card-text>
            </v-card>
          </v-flex>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small right>
          <v-flex>
            <h2>電車に乗る</h2>
            <v-img src="/images/p5394.jpg"></v-img>
            <p>○番線ホームの○○方面行き電車に乗ります。</p>
          </v-flex>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small right>
          <v-flex>
            <h2>電車から降りる</h2>
            <p>○○駅で電車に降ります。</p>
          </v-flex>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small right>
          <v-flex>
            <h2>○○出口を目指す</h2>
            <p>○○両目がおすすめです！</p>
          </v-flex>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small right>
          <v-flex>
            <h2>○○駅○○改札から出場する</h2>
          </v-flex>
        </v-timeline-item>
        <v-timeline-item color="teal lighten-3" small right>
          <v-flex>
            <h2>○○出口を目指す</h2>
          </v-flex>
        </v-timeline-item>
      </v-layout>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: null
    }
  }
}
</script>
