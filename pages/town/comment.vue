<template>
  <v-container>
    <v-layout column>
      <v-flex xs12 class="text-center">
        <h2 class="display-1 my-3">
          街コメント
          <helpButton
            help="
"
            class="d-inline"
          ></helpButton>
        </h2>
      </v-flex>
      <v-flex xs12>
        <h3>タイトル</h3>
        <GmapMap
          ref="map"
          class="my-5"
          :center="center"
          :zoom="zoom"
          :style="{ width: mapWidth, height: mapHeight }"
          @dragend="onDragEnd"
        >
          <GmapMarker
            v-for="(marker, id) in marker_items"
            :key="id"
            :position="marker.position"
            :title="marker.title"
            :clickable="true"
            :draggable="false"
          ></GmapMarker>
        </GmapMap>
      </v-flex>
    </v-layout>
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
      mapHeight: '80vh',
      mapWidth: '100%',
      center: { lat: 35.71, lng: 139.72 },
      zoom: 15,
      marker_items: [
        { position: { lat: 35.71, lng: 139.72 }, title: 'marker_1' },
        { position: { lat: 35.72, lng: 139.73 }, title: 'marker_2' },
        { position: { lat: 35.7, lng: 139.71 }, title: 'marker_3' },
        { position: { lat: 35.71, lng: 139.7 }, title: 'marker_4' },
      ],
      info: {
        center: {
          lat: 35.71,
          lng: 139.72,
        },
      },
    }
  },
  methods: {
    getInfo() {
      const mapBounds = this.$refs.map.$mapObject.getBounds()
      this.infos.push(`[bounds-lat:] ${mapBounds.la.j} ～ ${mapBounds.la.l}`)
      this.infos.push(`[bounds-lng:] ${mapBounds.ea.j} ～ ${mapBounds.ea.l}`)
      const center = this.$refs.map.$mapObject.getCenter()
      this.infos.push(`[center] lat: ${center.lat()} lng: ${center.lng()}`)
    },
    onDragEnd() {
      // マップオブジェクトから座標情報を取得する
      const bounds = this.$refs.map.$mapObject.getBounds()
      // 中心地点を抜き出す
      const center = bounds.getCenter()
      console.log(bounds)
      console.log(center)
      // 中心の座標を取得する
      // this.info.center = { lat: center.lat(), lng: center.lng() }
    },
  },
}
</script>
