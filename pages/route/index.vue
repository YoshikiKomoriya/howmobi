<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row>
      <v-flex xs12 class="text-center">
        <h2 class="display-1 my-3">
          経路検索
          <helpButton
            help="「どこから？」に出発駅を選択してください。
「どこまで？」に到着駅を選択してください。
「どこから？」と「どこまで？」で駅を選択したら、「検索する！」で経路を検索できます。
検索結果として以下の内容が表示されます。

・出発駅
・到着駅
・路線名
・所要時間
・乗り換え
・運賃"
            class="d-inline"
          ></helpButton>
        </h2>
      </v-flex>
    </v-layout>
    <v-layout column align-center>
      <v-flex xs6>
        <v-subheader>どこから？</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          v-model="location_from"
          item-text="label"
          item-value="label"
          :items="locations_from"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-flex>
      <v-flex xs6>
        <v-subheader>どこまで？</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          v-model="location_to"
          item-text="label"
          item-value="label"
          :items="locations_to"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-flex>
      <v-flex xs6>
        <v-btn
          large
          class="mt-5"
          :loading="loading"
          :disabled="loading"
          @click="getFare"
          @click.stop="dialog = true"
        >
          検索する！
        </v-btn>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog">
      <v-flex xs12>
        <v-card v-for="_fare in fare" :key="_fare.to">
          <v-card-text>
            <p>出発駅 {{ _fare.from }}</p>
            <p>到着駅 {{ _fare.to }}</p>
            <p>路線名 {{ _fare.rosen }}</p>
            <p>運賃 {{ _fare.icUntin }} 円</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-dialog>
  </v-container>
</template>

<script>
import helpButton from '~/components/help_button.vue'
export default {
  components: {
    helpButton,
  },
  data() {
    return {
      location_from: '東京',
      location_to: '銀座',
      locations_from: [{ label: '東京', value: 'tokyo_station' }],
      locations_to: [
        { label: '九段下', value: '' },
        { label: '二重橋前', value: '' },
        { label: '国会議事堂前', value: '' },
        { label: '大手町', value: '' },
        { label: '御茶ノ水', value: '' },
        { label: '新御茶ノ水', value: '' },
        { label: '東銀座', value: '' },
        { label: '竹橋', value: '' },
        { label: '銀座', value: '' },
        { label: '銀座一丁目', value: '' },
        { label: '駒込', value: '' },
      ],
      loader: null,
      loading: false,
      dialog: false,
      fare: [],
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    },
  },
  methods: {
    async getFare() {
      const fare = await this.$store.dispatch(
        'fares/fetchFare',
        this.location_to,
      )
      this.fare = fare
    },
  },
}
</script>
