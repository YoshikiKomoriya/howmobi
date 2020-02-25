<template>
  <v-app>
    <AppNavigationDrawer></AppNavigationDrawer>
    <nuxt></nuxt>
  </v-app>
</template>

<script>
import AppNavigationDrawer from '~/components/navigation_drawer.vue'
export default {
  components: {
    AppNavigationDrawer,
  },
}
</script>
