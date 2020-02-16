<template>
  <v-container>
    <v-layout justify-center row>
      <v-flex xs12 mb-5>
        <v-img
          height="20vh"
          src="images/tokyo/header.jpg"
          gradient="to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)"
        >
          <h2 class="display-1 text-center font-weight-black white--text">
            東京駅
          </h2>
        </v-img>
      </v-flex>
      <v-flex v-for="card in cards" :key="card.title" xs12 md5 pa-2>
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="station"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            :to="card.href"
          >
            <v-img :src="card.src" height="280px">
              <v-card-text
                class="text-center font-weight-black white--text headline"
              >
                {{ card.title }}
              </v-card-text>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Myプラン作成',
        src: 'images/tokyo/plan.jpg',
        href: 'plan'
      },
      {
        title: '暇つぶしスポット',
        src: 'images/tokyo/spot.jpg',
        href: 'spot'
      },
      {
        title: 'エンタメ',
        src: 'images/tokyo/entertainment.jpg',
        href: 'entertainment'
      },
      {
        title: '駅の使い方',
        src: 'images/tokyo/howtouse.jpg',
        href: 'howtouse'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
h2 {
  line-height: 20vh !important;
}

.container {
  padding-top: 0 !important;
}
</style>
