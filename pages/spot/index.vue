<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row>
      <v-flex xs12 class="text-center">
        <h2 class="display-1 my-3">
          暇つぶしスポット
          <helpButton
            help="気軽に時間を使える暇つぶしスポット一覧になります。
あなたが行きたい暇つぶしスポットをタップしてください。
暇つぶしスポットの詳細画面が表示されます。
詳細は以下の内容が記載されています。

・料金
・住所
・最寄駅からのアクセス
・営業日
・休業日
・公式サイト"
            class="d-inline"
          ></helpButton>
        </h2>
      </v-flex>
      <v-flex v-for="(spot, index) in spots" :key="index" xs12 md5 pa-2>
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="spot"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            :to="'/spot/' + spot.name[0]"
          >
            <v-img :src="spot.url" height="200px">
              <v-card-text
                class="text-center font-weight-black white--text headline"
              >
                {{ spot.title[0] }}
              </v-card-text>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import helpButton from '~/components/help_button.vue'
export default {
  components: {
    helpButton
  },
  data: () => ({}),
  computed: {
    ...mapState({
      spots: (state) => state.spot.spots
    })
  },
  async fetch({ store, params }) {
    await store.dispatch('spot/fetchSpots')
  }
}
</script>
