<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row>
      <v-flex xs12 class="text-center">
        <h2 class="display-1 my-3 text-center">駅一覧</h2>
      </v-flex>
      <v-layout justify-center wrap>
        <v-flex v-for="(item, index) in items" :key="index" xs12 md5 pa-2>
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="station"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              :to="item.href"
            >
              <v-img :src="item.src">
                <v-card-text
                  class="text-center font-weight-black white--text headline"
                >
                  {{ item.title }}
                </v-card-text>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: '東京駅',
        src: 'images/station/tokyo.jpg',
        href: 'tokyo'
      },
      {
        title: '新宿駅',
        src: 'images/station/shinjuku.jpg',
        href: 'shinjuku'
      },
      {
        title: '渋谷駅',
        src: 'images/station/shibuya.jpg',
        href: 'shibuya'
      },
      {
        title: '池袋駅',
        src: 'images/station/ikebukuro.jpg',
        href: 'ikebukuro'
      }
    ]
  })
}
</script>
