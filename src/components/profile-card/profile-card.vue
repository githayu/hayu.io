<template>
  <div
    :class="['c-profileCard', {
      'c-profileCard--anime': isAnimation,
      'is-aboutMe': $route.path === '/about-me'
    }]"
  >
    <div
      class="c-profileCard-main"
      v-on:animationend="onAnimationEnd"
    >
      <div class="c-profileCard-cover"></div>
      <div class="c-profileCard-avatar"></div>
      <div class="c-profileCard-content">
        <h1 class="c-profileCard-name">{{ name }}</h1>

        <ul class="c-profileCard-meta">
          <li class="c-profileCard-location mdi mdi-map-marker">{{ location }}</li>
          <li class="c-profileCard-birthday mdi mdi-cake-variant">{{ birthday }}</li>
        </ul>

        <v-btn
          @click.native="toggleAboutMe"
          class="c-profileCard-aboutMeButton"
          color="primary"
          round
          flat
        >{{ getButtonText }}</v-btn>
      </div>
    </div>

    <div class="c-profileCard-detail">
      <div class="c-profileCard-detailSections">
        <section>
          <h2>About me</h2>
          <p class="c-profileCard-comment">{{ comment }}</p>
        </section>

        <section>
          <h2>Likes</h2>
          <ul class="c-profileCard-likes">
            <li v-for="(like, index) in likes" :key="index">{{ like }}</li>
          </ul>
        </section>
      </div>

      <social-links></social-links>
    </div>
  </div>
</template>

<style lang="scss" src="./profile-card.scss">
</style>

<script>
import socialLinks from '../social-links/social-links.vue'

export default {
  name: 'profile-card',
  components: {
    socialLinks,
  },
  data() {
    return {
      name: 'Hayu',
      location: 'Saitama, Japan',
      birthday: '1995.12.26',
      comment: 'Web制作が好きです。',
      likes: [
        'Web Design',
        'JavaScript',
        'Motion Graphics',
        'ニコニコ動画',
        'アニメ',
        'ミクさん',
        '音楽',
        'お絵かき',
      ],
      isAnimation: false,
    }
  },

  created() {
    this.isAnimation = this.$route.path === '/'
  },

  methods: {
    onAnimationEnd(e) {
      if (e.target.classList.contains('c-profileCard-aboutMeButton')) {
        this.$store.commit('showParticles')
      }
    },

    toggleAboutMe() {
      const path = this.$route.path !== '/' ? '/' : '/about-me'
      this.$router.push(path)
    },
  },

  computed: {
    getButtonText: function() {
      return this.$route.path !== '/' ? 'Close' : 'About me'
    },
  },
}
</script>
