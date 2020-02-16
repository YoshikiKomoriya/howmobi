<template>
  <!-- スマホ表示時はクリックイベントでダイアログ表示 -->
  <div v-if="$vuetify.breakpoint.xs">
    <v-btn large text icon class="help" @click="show = !show">
      <v-icon>
        mdi-help-circle-outline
      </v-icon>
    </v-btn>
    <v-dialog v-model="show">
      <v-card>
        <v-card-text>
          <span class="help">{{ help }}</span>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
  <!-- タブレット・PC表示時はマウスオーバーで表示 -->
  <div v-else>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn large text icon class="help" v-on="on">
          <v-icon>
            mdi-help-circle-outline
          </v-icon>
        </v-btn>
      </template>
      <span class="help">{{ help }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    help: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-dialog {
  .v-card {
    .v-card__text {
      padding: 2em;
    }
  }
}
span.help {
  white-space: pre-wrap;
}
button.help {
  background-color: transparent !important;
  color: $accent-background !important;
}
</style>
