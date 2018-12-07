<template>
  <div class="content-one">
    <!--网易自营红色文本-->
    <div class="my-sell">
        <span class="item-red" v-for="text in inText">
          <img class="imging" :src="text.icon" alt="">
         {{text.desc}}
        </span>

    </div>
    <!--中间导航按钮-->
    <div class="nav-middle">
      <div class="ul-item">
        <a class="li-item" :href="nav.schemeUrl" v-for="nav in navs">
          <img class="img-item" :src="nav.picUrl" alt="">
          <span class="span-item">{{nav.text}}</span>
        </a>
      </div>
    </div>
    <!--双12图片-->
    <div class="shuang">
      <img class="shuang12" src="https://yanxuan.nosdn.127.net/15435902145614507.gif" alt="">
    </div>

  </div>
</template>

<script>
  export default {
    name: "first-page-nav-two",
    data() {
      return {
        // imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      this.$store.dispatch('getNetEaseText')
      this.$store.dispatch('getShoppingInfo')
    },
    computed: {
      inText() {
        return this.$store.state.text
      },
      navs() {
        return this.$store.state.info.kingKongList
      }

    }
  }
</script>

<style scoped lang="stylus">
  .content-one
    width 375px
    height 348px
    background-color #FFEDDB
    .my-sell
      display flex
      .item-red
        margin auto 8px
        margin-top 8px
        font-size 14px
        color #c80032

        .imging
          width 14px
          height 14px

    .nav-middle
      zoom 1
      .ul-item
        display flex
        flex-wrap wrap
        margin 5px
        .li-item
          display flex
          flex-direction column
          align-items center
          margin auto 10px
          .img-item
            width 51px
            height 52px
          .span-item
            font-size 15px
    .shuang
      position relative

      .shuang12
        position: absolute
        bottom -180px
        left 0
        right 0
        width 373px
        height 170px
</style>
