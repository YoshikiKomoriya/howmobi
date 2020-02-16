<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row>
      <v-flex xs12>
        <h2 class="display-1 my-3 text-center">{{ spot.nameJa[0] }}</h2>
      </v-flex>
      <v-flex>
        <v-card flat>
          <v-img :src="spot.url" width="300px" contain class="mx-auto"></v-img>
          <v-rating
            v-if="spot.averageRating > 0"
            v-model="spot.averageRating"
            :size="30"
            half-increments
            readonly
            background-color="indigo lighten-3"
            color="indigo"
          ></v-rating>
          <reviewForm
            collection="spots"
            :document="document"
            :average-rating="spot.averageRating"
            :review-count="spot.reviewCount"
            class="my-3"
          ></reviewForm>
          <v-card-text>{{ spot.description[0] }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex py-3 grey lighten-2>
        <h3>■詳細データ</h3>
        <div class="subtitle-1">{{ '・料金:  ' + spot.fees.join(', ') }}</div>
        <div class="subtitle-1">{{ '・住所:  ' + spot.address }}</div>
        <div class="subtitle-1">
          <div>{{ '・アクセス:' }}</div>
          <div
            v-for="access in spot.accesses"
            :key="access"
            class="subtitle-1"
            style="margin-left: 2rem"
          >
            {{ access }}
          </div>
        </div>
        <div class="subtitle-1">
          <div>{{ '・営業日:' }}</div>
          <div
            v-for="businessHour in spot.businessHours"
            :key="businessHour"
            class="subtitle-1"
            style="margin-left: 2rem"
          >
            {{ businessHour }}
          </div>
        </div>
        <div class="subtitle-1">
          <div>{{ '・休業日:' }}</div>
          <div
            v-for="holiday in spot.holidays"
            :key="holiday"
            class="subtitle-1"
            style="margin-left: 2rem"
          >
            {{ holiday }}
          </div>
        </div>
        <div class="subtitle-1">
          <span>{{ '・公式サイト:  ' }}</span>
          <a :href="spot.officialSite" class="blue--text" target="_blank">{{
            spot.officialSite[0]
          }}</a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import reviewForm from '~/components/review_form.vue'
export default {
  components: {
    reviewForm
  },
  data: () => ({}),
  computed: {
    document() {
      return this.$route.params.name
    },
    spot() {
      return this.$store.getters['spot/getSpotByName'](this.$route.params.name)
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('spot/fetchSpots')
  }
}
</script>
