<template>
  <v-app
    :class="getPage"
  >
    <router-view/>
  </v-app>
</template>

<script>
import { camelCase } from 'lodash'

export default {
  computed: {
    getPage() {
      return `page--${camelCase(this.$route.name)}`
    },
  },
}
</script>


<style lang="scss">
html {
  font-size: 62.5%;
  height: 100%;
  min-height: 100%;
}

body {
  height: inherit;
  min-height: inherit;
  font-size: 1.4rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
