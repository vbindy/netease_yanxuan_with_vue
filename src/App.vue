<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav class="footer" v-show="$route.meta.showFooter"></FooterNav>
  </div>
</template>

<script>
  import FooterNav from './components/page/FooterNav.vue'

  export default {

    // created() {
    //   // 异步获取address
    //   this.$store.dispatch('getAddress')
    //   // 异步获取登陆用户信息
    //   this.$store.dispatch('getUserInfo')
    //   this.$store.dispatch('getShopInfo')
    // },

    components: {
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%

</style>
