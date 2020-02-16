<template>
  <v-container>
    <v-layout column>
      <v-flex xs12 class="text-center">
        <h2 class="display-1 my-3">
          駅の使い方
          <helpButton
            help="駅でやりたいことを用途から探してください。
          現在は以下の項目についての説明があります。

・切符を買う
・交通系ICカードを買う
・交通系ICカードを使う
・乗り越し精算をする
またあなたがやりたいことを地図から探すこともできます。
"
            class="d-inline"
          ></helpButton>
        </h2>
      </v-flex>
      <v-flex xs12>
        <h3>用途から探す</h3>
        <v-list class="my-5">
          <v-list-item-group v-model="item">
            <v-list-item
              v-for="(item, key) in items"
              :key="key"
              :to="item.href"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
      <v-flex xs12>
        <h3>地図から探す</h3>
        <GmapMap
          class="my-5"
          :center="center"
          :zoom="zoom"
          :style="{ width: mapWidth, height: mapHeight }"
        >
        </GmapMap>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import helpButton from '~/components/help_button.vue'
export default {
  components: {
    helpButton
  },
  data() {
    return {
      items: [
        {
          text: '切符を買う',
          icon: 'mdi-ticket',
          href: '/howtouse/ticket?tab=0'
        },
        {
          text: '交通系ICカードを買う',
          icon: 'mdi-credit-card-plus',
          href: '/howtouse/ticket?tab=1'
        },
        {
          text: '交通系ICカードを使う',
          icon: 'mdi-credit-card-marker',
          href: '/howtouse/ticket?tab=2'
        },
        {
          text: '乗り越し精算をする',
          icon: 'mdi-map-clock',
          href: '/howtouse/ticket?tab=3'
        }
      ],
      mapHeight: '70vh',
      mapWidth: '100%',
      center: { lat: 35.6811534, lng: 139.7670302 },
      zoom: 19
    }
  }
}
</script>
