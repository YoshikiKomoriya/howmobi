<template>
  <div>
    <v-btn fixed bottom left fab @click.stop="drawer = !drawer">
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" temporary clipped fixed app>
      <v-list-item
        v-for="(home, index) in homes"
        :key="`first-item-${index}`"
        :to="home.href"
      >
        <v-list-item-icon>
          <v-icon>{{ home.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ home.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="(menu, index) in menus"
        :key="`second-item-${index}`"
        :to="menu.href"
      >
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="(station, index) in stations"
        :key="index"
        :to="station.href"
      >
        <v-list-item-icon>
          <v-icon>{{ station.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ station.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      homes: [
        {
          title: 'ホーム画面',
          icon: 'mdi-home',
          href: '/',
        },
      ],
      menus: [
        {
          title: '暇つぶしスポット',
          icon: 'mdi-map-marker',
          href: '/spot',
        },
        {
          title: '経路検索',
          icon: 'mdi-magnify',
          href: '/route',
        },
        {
          title: '駅情報',
          icon: 'mdi-subway-variant',
          href: '/station',
        },
        {
          title: 'FAQ',
          icon: 'mdi-help',
          href: '/help',
        },
      ],
      stations: [
        {
          title: '東京駅',
          icon: 'mdi-subway-variant',
          href: '/tokyo',
        },
        {
          title: '新宿駅',
          icon: 'mdi-subway-variant',
          href: '/shinjuku',
        },
        {
          title: '渋谷駅',
          icon: 'mdi-subway-variant',
          href: '/shibuya',
        },
        {
          title: '池袋駅',
          icon: 'mdi-subway-variant',
          href: '/ikebukuro',
        },
      ],
    }
  },
}
</script>
