<template>
  <div
    :class="['p-intro', {
      'p-intro--particles': $store.state.isParticles
    }]"
    id="intro"
  >
    <profileCard></profileCard>

    <a
      v-on:click="isDialog = true"
      :class="['p-intro-scrollDown']"
    ></a>

    <v-dialog
      v-model="isDialog"
      width="200"
    >
      <v-card>
        <v-card-text class="dialog-text">
          v(◦ˉ ˘ ˉ◦)v
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" src="./intro.scss">
</style>

<style lang="stylus" scoped>
.dialog-text
  text-align center
  font-size 2rem
</style>


<script>
import profileCard from '../profile-card/profile-card.vue'
import 'particles.js'

export default {
  name: 'intro',
  data: () => ({
    isDialog: false,
  }),
  components: {
    profileCard,
  },
  mounted() {
    if (this.$route.path !== '/') {
      this.$store.commit('showParticles')
    }
  },
  methods: {
    clickScrollDown() {
      window.alert('むり…')
    },
  },
}
</script>
