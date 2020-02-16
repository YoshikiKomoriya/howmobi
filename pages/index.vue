<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row>
      <v-flex xs12 md5 my-5 justify-center>
        <h1 class="text-center">
          <v-img
            src="images/logo/1_Primary_logo_on_transparent_1024.png"
          ></v-img>
        </h1>
        <h2 class="headline text-center">
          How to Use it about mobility scheme?
        </h2>
      </v-flex>
      <v-flex xs12 md8>
        <v-carousel height="auto" interval="6000" class="my-3">
          <v-carousel-item
            v-for="(item, index) in items"
            :key="index"
            :src="item.src"
            :to="item.href"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12>
        <h2 class="display-1 my-3 text-center">暇つぶしスポット</h2>
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

export default {
  data() {
    return {
      items: [
        {
          src: 'images/carousel_001.jpg',
          href: 'tokyo',
        },
        {
          src: 'images/carousel_002.jpg',
          href: 'spot',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      spots: (state) => state.spot.spots,
    }),
  },
  async fetch({ store, params }) {
    await store.dispatch('spot/fetchSpots')
  },
}
</script>
