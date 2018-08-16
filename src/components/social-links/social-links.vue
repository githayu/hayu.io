<template lang="html">
  <nav class="c-socialLinks">
    <a
      v-for="link in links"
      :key="link.link"
      :class="`icon-${link.id}`"
      :href="link.link"
      :target="link.target"
      :title="link.screenName"
    >
      <v-tooltip
        left
        open-delay="100"
      >
        <v-icon slot="activator">{{link.icon}}</v-icon>
        <span>{{link.screenName}}</span>
      </v-tooltip>
    </a>
  </nav>
</template>

<style lang="scss" src="./social-links.scss" scoped>
</style>

<script>
export default {
  name: 'social-links',
  data: function() {
    return {
      links: [
        {
          id: 'blog',
          link: 'https://blog.hayu.io',
          screenName: 'Blog',
          target: '_self',
          icon: 'mdi-pencil-box',
        },
        {
          id: 'twitter',
          link: 'https://twitter.com/conohayu',
          screenName: 'Twitter',
          target: '_blank',
          icon: 'mdi-twitter',
        },
        {
          id: 'github',
          link: 'https://github.com/githayu',
          screenName: 'GitHub',
          target: '_blank',
          icon: 'mdi-github-circle',
        },
        {
          id: 'niconico',
          link: 'http://www.nicovideo.jp/user/16418073',
          screenName: 'ニコニコ動画',
          target: '_blank',
          icon: 'mdi-television-classic',
        },
        {
          id: 'pixiv',
          link: 'https://pixiv.me/conohayu',
          screenName: 'Pixiv',
          target: '_blank',
          icon: 'mdi-lead-pencil',
        },
        {
          id: 'userstyles',
          link: 'https://userstyles.org/users/180922',
          screenName: 'UserStyles',
          target: '_blank',
          icon: 'mdi-language-css3',
        },
        {
          id: 'codepen',
          link: 'http://codepen.io/hayu/',
          screenName: 'CodePen',
          target: '_blank',
          icon: 'mdi-codepen',
        },
      ],
    }
  },
}
</script>
